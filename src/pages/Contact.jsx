import React from 'react'
import { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    document.title = "Contact";  // Set the title
  }, []);

  return (
    <div>
      contact
    </div>
  )
}

export default Contact
