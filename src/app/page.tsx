"use client";

import Description from "@/components/Description/description";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Description
        title="Análise de Ações do Mercado Brasileiro"
        content="Este projeto tem por objetivo treinar minhas habilidades de programação. Ele consiste numa aplicação de análise de ações do mercado Brasileiro."
      />
      <Link
        href={"/dashboard"}
        className="mt-8 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors"
      >
        Ir para Dashboard
      </Link>
    </div>
  );
}
