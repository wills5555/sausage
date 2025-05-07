import { Check } from "lucide-react";

interface CheckItemProps {
  text: string;
}

export default function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
        <Check size={16} className="text-emerald-600" />
      </div>
      <span className="text-slate-700">{text}</span>
    </div>
  );
}