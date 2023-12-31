import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import AllColleges from "../Layouts/AllColleges/AllColleges";
import Error from "../Error/Error";
import Admission from "../Layouts/Admission/Admission";
import MyCollege from "../Layouts/MyCollege/MyCollege";
import AdmissionForm from "../Layouts/AdmissionForm/AdmissionForm";
import Userinfo from "../Layouts/Userinfo/Userinfo";
import CollegeDetails from "../Layouts/CollegeDetails/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/allColleges", element: <AllColleges></AllColleges> },
      { path: "/admission", element: <Admission></Admission> },
      { path: "/myCollege", element: <MyCollege></MyCollege> },
      {
        path: "/admission/admissionForm",
        element: <AdmissionForm></AdmissionForm>,
      },
      { path: "/userInfo", element: <Userinfo></Userinfo> },
      {
        path: "/collegeDetails/:id",
        element: <CollegeDetails></CollegeDetails>
      },
    ],
  },
  { path: "/*", element: <Error></Error> },
]);

export default router
