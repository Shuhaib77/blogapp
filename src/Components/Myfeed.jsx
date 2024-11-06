import axios from "axios";
import React, { useEffect, useState } from "react";

function Myfeed() {
  const [allPosts, setAllposts] = useState([]);
  const allpost = async () => {
    const res = await axios.get("http://localhost:5400/api/posted/all");
    setAllposts(res.data.posts);
  };
  useEffect(() => {
    allpost();
  }, []);
  console.log(allPosts, "kkkff");

  //   const allusers = async () => {
  //     const res = await axios.get("http://localhost:5400/api/allusers");
  //     setUsers(res.data.users);
  //   };
  return (
    <div>
      <div className="w-[90vh] h-[87vh] flex flex-wrap text-center  gap-2 overflow-auto  ">
        <div className=" text-3xl  font-medium sticky top-0  flex justify-around  shadow-md    bg-[#FEFAE0] w-full p-5 ">
          <h1 className="text-center w-full  ">All posts</h1>
          {/* <Button
                className="ml-32"
                onClick={() => {
                  setClick(true);
                  handleOpen("md");
                }}
              >
                post
              </Button> */}
          {/* {click && <Dialoge handleOpen={handleOpen} size={size} />} */}
        </div>

        {/* Postview */}
        <div className=" w-full h-full   object-cover    m-5">
          {allPosts.map((item) => {
            return (
              <div className="p-5">
                <div className="text-start  w-full border-2 border-b-[#FEFAE0] rounded border-black  flex justify-between items-center p-3 ">
                  <h1 className="">{item.description}</h1>
                  {/* 
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
                      </Menu> */}
                </div>

               <div className="h[57vh]">
               <img
                  src={item.image}
                  alt=""
                  className=" bg-white  border   object-cover w-full rounded-md"
                />
               </div>
              </div>
            );
          })}
        </div>
        {/* <div className="bg-[#c52771] w-full  h-[30vh]  mr-2 bg-post2-bg object-cover  border rounded m-5"></div> */}
      </div>
      <div className="w-full h-[3vh] bg-[#133E87]"></div>
    </div>
  );
}

export default Myfeed;
