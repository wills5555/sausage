import Card from "@/components/ui/Card";
import { CheckCircle, FileText, Activity } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="section bg-white pt-8 px-4">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive suite of business verification services helps companies stay compliant and operate with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Company ID Validation"
            description="Instantly validate your company registration ID with our trusted service. Ensure your business is properly registered and fully compliant with local regulations."
            link="#"
            icon={<CheckCircle size={36} />}
            className="hover:border-l-4 hover:border-blue-500"
          />
          
          <Card
            title="Detailed Compliance Reports"
            description="We provide in-depth compliance reports to help your company stay fully aligned with legal and regulatory standards across multiple jurisdictions."
            link="#"
            icon={<FileText size={36} />}
            className="hover:border-l-4 hover:border-blue-500"
          />
          
          <Card
            title="Business Status Checks"
            description="Instantly verify your business registration status with ease. Get real-time information about your company's standing with regulatory authorities."
            link="#"
            icon={<Activity size={36} />}
            className="hover:border-l-4 hover:border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}