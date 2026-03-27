import { HeartPulse } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-orange-100 py-12">
      <div className="container mx-auto px-4 text-center text-stone-500 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-stone-800 font-bold text-xl opacity-80">
          <HeartPulse className="h-5 w-5 text-orange-500" />
          <span>SevaLink</span>
        </div>
        <p className="text-sm">Empowering healthcare access for everyone. © 2026 SevaLink NGO.</p>
      </div>
    </footer>
  );
}
