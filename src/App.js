import React, { Fragment, useEffect, useState } from "react";
import UserList from "./components/users/UserList";
import InputUser from "./components/form/InputUser";

const getLocalStorage = () => {
  let users = localStorage.getItem("users");

  if (users) {
    return (users = JSON.parse(localStorage.getItem("users")));
  } else {
    return [];
  }
};

function App() {
  const [users, setUsers] = useState(getLocalStorage());

  const saveUserDetails = (userInfo) => {
    const newDate = new Date();

    const userData = {
      ...userInfo,
      id: userInfo.id || newDate.getTime(),
    };

    setUsers((prevState) => {
      return [...prevState, userData];
    });
  };

  function updateUserDetails(list) {
    setUsers([...list]);
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Fragment>
      <InputUser onAddUser={saveUserDetails} />
      <UserList items={users} onDeleteUser={updateUserDetails} />
    </Fragment>
  );
}

export default App;
