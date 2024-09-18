import React from "react";
import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    //Validacion
    if (email.trim() !== "mateo@gmail.com" || password.trim() !== "123asd") {
      setError(true);
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="form-login">
        <h1>Login</h1>
        <form onSubmit={validarDatos} className="formulario">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn
            btn-primary"
          >
            Ingresar
          </button>
          {error && (
            <p style={{ color: "red" }}>Los datos ingresados no son válidos</p>
          )}
          {success && (
            <p style={{ color: "green" }}>Datos enviados correctamente</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
