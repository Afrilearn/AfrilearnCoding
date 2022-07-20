import React from 'react'
import FaqCard from './FaqCard';
import faqData from './faqData';
import './faq.css';

const FAQ = () => {
  return (
    <div className="faq-main-wrapper">
        <div className="faq-main-header">
            <h1>Frequently Asked Questions</h1>
        </div>
            <FaqCard faqData={faqData} />
    </div>
  )
}

export default FAQ