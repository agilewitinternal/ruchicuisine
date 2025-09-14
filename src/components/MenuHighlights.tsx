import { useState } from 'react';
import { MENU_PDF_URL, UBER_EATS_LINK, DOOR_DASH_LINK, DIRECT_ORDER_LINK } from '../config'
import { FaUber } from 'react-icons/fa';
import { SiDoordash } from 'react-icons/si';
import { MdRestaurant } from 'react-icons/md';


const dosas = [
    { title: 'Thali', desc: 'A traditional South Indian platter featuring a variety of dishes.', price: '$8.99' },
    { title: 'Dosas', desc: ' House special dosas, including masala, ragi, and paper dosa.', price: '$10.99' },
    { title: 'Idlis', desc: 'Soft and fluffy idlis served with sambar and chutney.', price: '$11.99' },
    { title: 'Vadas', desc: ' Crunchy vadas served with sambar and chutney.', price: '$11.99' },
    { title: 'Rice Items', desc: 'Varieties of rice dishes, including lemon rice, tamarind rice, and coconut rice.', price: '$11.99' },
]
// const tiffins = [
// { title: 'Idli (2)', desc: 'Steamed rice cakes with sambar & chutney.', price: '$7.49' },
// { title: 'Medu Vada (2)', desc: 'Crispy lentil donuts with sambar.', price: '$7.99' },
// ]
// const curries = [
// { title: 'Sambar Rice', desc: 'Hearty lentil & veggie stew over rice.', price: '$10.49' },
// { title: 'Paneer Butter Masala', desc: 'Creamy tomato gravy with paneer.', price: '$12.99' },
// ]


function Card({ it }: { it: { title: string; desc: string; price: string } }) {
    return (
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <div className="h-28 bg-ruchiCream rounded mb-3 flex items-center justify-center text-ruchiGreen font-bold">Image</div>
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
            {/* <div className="mt-3 font-bold text-ruchiRed">{it.price}</div> */}
        </div>
    )
}


export default function MenuHighlights() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <section id="menu" className="py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Menu</h2>
                        <p className="text-gray-600 mt-2">A peek at our crowd favorites. Ask for our full menu in‑store.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                                            <button
                                                onClick={() => setShowMenu(!showMenu)}
                                                // onMouseEnter={() => setShowMenu(true)}
                                                // onMouseLeave={() => setShowMenu(false)}
                                                className="ml-4 inline-flex items-center rounded-full bg-ruchiRed px-4 py-2 text-white text-sm font-semibold hover:opacity-95"
                                            >
                                                Order Online
                                            </button>
                                            {showMenu && (
                                                <div
                                                    onClick={() => setShowMenu(!showMenu)}
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
                        {MENU_PDF_URL && (
                            <a href={MENU_PDF_URL} className="rounded-full bg-white border px-4 py-2 text-sm font-semibold">Download Menu (PDF)</a>
                        )}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dosas.map(it => (
                        <Card key={it.title} it={it} />
                    ))}
                </div>
            </div>
        </section>
    )
}