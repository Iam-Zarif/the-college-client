import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import AllColleges from "../Layouts/AllColleges/AllColleges";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:"/" , element:<Home></Home>},
      {path:"/login" , element:<Login></Login>},
      {path:"/register" , element:<Register></Register>},
      {path:"/allColleges", element:<AllColleges></AllColleges>}
    ]
  },
  {path:"/*" , element:<Error></Error>}
]);

export default router
