import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import codemationLogo from '../assets/codemation.png';

const Footer = () => {
    return (
        <footer className="bg-dark-card border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 4-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center">
                            <img src={codemationLogo} alt="Codemation Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            We design and build high-performance, premium digital experiences for the world's most innovative brands. Elevating tech, one pixel at a time.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.instagram.com/codemation.official?igsh=MWNydzFiMDdyd2h3eA==" target="_blank" aria-label="Follow Codemation on Instagram" rel="noopener noreferrer" className="p-2 bg-dark border border-white/10 hover:border-gold/50 text-gray-400 hover:text-gold transition-colors duration-300">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/codemation-undefined-863658412?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" aria-label="Connect with Codemation on LinkedIn" rel="noopener noreferrer" className="p-2 bg-dark border border-white/10 hover:border-gold/50 text-gray-400 hover:text-gold transition-colors duration-300">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" aria-label="View Codemation on GitHub" rel="noopener noreferrer" className="p-2 bg-dark border border-white/10 hover:border-gold/50 text-gray-400 hover:text-gold transition-colors duration-300">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61590595405927" target="_blank" aria-label="Connect with Codemation on Facebook" rel="noopener noreferrer" className="p-2 bg-dark border border-white/10 hover:border-gold/50 text-gray-400 hover:text-gold transition-colors duration-300">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6 border-l-2 border-gold pl-3">
                            OUR SERVICES
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/services#web-development" className="hover:text-gold transition-colors duration-200">Web Development</Link></li>
                            <li><Link to="/services#mobile-applications" className="hover:text-gold transition-colors duration-200">Mobile Applications</Link></li>
                            <li><Link to="/services#ui-ux-design" className="hover:text-gold transition-colors duration-200">UI/UX Creative Design</Link></li>
                            <li><Link to="/services#embedded-systems" className="hover:text-gold transition-colors duration-200">Embedded & IoT Systems</Link></li>
                            <li><Link to="/services#graphic-design" className="hover:text-gold transition-colors duration-200">Graphic & Brand Design</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Navigation Links */}
                    <div>
                        <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6 border-l-2 border-gold pl-3">
                            SITEMAP
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-gold transition-colors duration-200">Home Overview</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors duration-200">Capabilities</Link></li>
                            <li><Link to="/projects" className="hover:text-gold transition-colors duration-200">Selected Works</Link></li>
                            <li><Link to="/about" className="hover:text-gold transition-colors duration-200">Who We Are</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-6 border-l-2 border-gold pl-3">
                            GET IN TOUCH
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-gold mt-1 shrink-0" />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=codemation.offical@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">codemation.offical@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-gold mt-1 shrink-0" />
                                <span className="hover:text-gold transition-colors duration-200">
                                    <a href="tel:+923373096516">03373096516</a> <br/> 
                                    <a href="tel:+923010208825">03010208825</a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                                <a href="https://www.google.com/maps/search/?api=1&query=R-948,+Federal+B+Area+Dastagir+Block+9+Gulberg+Town,+Karachi,+75850,+Pakistan" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">
                                    R-948, Federal B Area Dastagir Block 9,<br />Gulberg Town, Karachi, 75850, Pakistan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Codemation. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors duration-200">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
