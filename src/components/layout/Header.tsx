import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-orange-200/50 bg-amber-50/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-orange-600 font-bold text-xl tracking-tight hover:text-orange-700 transition">
          <HeartPulse className="h-6 w-6" />
          <span>SevaLink</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
          <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
          <Link href="/#services" className="hover:text-orange-600 transition-colors">Services</Link>
          <Link href="/#support" className="hover:text-orange-600 transition-colors">Request Support</Link>
          <Link href="/contactus" className="hover:text-orange-600 transition-colors">Contact Us</Link>
        </nav>
        <Button variant="default" className="shadow-md rounded-full px-6 bg-orange-600 hover:bg-orange-700 text-white">
          Donate Now
        </Button>
      </div>
    </header>
  );
}
