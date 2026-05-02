import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Mock auth logic
            await new Promise(r => setTimeout(r, 1000));
            setLoading(false);
            // Navigate to admin if it's admin (mocking admin route for demo)
            navigate('/admin');
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-dark-card border border-white/10 p-8 relative z-10"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <p className="text-gray-400">
                        {isLogin ? 'Sign in to access your dashboard' : 'Join us to start your project'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Full Name</label>
                            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2">Password</label>
                        <input required type="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold-light text-dark font-bold py-3 transition-colors disabled:opacity-50">
                        {loading ? 'PROCESSING...' : (isLogin ? 'SIGN IN' : 'SIGN UP')}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button onClick={() => setIsLogin(!isLogin)} className="text-gray-400 hover:text-gold transition-colors text-sm">
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
