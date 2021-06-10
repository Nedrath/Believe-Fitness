import { css, cx } from "@emotion/css";
import HeaderNav from "../components/HeaderNav";
import ClassSlider from "../components/ClassSlider";
import ContentHeadline from "../components/ContentHeadline";
import Searching from "../components/Searching";
import Trainer from "../components/Trainer";
import UseMyFetch from "../hooks/UseMyFetch";

const Search = () => {
  const { data, isPending, error } = UseMyFetch(
    "http://localhost:4000/api/v1/trainers"
  );

  const style_Wrapper = css`
    margin: auto;
  `;
  const style_TrainerWrapper = css`
    padding: 0px 20px;
  `;

  return data ? (
    isPending ? (
      <div>Loading...</div>
    ) : (
      <div className={cx(style_Wrapper)}>
        <header>
          <HeaderNav headlineText="Search" />
        </header>
        <main>
          <Searching />
          <ContentHeadline HeadlineText="Popular classes" />
          <ClassSlider />
          <ContentHeadline HeadlineText="Popular Trainers" />
          <div className={style_TrainerWrapper}>
            {data.map((trainers) => (
              <Trainer
                key={trainers.id}
                trainerImg={trainers.asset.url}
                trainerName={trainers.trainerName}
              />
            ))}
          </div>
        </main>
      </div>
    )
  ) : (
    error && <div>{error}</div>
  );
};

export default Search;
