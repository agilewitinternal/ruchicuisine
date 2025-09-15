import { useState } from 'react'
import { FaUber } from 'react-icons/fa'
import { SiDoordash } from 'react-icons/si'
import { MdRestaurant } from 'react-icons/md'


export default function Contact() {
    const [showMenu, setShowMenu] = useState(false)


    return (
        <section id="contact" className="py-16">
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visit Us</h2>
                    <p className="text-gray-700 mt-3">614 18th Ave N, Nashville, TN 37203, USA</p>
                    <div className="mt-4 space-y-1 text-gray-700">
                        <p><strong>Phone:</strong> 615-535-3766</p>
                        <p><strong>Email:</strong> info@ruchinashville.com</p>
                        <p><strong>Hours:</strong> Sun–Thu 11am–11pm • Fri–Sat 11am–12am</p>
                    </div>
                    <div className="mt-6 flex gap-3 relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="inline-flex items-center rounded-full bg-ruchiRed px-5 py-2 text-white font-semibold"
                        >
                            Order Online
                        </button>
                        {showMenu && (
                            <div
                              onClick={() => setShowMenu(!showMenu)}
                                className="absolute mt-12 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50"
                            >
                                <a href="https://www.ubereats.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <FaUber className="text-green-600" /> Uber Eats
                                </a>
                                <a href="https://www.doordash.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <SiDoordash className="text-red-500" /> DoorDash
                                </a>
                                <a href="https://buttis.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <MdRestaurant className="text-yellow-600" /> Direct Orders
                                </a>
                            </div>
                        )}
                        <a href="#menu" className="inline-flex items-center rounded-full bg-white border px-5 py-2 font-semibold">View Menu</a>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <iframe
                        title="Ruchi location"
                        width="100%"
                        height="360"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=614+18th+Ave+N,+Nashville,+TN+37203,+USA&output=embed"
                    />
                    <div className="px-4 py-3 text-xs text-gray-500 bg-ruchiCream">Google Maps embed for Ruchi Restaurant.</div>
                </div>
            </div>
        </section>
    )
}