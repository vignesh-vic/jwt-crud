/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { loggedIn, getLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    axios.post("http://localhost:4000/logout");
    await getLoggedIn();
    navigate("/");
  };

  return (
    <nav className="bg-white w-full sticky top-0 z-50 flex justify-between items-center py-3 shadow-sm ">
      {/* Website logo  */}
      <a href="/" className="flex items-center mx-4">
        <img
          src="https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg"
          className="w-10 h-10"
          alt="Interns"
        />
        <span className="text-2xl font-semibold ">Interns</span>
        <span className="text-blue-500 text-2xl mx-1">FLOW</span>
      </a>

      {/* display hidden is given to the smaller devices of width 640 px and  it is for large display devices*/}
      <div>
        {loggedIn === true && (
          <div>
            <ul className="list-none md:flex hidden justify-end items-center flex-1 mx-4 ">
              <li className="md:mx-3 my-2">
                <h1>Welcome</h1>
              </li>
              <li className="md:mx-3 my-2">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleLogout}
                  LinkComponent={Link}
                  to="/login"
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        )}

        {loggedIn === false && (
          <>
            <div>
              <ul className="list-none md:flex hidden justify-end items-center flex-1 mx-4 ">
                <li className="md:mx-3 my-2">
                  <Button
                    variant="contained"
                    color="primary"
                    LinkComponent={Link}
                    to="/login"
                  >
                    Sign In
                  </Button>
                </li>
                <li className="md:mx-3 my-2">
                  <Button
                    variant="outlined"
                    color="secondary"
                    LinkComponent={Link}
                    to="/register"
                  >
                    Sign Up
                  </Button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      {/* Display for the small  devices for responsive view */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <div
          className="cursor-pointer"
          onClick={() => setMenu((toggle) => !toggle)}
        >
          {/* here when toggle is said to be of then menu icon will turn into circle cancel icon  */}
          {menu ? (
            <AiFillCloseCircle className="w-[50px] h-[22px]" />
          ) : (
            <RiMenu3Fill className="w-[50px] h-[22px]" />
          )}

          {/*  Display for small devices  with menu icon*/}
          <div
            className={`${
              menu ? "flex" : "hidden "
            } p-6 bg-white z-10 absolute top-20 right-0 mx-2 my-1  min-w-[160px] rounded-xl  shadow-lg`}
          >
            {/*here menu icon true means then the pop ups where shown */}
            <div>
              {loggedIn === true && (
                <div>
                  <ul className="list-none flex flex-col justify-end items-center flex-1 mx-4 ">
                    <li className="md:mx-3 my-2">
                      <h1>Welcome</h1>
                    </li>
                    <li className="md:mx-3 my-2">
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={handleLogout}
                        LinkComponent={Link}
                        to="/login"
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </div>
              )}

              {loggedIn === false && (
                <>
                  <div>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 mx-4 ">
                      <li className="md:mx-3 my-2">
                        <Button
                          variant="contained"
                          color="primary"
                          LinkComponent={Link}
                          to="/login"
                        >
                          Sign In
                        </Button>
                      </li>
                      <li className="md:mx-3 my-2">
                        <Button
                          variant="outlined"
                          color="secondary"
                          LinkComponent={Link}
                          to="/register"
                        >
                          Sign Up
                        </Button>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
