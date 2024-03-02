import React from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom"; 

const Profile = () => {
  const { name, pincode, location } = useParams(); 

  return (
    <div className="bg-[#474F7A] min-h-screen text-white  p-4 flex px-72 gap-x-8 pt-24">
      <div className="left flex-1">
        <div className="border border-white bg-slate-800 grid justify-center items-center gap-y-1 p-3 rounded-md">
          <img
            className="hover:scale-[1.2] cursor-pointer"
            width="300"
            height="300"
            src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
            alt=""
          />
          <h1>{name}</h1>
          <p className="text-gray-300">{pincode}</p>
          <p>
            <b>{location}</b>
          </p>
        </div>
      </div>
      <div className="right flex-1 ">
        <p className="break-all font-lighter text-lg ">
          Location : <b>India</b>
          <br />
          Team Members : <b>8-10</b>
          <br />
          Ratings :{" "}
          <b className="text-yellow-400">
            <FaStar />
          </b>
          <b className="text-yellow-400">
            <FaStar />
          </b>
          <b className="text-yellow-400">
            <FaStar />
          </b>
          <b className="text-yellow-400">
            <FaStar />
          </b>
        </p>
        <p className="text-lg break-all mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          eos sit distinctio eaque cumque non est debitis dolorem praesentium
          quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          pariatur assumenda cumque, labore ipsam eos quia labore ipsam eos quia
          quam neque blanditiis
        </p>
        <button className="bg-slate-800 flex-end hover:bg-slate-700 cursor-pointer mt-8 w-full py-4 rounded-md border-none text-gray-300 font-bold tracking-wider text-2xl">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Profile;
