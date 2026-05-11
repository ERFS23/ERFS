/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrgencyStrip from "./components/UrgencyStrip";
import Divider from "./components/Divider";
import Offerings from "./components/Offerings";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Supporters from "./components/Supporters";
import DonationForm from "./components/DonationForm";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";
import BackToTopButton from "./components/BackToTopButton";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  useScrollReveal();
  const [selectedPlan, setSelectedPlan] = useState("2");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectPlan = (qty: string) => {
    setSelectedPlan(qty);
    const formContainer = document.getElementById("form-container");
    if (formContainer) {
      formContainer.classList.add("shadow-[0_0_0_2px_#c9963b]");
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        formContainer.classList.remove("shadow-[0_0_0_2px_#c9963b]");
      }, 2000);
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <main>
        <Hero />
        <UrgencyStrip />
        <Divider />
        <Offerings />
        <Divider />
        <Story />
        <Divider />
        <Testimonials />
        <Divider />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Team />
        <Divider />
        <Supporters />
        <Divider />
        <DonationForm selectedPlan={selectedPlan} onChangePlan={setSelectedPlan} />
        <Divider />
        <Faq />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActionButton />
      <BackToTopButton />
    </>
  );
}
