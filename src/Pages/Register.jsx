import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";

function Register() {
  const navigate=useNavigate()
  const { handleBlur, handleChange, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        image: null, // Store the image file here
        password: "",
      },
      onSubmit: async (values) => {
        const formData = new FormData();
        formData.append("image", values.image); // Add image file to FormData
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);

        try {
          await axios.post("http://localhost:5400/api/register", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert("sucess");
          navigate("/login")
        } catch (error) {
          alert("failed..");
        }
      },
    });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("image", file); // Set the selected file in Formik's state
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-green-400 flex flex-col items-center shadow-2xl justify-center w-[50vw] h-[50vh]">
        <div className="w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <h1 className="text-center font-semibold text-3xl">Register</h1>
            </div>
            <div className="mb-5">
              <Input
                type="file"
                label="Upload Image"
                onChange={handleImageChange} // Use custom handler for file input
                name="image"
              />
            </div>
            <div className="mb-5">
              <Input
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
              />
            </div>
            <div className="mb-5">
              <Input
                label="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
            </div>
            <div className="mb-10">
              <Input
                label="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
            </div>
            <div className="text-center">
              <Button className="bg-blue-800" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
