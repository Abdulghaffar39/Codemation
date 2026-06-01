import { useState, useRef, useEffect, useCallback, memo } from 'react';
import logo from '../assets/codemation.png';
import SEO from '../components/SEO';

const projectsData = [
    { _id: '1', title: 'IoT Portal', category: 'Web Development', description: 'Real-time industrial IoT monitoring dashboard built with React and WebSockets.', video: '/videos/websites videos/IOT Portal.mp4' },
    { _id: '2', title: 'Luxury Automotive E-Commerce', category: 'Web Development', description: 'Headless e-commerce platform for high-end electric hypercars.', video: '/videos/websites videos/E-Commerce.mp4' },
    { _id: '3', title: 'SaaS Analytics Dashboard', category: 'Web Development', description: 'Enterprise dashboard presenting real-time business and sales analytics.', video: '/videos/websites videos/SaaS Analytics Dashboard.mp4' },
    { _id: '4', title: 'Fintech Wallet App', category: 'Mobile Apps', description: 'Multi-currency digital wallet and crypto trading application with biometric auth.', video: '/videos/App videos/Fintech Wallet App.mp4' },
    { _id: '5', title: 'Smart Home Controller', category: 'Mobile Apps', description: 'IoT controller application for residential automation and device management.', video: '/videos/App videos/Smart Home Controller App.mp4' },
    { _id: '6', title: 'Fitness Tracker Mobile', category: 'Mobile Apps', description: 'Wearable-integrated fitness tracking app with real-time biometric charts.', video: '/videos/App videos/Fitness Tracker Mobile App.mp4' },
    { _id: '7', title: 'Neo-Bank Experience', category: 'UI/UX Design', description: 'User journey mapping and high-fidelity interactive wireframes for modern banking.', video: '/videos/UX UI Design/Neo-Bank Experience Design.mp4' },
    { _id: '8', title: 'Minimalist E-Store Mockups', category: 'UI/UX Design', description: 'Figma wireframes and high-fidelity luxury fashion web store designs.', video: '/videos/UX UI Design/Minimalist E-Store Mockups Design.mp4' },
    { _id: '9', title: 'SaaS App Interface', category: 'UI/UX Design', description: 'UI system and responsive design iterations for a project management suite.', video: '/videos/UX UI Design/SaaS App Interface Design.mp4' },
    { _id: '10', title: 'Autonomous Robot Controller', category: 'Embedded Systems', description: 'Low-latency micro-controller programming for navigation and sensor telemetry.', video: '/videos/Embedded Systems/Autonomous Robot Controller.mp4' },
    { _id: '11', title: 'Smart Grid Firmware', category: 'Embedded Systems', description: 'Energy monitoring MCU software with security layers and wireless messaging.', video: '/videos/Embedded Systems/Smart Grid Firmware.mp4' },
    { _id: '12', title: 'Automotive Infotainment OS', category: 'Embedded Systems', description: 'Real-time OS integration and custom firmware for electric vehicle dashboards.', video: '/videos/Embedded Systems/Automotive Infotainment OS.mp4' },
    { _id: '13', title: 'Brand Identity Suite', category: 'Graphic Design', description: 'Corporate typography, logos, and digital branding assets for an AI startup.', video: '/videos/Graphics Design/Brand Identity Suite.mp4' },
    { _id: '14', title: 'Minimalist Poster Series', category: 'Graphic Design', description: 'Concept posters and vectorized typography for a modern art exhibition.', video: '/videos/Graphics Design/Minimalist Poster Series.mp4' },
    { _id: '15', title: 'Luxury Packaging Art', category: 'Graphic Design', description: 'Product mockups and brand illustrations designed for luxury cosmetics.', video: '/videos/Graphics Design/Luxury Packaging Art.mp4' }
];

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Embedded Systems", "Graphic Design"];

const ProjectVideo = memo(({ videoSrc, isUnmuted, onHoverStart, onHoverEnd }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInViewRef = useRef(false);
    const isMobileRef = useRef(window.innerWidth < 768);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isInViewRef.current = entry.isIntersecting;
                const video = videoRef.current;
                if (!video) return;

                if (entry.isIntersecting) {
                    if (isMobileRef.current) onHoverStart();
                    video.src = videoSrc;
                    video.play().catch(() => {});
                } else {
                    if (isMobileRef.current) onHoverEnd();
                    video.pause();
                    video.removeAttribute('src');
                    video.load();
                }
            },
            { threshold: isMobileRef.current ? 0.5 : 0.1 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [videoSrc, onHoverStart, onHoverEnd]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !isUnmuted;
    }, [isUnmuted]);

    return (
        <div 
            ref={containerRef}
            className="aspect-video w-full overflow-hidden relative bg-black group"
            onMouseEnter={!isMobileRef.current ? onHoverStart : undefined}
            onMouseLeave={!isMobileRef.current ? onHoverEnd : undefined}
        >
            <video
                ref={videoRef}
                preload="none"
                loop
                muted
                playsInline
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute top-4 right-4 z-10 opacity-40 group-hover:opacity-80 mix-blend-screen pointer-events-none transition-opacity duration-300">
                <img src={logo} alt="Codemation" className="h-5 md:h-6 w-auto grayscale brightness-200" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
    );
});

ProjectVideo.displayName = 'ProjectVideo';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [unmutedVideoId, setUnmutedVideoId] = useState(null);

    const handleHoverStart = useCallback((id) => {
        setUnmutedVideoId(id);
    }, []);

    const handleHoverEnd = useCallback((id) => {
        setUnmutedVideoId(prev => prev === id ? null : prev);
    }, []);

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <SEO
                title="Our Portfolio | Codemation – Web, Mobile & Design Projects"
                description="Browse Codemation's portfolio of premium projects across Web Development, Mobile Apps, UI/UX Design, Embedded Systems, and Graphic Design."
                keywords="portfolio, web development projects, mobile app portfolio, UI/UX design showcase, embedded systems projects, graphic design work, Codemation projects"
                canonicalPath="/projects"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">OUR PORTFOLIO</span>
                    <h1 className="text-5xl font-bold mb-4">SELECTED WORKS</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </div>

                {/* Categories Filter Bar */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-white/10 pb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 text-sm font-semibold tracking-wider transition-colors duration-200 rounded-none cursor-pointer ${
                                activeCategory === cat
                                    ? 'bg-gold text-dark border border-gold font-bold'
                                    : 'bg-transparent text-gray-400 border border-white/10 hover:border-gold/50 hover:text-white'
                            }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project._id}
                            className="group relative overflow-hidden bg-dark-card border border-white/5 flex flex-col h-full"
                        >
                            <ProjectVideo 
                                videoSrc={project.video}
                                isUnmuted={unmutedVideoId === project._id} 
                                onHoverStart={() => handleHoverStart(project._id)} 
                                onHoverEnd={() => handleHoverEnd(project._id)} 
                            />

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-gold text-xs font-bold tracking-wider uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gold transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
