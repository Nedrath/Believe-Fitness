import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";
import UseMyFetch from "../hooks/UseMyFetch";
import starsImg from "../Assets/stars.svg";

const ClassSlider = () => {
  const { data, isPending, error } = UseMyFetch(
    "http://localhost:4000/api/v1/classes"
  );

  const style_SliderBox = css`
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-content: left;
    position: relative;
    width: 100%;
    z-index: 25;
    padding-top: 5px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 0px 15px;
    margin-bottom: 20px;
  `;
  const style_Wrapper = css`
    position: relative;
    display: grid;
  `;
  const style_MainImg = css`
    width: 128px;
    height: 144.8px;
    position: relative;
    border-radius: 17px 17px 0px 17px;
    object-fit: cover;
  `;
  const style_Figure = css`
    width: 128px;
    height: 48px;
    background: #f1c40e;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 16px;
    padding: 10px 8px;
    position: absolute;
    bottom: 0;
    display: grid;
    justify-content: center;
    align-items: center;
  `;
  const style_WorkoutText = css`
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    width: 95px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  const style_Stars = css``;
  const style_Link = css`
    text-decoration: none;
    color: black;
    outline: transparent;
  `;

  return data ? (
    isPending ? (
      <div>Loading...</div>
    ) : (
      <article className={style_SliderBox}>
        {data.map((slider) => (
          <Link
            key={slider.id}
            className={style_Link}
            to={`/details/${slider.id}`}
          >
            <section className={style_Wrapper}>
              <img
                className={style_MainImg}
                src={slider.asset.url}
                alt={slider.className}
              />
              <figure className={style_Figure}>
                <h2 className={style_WorkoutText}>{slider.className}</h2>
                <img className={style_Stars} src={starsImg} alt="stars" />
              </figure>
            </section>
          </Link>
        ))}
      </article>
    )
  ) : (
    error && <div>{error}</div>
  );
};

export default ClassSlider;
