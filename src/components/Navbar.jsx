import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-slate-300 p-4">Realty Expert Group</h1>
      </Link>
    </div>
  );
}

export default Navbar