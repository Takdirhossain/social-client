import { Outlet } from "react-router-dom";
import Newpost from "./addnew/Newpost";
import Nav from "./nav/Nav"
import Post from "./post/Post";

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Newpost></Newpost>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;