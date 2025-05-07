import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16 md:py-24 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About LegalRegScan</h1>
              <p className="text-xl text-slate-700 mb-6">
                At LegalRegScan, we are redefining the way businesses access and verify critical company information. With a global reach and a commitment to accuracy, we provide cutting-edge tools that empower businesses, legal teams, and compliance professionals to work smarter, faster, and more confidently.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/02_portfolio.jpg"
                alt="LegalRegScan team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-slate-700">
                To provide businesses with accurate, timely, and accessible company information that enables informed decision-making and ensures regulatory compliance.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-slate-700">
                To become the global standard for business verification and compliance, making regulatory adherence seamless and straightforward for companies of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white py-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700 pt-8">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make LegalRegScan possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="overflow-hidden w-48 h-48 mx-auto mb-4">
                <Image
                  src="/03_portfolio.jpg"
                  alt="Team member"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-1">Jane Smith</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-slate-600">
                With over 15 years of experience in legal compliance and business registration.
              </p>
            </div>
            <div className="text-center">
              <div className="overflow-hidden w-48 h-48 mx-auto mb-4">
                <Image
                  src="/03_slider.png"
                  alt="Team member"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-600 font-bold mb-1">Michael Johnson</h3>
              <p className="text-blue-600 mb-2">CTO</p>
              <p className="text-slate-600">
                Technology expert specializing in secure data systems and verification technology.
              </p>
            </div>
            <div className="text-center">
              <div className="overflow-hidden w-48 h-48 mx-auto mb-4">
                <Image
                  src="/07_portfolio.jpg"
                  alt="Team member"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-600">Sarah Chen</h3>
              <p className="text-blue-600 mb-2">Head of Compliance</p>
              <p className="text-slate-600">
                Former regulatory advisor with extensive knowledge of international business laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-blue-600 text-white py-6 px-4">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">Ready to Ensure Your Business Compliance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust LegalRegScan for their compliance and verification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button variant="secondary">Get Started</Button>
            <Button variant="outline" className="bg-white hover:bg-blue-50">Contact Sales</Button>
          </div>
        </div>
      </section>
    </>
  );
}