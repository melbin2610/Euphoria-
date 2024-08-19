import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <MenuContainer>
            <Menu>
              <MenuItem className="item1">
                <MenuList>
                  <MenuTitle>Need Help</MenuTitle>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Contact Us</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Track Order</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Returns & Refunds</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">FAQ's</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Career</MenuLink>
                </MenuList>
              </MenuItem>
              <MenuItem className="item2">
                <MenuList>
                  <MenuTitle>Company</MenuTitle>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">About Us</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">euphoria Blog</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">euphoriastan</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Collaboration</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Media</MenuLink>
                </MenuList>
              </MenuItem>
              <MenuItem className="item3">
                <MenuList>
                  <MenuTitle>More Info</MenuTitle>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Terms and Conditions</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Privacy Policy</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Shipping Policy</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Sitemap</MenuLink>
                </MenuList>
              </MenuItem>
              <MenuItem className="item4">
                <MenuList>
                  <MenuTitle>Location</MenuTitle>
                </MenuList>
                <MenuList>
                  <MenuLink href="mailto:support@euphoria.in">support@euphoria.in</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">Eklingpura Chouraha, Ahmedabad Main Road</MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</MenuLink>
                </MenuList>
              </MenuItem>
            </Menu>
          </MenuContainer>
          <MediaSection>
            <MediaWrapper>
              <SocialMediaIconContainer>
                <Icons>
                  <MediaLinks>
                    <SocialMediaIcon>
                      <Image
                        src={require("../../assets/images/facebook.svg").default}
                        alt="facebook"
                      />
                    </SocialMediaIcon>
                  </MediaLinks>
                  <MediaLinks>
                    <SocialMediaIcon>
                      <Image
                        src={require("../../assets/images/instagram.svg").default}
                        alt="instagram"
                      />
                    </SocialMediaIcon>
                  </MediaLinks>
                  <MediaLinks>
                    <SocialMediaIcon>
                      <Image
                        src={require("../../assets/images/twitter.svg").default}
                        alt="twitter"
                      />
                    </SocialMediaIcon>
                  </MediaLinks>
                  <MediaLinks>
                    <SocialMediaIcon>
                      <Image
                        src={require("../../assets/images/linkedin.svg").default}
                        alt="linkedin"
                      />
                    </SocialMediaIcon>
                  </MediaLinks>
                </Icons>
              </SocialMediaIconContainer>
              <AppContainer>
                <Title>Download The App </Title>
                <AvalableApp>
                  <AppIcon>
                    <AppImage
                      src={require("../../assets/images/playstore.svg").default}
                      alt="google play"
                    />
                  </AppIcon>
                  <TextContainer>
                    <P>android app on</P>
                    <H6
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "#ffffff",
                      }}
                    >
                      Google Play
                    </H6>
                  </TextContainer>
                  <AppIcon>
                    <AppImage
                      src={require("../../assets/images/phone.svg").default}
                      alt="app store"
                    />
                  </AppIcon>
                  <TextContainer>
                    <P>Available on the</P>
                    <H6>App Store</H6>
                  </TextContainer>
                </AvalableApp>
              </AppContainer>
            </MediaWrapper>
          </MediaSection>
          <CategorySection>
            <CategoryWrapper>
              <CategoryTitle>Popular Categories</CategoryTitle>
              <OptiomButton>
                <OptionIcon>
                  <Arrow
                    src={require("../../assets/images/arrow-down.svg").default}
                    alt="categories"
                  />
                </OptionIcon>
              </OptiomButton>
            </CategoryWrapper>
          </CategorySection>
          <BottomWrapper>
            <Info>
              Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </Info>
          </BottomWrapper>
        </Wrapper>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: #3c4242;
  gap: 0px;
  opacity: 1;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
`;
const Wrapper = styled.div``;
const MenuContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1280px;
`;
const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
const MenuItem = styled.ul`
  margin-top: 0;
  padding: 0;
  list-style-type: none;
  color: #f6f6f6;
`;
const MenuList = styled.li``;
const MenuTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 61.99px;
`;
const MenuLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  line-height: 39.04px;
  text-decoration: none;
  color: #f6f6f6;
`;
const MediaSection = styled.div`
  border-bottom: 1px solid #bebcbd;
`;
const MediaWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;
const SocialMediaIconContainer = styled.div`
  display: flex;
`;
const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;
const MediaLinks = styled.div``;
const SocialMediaIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 10px;
  background: #f6f6f6;
  &:hover {
    background: #cccccc;
  }
`;
const Image = styled.img``;
const AppContainer = styled.div``;
const AvalableApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Title = styled.h2`
  font-size: 28.58px;
  font-weight: 700;
  color: #f6f6f6;
`;
const AppIcon = styled.div``;
const AppImage = styled.img`
  width: 100%;
  display: block;
`;
const TextContainer = styled.div``;
const P = styled.p`
  color: #ffffff;
  margin: 0px;
  font-size: 10px;
  font-weight: 400;
`;
const H6 = styled.h6`
  color: #ffffff;
  margin: 0px;
  font-size: 18px;
  font-weight: 400;
`;
const CategorySection = styled.div`
  border-bottom: 1px solid #bebcbd;
`;

const CategoryWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CategoryTitle = styled.h2`
  font-size: 28.58px;
  font-weight: 700;
  color: #f6f6f6;
`;
const OptiomButton = styled.button`
  border: none;
  background: none;
`;
const OptionIcon = styled.span``;
const Arrow = styled.img``;
const BottomWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1280px;
`;
const Info = styled.p`
  padding-top: 60px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

export default Footer;
