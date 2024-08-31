"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import TitleH1 from "@/components/Title/title";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  return (
    <div>
      <Header />
      <TitleH1 title="Análise" /> 
      <Footer />
    </div>
  );
}
