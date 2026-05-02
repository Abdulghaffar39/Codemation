import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">WHO WE ARE</span>
                    <h1 className="text-5xl font-bold mb-4">ABOUT CODEMATION</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-white leading-tight">We are visionaries, engineers, and designers obsessed with perfection.</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Founded on the principles of engineering excellence and premium design, Codemation is not just another agency. We are a technology partner for startups and enterprises that refuse to settle for average.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Our team consists of elite developers and designers who have shipped products used by millions. We build scalable, secure, and beautiful digital products that drive real business results.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-dark-card border border-white/10 p-8 relative z-10 flex flex-col justify-center">
                            <div className="text-6xl font-black text-gold/20 mb-4 tracking-tighter">01</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-gray-400">To accelerate human progress through beautifully engineered software solutions that solve complex problems.</p>
                        </div>
                        <div className="absolute top-8 left-8 right-[-2rem] bottom-[-2rem] border border-gold/30 z-0"></div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-16"
                >
                    {[
                        { label: 'Projects Delivered', value: '150+' },
                        { label: 'Lines of Code', value: '10M+' },
                        { label: 'Awards Won', value: '12' },
                        { label: 'Happy Clients', value: '98%' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-gold mb-2">{stat.value}</div>
                            <div className="text-gray-400 font-bold tracking-wider text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
