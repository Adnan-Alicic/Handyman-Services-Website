import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="welcome-wrap">
        <h2>Dobrodošao</h2>
      </div>
      <HomeBtnWrapper>
        <Link to="/login" style={{ display: "contents", background: "red" }}>
          <HomeBtn>Majstor</HomeBtn>
        </Link>

        <Link to="/login" style={{ display: "contents", width: "50%" }}>
          <HomeBtn>Klijent</HomeBtn>
        </Link>
      </HomeBtnWrapper>
    </>
  );
};

export default Home;

const HomeBtn = styled.button`
background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 4%;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 2%;
  margin-top:20%;
  margin-left:2%;
  
}




}
`;

const HomeBtnWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 50vh;
`;
