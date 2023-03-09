import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Allcontext";
import Newpost from "../addnew/Newpost";
import Nav from "../nav/Nav";

const Mypost = () => {
  const [post, setPost] = useState([]);
const {user} = useContext(AuthContext)


  useEffect(() => {
    fetch(`https://ecommerce-server-six.vercel.app/api/auth/${user.email}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [post, user]);

const handaledelete = (id) => {
  fetch(`https://ecommerce-server-six.vercel.app/api/auth/${id}`,{
    method: "DELETE"
  })
}
  return (
    <div className="">
      <Nav></Nav>
      <Newpost></Newpost>
      <div className="overflow-x-auto w-full">
        <table className="table w-5/6 m-auto mt-8">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Images</th>
              <th>Title</th>
              <th>Discription</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            post?.map(ps =>  <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={ps.images}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      
                    </div>
                  </div>
                </td>
                <td>
                 
                  <br />
                  <span className="badge badge-ghost badge-sm">
                  {ps.title}
                  </span>
                </td>
                <td>{ps.description}</td>
                <th>
                  <button onClick={() => handaledelete(ps._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>)
           }
           
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Mypost;
