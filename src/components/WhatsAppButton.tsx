"use client";

import React from "react";
import AIAssistantWidget from "@/components/AIAssistantWidget";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  businessName?: string;
  onOpenBooking?: () => void;
}

export default function WhatsAppButton(props: WhatsAppButtonProps) {
  return <AIAssistantWidget {...props} />;
}
