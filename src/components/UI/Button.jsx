import { Link } from "react-router-dom";

const Button = ({ path, click, title, icon, styles }) => {
  return (
    <Link
      to={path}
      onClick={click}
      className={`${styles} border border-green-700 text-green-700 px-6 py-3 rounded-full flex justify-center items-center gap-2 text-sm hover:bg-green-700 hover:text-white duration-150 hover:scale-100 scale-95`}
    >
      {title} {icon}
    </Link>
  );
};

export default Button;
