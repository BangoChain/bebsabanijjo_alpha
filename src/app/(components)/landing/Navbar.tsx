"use client";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">YourLogo</div>
      <div className="flex gap-8 items-center">
        <a href="#why" className="hover:underline">
          Why?
        </a>
        <a href="#how-it-works" className="hover:underline">
          How it works
        </a>
        <a href="#pricing" className="hover:underline">
          Pricing
        </a>
        <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500">
          Get early access
        </button>
      </div>
    </nav>
  );
}
