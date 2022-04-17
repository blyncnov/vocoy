import React, { useState } from 'react';
import Link from "next/link"

import {FaTimes, FaBlog} from 'react-icons/fa';
import {RiBarChartHorizontalLine} from 'react-icons/ri';

import {
  NavigationWrapper,
  NavigationWrapperMaximum,
  NavigationLeft, NavigationRight,
  Mobile, NavigatorSide,
} from "../../styles/home/Navigation"

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => { 
    setIsOpen(!isOpen);
  }

  return (
    <>
      <NavigationWrapper>
        <NavigationWrapperMaximum>
          <NavigationLeft >
            <div className="navbar__left--logo">
              <h1 style={{ color: "#6534E9" }}>
                <FaBlog style={{ fontSize: "1.5em" }} />
                <span>Vocoy</span>
                </h1>
            </div>
            <div className="navbar__left--items">
              <NavigatorSide open={isOpen}>
                <Link href="/">
                  <a>
                    <li>Technology</li>
                </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Gadget</li>
                </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Software</li>
                </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Apps</li>
                </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Games</li>
                </a>
                </Link>
                <Link href="/">
                  <a>
                    <li>Podcasts</li>
                </a>
                </Link>
              </NavigatorSide>
            </div>
          </NavigationLeft>
          <NavigationRight >
            <ul>
                <Link href="/">
                  <a>
                    <li>Subscribe</li>
                </a>
              </Link>
                <Link href="/">
                  <a>
                    <li>Sign In</li>
                </a>
                </Link>
            </ul>
          </NavigationRight>

          <Mobile onClick={handleClick} style={{ cursor: "pointer" }}>
            {!isOpen ?
              <RiBarChartHorizontalLine style={{ fontSize: "1.7em", cursor: "pointer", color: "#6533E9" }} />
              : <FaTimes style={{ fontSize: "1.7em", cursor: "pointer", color: "white"  }} />}
          </Mobile>
        </NavigationWrapperMaximum>
        </NavigationWrapper>
    </>
  )
}

export default Navigation
