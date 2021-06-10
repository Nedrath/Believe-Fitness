import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";
import UseMyFetch from "../hooks/UseMyFetch";

const Trainer = ({ trainerImg, trainerName }) => {
  const { data, isPending, error } = UseMyFetch(
    "http://localhost:4000/api/v1/trainers/1"
  );

  const style_Wrapper = css`
    display: flex;
    /* grid-template-columns: repeat(10, 1fr); */
    /* position: relative;
    width: 100%;
    z-index: 25;
    padding-top: 5px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none; */
  `;
  const style_TextWrapper = css`
    display: flex;
    gap: 0px 15px;
    padding-bottom: 20px;
  `;
  const style_TrainerImg = css`
    width: 88px;
    height: 88px;
    border-radius: 17px;
    object-fit: cover;
  `;
  const style_TrainerName = css`
    font-size: 16px;
    font-weight: 700;
    padding-top: 15px;
  `;
  const style_Link = css`
    text-decoration: none;
    color: black;
  `;

  return data ? (
    isPending ? (
      <div>Loading...</div>
    ) : (
      <article className={style_Wrapper}>
        <Link className={style_Link} to="">
          <section className={style_TextWrapper}>
            <img
              className={style_TrainerImg}
              src={trainerImg}
              alt={data.className}
            />
            <h3 className={style_TrainerName}>{trainerName}</h3>
          </section>
        </Link>
      </article>
    )
  ) : (
    error && <div>{error}</div>
  );
};

export default Trainer;
