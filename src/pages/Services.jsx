import React from 'react'
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "service";  // Set the title
  }, []);

  return (
    <div>
      services
    </div>
  )
}

export default Services
