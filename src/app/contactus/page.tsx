import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="flex-1 py-20 bg-amber-50/20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Have questions about our initiatives or need help navigating our support requests? We are here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-stone-800">Reach Out Directly</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Email Us</h3>
                    <p className="text-stone-500">For general queries and partnerships</p>
                    <a href="mailto:support@sevalink.org" className="text-orange-600 hover:underline">support@sevalink.org</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Call Us</h3>
                    <p className="text-stone-500">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+1234567890" className="text-orange-600 hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Visit Us</h3>
                    <p className="text-stone-500">123 NGO Street, Support City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-orange-50 rounded-bl-full -z-10 opacity-50" />
            <h2 className="text-2xl font-semibold mb-6 text-stone-800">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
