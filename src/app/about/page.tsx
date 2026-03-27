import { ArrowRight, HeartPulse, Building2, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex-1">
      <section className="py-20 bg-amber-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
              About SevaLink
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              We are a dedicated non-profit organization focused on bridging the healthcare gap. Our mission is to ensure that no patient is left without medical support during a crisis, and to empower volunteers to directly contribute to their communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 border border-orange-100 rounded-2xl bg-amber-50/50 shadow-sm">
              <div className="p-4 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-900">Grassroots Network</h3>
              <p className="text-stone-600">We work directly with local clinics, pharmacies, and volunteers to ensure immediate response.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-orange-100 rounded-2xl bg-amber-50/50 shadow-sm">
              <div className="p-4 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-900">Tech-Driven</h3>
              <p className="text-stone-600">Leveraging AI, smart routing, and modern tech to quickly verify and service requested needs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-orange-100 rounded-2xl bg-amber-50/50 shadow-sm">
              <div className="p-4 bg-orange-100 text-orange-600 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-900">Trusted Process</h3>
              <p className="text-stone-600">Every volunteer is verified and every requested medical need is vetted for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8 text-lg">
            Join our growing network of volunteers or help us connect with patients who need support the most.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/#support" className="inline-flex items-center justify-center h-11 px-8 bg-white text-orange-600 hover:bg-orange-50 font-semibold rounded-full shadow-sm transition-colors">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
