// src/components/CompanyList/CompanyList.tsx

import { FaApple, FaMicrosoft, FaAmazon, FaGoogle } from "react-icons/fa";
import Link from "next/link";

const companies = [
  {
    name: "Apple",
    icon: <FaApple className="text-3xl text-gray-700" />,
    description:
      "Uma das maiores empresas de tecnologia do mundo, conhecida por seus produtos inovadores como o iPhone e o MacBook.",
    slug: "apple",
  },
  {
    name: "Microsoft",
    icon: <FaMicrosoft className="text-3xl text-gray-700" />,
    description:
      "Gigante do software e hardware, conhecida por seu sistema operacional Windows e a suíte Office.",
    slug: "microsoft",
  },
  {
    name: "Amazon",
    icon: <FaAmazon className="text-3xl text-gray-700" />,
    description:
      "Líder em e-commerce e serviços de computação em nuvem, oferecendo uma vasta gama de produtos e serviços.",
    slug: "amazon",
  },
  {
    name: "Google",
    icon: <FaGoogle className="text-3xl text-gray-700" />,
    description:
      "Conhecida pelo seu motor de busca e uma ampla gama de serviços online, além de seus produtos como o Android e o Google Cloud.",
    slug: "google",
  },
];

const CompanyList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Empresas no Dashboard</h2>
      <div className="space-y-4">
        {companies.map((company) => (
          <Link key={company.name} href={`/companies/${company.slug}`} passHref>
            <div className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
              {company.icon}
              <div>
                <h3 className="text-xl font-semibold">{company.name}</h3>
                <p className="text-gray-600">{company.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
