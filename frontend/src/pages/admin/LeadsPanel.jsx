const LeadsPanel = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Contact Leads</h1>

            <div className="bg-dark-card border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="border-b border-white/5 bg-white/5">
                        <tr>
                            <th className="p-4 text-gray-400 font-medium">Name</th>
                            <th className="p-4 text-gray-400 font-medium">Email</th>
                            <th className="p-4 text-gray-400 font-medium">Date</th>
                            <th className="p-4 text-gray-400 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-white/5 text-white">John Doe</td>
                            <td className="p-4 border-b border-white/5 text-gray-400">john@example.com</td>
                            <td className="p-4 border-b border-white/5 text-gray-400">May 1, 2026</td>
                            <td className="p-4 border-b border-white/5 text-right">
                                <button className="text-gold hover:text-gold-light">View Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeadsPanel;
