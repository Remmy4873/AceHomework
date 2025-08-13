import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css"; // Import styles

const WhatsAppBubble = () => {
  const whatsappNumber = "19123195285";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20your%20writing%20services!`,
      "_blank"
    );
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