import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Carousel,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Dialoge from "../Components/Dialoge";
import axios from "axios";

import Menubar from "../Components/Menubar";
import { useNavigate, useParams } from "react-router";
import History from "../Components/History";
import Homeee from "../Components/Homeee";
import Myfeed from "../Components/Myfeed";
import Saved from "../Components/Saved";

function Home() {
  // const [click, setClick] = useState(false);

  // const [save,setSave]=useState(false)
  // const [size, setSize] = React.useState(null);
  // const handleOpen = (value) => setSize(value);
  const [clicks, setClicks] = useState(false);

  const id = localStorage.getItem("id");

  const { url } = useParams();
  console.log(url, "rdtfygfdf");

  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [myPost, setMypost] = useState([]);
  const [allPosts, setAllposts] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const data = [
    {
      name: "Home",
      icon: <i class="fa-solid fa-house-user fa-lg"></i>,
      url: "home",
    },
    {
      name: "My Feed",
      icon: <i class="fa-solid fa-address-card fa-lg"></i>,
      url: "myfeed",
    },
    {
      name: "Saved",
      icon: <i class="fa-solid fa-bookmark fa-lg"></i>,
      url: "saved",
    },
    { name: "Message", icon: <i class="fa-solid fa-envelope fa-lg"></i> },
    {
      name: "History",
      icon: <i class="fa-solid fa-clock-rotate-left fa-lg"></i>,
      url: "history",
    },
  
  ];


  const data2 = [
    {
      name: "Call",
      icon:<i class="fa-solid fa-phone-volume fa-xl"></i>,
      url: "home",
    },
    // {
    //   name: "My Feed",
    //   icon: <i class="fa-solid fa-address-card fa-lg"></i>,
    //   url: "myfeed",
    // },
    // { name: "Message", icon: <i class="fa-solid fa-envelope fa-lg"></i> },
    // {
    //   name: "History",
    //   icon: <i class="fa-solid fa-clock-rotate-left fa-lg"></i>,
    //   url: "history",
    // },
    // {
    //   name: "Saved",
    //   icon: <i class="fa-solid fa-bookmark fa-lg"></i>,
    //   url: "saved",
    // },
  ];


  const presentUser = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
    setUser(res.data.user);
  };

  useEffect(() => {
    presentUser();
  }, []);

  // console.log(user);

  // const allpost = async () => {
  //   const res = await axios.get("http://localhost:5400/api/posted/all");
  //   setAllposts(res.data.posts);
  // };
  // useEffect(() => {
  //   allpost();
  // }, []);
  // console.log(allPosts, "kkk");

  const allusers = async () => {
    const res = await axios.get("http://localhost:5400/api/allusers");
    setUsers(res.data.users);
  };

  useEffect(() => {
    allusers();
  }, []);
  console.log(users);

  // const postbyuser = async () => {
  //   const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
  //   setMypost(res.data.user.postId);
  // };
  // useEffect(() => {
  //   postbyuser();
  // }, []);

  // console.log(myPost, "ll");

  // const deletepost = async (pid) => {
  //   const res = await axios.delete(
  //     `http://localhost:5400/api/posted/delete/${pid}/${id}`
  //   );
  //   setDeleted(res.data.deleteditems);
  //   postbyuser();
  // };
  // useEffect(() => {
  //   deletepost();
  // }, []);
  // console.log(deleted);

  return (
    <div>
      {/* home nav */}
      <div className="h-[10vh] w-full flex">
        <div className=" w-[50vw] bg-[#133E87]   -black">
          <h1>bkbjk</h1>
        </div>
        <div className="w-[100vw] flex text-center justify-center items-center bg-[#133E87] ">
          {/* search */}
          <input type="text" className="w-80 h-6 border rounded-xl" />
        </div>
        <div className="w-[50vw] flex justify-end items-center bg-[#133E87]    bg--500 ">
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
              <MenuItem
                onClick={() => {
                  setClicks(true);
                }}
              >
                Profile
              </MenuItem>
            </MenuList>
          </Menu>
          {/* {click && <Menubar />} */}
          {/* <h1 className="mr-5">Login</h1>
          <h1 className="mr-5">Register</h1> */}
        </div>
      </div>

      {/* saideBar */}
      <div className="w-full h-full flex bg-[#F3F3E0] ">
        <div className=" w-[50vh] h-[90vh]  flex">
          <div className=" w-[12vh]  h-[90vh] bg-[#F3F3E0]  ">
          {data2.map((item)=>{
            return(
              <div className="flex  ml-2 mt-5">
                <h1>{item.icon}</h1>
                 
              </div>

            )
          

          })}
            
          </div>
          <div className="bg--700  w-[32vh] h-[90vh]  bg-[#CBDCEB] text-center">
            <h1>Your posts</h1>
            {data.map((item) => {
              return (
                <div
                  className="flex flex-col it m-5 justify-around rounded bg-white"
                  onClick={() => {
                    navigate(`/${item.url}`);
                  }}
                >
                  <div className="flex p-5 ">
                    <h1 className="mr-5">{item.icon}</h1>
                    <h1>{item.name}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* carosel */}

        <div className=" w-[100vh]   shadow-2xl h-[90vh]">
          {/* bar */}
          {/* <div className="w-full h-[30vh] grid place-content-center "> */}
          {/* <div className="w-[80vh]  object-cover  h-[23vh] border rounded-lg">
              <Carousel className="rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
            </div> */}

          {/* <div className="w-[80vh] bg-banner-bg object-cover  h-[23vh] p-10 border rounded-lg">
              <h1 className=" ml-20">Explore Wilde Life Photography</h1>
              <h1 className=" ml-28">Wilde Life Photography is a magic</h1>
            </div> */}
          {/* </div> */}
          {url === "history" ? (
            <History />
          ) : url === "home" ? (
            <Homeee />
          ) : url === "myfeed" ? (
            <Myfeed />
          ) : url === "saved" ? (
            <Saved />
          ) : (
            <Menubar />
          )}

          {/* main content */}
          {/* <div className="w-full h-[57vh] flex flex-wrap text-center  gap-2 overflow-auto  ">
            <div className=" text-3xl  font-medium sticky top-0  flex justify-around  shadow-md    bg-[#FEFAE0] w-full p-5 ">
              <h1 className="text-center ml-56  ">All posts</h1>
              <Button
                className="ml-32"
                onClick={() => {
                  setClick(true);
                  handleOpen("md");
                }}
              >
                post
              </Button>
              {click && <Dialoge handleOpen={handleOpen} size={size} />}
            </div> */}

          {/* Postview */}
          {/* <div className=" w-full h-full   object-cover    m-5">
              {myPost.map((item) => {
                return (
                  <div className="p-5">
                    <div className="text-start w-full border-2 border-b-[#FEFAE0] rounded border-black  flex justify-between items-center p-3 ">
                      <h1 className="">{item.description}</h1>

                      <Menu placement="bottom-left">
                        {save ?<i class="fa-regular fa-bookmark fa-lg ml-72" onClick={()=>{
                          setSave(false)
                        }} ></i> : <i class="fa-solid fa-bookmark fa-lg text-end ml-72" onClick={()=>{
                          setSave(true)
                        }} ></i>}
                      
                        
                        <MenuHandler>
                          <i class="fa-solid fa-ellipsis-vertical fa-sm "></i>
                        </MenuHandler>
                        <MenuList className="mt-5">
                          <MenuItem
                          // onClick={() => {
                          //   navigate("/login");
                          // }}
                          >
                            Save
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              deletepost(item._id);
                            }}
                          >
                            Delete
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>

                    <img
                      src={item.image}
                      alt=""
                      className=" bg-white  border rounded-md"
                    />
                  </div>
                );
              })}
            </div> */}
          {/* <div className="bg-[#c52771] w-full  h-[30vh]  mr-2 bg-post2-bg object-cover  border rounded m-5"></div> */}
          {/* </div> */}

          {}
          {/* <div className="w-full h-[3vh] bg-[#133E87]"></div> */}
        </div>

        {/* userview */}
        <div className="w-full  h-[90vh] flex flex-wrap  overflow-auto bg-[#CBDCEB]  ">
          {users.map((item) => {
            return (
              <div className="h-[20vh] w-full  border shadow-xl rounded-md  bg-[#F3F3E0]  m-2 ">
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

          {/* <div className="h-[5vh] w-full bg-blue-700"></div> */}
        </div>

        {/* profaile view */}
        {clicks && (
          <div
            className=" w-full  bg-[#F3F3E0]   text-center flex  "
            onClick={() => {
              setClicks(false);
            }}
          >
            <div className="w-full h-[30vh] grid   place-content-center ">
              <h1 className="mb-3">PROFAILE</h1>
              {<img src={user.image} alt="" className="h-32 mb-3" />}
              <h1>Name:{user.name}</h1>
              <h1>Total post:{myPost.length}</h1>
            </div>
          </div>
        )}

        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
