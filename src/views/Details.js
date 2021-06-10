import { css, cx } from "@emotion/css";
import HeaderNav from "../components/HeaderNav";
import UseMyFetch from "../hooks/UseMyFetch";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import starsYellowImg from "../Assets/starsyellow.svg";
import ContentHeadline from "../components/ContentHeadline";
import SignupBtn from "../components/SignupBtn";
import Button from "../components/Button";
import Trainer from "../components/Trainer";

const Details = ({ id }) => {
  const { token } = useContext(UserContext);
  const [signedUp, setSignedUp] = useState(false);
  const [classDate, setClassDate] = useState(false);

  const { data, isPending, error } = UseMyFetch(
    `http://localhost:4000/api/v1/classes/${id}`
  );
  const { data: data2 } = UseMyFetch(
    `http://localhost:4000/api/v1/trainers/${id}`
  );

  const joinClass = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/v1/users/1/classes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: "",
    })
      .then(() => setSignedUp(true))
      .catch((err) => console.error(err));
  };

  const deleteClass = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/v1/users/1/classes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: "",
    })
      .then(() => {
        dateCheck();
        setSignedUp(false);
      })
      .catch((err) => console.error(err));
  };

  const checkClass = () => {
    if (token) {
      fetch(`http://localhost:4000/api/v1/users/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.classes.forEach((thisClass) => {
            if (thisClass.id == id) {
              setSignedUp(true);
            }
          });
        })
        .catch((err) => console.error(err));
    }
  };

  const dateCheck = () => {
    if (token) {
      fetch(`http://localhost:4000/api/v1/users/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((dataCheck) => {
          dataCheck?.classes.forEach((thisClass) => {
            if (thisClass.classDay == data?.classDay) {
              setClassDate(true);
            }
          });
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    checkClass();
    dateCheck();
  }, [data]);

  let changeButton;
  if (token && signedUp) {
    changeButton = (
      <SignupBtn
        buttonText="Leave"
        width="334px"
        background="#f1c40e"
        myClick={deleteClass}
      />
    );
  } else if (token && classDate) {
    changeButton = (
      <SignupBtn
        buttonText="Already got class on that day"
        width="334px"
        background="rgba(214, 214, 214, 0.624)"
      />
    );
  } else if (token && !signedUp) {
    changeButton = (
      <SignupBtn
        buttonText="Sign up"
        width="334px"
        background="#f1c40e"
        myClick={joinClass}
      />
    );
  }

  const style_Wrapper = css`
    margin: auto;
    padding-bottom: 10px;
  `;
  const style_DetailsWrapper = css`
    display: grid;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 25;
    padding-top: 5px;
    top: -95px;
  `;
  const style_MainImg = css`
    width: 100%;
    height: 432px;
    object-fit: cover;
    filter: brightness(80%);
  `;
  const style_ClassHeadline = css`
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
    width: 100%;
    color: #f1c40e;
    padding-bottom: 20px;
  `;
  const style_ClassTextWrapper = css`
    padding: 10px 20px;
    position: relative;
    bottom: 100%;
  `;
  const style_RatingText = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;
    p {
      color: #f1c40e;
      font-weight: 600;
      font-size: 14px;
      padding-left: 15px;
    }
    div {
      display: flex;
    }
  `;
  const style_TimeSection = css`
    padding: 0px 20px;
    top: 55%;
    position: absolute;
    @media (max-height: 668px) {
      top: 67%;
    }
    @media (min-width: 414px) {
      top: 62%;
    }
  `;
  const style_TimeText = css`
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 15px;
  `;
  const style_TrainerHeadline = css`
    position: absolute;
    top: 70%;
    @media (max-height: 668px) {
      top: 82%;
    }
    @media (min-width: 414px) {
      top: 75%;
    }
  `;
  const style_TrainerWrapper = css`
    padding-left: 20px;
    padding-bottom: 20px;
    position: absolute;
    top: 75%;
    margin-bottom: 50px;
    @media (max-height: 668px) {
      top: 88%;
    }
    @media (min-width: 414px) {
      top: 81%;
      padding-left: 35px;
    }
  `;

  return (
    data,
    data2 ? (
      isPending ? (
        <div>Loading...</div>
      ) : (
        <div className={cx(style_Wrapper)}>
          <header>
            <HeaderNav
              DisplayChevron="flex"
              iconColorLeft="white"
              iconColorRight="white"
              headlineText=""
            />
          </header>
          <main>
            <article className={style_DetailsWrapper}>
              <img
                className={style_MainImg}
                src={data.asset.url}
                alt={data.className}
              />
              <section className={style_ClassTextWrapper}>
                <h2 className={style_ClassHeadline}>{data.className}</h2>
                <section className={style_RatingText}>
                  <div>
                    <img src={starsYellowImg} alt="" />
                    <p>5/5</p>
                  </div>
                  <Button
                    buttonText="rate"
                    linkLocation=""
                    width="109px"
                    background="none"
                    border="2px solid #f1c40e"
                    textColor="#f1c40e"
                    margin="0"
                  />
                </section>
              </section>
            </article>
            <section className={style_TimeSection}>
              <p className={style_TimeText}>
                {data.classDay} - {data.classTime}
              </p>
              <p className={style_TimeText}>{data.classDescription}</p>
            </section>
            <section className={style_TrainerHeadline}>
              <ContentHeadline HeadlineText="Trainer" />
            </section>
            <section className={style_TrainerWrapper}>
              <Trainer
                trainerImg={data2.asset.url}
                trainerName={data2.trainerName}
              />
              {changeButton}
              {/* {classDateCheck} */}
            </section>
          </main>
        </div>
      )
    ) : (
      error && <div>{error}</div>
    )
  );
};

export default Details;
