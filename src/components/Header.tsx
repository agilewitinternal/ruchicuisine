import { useEffect, useState } from 'react'
import { FaUber } from 'react-icons/fa'
import { SiDoordash } from 'react-icons/si'
import { MdRestaurant } from 'react-icons/md'
import { DIRECT_ORDER_LINK, DOOR_DASH_LINK, UBER_EATS_LINK } from '../config'


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
<a href={href} className="text-sm font-medium text-gray-700 hover:text-ruchiRed transition-colors">
{children}
</a>
)


export default function Header() {
const [scrolled, setScrolled] = useState(false)
const [showMenu, setShowMenu] = useState(false)


useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 8)
onScroll()
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


return (
<header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-header' : ''}`}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<img src="/ruchi-logo.jpg" alt="Ruchi logo" className="h-10 w-10" />
<span className="text-xl font-bold text-ruchiRed">Ruchi</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<NavLink href="#about">About</NavLink>
<NavLink href="#menu">Menu</NavLink>
<NavLink href="#gallery">Gallery</NavLink>
<NavLink href="#contact">Contact</NavLink>
</nav>
<div className="relative">
<button
onClick={() => setShowMenu(!showMenu)}
onMouseEnter={() => setShowMenu(true)}
onMouseLeave={() => setShowMenu(false)}
className="ml-4 inline-flex items-center rounded-full bg-ruchiRed px-4 py-2 text-white text-sm font-semibold hover:opacity-95"
>
Order Online
</button>
{showMenu && (
<div
onMouseEnter={() => setShowMenu(true)}
onMouseLeave={() => setShowMenu(false)}
className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50"
>
<a href={UBER_EATS_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
<FaUber className="text-green-600" /> Uber Eats
</a>
<a href={DOOR_DASH_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
<SiDoordash className="text-red-500" /> DoorDash
</a>
<a href={DIRECT_ORDER_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
<MdRestaurant className="text-yellow-600" /> Direct Orders
</a>
</div>
)}
</div>
</div>
</header>
)
}