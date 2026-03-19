import aiReviewerImg from '../assets/ai-reviewer.png'
import tradingImg from '../assets/trading.png'
import yoloImg from '../assets/yolo.png'
import mmsImg from '../assets/mms.png'

interface Project {
    title: string
    description: string
    tech: string[]
    live: string | null
    github: string | null
    image: string | null | undefined
}

const projects: Project[] = [
    {
        title: 'AI Code Reviewer',
        description: 'Personal GitHub bot that automatically reviews pull requests, posts structured feedback directly on PRs using Claude API and logs reviews to a real-time dashboard.',
        tech: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Docker'],
        live: 'https://ai-code-reviewer-production-9d7f.up.railway.app/',
        github: 'https://github.com/mpp38544/ai-code-reviewer',
        image: aiReviewerImg
    },
    {
        title: 'Crypto Trading Dashboard',
        description: 'Real-time trading pipeline with live price feeds, portfolio tracking, and automated trade execution using Avellaneda Stoikov market making strategy.',
        tech: ['Python', 'Node.js', 'React', 'Apache Kafka', 'PostgreSQL', 'Docker'],
        live: 'https://trading.muditha-pallewela.com/',
        github: 'https://github.com/mpp38544/realtime-trading-pipeline',
        image: tradingImg
    },
    {
        title: 'Market-Making C++ Backtester and Orderbook Simulator',
        description: 'High-frequency market making strategy implemented in C++ using the Avellaneda-Stoikov model. Simulates a full order book with bid-ask spread optimisation based on inventory risk and volatility. Includes a multithreaded backtesting engine with historical data stored in Parquet format.',
        live: null,
        github: 'https://github.com/mpp38544/MMS',
        tech: ['C++', 'Pandas', 'Parquet', 'Multithreading'],
        image: mmsImg
    },
    {
        title: 'Integrated 3D Object Localisation and Tracking Pipeline',
        description: 'Building a unified pipeline that converts 2D drone footage into precise 3D GPS coordinates for real-time object tracking. Uses YOLO, OpenCV and georeferencing to map detected bounding boxes into world coordinates for multi-object tracking.',
        live: null,
        github: null,
        tech: ['Python', 'YOLO', 'OpenCV', 'PyTorch', 'React'],
        image: yoloImg
    },
    {
        title: 'Wearable Sleep Apnea Monitoring Device',
        description: 'Wearable sleep apnea monitoring system using ESP32, PPG and flex sensors. Raw SpO2, heart rate and breathing data is streamed to the cloud, processed and classified using a Random Forest model trained on PSG datasets. Outputs an AHI score and sleep quality dashboard.',
        live: null,
        github: null,
        tech: ['Python', 'Firebase', 'scikit-learn', 'React', 'FastAPI'],
        image: undefined
    }
]

export default function Projects() {
    return (
        <section id="projects" className="mb-24 scroll-mt-20">
            <p className="text-xs text-[#555] uppercase tracking-widest mb-6">Projects</p>
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <div key={project.title} className="bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#444] transition-colors">
                        {project.image && (
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top" />
                        )}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-[#e2e2e2] font-medium">{project.title}</h2>
                                {!project.live && !project.github && (
                                    <span className="text-xs bg-[#2a1f0a] text-[#f59e0b] px-2 py-1 rounded-full">In progress</span>
                                )}
                            </div>
                            <p className="text-[#888] text-sm leading-relaxed mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs bg-[#1e1e1e] border border-[#333] text-[#aaa] px-2 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-[#6b9fff] hover:text-[#99bbff] transition-colors">Live →</a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-[#888] hover:text-[#aaa] transition-colors">GitHub →</a>
                                )}
                                {!project.live && !project.github && (
                                    <span className="text-xs text-[#555]">Coming soon</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}