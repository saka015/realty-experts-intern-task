import { useState } from "react";
import Card from "../components/Card";

const RealState = () => {
  const [pincode, setPincode] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    { name: "John Doe", pincode: "884603", location: "Delhi" },
    { name: "Jane Smith", pincode: "802155", location: "Mumbai" },
    { name: "Alice Johnson", pincode: "144605", location: "Bangalore" },
    { name: "John ", pincode: "802155", location: "Mumbai" },
    { name: "Bob Brown", pincode: "635631", location: "Chennai" },
    { name: "Elon Musk", pincode: "884603", location: "Delhi" },
    { name: "Mohan Johnson", pincode: "144605", location: "Bangalore" },
    { name: "Neha Brown", pincode: "635631", location: "Chennai" },
  ];

  const handlePincodeChange = (e) => {
    const { value } = e.target;
    setPincode(value);
    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((item) => item.pincode.includes(value));
      setFilteredData(filtered);
    }
  };

  return (
    <div className="bg-[#474F7A] min-h-screen text-white  p-4">
      <div className="text-2xl grid justify-center  h-12 ">
        <input
          type="number"
          className="border-none outline-none w-full px-10 py-2 rounded-sm text-4xl active:shadow-md focus:outline-none"
          placeholder="Enter your pincode..."
          value={pincode}
          onChange={handlePincodeChange}
        />
      </div>
      <div className="m-4 mt-24 grid grid-cols-4 gap-4">
        {pincode === "" ? (
          data.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              pincode={item.pincode}
              location={item.location}
            />
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              pincode={item.pincode}
              location={item.location}
            />
          ))
        ) : (
          <p>No agent found in area with this pincode!</p>
        )}
      </div>
    </div>
  );
};

export default RealState;
