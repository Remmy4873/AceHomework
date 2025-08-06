import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './EssayWriting';

const Services = () => {
  const { serviceId } = useParams();
  const location = useLocation();

  // Determine if we're showing the generic services page or a specific service
  if (!serviceId) {
    return (
      <div className="services-page">
        <h1>Our Academic Services</h1>
        <p>Browse our wide range of academic support services</p>
        {/* Add your services grid or list here */}
      </div>
    );
  }

  // Handle specific service pages
  const serviceName = serviceId.replace(/-/g, ' ');
  return (
    <div className="service-page">
      <h1>{serviceName}</h1>
      <p>Content for {serviceName} will be displayed here</p>
    </div>
  );
};

export default Services;