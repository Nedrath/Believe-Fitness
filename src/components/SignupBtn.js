import { css, cx } from "@emotion/css";

const Button = ({
  buttonText,
  width,
  background,
  border,
  margin,
  myClick
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

  return (
    <button onClick={myClick} className={style_Button}>
        {buttonText}
    </button>
  );
};

export default Button;
