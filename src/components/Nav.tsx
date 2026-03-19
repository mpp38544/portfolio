export default function Nav() {
    return (
        <nav className="sticky top-0 bg-[#0f0f0f] py-5 mb-16 flex items-center justify-between border-b border-[#2a2a2a] z-10">
            <span className="text-[#e2e2e2] font-medium">Portfolio</span>
            <div className="flex gap-6">
                <a href="#about" className="text-sm text-[#888] hover:text-[#e2e2e2] transition-colors">About</a>
                <a href="#projects" className="text-sm text-[#888] hover:text-[#e2e2e2] transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-[#888] hover:text-[#e2e2e2] transition-colors">Skills</a>
                <a href="#contact" className="text-sm text-[#888] hover:text-[#e2e2e2] transition-colors">Contact</a>
            </div>
        </nav>
    )
}