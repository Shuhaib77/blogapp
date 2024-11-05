import React from "react";

function Home() {
  return (
    <div>
      {/* home nav */}
      <div className="h-[10vh] w-full bg-red-300 flex">
        <div className=" w-[50vw] bg-black">
          <h1>bkbjk</h1>
        </div>
        <div className="w-[100vw] flex text-center justify-center items-center bg-blue-gray-700 ">
          {/* search */}
          <input type="text" className="w-80 h-6 border rounded-xl" />
        </div>
        <div className="w-[50vw] flex justify-end  bg-green-500 ">
          <h1 className="">Login</h1>
          <h1>Register</h1>
        </div>
      </div>

      {/* home content */}

      <div className="w-full h-full flex ">
        <div className=" w-[50vh] h-[90vh] flex">
          <div className="bg-red-300 w-[12vh]  h-[90vh]">
            <h1>kbjj</h1>
          </div>
          <div className="bg-green-700 w-[32vh] h-[90vh] text-center">
            <h1>Your posts</h1>
          </div>
        </div>

        <div className=" w-[100vh]   shadow-2xl h-[90vh]">
          {/* bar */}
          <div className="w-full h-[25vh] grid place-content-center bg-[#055459]">
            <div className="w-[80vh] bg-banner-bg object-cover  h-[23vh] p-10 border rounded-lg">
              <h1 className=" ml-20">Explore Wilde Life Photography</h1>
              <h1 className=" ml-28">Wilde Life Photography is a magic</h1>
              
             
            </div>
          </div>

          {/* main content */}
          <div className="w-full h-[60vh] flex flex-wrap text-center  gap-2 overflow-auto  ">
            <div className=" text-3xl text-center mt-2 font-medium sticky top-0 bg-pink-900 w-full p-3">
            <h1 className="">All posts</h1>
            </div>
            <div className="bg-[#795dc4] w-full h-[30vh] bg-post1-bg   object-cover  border rounded-md m-5"  >

            </div>
            <div className="bg-[#c52771] w-full  h-[30vh]  mr-2 bg-post2-bg object-cover  border rounded m-5">

            </div>
          </div>
          <div className="w-full h-[5vh] bg-[#5d1b6d]"></div>
        </div>
        <div className="bg--800 w-[50vh] h-[90vh] text-center ">
          <div className="w-full h-[25vh] bg-[#1c816a]"></div>
          <div className="w-full  h-[65vh] ">
            <div className="h-[20vh] w-full flex justify-center bg-yellow-700">
              <div className=" w-[30vh] m-4 border rounded bg-white">

              </div>
              <div className=" w-full h-[20vh] bg-black">

              </div>
            </div>
            <div className="h-[20vh] w-full bg-blue-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
