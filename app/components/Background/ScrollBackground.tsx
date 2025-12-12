"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollBackground.module.css";

export default function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        scrollPercent.toString()
      );

      // Additional values for more complex animations
      document.documentElement.style.setProperty(
        "--scroll-y",
        (scrollPercent * 100).toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Accent glow orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>

      {/* Grid lines */}
      <div className={styles.gridOverlay}></div>

      {/* Noise texture */}
      <div className={styles.noise}></div>
    </div>
  );
}
