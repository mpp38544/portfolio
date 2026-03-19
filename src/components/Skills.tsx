export default function Skills() {
    const skills = {
        'Languages': ['TypeScript', 'JavaScript', 'Python', 'C', 'SQL'],
        'Backend': ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'asyncio'],
        'Frontend': ['React', 'Tailwind CSS', 'Vite'],
        'Data & AI': ['Anthropic Claude API', 'OpenAI API', 'Pandas', 'NumPy'],
        'Infrastructure': ['Docker', 'PostgreSQL', 'Railway', 'Linux', 'GitHub Actions'],
        'Tools': ['Git', 'VS Code', 'DBeaver', 'ngrok']
    }

    return (
        <section id="skills" className="mb-24 scroll-mt-20">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Skills</p>
            <div className="flex flex-col gap-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">{category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill} className="text-sm bg-gray-900 text-white px-3 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}