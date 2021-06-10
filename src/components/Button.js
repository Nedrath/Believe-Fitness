import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";

const Button = ({
  buttonText,
  linkLocation,
  width,
  background,
  border,
  textColor,
  margin
}) => {
  const style_Button = css`
    width: ${width};
    height: 50px;
    background: ${background};
    border-radius: 100px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    z-index: 55;
    margin: auto;
    margin: ${margin};
    border: ${border};
  `;
  const style_Link = css`
    text-decoration: none;
    color: black;
    color: ${textColor};
  `;
  return (
    <button className={style_Button}>
      <Link className={style_Link} to={linkLocation}>
        {buttonText}
      </Link>
    </button>
  );
};

export default Button;
