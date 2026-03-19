import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
    return (
        <main className="max-w-3xl mx-auto px-8 bg-[#0f0f0f]">
            <Nav />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}