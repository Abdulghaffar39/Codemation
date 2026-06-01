import { Outlet } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
            
            <ScrollToTopButton />

            {/* Floating WhatsApp Icon */}
            <a
                href="https://wa.me/923373096516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
            >
                <FaWhatsapp size={28} className="md:w-8 md:h-8" />
            </a>
        </div>
    );
};

export default MainLayout;
