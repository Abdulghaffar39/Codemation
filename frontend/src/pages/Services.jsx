import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">WHAT WE DO</span>
                    <h1 className="text-5xl font-bold mb-4">OUR SERVICES</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </motion.div>

                <div className="grid gap-12">
                    {[
                        {
                            title: "Web Development",
                            desc: "Building blazing fast, secure, and scalable web applications using the latest JavaScript frameworks like React, Next.js, and Node.js.",
                            features: ["Custom Web Apps", "E-Commerce", "SaaS Platforms", "API Development"]
                        },
                        {
                            title: "Mobile App Development",
                            desc: "Creating seamless native and cross-platform mobile experiences for iOS and Android that users love engaging with.",
                            features: ["React Native", "Flutter", "iOS Native", "Android Native"]
                        },
                        {
                            title: "Embedded Systems",
                            desc: "Bridging the gap between hardware and software with custom embedded solutions, IoT applications, and firmware development.",
                            features: ["IoT Integration", "Firmware", "Microcontrollers", "Hardware Prototypes"]
                        },
                        {
                            title: "UI/UX Design",
                            desc: "Crafting beautiful, intuitive interfaces that convert. Our design process starts with deep user insights and ends with pixel-perfect Figma prototypes.",
                            features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group border border-white/10 hover:border-gold/30 bg-dark-card p-8 md:p-12 transition-all flex flex-col md:flex-row gap-8"
                        >
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="flex-1 md:border-l border-white/10 md:pl-8">
                                <h3 className="text-xl font-bold mb-4">Key Verticals</h3>
                                <ul className="space-y-3">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
                                            <span className="w-2 h-2 bg-gold mr-3 rounded-full"></span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
