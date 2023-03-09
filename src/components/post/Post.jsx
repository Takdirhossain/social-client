import React, { useEffect, useState } from "react";
import Postlike from "../postlike/Postlike";

const Post = () => {
  const [post, setPost] = useState([]);
  const[like, setLike] = useState(false)
  useEffect(() => {
    fetch("https://ecommerce-server-six.vercel.app/api/auth/")
      .then((res) => res.json())
      .then((data) => setPost(data));
  },[post]);

  return (
    <div className="w-5/6 m-auto mt-10 flex gap-40">
      <div className="w-3/5">
      {
        post?.map(ps => <Postlike key={ps._id} setLike={setLike} like={like} ps={ps}></Postlike>
      )
      }
      </div>
      <div>
        <div className="w-96 bg-[#3247cf] text-[#fff]">
          <h2 className="pt-5 pl-5 pb-3">Top People</h2> <hr />
          <div className=" pt-10 flex justify-center">
            <img
              className="w-1/4 rounded-full "
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <div className="ml-10">
              <h2>Jon Dew</h2>
              <h2>200 Connection</h2>
              <h2 className="text-[red]">los angeles</h2>
            </div>
          </div>
          <div className=" pt-10 flex justify-center">
            <img
              className="w-1/4 rounded-full "
              src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2>Rock</h2>
              <h2>300 Connection</h2>
              <h2 className="text-[red]">los angeles</h2>
            </div>
          </div>
          <div className=" pt-10 flex justify-center">
            <img
              className="w-1/4 rounded-full "
              src="https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg"
              alt=""
            />
            <div className="ml-10">
              <h2>Dayana</h2>
              <h2>400 Connection</h2>
              <h2 className="text-[red]">los angeles</h2>
            </div>
          </div>
          <div className=" pt-10 flex justify-center">
            <img
              className="w-1/4 rounded-full "
              src="https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png"
              alt=""
            />
            <div className="ml-10">
              <h2>Smith</h2>
              <h2>200 Connection</h2>
              <h2 className="text-[red]">los angeles</h2>
            </div>
          </div>
          <div className=" pt-10 pb-10 flex justify-center">
            <img
              className="w-1/4 rounded-full "
              src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
              alt=""
            />
            <div className="ml-10">
              <h2>Jon</h2>
              <h2>160 Connection</h2>
              <h2 className="text-[red]">los angeles</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
