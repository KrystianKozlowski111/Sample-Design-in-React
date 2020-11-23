import React from 'react';
import {
  TextContainer,
  SocialMenu,
  Link,
  HeadContainer,
  Menu,
  MainContainer,
  ImageContainer,
  CarouselContainer,
  App1Container,
  PlayButton,
  ButtonL,
  ButtonR,
} from './Services.style';
import {
  Header,
  HeaderC,
  WorkHeader,
  AppContainer,
} from '../../assets/Global.style.js';
import Carousel, {
  arrowsPlugin,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '../../assets/styles/style.css';
import playbutton from '../../assets/images/playbutton.svg';
import Carousel1 from '../../assets/images/Carousel1.svg';
import Carousel2 from '../../assets/images/Carousel2.svg';
import LeftButton from '../../assets/images/LeftButton.svg';
import RightButton from '../../assets/images/RightButton.svg';
const Services = () => {
  return (
    <>
      <HeaderC>
        <WorkHeader>— services</WorkHeader>
      </HeaderC>
      <AppContainer>
        <HeadContainer>
          <TextContainer>
            <Header>
              We love work hard and explore new things that’s why we cover lot
              of things. Check our service list and view details
            </Header>
          </TextContainer>
          <Menu>
            <SocialMenu>
              <Link href="#">Multimedia</Link>
              <Link href="#">Interactive design</Link>
              <Link href="#">Packaging</Link>
              <Link href="#">Branding</Link>
            </SocialMenu>
            <SocialMenu>
              <Link href="#">Creative Strategy</Link>
              <Link href="#">UI/UX</Link>
              <Link href="#">Coding</Link>
            </SocialMenu>
          </Menu>
        </HeadContainer>
      </AppContainer>
      <App1Container>
        <CarouselContainer>
          <Carousel
            plugins={[
              'infinite',
              {
                resolve: slidesToShowPlugin,

                options: {
                  numberOfSlides: 1.6,
                },
              },
              {
                resolve: arrowsPlugin,
                options: {
                  numberOfSlides: 1.6,
                  arrowLeft: (
                    <ButtonL>
                      {' '}
                      <img
                        src={LeftButton}
                        className="App-LeftButton"
                        alt="LeftButton"
                      />
                    </ButtonL>
                  ),
                  arrowRight: (
                    <ButtonR>
                      {' '}
                      <img
                        src={RightButton}
                        className="App-RightButton"
                        alt="RightButton"
                      />
                    </ButtonR>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
            breakpoints={{
              900: {
                plugins: [
                  'infinite',
                  {
                    resolve: arrowsPlugin,
                    options: {
                      numberOfSlides: 1,
                      arrowLeft: (
                        <ButtonL>
                          {' '}
                          <img
                            src={LeftButton}
                            className="App-LeftButton"
                            alt="LeftButton"
                          />
                        </ButtonL>
                      ),
                      arrowRight: (
                        <ButtonR>
                          {' '}
                          <img
                            src={RightButton}
                            className="App-RightButton"
                            alt="RightButton"
                          />
                        </ButtonR>
                      ),
                      addArrowClickHandler: true,
                    },
                  },
                ],
              },
            }}
          >
            <ImageContainer>
              <PlayButton>
                {' '}
                <img
                  src={playbutton}
                  className="App-playbutton"
                  alt="playbutton"
                />
              </PlayButton>
              <img src={Carousel1} />
            </ImageContainer>
            <ImageContainer>
              <img src={Carousel2} />
            </ImageContainer>
          </Carousel>
        </CarouselContainer>
      </App1Container>
    </>
  );
};

export default Services;
