"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import pillars from "../pillars/Pillars.module.scss";

const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Nutrition");
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  // six pillars
  const cards = [
    {
      id: 1,
      title: "Nutrition",
      subtitle:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      image: "/Sixpillars/nutrition.svg",
      badge: { icon: "/Sixpillars/icons/nutritionic.svg", bold: "121/80", text: "mmHg" },
    },
    {
      id: 2,
      title: "Physical activity",
      subtitle:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      image: "/Sixpillars/physicalActivity.svg",
      badge: { icon: "/Sixpillars/icons/activityic.svg", bold: "32", text: "minutes" },
    },
    {
      id: 3,
      title: "Restorative sleep",
      subtitle:
        "Consistent, quality sleep is essential for cognitive function and physical health.",
      image: "/Sixpillars/restorativeSleep.svg",
      badge: { icon: "/Sixpillars/icons/sleepic.svg", bold: "8", text: "hours" },
    },
    {
      id: 4,
      title: "Stress management",
      subtitle:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      image: "/Sixpillars/socialConnection.svg",
      badge: { icon: "/Sixpillars/icons/stressic.svg", bold: "60", text: "bpm" },
    },
    {
      id: 5,
      title: "Social connection",
      subtitle:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      image: "/Sixpillars/LS_Social.svg",
      badge: { icon: "/Sixpillars/icons/socialic.svg", bold: "Feeling", text: "better" },
    },
    {
      id: 6,
      title: "Substance abuse",
      subtitle:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      image: "/Sixpillars/substanceAbuse.svg",
      badge: { icon: "/Sixpillars/icons/substanceic.svg", bold: "62", text: "days" },
    },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const tabIndex = tabs.indexOf(tab);
    if (cardContainerRef.current) {
      const cardWidth = 450; 
      cardContainerRef.current.scrollTo({
        left: cardWidth * tabIndex,
        behavior: "smooth",
      });
    }
  };

  // scroll left
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -450,
        behavior: "smooth",
      });
    }
  };

  // scroll right
  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={pillars.pillarsHeader}>
      {/* header */}
      <div className={pillars.header}>
        <h2>HOW IT WORKS</h2>
        <p>
          <span>Lifestyle as medicine:</span> The six pillars
        </p>

        {/* arrows */}
        <div className={pillars.navigation}>
          <button className={pillars.navButton} onClick={scrollLeft}>
            <Image src="/leftArrow.svg" alt="leftarrow" width={32} height={32} />
          </button>
          <button className={pillars.navButton} onClick={scrollRight}>
            <Image src="/rightArrow.svg" alt="rightarrow" width={32} height={32} />
          </button>
        </div>
      </div>

      {/* tabs */}
      <div className={pillars.tabsSection}>
        <div className={pillars.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? pillars.activeTab : ""}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* cards */}
      <div className={pillars.cardsContainer} ref={cardContainerRef}>
        {cards.map((card) => (
          <div key={card.id} className={pillars.card}>
            <div className={pillars.cardImage}>
              <Image src={card.image} alt={card.title} width={300} height={200} />
              <div className={pillars.badge}>
                <Image src={pillars.badge.icon} alt="badgeic" width={16} height={16} />
                <span className={pillars.badgebold}>{pillars.badge.bold}</span>
                <span>{card.badge.text}</span>
              </div>
            </div>
            <div className={pillars.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
