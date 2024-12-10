"use client";
import React from "react";
import Image from "next/image";
import pillars from "../pillars/Home.module.scss";

const HomeSection: React.FC = () => 
{
  return(
    <div className={pillars.home}>
      <div className={pillars.container}>
        <div className={pillars.imageColumns}>
          {/* first column */}
          <div className={pillars.column}>
            <div className={pillars.loop}>
              <Image src="/cards/firstCol1.jpeg" alt="img1f" width={200} height={200} />
              <Image src="/cards/firstCol2.jpeg" alt="img2f" width={200} height={200} />
              <Image src="/cards/firstCol3.jpeg" alt="img3f" width={200} height={200} />
              <Image src="/cards/firstCol4.jpeg" alt="img4f" width={200} height={200} />
            </div>
          </div>
          {/* second column */}
          <div className={pillars.column}>
            <div className={`${pillars.loop} ${pillars.reverse}`}>
              <Image src="/cards/secondCol1.jpeg" alt="img1s" width={200} height={200} />
              <Image src="/cards/secondCol2.jpeg" alt="img2s" width={200} height={200} />
              <Image src="/cards/secondCol3.jpeg" alt="img3s" width={200} height={200} />
              <Image src="/cards/secondCol4.jpeg" alt="img4s" width={200} height={200} />
            </div>
          </div>
        </div>

        {/* heading and subheading */}
        <div className={pillars.text}>
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>

        {/* search */}
        <div className={pillars.searchBar}>
          {/* condition */}
          <div className={pillars.searchField}>
            <Image src="/search.svg" alt="searchic" width={24} height={24} />
            <input type="text" placeholder="Condition, procedure, specialty..." />
          </div>
          {/* location */}
          <div className={pillars.searchField}>
            <Image src="/location.svg" alt="locationic" width={24} height={24} />
            <input type="text" placeholder="City, state, or zipcode" />
          </div>
          {/* insurance */}
          <div className={pillars.searchField}>
            <Image src="/insuranceCarrier.svg" alt="insuranceic" width={24} height={24} />
            <input type="text" placeholder="Insurance carrier" />
          </div>
          {/* find now */}
          <button className={pillars.searchButton}>
            <Image src="/searchW.svg" alt="searchwic" width={24} height={24} />
            Find now
          </button>
        </div>
      </div>

      <div className={pillars.bottomLine}></div>
    </div>
  );
};

export default HomeSection;
