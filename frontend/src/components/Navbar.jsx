import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const Navbar = () => {
  // const total = 25000;
  const token = false;

  const { calcularTotal } = useContext(CarritoContext);

  return (
    <nav className="navbar ">
      <div className="nav-elements container-fluid">
        <h1 className="fs-5 text-light">¡Pizzería Mamma Mia!</h1>
        <div className="nav-button">
          <Link className="btn btn-outline-light" to="/">
            🍕 Home
          </Link>
          {token != true ? (
            <>
              <Link className="btn btn-outline-light" to="/profile">
                🔓 Profile
              </Link>
              <Link className="btn btn-outline-light" to="/">
                🔒 Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">
                {" "}
                🔐 Login
              </Link>
              <Link className="btn btn-outline-light" to="/register">
                {" "}
                🔐 Register
              </Link>
            </>
          )}
        </div>

        <div className="button-derecha">
          <Link className="btn btn-outline-info" to="/cart">
            🛒 Total: ${calcularTotal()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
