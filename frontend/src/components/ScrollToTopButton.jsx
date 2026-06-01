import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-24 right-8 md:bottom-8 md:right-28 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-dark-card border border-white/20 text-gold hover:text-white hover:border-gold hover:bg-gold/10 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                >
                    <ArrowUp size={24} strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
