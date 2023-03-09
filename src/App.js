import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allpost from "./components/allpost/Allpost";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Mypost from "./components/mypost/Mypost";
import Nav from "./components/nav/Nav";
import Post from "./components/post/Post";
import Registation from "./components/registation/Registation";
import { AuthContext } from "./context/Allcontext";
import Private from "./router/Privateroute";

function App() {
  const {user} = useContext(AuthContext)
  const route = createBrowserRouter([
   
    {path: "/home", element: <Home></Home>, children:[

      {path: "/home", element:<Post></Post>},
     
    ]},
   {path: "/mypost", element:<Mypost></Mypost>},
   {path: "/allpost", element:<Allpost></Allpost>},
    {path: "/", element: <Login></Login>},
    {path: "/register", element: <Registation></Registation>}
])
  return (
    <RouterProvider router={route}>

   </RouterProvider>
  );
}

export default App;
