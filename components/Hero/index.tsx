import React, { useState} from 'react'

import { HeaderWrapper } from "../../styles/home/Header"
import {HeroWrapperMaximum} from "../../styles/home/Hero"

interface iState {
  age: number,
  name: string,
  level: string
}

const Hero: React.FC = () => {
  let [state, setState] = useState()

  return (
    <HeaderWrapper>
      <HeroWrapperMaximum>
        {/* <ShowcasePost />
          <ShowcaseSideBar /> */}
        </HeroWrapperMaximum>
    </HeaderWrapper>
  )
}

export default Hero