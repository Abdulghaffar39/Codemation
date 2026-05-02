import { Link } from 'react-router-dom';
import codemationLogo from '../assets/codemation.png';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src={codemationLogo} alt="Codemation Logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain drop-shadow-sm" />
                        </Link>
                        <p className="mt-2 text-gray-400 max-w-xs text-sm">
                            We build premium, high-performance digital experiences for the world's most innovative brands.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gold"><span className="sr-only">Instagram</span> IG</a>
                        <a href="#" className="text-gray-400 hover:text-gold"><span className="sr-only">LinkedIn</span> IN</a>
                        <a href="#" className="text-gray-400 hover:text-gold"><span className="sr-only">Twitter</span> X</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Codemation. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-gold">Privacy Policy</Link>
                        <Link to="#" className="hover:text-gold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
