import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

  return (
    <div>
      <div>
        {
          noHeaderFooter || <Navbar></Navbar>
        }
      </div>
      {/* Main content with padding to avoid overlap */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto ">
        <Outlet />
      </div>
      <div>
        {
          noHeaderFooter || <Footer></Footer>
        }
      </div>
 
    </div>
  );
};

export default MainLayout;