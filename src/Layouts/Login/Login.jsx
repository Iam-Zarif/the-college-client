import img from "../../assets/scl.gif"
import gog from "../../assets/google (2).png"
import git from "../../assets/github (2).png"
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
const Login = () => {
    return (
      <Container>
        <div className="mt-14 basic-font">
          <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2">
            <div>
              <img src={img} className="rounded-2xl" alt="" />
            </div>
            <div className="shadow-lg shadow-black rounded-xl">
              <p className="text-3xl text-center">Please Login</p>
              <div className="mt-12">
                <form>
                  <div className="flex flex-col gap-10">
                    <input
                      type="email"
                      placeholder="Type email"
                      name="email"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                    <input
                      type="password"
                      placeholder="Type password"
                      name="password"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mx-auto block mt-10 shadow-blue-900 shadow-md px-5 py-2 rounded-xl text-xl hover:shadow-slate-500"
                  >
                    Log in
                  </button>
                  <div className="flex justify-evenly mt-8 ">
                    <img src={gog} alt="" />
                    <img src={git} alt="" />
                  </div>
                </form>
                <hr className="mt-8 w-1/2 mx-auto" />
                <div>
                  <p className="text-xl text-center mt-10">
                    New to <span className="text-blue-400">Degree Camp</span> ?{" "}
                    <Link to="/register" className="underline text-white">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Login;