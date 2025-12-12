"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "../Modal/Modal";
import styles from "./About.module.css";

interface ForumData {
  id: number;
  name: string;
  content: string;
  logo: string;
}

const forums: ForumData[] = [
  {
    id: 1,
    name: "IEDC BOOTCAMP CEC",
    content:
      "IEDC BOOTCAMP CEC is the Innovation and Entrepreneurship Development Cell of College of Engineering Chengannur, functioning under Kerala Startup Mission. It serves as a dynamic platform where student-driven innovation, technology, and creativity converge.\n\nThrough hands-on sessions, mentorship, teamwork, and practical challenges, the Bootcamp helps students develop problem-solving skills, leadership, and an entrepreneurial mindset. It encourages experimentation, collaboration, and learning by doing—empowering students to turn imagination into innovation and take the first step toward becoming future changemakers.",
    logo: "/logos/iedcbootcamp.png",
  },
  {
    id: 2,
    name: "FOCES CEC",
    content:
      "Forum of Computer Engineering Students – FOCES is the official forum of the Computer Science and Engineering Department of CEC. It functions as a dynamic platform where students can share ideas, collaborate on projects, explore emerging technologies, and develop their technical and creative potential.\n\nFOCES CEC continuously works to build a strong tech-driven community through workshops, tech talks, events, competitions, and student-led initiatives. It promotes learning beyond the classroom, encourages innovation, and creates opportunities for students to grow, experiment, and contribute to impactful activities.",
    logo: "/logos/foces.png",
  },
  {
    id: 3,
    name: "MULEARN CHN",
    content:
      "µLearn CHN is a vibrant, peer-driven community powered by GTech, dedicated to learning through mutual growth. Built on the philosophy of micro-learning and consistency, it offers a space where students can discover their interests, explore technology, engage in discussions, and learn skills that prepare them for real-world opportunities. We bring together curious minds for the exploration of new ideas, upskilling, and collaboration on impactful projects.\n\nRooted in micro-learning, challenges, mentorship, and hands-on experiences, we help students grow consistently at a personal and professional level. At µLearn CHN, curiosity becomes capability, and ideas become action.",
    logo: "/logos/mulearn.png",
  },
];

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedForum, setSelectedForum] = useState<ForumData | null>(null);

  const handleForumClick = (id: number) => {
    const forum = forums[id];
    if (forum) {
      setSelectedForum(forum);
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useGSAP(
    () => {
      // Header animation - slide and border grow
      gsap.fromTo(
        headingRef.current,
        { 
          x: -80,
          opacity: 0,
          scale: 0.95
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
          x: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        }
      );

      // Content animation - slide from right
      gsap.fromTo(
        contentRef.current,
        { 
          x: 80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );

      // Parallax on header
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        y: -30,
        ease: "none",
      });

      // Stats animation - slide up with stagger
      gsap.fromTo(
        statsRef.current?.querySelectorAll(".statItem") || [],
        { 
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.section} ref={sectionRef} id="about">
      <div className={styles.topGradient}></div>
      <div className={styles.container}>
        <div className={styles.header} ref={headingRef}>
          <h2 className={styles.title}>
            WHAT IS <br />
            <span className={styles.highlight}>EXODIA?</span>
          </h2>
        </div>

        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.description}>
            <p>
              Exodia 3.0 brings together innovators from across Kerala for a
              hands-on technical meet on February 7th and 8th at the College of
              Engineering Chengannur.
            </p>
            <p>
              Organised by{" "}
              <span
                className={styles.link}
                onClick={() => handleForumClick(0)}
              >
                IEDC BOOTCAMP CEC
              </span>
              ,{" "}
              <span
                className={styles.link}
                onClick={() => handleForumClick(1)}
              >
                FOCES CEC
              </span>
              , and{" "}
              <span
                className={styles.link}
                onClick={() => handleForumClick(2)}
              >
                μLearn CHN
              </span>
              , the event is designed to provide participants with practical
              exposure through structured learning experiences and collaborative
              sessions.
            </p>
            <p>
              The event features hands-on workshops in Robotics, Data Science
              with Machine Learning, and Computer Vision, led by experienced
              mentors, with an emphasis on skill development, professional
              networking, and innovation.
            </p>
          </div>

          <div className={styles.stats} ref={statsRef}>
            <div className={`${styles.statItem} statItem`}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>STACKS</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`${styles.statItem} statItem`}>
              <span className={styles.statNumber}>180</span>
              <span className={styles.statLabel}>STUDENTS</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`${styles.statItem} statItem`}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>DAYS</span>
            </div>
          </div>
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {selectedForum && (
          <div className={styles.modalContent}>
            <img
              src={selectedForum.logo}
              alt={selectedForum.name}
              className={styles.modalLogo}
            />
            <h3 className={styles.modalHeading}>{selectedForum.name}</h3>
            <p className={styles.modalText}>
              {selectedForum.content.split("\n\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default About;
