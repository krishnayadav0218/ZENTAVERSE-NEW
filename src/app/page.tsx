"use client";

import React, { useEffect, useState } from "react";
import { BrandConfig, defaultBrandConfig } from "@/data/siteData";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import WhyMeSection from "@/components/WhyMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BrandCustomizerModal from "@/components/BrandCustomizerModal";

const STORAGE_KEY = "nexus_3d_brand_config_v1";

export default function HomePage() {
  const [brand, setBrand] = useState<BrandConfig>(defaultBrandConfig);
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBrand({ ...defaultBrandConfig, ...JSON.parse(saved) });
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleSaveBrand = (updated: BrandConfig) => {
    setBrand(updated);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* Persistent Futuristic Ambient Background & Grid */}
      <AmbientBackground />

      {/* 1. Floating Glassmorphism Navigation Bar */}
      <Navbar
        brand={brand}
        onOpenBrandModal={() => setBrandModalOpen(true)}
      />

      {/* Main Content Flow:
          3D Hero → Stats → About → Services → Projects → Tech Stack → Work Process → Why Me → Contact */}
      <main className="relative z-10">
        {/* 2. 3D Hero Section */}
        <HeroSection brand={brand} />

        {/* 3. Stats Section */}
        <StatsSection />

        {/* 4. About Section */}
        <AboutSection brand={brand} />

        {/* 5. Services Section */}
        <ServicesSection />

        {/* 6. Projects Section */}
        <ProjectsSection />

        {/* 7. Tech Stack Section */}
        <TechStackSection />

        {/* 8. Work Process & Experience Timeline */}
        <WorkProcessSection />

        {/* 9. Why Work With Me Section */}
        <WhyMeSection />

        {/* 10. Contact Section with 3D Holographic QR Code */}
        <ContactSection brand={brand} />
      </main>

      {/* 11. Futuristic Footer */}
      <Footer
        brand={brand}
        onOpenBrandModal={() => setBrandModalOpen(true)}
      />

      {/* Interactive Brand Name Customizer Modal */}
      <BrandCustomizerModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        brand={brand}
        onSaveBrand={handleSaveBrand}
      />
    </div>
  );
}
