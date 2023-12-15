// Accordion.js
import React, { useState, useEffect } from 'react';
import '../css/Jsondata.css';
import faqData from '../json files/faqData';


const Jsondata = () => {
  const [faqItems, setFaqItems] = useState([]);

useEffect(() => {
    
    setFaqItems(faqData.map((item) => ({ ...item, isOpen: false })));
  }, [faqData]);

  const toggleAccordion = (index) => {
    setFaqItems((prevData) => {
    const updatedFaqData = prevData.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    return updatedFaqData;
  });
    
  };

  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((faqItem, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleAccordion(index)}
          >
            {faqItem.question} {faqItem.isOpen ? '-' : '+'}
          </button>
          <div className={`accordion-content ${faqItem.isOpen ? 'open' : ''}`}>
            <p>{faqItem.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jsondata;