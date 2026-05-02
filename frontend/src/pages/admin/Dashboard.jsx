const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { title: 'Total Visits', value: '24,592', change: '+12%' },
                    { title: 'Total Projects', value: '15', change: '+2' },
                    { title: 'New Leads', value: '48', change: '+8%' },
                ].map((stat, i) => (
                    <div key={i} className="bg-dark-card p-6 border border-white/5 rounded-xl">
                        <h3 className="text-gray-400 font-medium mb-2">{stat.title}</h3>
                        <div className="flex items-end justify-between">
                            <span className="text-3xl font-bold text-white">{stat.value}</span>
                            <span className="text-gold text-sm font-medium">{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart mock area */}
            <div className="bg-dark-card p-6 border border-white/5 rounded-xl h-96 flex items-center justify-center border-dashed">
                <p className="text-gray-500">Analytics Graph Area (Chart.js / Recharts)</p>
            </div>
        </div>
    );
};

export default Dashboard;
