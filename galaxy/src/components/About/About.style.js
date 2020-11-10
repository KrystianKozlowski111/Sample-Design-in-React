import styled from 'styled-components';
export const AboutTextContainer = styled.section`
  display: flex;
  align-items: flex-start;

  flex-direction: column;

  max-width: 474px;
  padding-left: 126px;
`;
export const AboutContainer = styled.section`
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1110px;
`;
export const AboutHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 10px;
  margin: 0 auto;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -1px;
  text-align: left;
`;
export const AboutText = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  padding-top: 20px;
  font-weight: normal;
  margin: 0 auto;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
export const Placeholder = styled.div`
  position: relative;
`;
export const UserContainer = styled.section`
  margin-top: 51px;
  display: flex;
  justify-content: flex-start;
  max-width: 285px;
`;
export const User = styled.div`
  position: relative;
`;
export const UserTextContainer = styled.section`
  display: flex;
  padding-left: 31px;
  justify-content: flex-start;
  flex-direction: column;
`;
export const UserHeader = styled.h1`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  margin: 0 auto;
  line-height: 32px;
  color: #222222;
`;
export const UserText = styled.p`
  font-family: Fira Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  color: #222222;
  opacity: 0.7;
`;
