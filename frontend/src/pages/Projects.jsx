import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Mock fetch for now
                // const { data } = await axios.get('/api/projects');
                // setProjects(data);

                // Using mock data to display
                setProjects([
                    { _id: '1', title: 'Cyberpunk IoT Dashboard', category: 'Web App', description: 'Real-time monitoring interface for IoT devices.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
                    { _id: '2', title: 'Luxury Car Dealership', category: 'E-Commerce', description: 'Premium car booking system with admin panel.', image: 'https://images.unsplash.com/photo-1503376712351-1c222267e862?q=80&w=2070&auto=format&fit=crop' },
                    { _id: '3', title: 'Fintech Mobile App', category: 'Mobile App', description: 'Secure digital wallet and crypto trading application.', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop' },
                ]);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">OUR PORTFOLIO</span>
                    <h1 className="text-5xl font-bold mb-4">SELECTED WORKS</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden bg-dark-card border border-white/5 cursor-pointer"
                            >
                                <div className="aspect-video w-full overflow-hidden relative">
                                    <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/20 transition-colors duration-500" />
                                </div>
                                <div className="p-6">
                                    <span className="text-gold text-xs font-bold tracking-wider uppercase mb-2 block">{project.category}</span>
                                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                                {/*  <Link to={`/projects/${project._id}`} className="absolute inset-0 z-10" /> */}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
