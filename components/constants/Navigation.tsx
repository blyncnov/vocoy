import React, {useState} from 'react';

import {FaTimes} from 'react-icons/fa';
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
              <h1>TechWire</h1>
            </div>
            <div className="navbar__left--items">
              <NavigatorSide open={isOpen}>
                <li>Technology</li>
                <li>Gadget</li>
                <li>Software</li>
                <li>Apps</li>
                <li>Games</li>
                <li>Podcasts</li>
              </NavigatorSide>
            </div>
          </NavigationLeft>
          <NavigationRight >
            <ul>
              <li>Subscribe</li>
              <li>Sign In</li>
            </ul>
          </NavigationRight>

          <Mobile onClick={handleClick} style={{ cursor: "pointer" }}>
            {!isOpen ?
              <RiBarChartHorizontalLine style={{ fontSize: "1.5em", cursor: "pointer", color: "black" }} />
              : <FaTimes style={{ fontSize: "1.5em", cursor: "pointer", color: "white"  }} />}
          </Mobile>
        </NavigationWrapperMaximum>
        </NavigationWrapper>
    </>
  )
}

export default Navigation
