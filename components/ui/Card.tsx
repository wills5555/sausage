import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Card({
  title,
  description,
  className = "",
  icon,
}: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg ${className}`}>
      
      <div className="p-6">
        {icon && <div className="mb-4 text-blue-600">{icon}</div>}
        
        <h3 className="text-xl text-gray-800 font-bold mb-2">{title}</h3>
        
        <p className="text-slate-600 mb-4">{description}</p>
      </div>
    </div>
  );
}
