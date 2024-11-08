import React, { useContext, useEffect, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Carousel,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router";
import Dialoge from "./Dialoge";
import { contexts } from "../App";

function Homeee() {
  // const{deleted,deletepost}=useContext(contexts)
  const [click, setClick] = useState(false);
  const [myPost, setMypost] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [user, setUser] = useState([]);
  const [save, setSave] = useState(false);
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [viewSave, setViewsave] = useState([]);

  const [saveitem, setSaveitm] = useState([]);

  const saveview = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/save/${id}`);

    try {
      setViewsave(res.data.saved.saveId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    saveview();
  }, []);

  const addtosaved = async (gid) => {
    const res = await axios.post(
      `http://localhost:5400/api/posted/save/${gid}/${id}`
    );
    saveview();
    try {
      setSaveitm(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    addtosaved();
  }, []);

  const presentUser = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
    try {
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    presentUser();
  }, []);

  console.log(user);

  const postbyuser = async () => {
    const res = await axios.get(`http://localhost:5400/api/posted/all/${id}`);
    try {
      setMypost(res.data.user.postId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postbyuser();
  }, []);

  const deletepost = async (pid) => {
    const res = await axios.delete(
      `http://localhost:5400/api/posted/delete/${pid}/${id}`
    );
    try {
      setDeleted(res.data.deleteditems);
      postbyuser();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    deletepost();
  }, []);
  console.log(deleted);
  return (
    <div className="w-[85vh] h-[90vh]   shadow-2xl overflow-auto    ">
      <div className="w-full h-[30vh] grid place-content-center   ">
        <div className="w-[80vh]  object-cover   border rounded-lg">
          <Carousel className="rounded-xl h-[23vh] ">
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
        </div>

        {/* <div className="w-[80vh] bg-banner-bg object-cover  h-[23vh] p-10 border rounded-lg">
              <h1 className=" ml-20">Explore Wilde Life Photography</h1>
              <h1 className=" ml-28">Wilde Life Photography is a magic</h1>
            </div> */}
      </div>

      <div className="w-full h-full flex flex-wrap text-center    gap-2  ">
        <div className=" text-3xl  font-medium sticky top-0  flex justify-around  shadow-md z-10    bg-[#FEFAE0] w-full p-5 ">
          <h1 className="text-center ml-56  ">My posts</h1>
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
        </div>

        {/* Postview */}
        <div className=" w-full h-full   object-cover    m-5">
          {myPost?.map((item) => {
            return (
              <div className="p-5">
                <div className="text-start w-full border-2 border-b-[#FEFAE0] rounded border-black  flex justify-between items-center p-3 ">
                  <h1 className="">{item?.description}</h1>

                  <Menu placement="bottom-left">
                    {viewSave.some((val) => val?.postId?._id === item._id) ? (
                        <i
                        class="fa-solid fa-bookmark fa-lg text-end ml-80"
                        onClick={() => {
                          addtosaved(item?._id);
                        }}
                      ></i>

                     
                    ) : (
                    
                      <i
                      class="fa-regular fa-bookmark fa-lg ml-80"
                      onClick={() => {
                        addtosaved(item?._id);
                      }}
                    ></i>
                    )}

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
                          deletepost(item?._id);
                        }}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>s
                </div>

                <img
                  src={item.image}
                  alt=""
                  className=" bg-white  border rounded-md"
                />
              </div>
            );
          })}
        </div>
        {/* <div className="bg-[#c52771] w-full  h-[30vh]  mr-2 bg-post2-bg object-cover  border rounded m-5"></div> */}
      </div>
     
    </div>
  );
}

export default Homeee;
