import React from 'react';
import {
  AboutContainer,
  AboutTextContainer,
  AboutHeader,
  AboutText,
  Placeholder,
  User,
  UserHeader,
  UserText,
  UserContainer,
  UserTextContainer,
} from './About.style';
import placeholderAbout from '../../assets/images/placeholderAbout.svg';
import eclipse from '../../assets/images/eclipse.png';
const About = () => {
  return (
    <AboutContainer>
      <Placeholder>
        {' '}
        <img
          src={placeholderAbout}
          className="App-placeholderAbout"
          alt="placeholderAbout"
        />
      </Placeholder>
      <AboutTextContainer>
        <AboutHeader>
          We solve digital problems with an outstanding creative flare
        </AboutHeader>
        <AboutText>
          The best time to view the moon, obviously, is at night when there are
          few clouds and the weather is accommodating for a long and lasting
          study.
        </AboutText>
        <AboutText>
          For most of us, the idea of astronomy is something we directly connect
          to “stargazing”, telescopes and seeing magnificent displays in the
          heavens.
        </AboutText>
        <UserContainer>
          <User>
            <img src={eclipse} className="App-eclipse" alt="eclipse" />
          </User>
          <UserTextContainer>
            <UserHeader>Denis Shepovalov</UserHeader>
            <UserText>Co-Founder & CEO</UserText>
          </UserTextContainer>
        </UserContainer>
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default About;