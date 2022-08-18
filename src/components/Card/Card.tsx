import { useDispatch, useSelector } from "react-redux";

import trash from "../../img/trash.png";
import { filterUsers, setFilter } from "../../redux/slice/userSlice";

import "./Card.css";

const Card = ({ userInfo }: any) => {
  const dispatch = useDispatch();

  const filter = useSelector((state: any) => {
    return state.userSlice.filter;
  });

  return (
    <div className="card">
      <div className="avatar">
        <img src={userInfo.picture.large} alt="" />
        {filter &&
        `${userInfo.name.first} ${userInfo.name.last}`
          .toLowerCase()
          .includes(filter.toLowerCase()) ? (
          <img
            className="trash"
            src={trash}
            onClick={() => {
              dispatch(filterUsers(userInfo.login.uuid));
            }}
            alt="delete button"
          />
        ) : null}
      </div>
      <div className="cardTittle">
        <div className="name">
          {userInfo.name.first} {userInfo.name.last}
        </div>
        <div className="location">
          {`${userInfo.location.state}, ${userInfo.location.country}`}
        </div>
      </div>
      <div className="cardBody">
        <div className="subTittle">Contact Info:</div>
        <div className="contact">
          <div className="phone">{userInfo.phone}</div>
          <div className="cell">{userInfo.cell}</div>
          <div className="email">{userInfo.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
