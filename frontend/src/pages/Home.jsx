import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[120px] opacity-50 z-0" pointerEvents="none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
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
                        <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white font-bold rounded-none transition-colors w-full sm:w-auto">
                            START A PROJECT
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-dark-card border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">OUR CAPABILITIES</span>
                        <h2 className="text-4xl font-bold mb-4">ENGINEERING EXCELLENCE</h2>
                        <div className="w-20 h-1 bg-gold"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Embedded Systems', 'Graphic Design'].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border border-white/10 hover:border-gold/50 bg-dark transition-colors group cursor-pointer"
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
        </div>
    );
};

export default Home;
