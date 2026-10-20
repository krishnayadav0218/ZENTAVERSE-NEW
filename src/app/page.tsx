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
import WhatsAppButton from "@/components/WhatsAppButton";
import AppointmentBookingModal from "@/components/AppointmentBookingModal";

const STORAGE_KEY = "zyntaverse_brand_config_v2";

export default function HomePage() {
  const [brand, setBrand] = useState<BrandConfig>(defaultBrandConfig);
  const [brandModalOpen, setBrandModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Persistent Futuristic Ambient Background & Grid */}
      <AmbientBackground />

      {/* 1. Floating Glassmorphism Navigation Bar */}
      <Navbar
        brand={brand}
        onOpenBrandModal={() => setBrandModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Flow:
          3D Hero → Stats → About → Services → Projects → Tech Stack → Work Process → Why Choose Us → Contact */}
      <main className="relative z-10">
        {/* 2. 3D Hero Section */}
        <HeroSection brand={brand} onOpenBooking={handleOpenBooking} />

        {/* 3. Stats Section (Pamphlet metrics) */}
        <StatsSection />

        {/* 4. About Section */}
        <AboutSection brand={brand} />

        {/* 5. Services Section (12 Core + 24 Additional Services) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 6. Projects Section */}
        <ProjectsSection />

        {/* 7. Tech Stack Section */}
        <TechStackSection />

        {/* 8. Work Process & Timeline */}
        <WorkProcessSection />

        {/* 9. Why Choose Zyntaverse Section */}
        <WhyMeSection />

        {/* 10. Contact Section with 3D Holographic Scannable QR Key & Custom Inquiry Form */}
        <ContactSection brand={brand} onOpenBooking={handleOpenBooking} />
      </main>

      {/* 11. Futuristic Footer */}
      <Footer
        brand={brand}
        onOpenBrandModal={() => setBrandModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Interactive WhatsApp Chat Button */}
      <WhatsAppButton
        phoneNumber={brand.whatsapp || brand.phone}
        businessName={brand.name}
      />

      {/* Appointment & Strategy Call Booking Modal */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Brand Identity Customizer Modal */}
      <BrandCustomizerModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        brand={brand}
        onSaveBrand={handleSaveBrand}
      />
    </div>
  );
}
