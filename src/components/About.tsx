export default function About() {
return (
<section id="about" className="py-16 bg-white">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome to Ruchi</h2>
<p className="mt-4 text-gray-700 leading-relaxed">
From crisp dosas and fluffy idlis to aromatic curries and fresh chutneys, every dish is crafted with care. Our chefs honor time‑tested techniques while embracing seasonal produce and wholesome ingredients.
</p>
<ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
<li className="bg-ruchiCream p-3 rounded">100% Vegetarian</li>
<li className="bg-ruchiCream p-3 rounded">Authentic South Indian</li>
<li className="bg-ruchiCream p-3 rounded">Catering Available</li>
<li className="bg-ruchiCream p-3 rounded">Family Friendly</li>
</ul>
</div>
<div className="rounded-xl overflow-hidden shadow">
<img src="/ruchi-banner.jpg" alt="Assorted South Indian dishes" className="object-cover w-full h-72" />
</div>
</div>
</section>
)
}