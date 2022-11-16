import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  return (
    <div className=" flex w-full justify-evenly bg-slate-100">
      <p className="text-3xl">Header</p>
      <ul className=" cursor-pointer">
        {location.pathname === "/" ? (
          <li onClick={(e) => naviagte("/hotel/123")}>Item</li>
        ) : (
          <li onClick={(e) => naviagte("/")}>Search Result</li>
        )}
      </ul>
    </div>
  );
};

export default Header;
