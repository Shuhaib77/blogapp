import axios from 'axios';
import React, { useEffect, useState } from 'react'

function History() {
    const [deleted, setDeleted] = useState([]);

    const id=localStorage.getItem("id")

    const deletepost = async (pid) => {
        const res = await axios.delete(
          `http://localhost:5400/api/posted/delete/${pid}/${id}`
        );
        setDeleted(res.data.deleteditems);
        postbyuser();
      };
      useEffect(() => {
        deletepost();
      }, []);
      console.log(deleted);
  return (
    <div className='w-full h-full'>
        <div>
            {
                deleted.map((item)=>{
                    return(
                        <div>
                                  <img src={item.img} alt="" />

                        </div>

                    )
                })

            }
      

        </div>
    </div>
  )
}

export default History