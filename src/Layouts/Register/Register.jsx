import img from "../../assets/scl.gif";

import { Link } from "react-router-dom";
import Container from "../../Container/Container";

const Register = () => {
  return (
    <div>
      <Container>
        <div className="mt-14 basic-font">
          <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2">
            <div>
              <img src={img} className="rounded-2xl" alt="" />
            </div>
            <div className="shadow-lg shadow-black rounded-xl">
              <p className="text-3xl text-center">Please Register</p>
              <div className="mt-10">
                <form>
                  <div className="flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Type Name"
                      name="name"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                    <input
                      type="email"
                      placeholder="Type Email"
                      name="email"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                    <input
                      type="password"
                      placeholder="Type Password"
                      name="password"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                    <input
                      type="url"
                      placeholder="Your Photo Link"
                      name="url"
                      className="mx-auto  input shadow-lg w-1/2 shadow-black block"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mx-auto block mt-10 shadow-blue-900 shadow-md px-5 py-2 rounded-xl text-xl hover:shadow-slate-500"
                  >
                    Log in
                  </button>
                  {/* <div className="flex justify-evenly mt-8 ">
                    <img src={gog} alt="" />
                    <img src={git} alt="" />
                  </div> */}
                </form>
                <hr className="mt-8 w-1/2 mx-auto" />
                <div>
                  <p className="text-xl text-center mt-10">
                    Already have an account  ?{" "}
                    <Link to="/login" className="underline text-white">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
