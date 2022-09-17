import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localService } from "../../services/localService";

export default function UserNav() {
  let user = useSelector((state) => {
    return state.reducerUser.userInfo;
  });
  console.log("user: ", user);
  let handleLogout = () => {
    //xoa data trong localStorge
    localService.user.remove();
    //remove data tu redux
    //dispatch({
    //type:SET_USER,
    //payload:null,
    //})
    window.location.href = "/";
  };
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button
            onClick={handleLogout}
            className="border rounded border-red-500 px-5 py-1.5 text-red-500 mx-5"
          >
            Dang xuat
          </button>
        </>
      );
    } else {
      return (
        <div className="space-x-5">
          <NavLink to="/login">
            <button className="border rounded border-black px-5 py-1.5 text-black hover:bg-black hover:text-white transition duration-300">
              Dang nhap
            </button>
          </NavLink>
          <button className="border rounded border-black px-5 py-1.5 text-black hover:bg-black hover:text-white transition duration-300">
            Dang ky
          </button>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
