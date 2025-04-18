// components/InfoRow.tsx
import { Copy } from "lucide-react";
import { useState } from "react";

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
      <div className="flex flex-col text-sm">
        <span className="text-gray-300">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <button
        onClick={handleCopy}
        title="Copy"
        className="text-gray-300 hover:text-white"
      >
        {copied ? "✔️" : <Copy size={16} />}
      </button>
    </div>
  );
};

export default InfoRow;
