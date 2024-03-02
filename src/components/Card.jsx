
const Card = ({ name, pincode, location }) => {
  return (
    <div className="border border-white bg-slate-800 grid justify-center items-center gap-y-1 p-3 rounded-md hover:bg-slate-900 cursor-pointer">
      <a
        href={`/profile/${name}/${pincode}/${location}`}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <img
          className="hover:scale-[1.2] cursor-pointer"
          width="300"
          height="300"
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
          alt=""
        />
        <h1 className="text-white">{name}</h1>
        <p className="text-gray-300">{pincode}</p>
        <p className="text-gray-300">
          <b>{location}</b>
        </p>
      </a>
    </div>
  );
};

export default Card;
