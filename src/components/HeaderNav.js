import { css, cx } from "@emotion/css";
import { useState } from "react";
import NavMenu from "./Menu";

const HeaderNav = ({ headlineText, DisplayChevron, iconColorLeft, iconColorRight }) => {
  const [toggle, setToggle] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  const showMenu = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    setMenuIcon(!menuIcon);
  };

  function LastPage() {
    window.history.back();
  }

  const style_Header = css`
    height: 60px;
    max-width: 390px;
    margin: auto;
    margin-top: 30px;
  `;
  const style_Headline = css`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
  `;
  const style_TopBox = css`
    padding: 10px 24px 20px;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 40;
    position: relative;
    justify-content: space-between;
    ion-icon {
      font-size: 2em;
      color: ${iconColorRight};
      height: 100%;
    }
  `;
  const style_LeftNav = css`
    display: flex;
    ion-icon {
      font-size: 1.4em;
      padding-right: 24px;
      display: ${DisplayChevron};
      color: ${iconColorLeft};
    }
  `

  return (
    <div className={style_Header}>
      <div className={style_TopBox}>
        <div className={style_LeftNav}>
          <ion-icon onClick={LastPage} name="arrow-back"></ion-icon>
          <h2 className={style_Headline}>{headlineText}</h2>
        </div>
        {menuIcon ? (
          <ion-icon onClick={showMenu} name="close-outline"></ion-icon>
        ) : (
          <ion-icon onClick={showMenu} name="menu"></ion-icon>
        )}
      </div>
      <div>{toggle && <NavMenu />}</div>
    </div>
  );
};

export default HeaderNav;
