
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
  const { editProfile } = useAuth();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    editProfile({ displayName: name, photoURL: photo });
    navigate("/dashboard/adminHome");
  };
  return (
    <>
      {/* <Helmet>
        <title>Update Profile|Coupon Collection</title>
        <meta name="description" content="Helmet application"></meta>
      </Helmet> */}
      <div className="card w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none">
        <form onSubmit={handleEdit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo_URL"
              className="input  border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-none text-white bg-gradient-to-r from-sky-500 to-indigo-500">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfile;