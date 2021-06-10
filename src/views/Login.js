import { css, cx } from "@emotion/css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";
import HeaderNav from "../components/HeaderNav";

const Login = () => {
  const { setUsername, setPassword, token } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const mySubmit = (data) => {
    setUsername(data.username);
    setPassword(data.password);
  };

  const style_Wrapper = css`
    display: flex;
    height: 100%;
    flex-direction: column;
    z-index: 50;
  `;
  const style_Headline = css`
    color: #f1c40e;
    padding-left: 40px;
    line-height: 1;
    font-weight: bold;
    font-size: 56px;
    padding-bottom: 10px;
  `;
  const style_SubHeadline = css`
    color: black;
    text-align: left;
    position: relative;
    padding-left: 40px;
    font-weight: bold;
    font-size: 20px;
    ::before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background: black;
      left: 0;
      top: 50%;
      position: absolute;
    }
  `;
  const style_TextWrapper = css`
    padding-top: 70px;
  `;
  const style_Text = css`
    padding-left: 21px;
    padding-top: 61px;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
  `;
  const style_LoginBtn = css`
    width: 90%;
    height: 50px;
    background: #f1c40e;
    border-radius: 100px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    z-index: 55;
    margin: auto;
    border: none;
  `;
  const style_LoginForm = css`
    display: grid;
    input {
      width: 90%;
      height: 50px;
      background: #fbfbfb;
      border-radius: 100px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      z-index: 55;
      margin: auto;
      border: 1px solid rgba(128, 128, 128, 0.172);
      margin-bottom: 16px;
      outline: none;
      padding-left: 30px;
    }
  `;
  const style_Validation = css`
    width: 100%;
    text-align: center;
    padding: 5px;
    padding-bottom: 15px;
    color: red;
    font-weight: 600;
  `;

  return (
    !token && (
      <div className={style_Wrapper}>
        <header>
          <HeaderNav DisplayChevron="none" headlineText="" />
        </header>
        <div className={style_TextWrapper}>
          <h1 className={style_Headline}>Believe in Yourself</h1>
          <h2 className={style_SubHeadline}>Train like a pro</h2>
          <p className={style_Text}>Log in with your credentials</p>
        </div>
        <form className={style_LoginForm} onSubmit={handleSubmit(mySubmit)}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username..."
            ref={register({
              required: "Username Required",
              pattern: {
                value: /(^(([A-Za-z])+){2,}(([0-9])+)?$)|^[A-Za-z]{2}$|(^(([A-Za-z])+){1,}((([0-9])+){2,})$)/gm,
                message: "invalid Username",
              },
            })}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            ref={register({
              required: "Password Required",
              minLength: { value: 4, message: "Try again, password to short" },
            })}
          />
          <div className={style_Validation}>
            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button className={style_LoginBtn} type="submit">
            Log Ind
          </button>
        </form>
      </div>
    )
  );
};

export default Login;
