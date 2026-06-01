import { Shield, Cpu, PenTool, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const processSteps = [
    { num: "01", title: "Discovery & Strategy", desc: "We dive deep into your business objectives, market realities, and user demographics. Through collaborative workshops, we establish a robust technical roadmap and define project success metrics." },
    { num: "02", title: "Premium UI/UX Design", desc: "Our design team develops high-fidelity wireframes and interactive prototypes. We focus on creating visually stunning interfaces that provide friction-free, premium user experiences." },
    { num: "03", title: "High-Performance Engineering", desc: "Our elite developers write clean, modular, and extremely performant code. We construct scalable backends and smooth, fluid frontends using modern frameworks and best architectural practices." },
    { num: "04", title: "Rigorous Quality Assurance", desc: "Every module undergoes unit testing, integration testing, and performance profiling. We ensure your product runs flawlessly under high loads and across all devices and screen sizes." },
    { num: "05", title: "Continuous Integration & Launch", desc: "We deploy using robust CI/CD pipelines to cloud providers. We establish real-time analytics and monitoring to track application health and guarantee maximum uptime." }
];

const values = [
    { Icon: Shield, title: "Uncompromising Integrity", desc: "We believe in complete transparency, honest estimates, and building long-term partnerships based on mutual trust." },
    { Icon: Cpu, title: "Engineering Excellence", desc: "We write clean, efficient code and leverage modern architectures to construct highly scalable, future-proof software." },
    { Icon: PenTool, title: "Artistic Craftsmanship", desc: "For us, software is art. We focus heavily on layout, typography, pixel alignments, and smooth micro-animations." },
    { Icon: Zap, title: "High Velocity", desc: "We utilize agile methodologies to maintain high momentum, delivering premium milestones rapidly without sacrificing quality." }
];

const techStack = [
    { category: "Web & Backend", items: ["React", "Next.js", "Node.js", "Express", "Python", "Go", "GraphQL", "WebSockets"] },
    { category: "Mobile Apps", items: ["React Native", "Swift / iOS", "Kotlin / Android", "Flutter"] },
    { category: "Embedded & IoT", items: ["C / C++", "Rust", "RTOS", "Firmware", "MQTT", "ESP32 / ARM"] },
    { category: "Design & Media", items: ["Figma", "Adobe Suite", "After Effects", "Webflow"] },
    { category: "Cloud & Devops", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"] }
];

const stats = [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Lines of Code', value: '10M+' },
    { label: 'Active Clients', value: '50+' },
    { label: 'Client Retention Rate', value: '98%' },
];

const About = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen relative overflow-hidden bg-dark text-white">
            <SEO
                title="About Us | Codemation – Our Mission, Values & Team"
                description="Learn about Codemation, a premium software agency driven by engineering excellence, artistic craftsmanship, and high velocity. Discover our mission, core values, workflow, and tech stack."
                keywords="about Codemation, software agency mission, development team, core values, tech stack, engineering excellence, agile workflow, software company"
                canonicalPath="/about"
            />
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 z-0" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px] -translate-x-1/3 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Header */}
                <div className="mb-16">
                    <span className="text-gold font-bold tracking-widest text-sm mb-2 block">WHO WE ARE</span>
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">ABOUT CODEMATION</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </div>

                {/* Section 1: Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                            We are visionaries, engineers, and designers obsessed with digital perfection.
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            Founded on the principles of absolute engineering excellence and premium aesthetic design, Codemation is not just another development agency. We function as a strategic innovation partner for startups and enterprises that refuse to settle for ordinary digital products.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Our team consists of elite software architects, embedded system engineers, and visual designers who have shipped applications used by millions of active users globally. We build solutions that combine state-of-the-art backend systems with beautiful, fluid frontends to drive tangible business growth.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-square bg-dark-card border border-white/10 p-10 relative z-10 flex flex-col justify-center">
                            <div className="text-6xl font-black text-gold/20 mb-4 tracking-tighter">OUR TARGET</div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To build robust digital infrastructures and premium user interfaces that accelerate business digital transformation, solving highly complex problems with clean and maintainable software architecture.
                            </p>
                        </div>
                        <div className="absolute top-6 left-6 right-[-1.5rem] bottom-[-1.5rem] border border-gold/20 z-0"></div>
                    </div>
                </div>

                {/* Section 2: Core Values */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">WHAT DRIVES US</span>
                        <h2 className="text-4xl font-bold">OUR CORE VALUES</h2>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, index) => (
                            <div
                                key={index}
                                className="p-8 border border-white/5 bg-dark-card/50 hover:border-gold/30 hover:bg-dark-card transition-colors duration-300 group"
                            >
                                <div className="mb-6 p-3 bg-dark w-fit border border-white/10 group-hover:border-gold/30 transition-colors">
                                    <v.Icon className="text-gold w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{v.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Our Development Process */}
                <div className="mb-32">
                    <div className="mb-16">
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">HOW WE WORK</span>
                        <h2 className="text-4xl font-bold">OUR WORKFLOW</h2>
                        <div className="w-20 h-1 bg-gold mt-4"></div>
                    </div>

                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 border border-white/5 hover:border-gold/20 bg-dark-card/30 hover:bg-dark-card/60 transition-colors duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-black text-gold/30 font-mono tracking-tighter">
                                    {step.num}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Technologies Stack */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest text-sm mb-2 block">TECHNOLOGY ARMAMENT</span>
                        <h2 className="text-4xl font-bold">CORE TECH STACK</h2>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="p-8 border border-white/5 bg-dark-card/20 hover:border-gold/30 transition-colors duration-300"
                            >
                                <h3 className="text-lg font-bold text-gold mb-6 border-b border-white/10 pb-3 uppercase tracking-wider">
                                    {tech.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-dark border border-white/10 text-xs text-gray-300 font-semibold uppercase tracking-wider"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-16">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-gold mb-2">{stat.value}</div>
                            <div className="text-gray-400 font-bold tracking-wider text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
