import { css, cx } from "@emotion/css";
import HeaderNav from "../components/HeaderNav";
import ScheduleBox from "../components/ScheduleBox";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Schedule = ({ id }) => {
  const [data, setData] = useState(null);
  const { token } = useContext(UserContext);

  const style_Wrapper = css`
    margin: auto;
  `;
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    data && (
      <div className={cx(style_Wrapper)}>
        <header>
          <HeaderNav iconColorLeft="gray" iconColorRight="gray" headlineText="My Schedule" />
        </header>
        <main>
          {data.classes.map((myClasses) => (
            <ScheduleBox
              key={myClasses.id}
              headline={myClasses.className}
              dateTime={myClasses.classDay + " - " + myClasses.classTime}
            />
          ))}
        </main>
      </div>
    )
  );
};

export default Schedule;
