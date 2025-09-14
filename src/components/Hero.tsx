export default function Hero() {
return (
<section className="relative" id="home">
<img src="/ruchi-banner.jpg" alt="South Indian dishes" className="w-full h-[56vh] md:h-[70vh] object-cover" />
<div className="absolute inset-0 bg-black/40" />
<div className="absolute inset-0 flex items-center">
<div className="mx-auto max-w-7xl px-6 text-white">
<h1 className="text-3xl md:text-5xl font-extrabold mb-3">Authentic South Indian Flavors</h1>
<p className="max-w-2xl text-sm md:text-base opacity-95">
Ruchi Restaurant is a culinary gem that transports you to the vibrant streets of India through its authentic South Indian cuisine. Nestled in the heart of Midtown Nashville, we are renowned for bold flavors, traditional recipes, and warm hospitality.
</p>
<div className="mt-5 flex gap-3">
<a href="#menu" className="rounded-full bg-ruchiGreen px-5 py-2 text-white font-semibold">Explore Menu</a>
<a href="#contact" className="rounded-full bg-white text-ruchiRed px-5 py-2 font-semibold">Contact Us</a>
</div>
</div>
</div>
</section>
)
}