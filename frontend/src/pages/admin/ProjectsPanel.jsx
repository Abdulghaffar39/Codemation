const ProjectsPanel = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Projects</h1>
                <button className="bg-gold text-dark px-4 py-2 font-bold rounded hover:bg-gold-light transition-colors">
                    Add New Project
                </button>
            </div>

            <div className="bg-dark-card border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="border-b border-white/5 bg-white/5">
                        <tr>
                            <th className="p-4 text-gray-400 font-medium">Project Name</th>
                            <th className="p-4 text-gray-400 font-medium">Category</th>
                            <th className="p-4 text-gray-400 font-medium">Status</th>
                            <th className="p-4 text-gray-400 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-white/5">Cyberpunk IoT Dashboard</td>
                            <td className="p-4 border-b border-white/5 text-gray-400">Web App</td>
                            <td className="p-4 border-b border-white/5"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">Published</span></td>
                            <td className="p-4 border-b border-white/5 justify-end flex gap-2">
                                <button className="text-gold hover:text-gold-light">Edit</button>
                                <button className="text-red-400 hover:text-red-300">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectsPanel;
