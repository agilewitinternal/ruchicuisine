import { ORDER_URL, MENU_PDF_URL } from '../config'


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
return (
<section id="menu" className="py-16">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Menu</h2>
<p className="text-gray-600 mt-2">A peek at our crowd favorites. Ask for our full menu in‑store.</p>
</div>
<div className="flex gap-3">
<a href={ORDER_URL} target="_blank" rel="noreferrer" className="rounded-full bg-ruchiRed px-4 py-2 text-white text-sm font-semibold">Order Online</a>
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