"use client";

import React, { useState } from "react";
import { BrandConfig, defaultBrandConfig } from "@/data/siteData";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectCostEstimator from "@/components/ProjectCostEstimator";
import AIProjectAdvisor from "@/components/AIProjectAdvisor";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import WhyMeSection from "@/components/WhyMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AppointmentBookingModal from "@/components/AppointmentBookingModal";
import CompanyProfileModal from "@/components/CompanyProfileModal";
import BrandCustomizerModal from "@/components/BrandCustomizerModal";
import CustomCyberCursor from "@/components/CustomCyberCursor";
import AudioToggle from "@/components/AudioToggle";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function HomePage() {
  const [brand, setBrand] = useState<BrandConfig>(defaultBrandConfig);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [deckModalOpen, setDeckModalOpen] = useState(false);
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleOpenDeck = () => {
    setDeckModalOpen(true);
  };

  const handleOpenBrandModal = () => {
    setBrandModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-100">
      {/* Magnetic Futuristic Cyber Cursor (Smooth follower, desktop only) */}
      <CustomCyberCursor />

      {/* Persistent Futuristic Ambient Background & Grid */}
      <AmbientBackground />

      {/* 1. Floating Glassmorphism Navigation Bar */}
      <Navbar
        brand={brand}
        onOpenBooking={handleOpenBooking}
        onOpenBrandModal={handleOpenBrandModal}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 2. 3D Hero Section */}
        <HeroSection
          brand={brand}
          onOpenBooking={handleOpenBooking}
          onOpenDeck={handleOpenDeck}
        />

        {/* 3. Trusted Partners Infinite Marquee Strip */}
        <ClientMarquee />

        {/* 4. Stats Section (Pamphlet metrics) */}
        <StatsSection />

        {/* 5. About Section */}
        <AboutSection brand={brand} />

        {/* 6. Services Section (12 Core + 24 Additional Services) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Interactive Project Cost & Scope Estimator */}
        <ProjectCostEstimator onOpenBooking={handleOpenBooking} />

        {/* 8. AI Project Scope Generator & Tech Stack Blueprint Advisor */}
        <AIProjectAdvisor onOpenBooking={handleOpenBooking} />

        {/* 9. Projects & Case Studies (Tabbed Problem/Solution, Architecture & Measurable ROI) */}
        <ProjectsSection onOpenBooking={handleOpenBooking} />

        {/* 10. Tech Stack Ecosystem */}
        <TechStackSection />

        {/* 11. Work Process & Timeline */}
        <WorkProcessSection />

        {/* 12. Why Choose Zyntaverse Section */}
        <WhyMeSection />

        {/* 13. Client Reviews & Testimonials Carousel */}
        <TestimonialsSection />

        {/* 14. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 15. Contact Section with Fine 3D Holographic Scannable QR Key & Custom Inquiry Form */}
        <ContactSection brand={brand} onOpenBooking={handleOpenBooking} />
      </main>

      {/* 16. Futuristic Footer */}
      <Footer
        brand={brand}
        onOpenBooking={handleOpenBooking}
        onOpenDeck={handleOpenDeck}
        onOpenBrandModal={handleOpenBrandModal}
      />

      {/* Floating Interactive Sci-Fi Sound FX Toggle (Web Audio API) */}
      <AudioToggle />

      {/* Floating Interactive Zyntaverse AI Copilot & WhatsApp Assistant */}
      <WhatsAppButton
        phoneNumber={brand.whatsapp || brand.phone}
        businessName={brand.name}
        onOpenBooking={handleOpenBooking}
      />

      {/* Appointment & Strategy Call Booking Modal */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Company Profile & Capability Deck Modal */}
      <CompanyProfileModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
      />

      {/* Live Brand Customizer & White-Label Preview Modal */}
      <BrandCustomizerModal
        isOpen={brandModalOpen}
        onClose={() => setBrandModalOpen(false)}
        brand={brand}
        onSaveBrand={(updated) => setBrand(updated)}
      />

      {/* Desktop Exit Intent Modal (Free 15-Minute Blueprint Lead Magnet) */}
      <ExitIntentModal onOpenBooking={handleOpenBooking} />
    </div>
  );
}
