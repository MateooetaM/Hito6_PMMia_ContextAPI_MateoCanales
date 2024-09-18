import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

const urlBase = "http://localhost:5000/api/pizzas";

export const ProductosProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Funcion asincronica para llamar a la API pizzas
  const getData = async () => {
    const response = await fetch(urlBase);
    const datos = await response.json();
    setData(datos);
    // console.log(datos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductosContext.Provider value={{ data, setData }}>
      {children}
    </ProductosContext.Provider>
  );
};
