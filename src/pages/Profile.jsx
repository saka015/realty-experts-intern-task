import React from "react";
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          non vel illo, suscipit cumque nihil, ducimus temporibus praesentium
          accusamus facilis. Fuga voluptatem aliquid perferendis temporibus ut
          accusamus facilis. Fuga voluptatem aliquid temporibus ut sunt dolore
          accusamus facilis. Fuga voluptatem aliquid temporibus ut sunt dolore
          soluta id nam, quia in explicabo fugit. Qui tempore assumenda quasiQui
          tempore assumenda quasi cum iste ad provident dolorum.
        </p>
        <button className="bg-slate-800 flex-end hover:bg-slate-700 cursor-pointer mt-8 w-full py-4 rounded-md border-none text-gray-300 font-bold tracking-wider text-2xl">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Profile;
