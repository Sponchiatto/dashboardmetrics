import React from "react";

interface DescriptionProps {
  title: string;
  subtitle?: string;
  content: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  subtitle,
  content,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      {subtitle && <h2 className="text-xl text-gray-600 mb-4">{subtitle}</h2>}
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Description;
