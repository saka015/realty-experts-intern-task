import { useState } from "react";
import spinner from "../assets/spinner.gif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    navigate("/nearby_agents");
  }
  return (
    <div className="flex justify-center items-center bg-[#474F7A] min-h-screen">
      {loading ? (
        <div>
          <img src={spinner} alt="" />
        </div>
      ) : (
        <button
          onClick={load}
          className="text-white border-none text-xl cursor-pointer rounded-md bg-slate-800 px-4 py-2 tracking-wider hover:text-slate-700 hover:bg-white active:scale-90"
        >
          Find Agents
        </button>
      )}
    </div>
  );
};

export default Home;
