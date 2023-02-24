import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "205px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "17px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card7 = ({ type }) => {
  return (
    <Link to="/video7/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://th.anngle.org/wp-content/uploads/2022/04/23648835_s.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="data:image/jpeg;base64,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"
          />
          <Texts>
            <Title>Test 7</Title>
            <ChannelName>SITTHIKORN</ChannelName>
            <Info>8 views • 1 minute ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card7;