import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";

import Card from "../Card/Card";
import { getUsers } from "../../redux/slice/userSlice";

import "./List.css";

const List = () => {

  const dispatch = useDispatch();

  const list = useSelector((state: any) => {
    return state.userSlice.list;
  });

  const filter = useSelector((state: any) => {
    return state.userSlice.filter;
  });

  useEffect(() => {
    if (list.length === 0) {
      getUsers(dispatch);
    }
  }, []);

  return (
    <div className="list">
      {list
        .filter((user: any) => {
          return `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(filter.toLowerCase());
        })
        .map((e: any) => {
          const key = nanoid();
          return <Card userInfo={e} key={key} />;
        })}
    </div>
  );
};

export default List;
