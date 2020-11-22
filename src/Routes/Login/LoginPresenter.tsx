import React from "react";
import { RouteComponentProps } from "react-router-dom";
import bgImage from "../../images/bg.png";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1``;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const FakeInput = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
`;

const Grey = styled.span`
  color: ${props => props.theme.greyColor};
  margin-left: 10px;
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${props => props.theme.greyColor};
  padding: 30px 20px;
`;

const SocialLink = styled.span`
  color: ${props => props.theme.blueColor};
  font-size: 20px;
`;

interface IProps extends RouteComponentProps<any> { }

const OutHomePresenter: React.SFC<IProps> = () => (
  <Container>
    <Header>
      <Logo>
        <Title>(N)Uber</Title>
      </Logo>
    </Header>
    <Footer>
      <PhoneLogin>
        <Subtitle>(N)Uber 로그인</Subtitle>
        <FakeInput>
          🇰🇷 +82 <Grey>핸드폰 번호를 입력해주세요.</Grey>
        </FakeInput>
      </PhoneLogin>
      <SocialLogin>
        <SocialLink>페이스북으로 로그인하기</SocialLink>
      </SocialLogin>
    </Footer>
  </Container>
);

export default OutHomePresenter;