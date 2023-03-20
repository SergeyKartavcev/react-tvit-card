import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
const myImage = require("../src/img/Boy.png");
const picture = require("../src/img/picture2-1.png");
const logo = require("../src/img/Vector.png");

const initialState = {
  isFollowing: JSON.parse(sessionStorage.getItem("isFollowing")) || false,
  followerCount: JSON.parse(sessionStorage.getItem("followerCount")) || 100500,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleFollow":
      return {
        ...state,
        isFollowing: !state.isFollowing,
        followerCount: state.followerCount === 100500 ? 100501 : 100500,
      };
    default:
      return state;
  }
}

export const UserCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFollowClick = () => {
    dispatch({ type: "toggleFollow" });
  };

  useEffect(() => {
    sessionStorage.setItem("isFollowing", state.isFollowing);
  }, [state.isFollowing]);

  useEffect(() => {
    sessionStorage.setItem("followerCount", state.followerCount);
  }, [state.followerCount]);

  return (
    <Card>
      <Wrapper>
        <Logo src={logo} />
        <Picture src={picture}></Picture>
        <Wrap>
          <Line />
          <ProfilePic src={myImage} alt="profile" />

          <UserInfo>
            <Title> 777 tweets</Title>
            <FollowerCount>
              Followers{" "}
              {state.followerCount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </FollowerCount>
            <FollowButton
              onClick={handleFollowClick}
              isFollowing={state.isFollowing}
            >
              {state.isFollowing ? "Following" : "Follow"}
            </FollowButton>
          </UserInfo>
        </Wrap>
      </Wrapper>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: auto;
  width: 380px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    #0000003b;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

const Wrapper = styled.div``;

const Logo = styled.img`

`

const Picture = styled.img`
  width: 308px;
  height: 168px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  z-index: 2;
`;
const Line = styled.div`
  width: 400px;
  height: 8px;
  background: #ebd8ff;
  position: absolute;
  top: 235px;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f;
  box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

const FollowerCount = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

const FollowButton = styled.button`
  background-color: ${({ isFollowing }) =>
  isFollowing ? "#5CD3A8" : "#EBD8FF"};
  width: 196px;
  height: 50px;
  color: #373737;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 36px;
`;
