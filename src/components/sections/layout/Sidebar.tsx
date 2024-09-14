import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen bg-gray-800 p-4 text-white lg:block">
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
