import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";

const ScheduleBox = ({ headline, dateTime }) => {

  const style_Content = css`
    width: 335px;
    height: 100px;
    border-radius: 12px;
    border: 2px solid rgba(0, 0, 0, 0.049);
    background: #fcfbfb;
    display: grid;
    margin: auto;
    margin-top: 25px;
  `;
  const style_Headline = css`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    padding-left: 25px;
    padding-top: 18px;
    padding-bottom: 15px;
  `;
  const style_Text = css`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    padding-left: 25px;
    padding-bottom: 11px;
  `;

  return (
      <article className={style_Content}>
        <h1 className={style_Headline}>{headline}</h1>
        <p className={style_Text}>{dateTime}</p>
      </article>
  );
};

export default ScheduleBox;
