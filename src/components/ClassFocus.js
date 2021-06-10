import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";
import UseMyFetch from "../hooks/UseMyFetch";
import starsImg from "../Assets/stars.svg";
import { useState, useEffect } from "react";

const ClassFocus = () => {
  const [randomId, setRandomId] = useState(null);
  useEffect(() => {
    setRandomId(Math.floor(Math.random() * 4) + 1);
  }, []);

  const { data, isPending, error } = UseMyFetch(
    `http://localhost:4000/api/v1/classes/${randomId}`
  );

  const style_Wrapper = css`
    display: grid;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 25;
    padding-top: 5px;
    margin-bottom: -25px;
  `;
  const style_MainImg = css`
    width: 335px;
    height: 404px;
    border-radius: 18px;
    object-fit: cover;
  `;
  const style_Figure = css`
    width: 224px;
    height: 72px;
    background: #f1c40e;
    border-top-right-radius: 48px;
    border-bottom-left-radius: 15px;
    padding: 13px;
    position: relative;
    bottom: 100%;
    left: 0%;
  `;
  const style_WorkoutText = css`
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  const style_Link = css`
    text-decoration: none;
    color: black;
  `;

  return data ? (
    isPending ? (
      <div>Loading...</div>
    ) : (
      <Link className={style_Link} to={`/details/${data.id}`}>
        <div className={style_Wrapper}>
          <img
            className={style_MainImg}
            src={data.asset.url}
            alt={data.className}
          />
          <figure className={style_Figure}>
            <h2 className={style_WorkoutText}>{data.className}</h2>
            <img src={starsImg} alt="stars" />
          </figure>
        </div>
      </Link>
    )
  ) : (
    error && <div>{error}</div>
  );
};

export default ClassFocus;
