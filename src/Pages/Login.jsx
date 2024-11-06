import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";


function Login() {
  const navigate=useNavigate()
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
     
      email: "",
      password: "",
    },
    onSubmit: async () => {
      const res=await axios.post("http://localhost:5400/api/login", {
        email: values.email,
        password: values.password,
      });
      console.log(res.data,"kkjkj");
      
      localStorage.setItem("id",res.data.user._id)
      navigate("/home")
      alert("success");
    },
  });

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center ">
        <div className="bg-green-400 flex flex-col items-center  shadow-2xl justify-center w-[50vw] h-[50vh]  ">
          <div className="w-96 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <h1 className="text-center font-semibold text-3xl ">Login</h1>
              </div>
              {/* <div className="">
                <Input
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                ></Input>
              </div> */}
              <div className="mt-5">
                <Input
                  label="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                ></Input>
              </div>
              <div className="mt-5 mb-10">
                <Input
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                ></Input>
              </div>
              <div className=" text-center">
                <Button className="bg-blue-800" type="submit">
                  {" "}
                  submit
                </Button>
              </div>
            </form>
            {console.log(values)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
