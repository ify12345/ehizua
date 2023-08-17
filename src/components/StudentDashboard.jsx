import React from "react";
import Ehizua from "../assets/Ehizua-Hub-Logo-PNG-1536x211.png";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className=" ">
      <nav className="flex justify-around h-[80px]  items-center bg-blue-500 text-white m-3">
        <div className="border px-5 py-3">My Courses</div>
        <ul className="flex space-x-6">
          <Link>
            <li className="border px-5 py-3">Tutor Details</li>
          </Link>
          <Link>
            <li className="border px-5 py-3">Download Certificate</li>
          </Link>
          <Link>
            <li className="border px-5 py-3">Log Out</li>
          </Link>
        </ul>
      </nav>

      <section className="bg-blue-500 h-[100vh] m-3 p-6 text-2xl flex relative">
          <div className="absolute top-0 left-[30px] py-2 text-white">
          Front End
          </div>
       
        <div className="w-[40%]  h-[92vh] bg-slate-300 p-2 my-6">
          <div className="flex justify-around my-5 items-center">
            Course Curriculum
          </div>
          <div className="text-2xl">
            <span className="font-bold text-2xl mx-2">HTML 101:</span>BEGINERS
            GUIDE TO CODING
          </div>
          <div className=" w-[525px] h-[400px] relative my-3">
            <button className="border-black border px-4 py-3 absolute right-0 m-3">
              Take Test
            </button>
            <div className="p-3 font-thin text-lg">
              <p>-- WHAT IS HTML</p>
              <p>-- GETTING SET UP</p>
              <p>-- HTML SYNTAX</p>
              <p>-- PAGE TITLES</p>
              <p>-- PARAGRAPHS AND HEADING</p>
              <p>-- NESTING HTML ELEMENTS</p>
            </div>
          </div>
        </div>
         <div className="border w-[70%] h-full ml-10 my-6 bg-slate-300">
           <div className="p-5">WHAT IS HTML?</div>
         </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
