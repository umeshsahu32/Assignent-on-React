import React, { Fragment } from "react";
import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return <p className="msg">No User Found</p>;
  }

  const deleteUserHandler = (id) => {
    let userList = [...props.items];
    const updatedUsers = userList.filter((item) => item.id !== id);
    props.onDeleteUser(updatedUsers);
  };

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th></th>
          </tr>
        </thead>
        {props.items.map((user) => {
          let date = new Date(user.dob);
          const month = date.toLocaleString("en-US", { month: "2-digit" });
          const day = date.toLocaleString("en-US", { day: "2-digit" });
          const year = date.getFullYear();
          const fullDate = day + "/" + month + "/" + year;
          console.log(fullDate);
          return (
            <tbody key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{fullDate}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => deleteUserHandler(user.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="action">
        <button onClick={() => props.onDeleteUser([])}>Clear All</button>
      </div>
    </Fragment>
  );
};

export default UserList;
