"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pillars from "../pillars/Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={pillars.navbar}>
      <div className={pillars.container}>
        {/* emblem */}
        <div className={pillars.logo}>
          <Link href="/">
            <Image src="/emblem.svg" alt="logo" width={40} height={40} />
          </Link>
          <span>ProVital</span>
        </div>

        {/* hamburger menu */}
        <button
          className={pillars.hamburger}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={pillars.hamburgerIcon}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={pilars.hamburgerIcon}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav
          className={`${pillars.navLinks} ${
            isMobileMenuOpen ? pillars.navLinksMobile : ""
          }`}
        >
          <Link href="#">List your practice</Link>
          <span className={pillars.separator}>|</span>
          <Link href="#">For Employers</Link>
          <span className={pillars.separator}>|</span>
          <Link href="#">Courses</Link>
          <span className={pillars.separator}>|</span>
          <Link href="#">Books</Link>
          <span className={pillars.separator}>|</span>
          <Link href="#">Speakers</Link>
          <span className={pillars.separator}>|</span>
          <Link href="#">Doctors</Link>
          <span className={pillars.separator}>|</span>

          {/* dropdown */}
          <div
            className={pillars.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className={pillars.dropdownTrigger}>
              Login / Signup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className={pillars.dropdownIcon}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {isDropdownOpen && (
              <div className={pillars.dropdownContent}>
                {/* dropdown */}
                <div className={pillars.dropdownRow}>
                  <span>Doctor</span>
                  <div>
                    <Link href="#">Login</Link>
                    <span>|</span>
                    <Link href="#">Sign up</Link>
                  </div>
                </div>
                <hr />
                <div className={pillars.dropdownRow}>
                  <span>Patients</span>
                  <div>
                    <Link href="#">Login</Link>
                    <span>|</span>
                    <Link href="#">Sign up</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={pillars.sidebar}>
            <div className={pillars.dropdownContent}>
              <div className={pillars.dropdownRow}>
                <span>Doctor</span>
                <div>
                  <Link href="#">Login</Link>
                  <span>|</span>
                  <Link href="#">Sign up</Link>
                </div>
              </div>
              <hr />
              <div className={pillars.dropdownRow}>
                <span>Patients</span>
                <div>
                  <Link href="#">Login</Link>
                  <span>|</span>
                  <Link href="#">Sign up</Link>
                </div>
              </div>
            </div>

            <nav className={pillars.navLinksMobile}>
              <Link href="#">
                Doctors
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                List your practice
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                For Employers
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Courses
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Books
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
              <Link href="#">
                Speakers
                <Image alt="" src="rightArrow.svg" className={pillars.rightarrowIcon} width={30} height={25}/>
              </Link>
              <hr />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
