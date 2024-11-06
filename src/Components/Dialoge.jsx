import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { useFormik } from "formik";
import axios from "axios";

function Dialoge({ handleOpen, size }) {
  const ids = localStorage.getItem("id");
 

  

  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        image: null,
        description: "",
      },
      onSubmit: async (values) => {
        const formData = new FormData();

        formData.append("image", values.image),
          formData.append("description", values.description);

        await axios.post(`http://localhost:5400/api/posted/${ids}`, formData, {
          headers: {
            "Content-Type": "multipart/formdata",
          },
        });
    
        alert("success");
      
      },
    });

  const handleimage = (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      setFieldValue("image", file);
    }
  };



  return (
    <div>
      {/* <Button onClick={() => handleOpen("md")} variant="gradient">
        Open Dialog MD
      </Button> */}

      <Dialog open={size === "md"} size={size || "md"} handler={handleOpen}>
        <DialogHeader>POST</DialogHeader>
        <div className="w-full h-full bg-blue-900">
          <h1>ytfvuy</h1>
        </div>
        <form action=" " onSubmit={handleSubmit}>
          <DialogBody>
            <div className="mb-5">
              <Input
                label="post"
                type="file"
                onChange={handleimage}
                onBlur={handleBlur}
                name="post"
              ></Input>
            </div>
            <div>
              <Textarea
                label="Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
              ></Textarea>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              type="submit"
              onClick={() => handleOpen(null)}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}

export default Dialoge;
