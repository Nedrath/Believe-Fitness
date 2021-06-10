import { css, cx } from "@emotion/css";
import { Link } from "@reach/router";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const NavMenu = ({ id }) => {
  const { token, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    window.location.replace("/home");
  };

  const style_Header = css`
    height: 60px;
  `;

  const style_Nav = css`
    position: absolute;
    width: 100%;
    height: calc(100% + 100px);
    justify-content: center;
    z-index: 90;
    background: white;
  `;

  const style_NavUl = css`
    display: grid;
    justify-content: center;
    list-style: none;
    text-align: center;
    padding-top: 65px;
    li {
      padding: 24px;
    }
  `;
  const style_Link = css`
    text-decoration: none;
    color: black;
    font-size: 24px;
  `;
  const style_LinkButton = css`
    border: none;
    background: none;
    font-size: 24px;
    font-weight: 600;
    outline: none;
  `;

  return (
    <div className={style_Header}>
      <div className={style_Nav}>
        <ul className={style_NavUl}>
          <li>
            <Link className={style_Link} to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className={style_Link} to="/search">
              Search
            </Link>
          </li>
          {token && (
            <li>
              <Link className={style_Link} to={`/schedule`}>
                My Schedule
              </Link>
            </li>
          )}
          {!token ? (
            <li>
              <Link className={style_Link} to="/login">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button className={style_LinkButton} onClick={handleLogout}>
                Logout!
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
