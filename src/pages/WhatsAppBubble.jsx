import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

const WhatsAppBubble = () => {
  const whatsappNumber = "17144195200";
  const encodedMessage = encodeURIComponent("Hello, I'm interested in your writing services!");

  const openWhatsApp = () => {
    // Using the direct API link which is more reliable
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-container" onClick={openWhatsApp}>
      <div className="whatsapp-text">WhatsApp Us</div>
      <div className="whatsapp-bubble">
        <FaWhatsapp className="whatsapp-icon" />
      </div>
    </div>
  );
};

export default WhatsAppBubble;