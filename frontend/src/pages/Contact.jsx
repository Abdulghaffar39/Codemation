import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await new Promise(r => setTimeout(r, 1500)); // Mock network request
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">GET IN TOUCH</span>
                    <h1 className="text-5xl font-bold mb-4">START A PROJECT</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-white">Let's build something extraordinary together.</h2>
                        <p className="text-gray-400 mb-8">Discuss your project with our engineering team and get a detailed proposal.</p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-1">Email Us</h4>
                                <p className="text-gold">hello@codemation.agency</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Call Us</h4>
                                <p className="text-gold">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Headquarters</h4>
                                <p className="text-gray-400">100 Innovation Drive,<br />San Francisco, CA 94103</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-dark-card p-8 border border-white/5"
                    >
                        {status.success ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">We will get back to you within 24 hours.</p>
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

                                {status.error && <div className="text-red-500 text-sm">{status.error}</div>}

                                <button type="submit" disabled={status.loading} className="w-full bg-gold hover:bg-gold-light text-dark font-bold py-4 transition-colors disabled:opacity-50">
                                    {status.loading ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
