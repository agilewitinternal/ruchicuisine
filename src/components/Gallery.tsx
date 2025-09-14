export default function Gallery() {
return (
<section id="gallery" className="py-16 bg-white">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gallery</h2>
<p className="text-gray-600 mt-2">A feast for the eyes.</p>
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
{[1,2,3,4,5,6].map(i => (
<div key={i} className="aspect-[4/3] bg-ruchiCream rounded-lg overflow-hidden">
<img src="/ruchi-banner.jpg" alt="Dish" className="w-full h-full object-cover" />
</div>
))}
</div>
</div>
</section>
)
}