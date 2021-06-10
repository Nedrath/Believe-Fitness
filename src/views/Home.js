import { css, cx } from "@emotion/css";
import HeaderNav from "../components/HeaderNav";
import ClassFocus from "../components/ClassFocus";
import ClassSlider from "../components/ClassSlider";
import ContentHeadline from "../components/ContentHeadline";

const Home = () => {
  const style_Wrapper = css`
    margin: auto;
  `;

  return (
    <div className={cx(style_Wrapper)}>
      <header>
        <HeaderNav DisplayChevron="none" headlineText="Popular classes" />
      </header>
      <main>
        <ClassFocus />
        <div
          className={css`
            padding-bottom: 0px;
          `}
        ></div>
        <ContentHeadline HeadlineText="Classes for you" />
        <ClassSlider />
      </main>
    </div>
  );
};

export default Home;
