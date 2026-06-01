import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SEO from '../components/SEO';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await axios.post('/api/contact', formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Failed to send message. Please try again.';
            setStatus({ loading: false, success: false, error: errorMsg });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <SEO
                title="Codemation | Premium Software Development Agency"
                description="Codemation builds high-performance web apps, mobile applications, embedded systems, UI/UX designs, and graphic branding for innovative businesses worldwide."
                keywords="software development agency, web development, mobile app development, UI/UX design, embedded systems, graphic design, React, Node.js, custom software, Codemation"
                canonicalPath="/"
            />
            {/* Hero Section */}
            <section className="min-h-[85vh] md:min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-16 md:py-0">
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[80px] opacity-40 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-2rem] md:mt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white"
                    >
                        WE BUILD <span className="text-gold">DIGITAL</span><br />
                        FUTURES.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
                    >
                        Premium software house specializing in Web, Mobile, and Embedded Systems for the world's most innovative brands.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/projects" className="px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-none transition-colors w-full sm:w-auto">
                            VIEW OUR WORK
                        </Link>
                        <a href="#contact-section" className="px-8 py-4 bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white font-bold rounded-none transition-colors w-full sm:w-auto">
                            START A PROJECT
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-16 md:py-24 bg-dark-card border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 md:mb-16"
                    >
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">OUR CAPABILITIES</span>
                        <h2 className="text-4xl font-bold mb-4">ENGINEERING EXCELLENCE</h2>
                        <div className="w-20 h-1 bg-gold"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Embedded Systems', 'Graphic Design'].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 md:p-8 border border-white/10 hover:border-gold/50 bg-dark transition-colors group cursor-pointer"
                            >
                                <div className="w-12 h-12 mb-6 bg-dark-card flex items-center justify-center group-hover:bg-gold transition-colors text-gold group-hover:text-dark font-bold">
                                    {`0${index + 1}`}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">High-performance scalable applications built with cutting-edge technology for modern businesses.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section (Footer upper) */}
            <section id="contact-section" className="py-16 md:py-24 bg-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[80px] pointer-events-none z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 md:mb-16"
                    >
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">GET IN TOUCH</span>
                        <h2 className="text-4xl font-bold mb-4">START A PROJECT</h2>
                        <div className="w-20 h-1 bg-gold"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-white leading-tight">Let's build something extraordinary together.</h3>
                            <p className="text-gray-400 mb-8">Discuss your project with our engineering team and get a detailed proposal.</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=codemation.offical@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gold text-lg font-medium hover:text-white transition-colors duration-200">codemation.offical@gmail.com</a>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                                    <p className="text-gold text-lg font-medium">
                                        <a href="tel:+923373096516" className="hover:text-white transition-colors duration-200">03373096516</a> <br/> 
                                        <a href="tel:+923010208825" className="hover:text-white transition-colors duration-200">03010208825</a>
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Headquarters</h4>
                                    <a href="https://www.google.com/maps/search/?api=1&query=R-948,+Federal+B+Area+Dastagir+Block+9+Gulberg+Town,+Karachi,+75850,+Pakistan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors duration-200 block">
                                        R-948, Federal B Area Dastagir Block 9<br />Gulberg Town, Karachi, 75850, Pakistan
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-dark-card p-8 border border-white/5 relative"
                        >
                            {status.success ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 text-sm">Thank you for reaching out. We will get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 mb-2">Full Name *</label>
                                            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 mb-2">Email Address *</label>
                                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 mb-2">Phone Number *</label>
                                            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 mb-2">Company (Optional)</label>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Project Details *</label>
                                        <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
                                    </div>

                                    {status.error && <div className="text-red-500 text-sm font-medium">{status.error}</div>}

                                    <button type="submit" disabled={status.loading} className="w-full bg-gold hover:bg-gold-light text-dark font-bold py-4 transition-colors disabled:opacity-50 tracking-widest text-sm">
                                        {status.loading ? 'SENDING...' : 'SEND MESSAGE'}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
