import Image from "next/image";
import CheckItem from "@/components/ui/CheckItem";
import SearchPage from "../search";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Check Your Company Registration <span className="text-blue-600">Securely</span>
            </h1>
            
            <p className="text-xl text-slate-700">
              Ensure your business is officially registered and compliant. Use our instant checker to validate your company&apos;s registration ID securely and quickly.
            </p>
            
            <SearchPage />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <CheckItem text="Instant Verification" />
              <CheckItem text="Accurate Records" />
              <CheckItem text="No Hidden Fees" />
              <CheckItem text="24/7 Secure Access" />
            </div>
          </div>
          
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/03_slider.png"
              alt="Business verification illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
