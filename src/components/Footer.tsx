export default function Footer() {
return (
<footer className="bg-white border-t">
<div className="mx-auto max-w-7xl px-6 py-10">
{/* Newsletter */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b">
<h4 className="text-xl font-semibold">Join the Ruchi Family</h4>
<form onSubmit={(e)=>e.preventDefault()} className="flex w-full md:w-auto">
<input className="flex-1 md:w-96 border rounded-l px-4 py-2" placeholder="Enter your email address" />
<button className="bg-ruchiRed text-white px-5 rounded-r">Subscribe</button>
</form>
</div>


{/* Links & Contact */}
<div className="grid md:grid-cols-3 gap-8 py-8">
<div className="flex items-start gap-3">
<img src="/ruchi-logo.jpg" alt="Ruchi" className="h-14 w-14" />
<p className="text-sm text-gray-600">Authentic South Indian Vegetarian Cuisine.</p>
</div>


<div>
<h5 className="font-semibold mb-3">Quick Links</h5>
<ul className="space-y-2 text-sm text-gray-700">
<li><a href="#home" className="hover:text-ruchiRed">Home</a></li>
<li><a href="#menu" className="hover:text-ruchiRed">Our Menu</a></li>
<li><a href="#contact" className="hover:text-ruchiRed">Catering</a></li>
<li><a href="#contact" className="hover:text-ruchiRed">Contact Us</a></li>
</ul>
</div>


<div>
<h5 className="font-semibold mb-3">Contact Us</h5>
<ul className="space-y-1 text-sm text-gray-700">
<li><strong>Phone:</strong> +1 615-535-3766</li>
<li><strong>Email:</strong> info@ruchinashville.com</li>
<li><strong>Visit Us:</strong> Midtown, Nashville, TN</li>
<li>Sun–Thu 11am–11pm • Fri–Sat 11am–12am</li>
</ul>
</div>
</div>


<div className="pt-4 border-t text-xs text-gray-500 flex items-center justify-between">
<div className="space-x-4">
<a href="#">English</a>
<a href="#">Privacy</a>
<a href="#">Legal</a>
</div>
<div>© {new Date().getFullYear()} Ruchi. All Rights Reserved.</div>
</div>
</div>
</footer>
)
}