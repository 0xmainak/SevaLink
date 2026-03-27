import { ArrowRight, HeartPulse, Users, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormContainer } from "@/components/forms/FormContainer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 xl:py-40 flex items-center justify-center text-center overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
                Emergency Support Active
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-stone-900">
                Bridging the Gap in <span className="text-orange-600 selection:bg-orange-600 selection:text-white">Healthcare</span> Access
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-stone-500 md:text-xl/relaxed">
                Empowering NGOs to manage patient queries, coordinate volunteers, and provide life-saving support instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/#support" className="inline-flex items-center justify-center rounded-full shadow-lg h-12 px-8 text-base bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors border-0">
                    Get Help Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/#support" className="inline-flex items-center justify-center rounded-full h-12 px-8 text-base border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-medium transition-colors">
                  Join as Volunteer
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100 blur-3xl opacity-50 pointer-events-none" />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Our Focus Areas</h2>
              <p className="mt-4 text-stone-500 max-w-2xl mx-auto">Providing comprehensive support across medical, emergency, and logistical dimensions.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-amber-50/50 border border-orange-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100">
                <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl mb-6">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Patient Assistance</h3>
                <p className="text-stone-500 leading-relaxed">Connecting patients with vital resources including medications, oxygen, and bed availability.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-amber-50/50 border border-orange-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100">
                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Volunteer Network</h3>
                <p className="text-stone-500 leading-relaxed">Building a scalable community of professionals and helpers to serve during crises.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-amber-50/50 border border-orange-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100 sm:col-span-2 lg:col-span-1">
                <div className="p-4 bg-rose-100 text-rose-600 rounded-2xl mb-6">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Emergency Hub</h3>
                <p className="text-stone-500 leading-relaxed">Immediate coordination for critical cases demanding urgent medical intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Form System */}
        <section id="support" className="py-24 relative overflow-hidden bg-amber-50/30">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Support Center</h2>
              <p className="mt-4 text-stone-500 max-w-2xl mx-auto">Submit your requirements or register to help. Our system intelligently captures and routes requests immediately.</p>
            </div>
            
            <FormContainer />
            
          </div>
          <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-orange-100 mix-blend-multiply blur-3xl opacity-70 animate-pulse" />
          <div className="absolute left-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-yellow-100 mix-blend-multiply blur-3xl opacity-70 animate-pulse delay-1000" />
        </section>
      </main>
    </>
  );
}
