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
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import WhyMeSection from "@/components/WhyMeSection";
import ProjectCostEstimator from "@/components/ProjectCostEstimator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AppointmentBookingModal from "@/components/AppointmentBookingModal";
import CompanyProfileModal from "@/components/CompanyProfileModal";

export default function HomePage() {
  const [brand] = useState<BrandConfig>(defaultBrandConfig);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [deckModalOpen, setDeckModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleOpenDeck = () => {
    setDeckModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Persistent Futuristic Ambient Background & Grid */}
      <AmbientBackground />

      {/* 1. Floating Glassmorphism Navigation Bar */}
      <Navbar
        brand={brand}
        onOpenBooking={handleOpenBooking}
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

        {/* 8. Projects & Case Studies */}
        <ProjectsSection />

        {/* 9. Tech Stack Ecosystem */}
        <TechStackSection />

        {/* 10. Work Process & Timeline */}
        <WorkProcessSection />

        {/* 11. Why Choose Zyntaverse Section */}
        <WhyMeSection />

        {/* 12. Client Reviews & Testimonials Carousel */}
        <TestimonialsSection />

        {/* 13. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 14. Contact Section with Fine 3D Holographic Scannable QR Key & Custom Inquiry Form */}
        <ContactSection brand={brand} onOpenBooking={handleOpenBooking} />
      </main>

      {/* 15. Futuristic Footer */}
      <Footer
        brand={brand}
        onOpenBooking={handleOpenBooking}
        onOpenDeck={handleOpenDeck}
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

      {/* Company Profile & Capability Deck Modal */}
      <CompanyProfileModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
      />
    </div>
  );
}
