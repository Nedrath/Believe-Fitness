import { css, cx } from "@emotion/css";
import UseMyFetch from "../hooks/UseMyFetch";
import starsImg from "../Assets/stars.svg";
import { useState } from "react";
import { Link } from "@reach/router";

const Searching = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isPending, error } = UseMyFetch(
    "http://localhost:4000/api/v1/classes"
  );

  const style_Wrapper = css`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    ion-icon {
      display: inline-block;
      position: relative;
      color: gray;
      top: 3px;
      left: 30px;
    }
    label {
      padding-right: 15px;
    }
  `;
  const style_InputSearch = css`
    margin-top: 15px;
    margin-bottom: 25px;
    padding-left: 45px;
    width: 335px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.158);
    font-size: 16px;
    background: rgba(0, 0, 0, 0.01);
    outline: none;
  `;
  const style_ResultWrapper = css`
    width: 100%;
    display: grid;
    justify-content: center;
  `;
  const style_MainImg = css`
    width: 300px;
    height: 170px;
    border-radius: 17px 17px 17px 17px;
    object-fit: cover;
  `;
  const style_Figure = css`
    width: 300px;
    height: 48px;
    background: #f1c40e;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 5px 0px 0px 15px;
    position: relative;
    bottom: 100%;
  `;
  const style_WorkoutText = css`
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    width: 95px;
    color: black;
  `;
  const style_SearchLink = css`
    text-decoration: none;
  `;
  const style_NoResult = css`
    text-align: center;
    padding-bottom: 15px;
  `;

    // Søge/filter funktionen som sortere i hvad der bliver søgt efter.
  const searchFunction = data?.filter((sort) => {
    if (searchTerm === "") {
    } else if (
      sort.className.toLowerCase().includes(searchTerm.toLowerCase()) +
      sort.trainer.trainerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) +
      sort.classDay.toLowerCase().includes(searchTerm.toLowerCase()) +
      sort.classDescription.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return sort;
    }
  });

  return data ? (
    isPending ? (
      <div>Loading...</div>
    ) : (
      <div className={style_Wrapper}>
        <label htmlFor="search">
          <ion-icon name="search-outline"></ion-icon>
          <input
            className={style_InputSearch}
            type="text"
            name="search"
            id="search"
            placeholder="Search classes"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
        {searchFunction?.length ? (
          searchFunction?.map((searchResult) => (
            <article key={searchResult.id} className={style_ResultWrapper}>
              <img
                className={style_MainImg}
                src={searchResult.asset.url}
                alt={searchResult.className}
              />
              <figure className={style_Figure}>
                <Link
                  className={style_SearchLink}
                  to={`/details/${searchResult.id}`}
                >
                  <h2 className={style_WorkoutText}>
                    {searchResult.className}
                  </h2>
                </Link>
                <img src={starsImg} alt="stars" />
              </figure>
            </article>
          ))
        ) : (
          <p className={style_NoResult}>
            Your search did not give any results. Try to search for something
            else.
          </p>
        )}
      </div>
    )
  ) : (
    error && <div>{error}</div>
  );
};

export default Searching;
