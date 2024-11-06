import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Dialoge from "../Components/Dialoge";
import axios from "axios";

import Menubar from "../Components/Menubar";
import { useNavigate } from "react-router";

function Home() {
  const [click, setClick] = useState(false);
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
  const id = localStorage.getItem("id");

  const [users, setUsers] = useState([]);
  const [myPost, setMypost] = useState([]);
  const [allPosts, setAllposts] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const presentUser = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
    setUser(res.data.user);
  };

  useEffect(() => {
    presentUser();
  }, []);

  console.log(user);

  const allpost = async () => {
    const res = await axios.get("http://localhost:5400/api/posted/all");
    // setAllposts(res.data.posts);
  };
  useEffect(() => {
    allpost();
  }, []);
  console.log(allPosts, "kkk");

  const allusers = async () => {
    const res = await axios.get("http://localhost:5400/api/allusers");
    setUsers(res.data.users);
  };

  console.log(users);

  const postbyuser = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
    setMypost(res.data.user.postId);
  };
  useEffect(() => {
    postbyuser();
    allusers();
  }, []);

  console.log(myPost, "ll");

  return (
    <div>
      {/* home nav */}
      <div className="h-[10vh] w-full flex">
        <div className=" w-[50vw] bg-[#608BC1]    -black">
          <h1>bkbjk</h1>
        </div>
        <div className="w-[100vw] flex text-center justify-center items-center bg-[#133E87] ">
          {/* search */}
          <input type="text" className="w-80 h-6 border rounded-xl" />
        </div>
        <div className="w-[50vw] flex justify-end items-center bg-[#608BC1]    bg--500 ">
          <Menu placement="bottom-left">
            <MenuHandler>
              <i class="fa-solid fa-gear fa-2xl mr-3"></i>
            </MenuHandler>
            <MenuList className="mt-5">
              <MenuItem
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.clear("id");
                  navigate("/login");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
          {/* {click && <Menubar />} */}
          {/* <h1 className="mr-5">Login</h1>
          <h1 className="mr-5">Register</h1> */}
        </div>
      </div>

      {/* home content */}

      <div className="w-full h-full flex bg-[#F3F3E0]  ">
        <div className=" w-[50vh] h-[90vh]  flex">
          <div className=" w-[12vh]  h-[90vh] bg-[#F3F3E0] ">
            <h1>kbjj</h1>
          </div>
          <div className="bg--700 border w-[32vh] h-[90vh] bg-[#F3F3E0]  text-center">
            <h1>Your posts</h1>
          </div>
        </div>

        <div className=" w-[100vh]   shadow-2xl h-[90vh]">
          {/* bar */}
          <div className="w-full h-[30vh] grid place-content-center ">
            <div className="w-[80vh] bg-banner-bg object-cover  h-[23vh] p-10 border rounded-lg">
              <h1 className=" ml-20">Explore Wilde Life Photography</h1>
              <h1 className=" ml-28">Wilde Life Photography is a magic</h1>
            </div>
          </div>

          {/* main content */}
          <div className="w-full h-[57vh] flex flex-wrap text-center  gap-2 overflow-auto  ">
            <div className=" text-3xl  font-medium sticky top-0  flex justify-around     bg-[#608BC1]  w-full p-3">
              <h1 className="text-center ml-72 text-white  ">All posts</h1>
              <Button
                className="ml-40"
                onClick={() => {
                  setClick(true);
                  handleOpen("md");
                }}
              >
                post
              </Button>
              {click && <Dialoge handleOpen={handleOpen} size={size} />}
            </div>
            <div className=" w-full h-full   object-cover    m-5">
              {myPost.map((item) => {
                return (
                  <img
                    src={item.image}
                    alt=""
                    className="mt-5 bg-white p-5  border rounded-md"
                  />
                );
              })}
            </div>
            {/* <div className="bg-[#c52771] w-full  h-[30vh]  mr-2 bg-post2-bg object-cover  border rounded m-5"></div> */}
          </div>
          <div className="w-full h-[3vh] bg-[#133E87]"></div>
        </div>
        <div className="bg--800 w-[50vh] h-[90vh] bg-[#CBDCEB] text-center ">
          <div className="w-full h-[30vh] grid   place-content-center ">
            <h1 className="mb-3">PROFAILE</h1>
            {<img src={user.image} alt="" className="h-32 mb-3" />}
            <h1>Name:{user.name}</h1>
            <h1>Total post:{myPost.length}</h1>
          </div>
          <div className="w-full  h-[57vh] flex flex-wrap overflow-auto ">
            {users.map((item) => {
              return (
                <div className="h-[20vh] w-full  border shadow-xl  bg-[#F3F3E0]  m-5  ">
                  <div className=" w-full h-full flex justify-around items-center rounded   ">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[10vh] w-[10vh] rounded-full object-cover"
                    />
                    <h1>{item.name}</h1>
                  </div>
                </div>
              );
            })}

            {/* <div className="h-[20vh] w-full bg-blue-700"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
