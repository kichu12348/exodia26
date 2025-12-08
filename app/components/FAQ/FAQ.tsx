"use client";
import { useState, useRef } from "react";
import styles from "./FAQ.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    id: 1,
    question: "Is it an offline or online event?",
    answer: "It is a 2-day offline event.",
  },
  {
    id: 2,
    question: "Will there be accommodation?",
    answer:
      "Accommodation will be provided if requested. The participant needs to pay the fees for it.",
  },
  {
    id: 3,
    question: "Do I need to bring a laptop?",
    answer:
      "You are requested to bring a laptop for a smooth experience of the workshops by working with the mentor live at the session.",
  },
  {
    id: 4,
    question: "Will meals be provided during the event?",
    answer:
      "Yes, meals and refreshments will be provided throughout the duration of the event, including lunch and coffee breaks.",
  },
  {
    id: 5,
    question: "Can I register on the day of the event?",
    answer: "There will be no spot registration for the event.",
  },
  {
    id: 6,
    question:
      "Will there be any social activities or entertainment during the event?",
    answer: "Yes, there will be cultural, networking, and dinner in the event.",
  },
  {
    id: 7,
    question:
      "Can I request a refund if I'm unable to attend after registering?",
    answer:
      "No, refunds will not be available for registrations after the registration process is complete.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Select elements using the class name from the CSS module
    const items = gsap.utils.toArray<HTMLElement>(`.${styles.faqItem}`);

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq" ref={containerRef}>
      <div className={styles.gridBackground}></div>
      <div className={styles.glowBackground}></div>
      
      <h2 className={styles.heading}>
        FREQUENTLY ASKED <span className={styles.highlight}>QUESTIONS</span>
      </h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.question}>
              {faq.question}
              <span className={styles.icon}>
                {activeIndex === index ? <FaChevronUp/> : <FaChevronDown />}
              </span>
            </div>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;