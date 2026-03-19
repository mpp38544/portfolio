export default function Contact() {
    return (
        <section id="contact" className="mb-24 scroll-mt-20">
            <h1 className="text-3xl font-medium mb-2">Contact</h1>
            <p className="text-gray-400 mb-8">Feel free to reach out.</p>
            <div className="flex flex-col gap-4">
                <a 
                    href="mailto:your@email.com" 
                    className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <span className="text-sm font-medium w-20 text-gray-400">Email</span>
                    <span className="text-sm">muditha.pallewela.mp@email.com</span>
                </a>
                <a 
                    href="https://github.com/mpp38544" 
                    target="_blank"
                    className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <span className="text-sm font-medium w-20 text-gray-400">GitHub</span>
                    <span className="text-sm">github.com/mpp38544</span>
                </a>
                <a 
                    href="https://linkedin.com/in/mudithapallewela" 
                    target="_blank"
                    className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <span className="text-sm font-medium w-20 text-gray-400">LinkedIn</span>
                    <span className="text-sm">linkedin.com/in/mudithapallewela</span>
                </a>
            </div>
        </section>
    )
}