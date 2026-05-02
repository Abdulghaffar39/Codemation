import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import codemationLogo from '../assets/codemation.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3 md:py-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={codemationLogo} alt="Codemation Logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain drop-shadow-sm" />
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/services" className="text-gray-300 hover:text-gold transition">Services</Link>
                        <Link to="/projects" className="text-gray-300 hover:text-gold transition">Projects</Link>
                        <Link to="/about" className="text-gray-300 hover:text-gold transition">About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-gold transition">Contact</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-dark-card border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold">Services</Link>
                        <Link to="/projects" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold">Projects</Link>
                        <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold">About</Link>
                        <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold">Contact</Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
