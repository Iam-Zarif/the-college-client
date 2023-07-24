

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";

const Admission = () => {
  Title("DEGREE CAMP | ADMISSION")
    const [colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch("https://the-college-server.vercel.app/allCollege")
        .then((res) => res.json())
        .then((data) => {
          setCollege(data);
        });
    }, []);
    return (
      <div className="mt-44 basic-font">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="grid grid-cols-4 text-xl ">
              <th className="mx-auto">Serial No.</th>
              <th className="mx-auto">Apply on</th>
              <th className="mx-auto">Ratings</th>
              <th className="mx-auto">
                <span className="text-green-500">Online</span>/{" "}
                <span className="text-yellow-500">Offline</span>
              </th>
            </tr>
          </thead>
        </table>
        {colleges.map((college, index) => {
          return (
            <div className="overflow-x-auto">
              <table className="table text-lg">
                {/* head */}

                <tbody>
                  <tr className="grid grid-cols-4 mt-6">
                    <th className="mx-auto">{index + 1}</th>
                    <td className=" mx-auto">
                      <Link
                        to="/admission/admissionForm"
                        data-tip="Click to Apply"
                        className=" lg:tooltip shadow-lg hover:shadow-black rounded-2xl p-1"
                      >
                        {college.college_name}
                      </Link>
                    </td>
                    <td className="mx-auto">{college.rating}</td>
                    <td className="mx-auto text-green-600">
                      Admission Going on
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
};

export default Admission;