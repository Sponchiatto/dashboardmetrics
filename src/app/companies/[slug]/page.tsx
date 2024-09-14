// src/app/companies/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { FaApple, FaMicrosoft, FaAmazon, FaGoogle } from "react-icons/fa";

interface Company {
  name: string;
  icon: JSX.Element;
  description: string;
  details: string;
}

const companyData: Record<string, Company> = {
  apple: {
    name: "Apple",
    icon: <FaApple className="text-5xl text-gray-700" />,
    description:
      "Uma das maiores empresas de tecnologia do mundo, conhecida por seus produtos inovadores como o iPhone e o MacBook.",
    details: "Detalhes adicionais sobre a Apple.",
  },
  microsoft: {
    name: "Microsoft",
    icon: <FaMicrosoft className="text-5xl text-gray-700" />,
    description:
      "Gigante do software e hardware, conhecida por seu sistema operacional Windows e a suíte Office.",
    details: "Detalhes adicionais sobre a Microsoft.",
  },
  amazon: {
    name: "Amazon",
    icon: <FaAmazon className="text-5xl text-gray-700" />,
    description:
      "Líder em e-commerce e serviços de computação em nuvem, oferecendo uma vasta gama de produtos e serviços.",
    details: "Detalhes adicionais sobre a Amazon.",
  },
  google: {
    name: "Google",
    icon: <FaGoogle className="text-5xl text-gray-700" />,
    description:
      "Conhecida pelo seu motor de busca e uma ampla gama de serviços online, além de seus produtos como o Android e o Google Cloud.",
    details: "Detalhes adicionais sobre o Google.",
  },
};

const CompanyDetail = () => {
  const { slug } = useParams();
  const company = companyData[slug as keyof typeof companyData];

  if (!company) {
    return <p>Empresa não encontrada.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          {company.icon}
          <div>
            <h1 className="text-4xl font-bold">{company.name}</h1>
            <p className="text-gray-600">{company.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Detalhes:</h2>
          <p className="text-gray-700 mt-2">{company.details}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
