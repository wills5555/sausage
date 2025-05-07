import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Company Details",
      description: "Provide your company registration ID and basic information through our secure platform."
    },
    {
      number: "02",
      title: "Instant Verification",
      description: "Our system connects with official databases to verify your company's registration status in real-time."
    },
    {
      number: "03",
      title: "Comprehensive Report",
      description: "Receive a detailed report about your company's compliance status and registration details."
    }
  ];

  return (
    <section className="section bg-slate-50 p-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mt-4 shadow-xl">
            <Image
              src="/01_slider.png"
              alt="How LegalRegScan works"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl text-gray-800 md:text-4xl font-bold mb-6">How We Work</h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-600 font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}