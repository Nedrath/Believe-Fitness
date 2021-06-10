import { css, cx } from "@emotion/css";

const ContentHeadline = ({HeadlineText}) => {
  const style_Headline = css`
    padding: 0px 20px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  `;

  return <h2 className={style_Headline}>{HeadlineText}</h2>;
};

export default ContentHeadline;
