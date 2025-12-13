// src/pages/ContactUs.jsx (নতুন ফাইল তৈরি করুন)

import React from 'react';
// Path ঠিক করুন: আপনার contactData.js ফাইলটি যেখানে আছে, সেই অনুযায়ী path দিন।
import { CONTACT_INFO, FOOTER_INFO } from '../constants/contactData'; 
import { Link } from 'react-router-dom';

// Simple styling component to match the main content area look
const ContactCard = ({ icon: Icon, text, link, title }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact-card">
        <div className="contact-card-icon-container">
            <Icon size={32} />
        </div>
        <div className="contact-card-info">
            <h3 className="contact-card-title">{title}</h3>
            <p className="contact-card-text">{text}</p>
        </div>
    </a>
);

export default function ContactUs() {
    return (
        <div className="contact-us-page">
            <h1 className="page-main-title">Contact & Support</h1>
            <p className="page-subtitle">We'd love to hear from you. Get in touch via the channels below.</p>
            
            <div className="contact-cards-container">
                {CONTACT_INFO.map((item, index) => (
                    <ContactCard 
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        link={item.link}
                        title={
                            item.link.includes('facebook') ? 'Facebook Page' :
                            item.link.includes('github') ? 'GitHub Profile' :
                            item.link.includes('mailto') ? 'Send Email' :
                            item.link.includes('t.me') ? 'Telegram Channel' :
                            'Contact Link'
                        }
                    />
                ))}
            </div>

            <div className="footer-note">
                <p>For technical support and business inquiries, please use the email link above.</p>
                <p>{FOOTER_INFO.copyright} | {FOOTER_INFO.version}</p>
            </div>
        </div>
    );
}
