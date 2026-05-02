import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Users, LogOut } from 'lucide-react';

const AdminLayout = () => {
    const navigate = useNavigate();
    // Assume basic auth logic for now

    const handleLogout = () => {
        // Clear token
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-dark">
            {/* Sidebar */}
            <div className="w-64 bg-dark-card border-r border-white/5 flex flex-col">
                <div className="h-20 flex items-center px-6 border-b border-white/5">
                    <Link to="/" className="text-gold font-bold text-xl tracking-tighter">CODEMATION ADMIN</Link>
                </div>
                <div className="flex-1 py-6 px-4 space-y-2">
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <LayoutDashboard size={20} />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link to="/admin/projects" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <FolderKanban size={20} />
                        <span className="font-medium">Projects</span>
                    </Link>
                    <Link to="/admin/leads" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-gold rounded-lg transition-colors">
                        <Users size={20} />
                        <span className="font-medium">Leads</span>
                    </Link>
                </div>
                <div className="p-4 border-t border-white/5">
                    <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-20 bg-dark-card border-b border-white/5 flex items-center justify-end px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                            AD
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs text-gray-400">admin@codemation.com</p>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8 bg-dark">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
