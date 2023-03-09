import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Allcontext";

const Newpost = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [images, setImages] = useState("");
  const { user } = useContext(AuthContext);
 
  const handalenamechange = (e) => {
    setName(e.target.value);
  };
  const handalepostchange = (e) => {
    setPost(e.target.value);
  };
  const handaleimages = (e) => {
    setImages(e.target.files[0]);
  };

  const handaleclick = () => {
    const formData = new FormData();
    formData.append("image", images);
    const url =
      "https://api.imgbb.com/1/upload?key=cfdf6b052709dd278427a89a5cbb7e1d";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const postinfo = {
            title: name,
            description: post,
            userid: user.email,
            images: imageData.data.url,
          };
          fetch('https://ecommerce-server-six.vercel.app/api/auth/newpost',{
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postinfo),
          
          }).then(res => res.json())
          .then(data =>console.log(data))
        }
      });
  };
  return (
    <div className="w-5/6 m-auto mt-20">
      <div>
        <button>
          <div>
            <label htmlFor="my-modal" className="btn border-none rounded-sm mr-4 bg-[#3247cf]">
              Add New
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Add New?</h3>
                <form className="grid grid-cols-1 gap-3 mt-10">
                  <input
                    onChange={handalenamechange}
                    type="text"
                    name="name"
                    placeholder="Post Title"
                    className="input w-full input-bordered "
                  />

                  <input
                    name="contact"
                    type="text"
                    onChange={handalepostchange}
                    placeholder="Post"
                    className="input w-full input-bordered"
                  />
                  <input
                    type="file"
                    onChange={handaleimages}
                    className="input w-full input-bordered"
                    id="image"
                    name="image"
                    accept="image/*"
                  />

                  <br />
                </form>
                <div className="modal-action">
                  <label onClick={handaleclick} htmlFor="my-modal" className="btn">
                    Add Data
                  </label>
                </div>
              </div>
            </div>
          </div>
        </button>
        <Link to="/home"><button className="bg-[#26b5b3] btn border-none pr-10 pl-10 rounded-sm mr-10 hover:bg-[#3247cf]">
          Latest
        </button></Link>

        <Link to="/mypost"><button className="bg-[#3247cf] border-none rounded-sm btn">My Post</button></Link>
       {
        user.isAdmin === true ? <>
        <Link to="/allpost"> <button className="bg-[#3247cf] border-none rounded-sm btn">All Post</button></Link>
        </>
        :
        <> </>
       }
      
      </div>
    </div>
  );
};

export default Newpost;
