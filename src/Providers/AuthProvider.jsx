import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  // const [theme, setTheme] = useState("light");
  
 

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signin user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  ///google sign in

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  //signout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  //update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

  //
 const editProfile = (editData) => {
  return updateProfile(auth.currentUser, editData)
  .then(() =>{
    setUser({ ...auth.currentUser, ...editData })
  })
  .catch((error) => {
    console.log('error', error);
  });
 }

 //theme 
//  const handleTheme = (e) => {
//   if (e.target.checked) {
//     setTheme("dark");
//     // console.log(e.target.value)
//   } else {
//     setTheme("light");
//   }
// };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
     //get token and store client side
     const userInfo = {email: currentUser.email}
      axiosPublic.post('/jwt', userInfo)
      .then(res=> {
        if(res.data.token){
          localStorage.setItem('access-token', res.data.token)
          setLoading(false);
        }
      })
      }
      else{
     //do something
       localStorage.removeItem('access-token');
       setLoading(false);
      }
     
    });
    return () => {
      return unsubscribe();
    };
  }, []);





  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,logOut,
    updateUserProfile,
    googleSignIn,editProfile,
    emails, setEmails,
    // theme, setTheme,handleTheme
 
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;