import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuHighlights from './components/MenuHighlights'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-ruchiCream">
<Header />
<main className="flex-1">
<Hero />
<About />
<MenuHighlights />
<Gallery />
<Contact />
</main>
<Footer />
</div>
)
}