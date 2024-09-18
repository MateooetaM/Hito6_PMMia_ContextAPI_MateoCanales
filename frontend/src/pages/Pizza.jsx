import { useEffect, useState } from "react";
import "./Pizza.css";

const urlPizza = "http://localhost:5000/api/pizzas/p004";

function Pizza() {
  const [detalles, setDetalles] = useState({});

  const getData = async () => {
    const response = await fetch(urlPizza);
    const data = await response.json();
    setDetalles(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="body">
      <h1 className="text-center mt-3">Elige a la carta!</h1>
      <p className="text-center">
        Las mejores sabores del mediterraneo en un solo lugar
      </p>
      <div className="d-flex flex-wrap gap-3 p-0 p-sm-2 justify-content-center">
        <div className="card mb-3" style={{ width: "540px" }}>
          <div key={detalles.id} className="row g-0">
            <div className="col-md-4">
              <img
                src={detalles.img}
                className="img-fluid rounded-start"
                style={{ height: "100%", width: "250px" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h3 className="card-title text-center mt-3">
                  Pizza: {detalles.name}
                </h3>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item mb-0">{detalles.desc}</li>
                  <li className="list-group-item">
                    Ingredientes:{" "}
                    {detalles.ingredients && detalles.ingredients.join(", ")}
                  </li>
                  <h5 className=" list-group-item mb-0">
                    Precio: {detalles.price}
                  </h5>

                  <div className="list-group-item card-body cards-buttons d-flex justify-content-evenly my-2">
                    <a href="#" className="btn btn-dark">
                      Ver Más 👀
                    </a>
                    <a href="#" className="btn btn-dark">
                      Añadir 🛒
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
