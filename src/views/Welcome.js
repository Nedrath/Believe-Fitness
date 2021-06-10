import { css, cx } from "@emotion/css";
import welcomeTop from "../Assets/welcome-background-smaller.png";
import welcomeBottom from "../Assets/welcome-center-smaller.png";
import Button from "../components/Button";

const Welcome = () => {
  const style_Wrapper = css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    z-index: 50;
  `;
  const style_Headline = css`
    color: #f1c40e;
    padding-left: 40px;
    line-height: 1;
    font-weight: bold;
    font-size: 56px;
    padding-bottom: 10px;
  `;
  const style_SubHeadline = css`
    color: white;
    text-align: left;
    position: relative;
    padding-left: 40px;
    font-weight: bold;
    font-size: 20px;
    ::before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background: white;
      left: 0;
      top: 50%;
      position: absolute;
    }
  `;
  const style_Text = css`
    position: relative;
    top: 29%;
  `;
  const style_BottomBtnBox = css`
    position: relative;
    bottom: 3.5%;
    justify-content: center;
    display: flex;
  `;
  const style_BottomImg = css`
    height: 320px;
    width: 100%;
    object-fit: cover;
    margin-top: 75%;
    z-index: 51;
    @media (min-width: 414px) {
      margin-top: 65%;
    }
    @media (max-height: 668px) {
      margin-top: 60%;
    }
  `;
  return (
    <div
      className={cx(
        style_Wrapper,
        css`
          background-image: url(${welcomeTop});
          width: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          @media (min-width: 414px) {
            height: 110vh;
          }
          @media (max-height: 668px) {
            height: 110vh;
          }
        `
      )}
    >
      <div className={style_Text}>
        <h1 className={style_Headline}>Believe in Yourself</h1>
        <h2 className={style_SubHeadline}>Train like a pro</h2>
      </div>

      <img className={style_BottomImg} src={welcomeBottom} alt="" />
      <div className={style_BottomBtnBox}>
        <Button
          buttonText="start training"
          linkLocation="/home"
          width="178px"
          background="#f1c40e"
        />
      </div>
    </div>
  );
};

export default Welcome;
