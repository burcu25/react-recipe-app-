import React from 'react'
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./style";
import woman from "../../assets/woman.png";


const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={woman} />
      <HeaderContainer>
        <h1>
          About Software Developer <br /><span>Burcu Korkmaz </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Burcu Korkmaz</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Java, Hibernate, SpringBoot, AWS Services.
        </h4>
        <h2>
          <a href="mailto:brckork@gmail.com">Send email</a> :
          brckork@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About