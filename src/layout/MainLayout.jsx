
import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            {/* Dynamic content */}
            <Outlet />
            
            <Footer />
        </div>
    );
};

export default MainLayout;