import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";

export default function Bitacoraspage() {
    const [loginOK, setLoginOK] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);      

    const getEmail = localStorage.getItem("loginEmail");

    useEffect(() => {    
      if (getEmail) {
        setLoginOK(true);
      }

      async function fetchData() {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/bitacora');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
  
      fetchData();         
  
    }, []);    

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    const arrayOfObjects = Object.keys(data).map(key => data[key]);
    //console.log(arrayOfObjects);    

    return (
        loginOK ? 
        <div className="bg-slate-400 h-screen">
          <Nav />
          <div>
              <br />
              <br />
              <br />
              <h1 className=" font-bold text-3xl text-center pt-10 text-blue-800">Listado de Bitacora</h1>
              <br />
              <table className="min-w-full">
                <thead className="bg-white border-b">
                    <tr>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Nro.
                        </th>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Usuario
                        </th>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Bitacora
                        </th>   
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Fecha
                        </th>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Hora
                        </th>                                                                     
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Operaciones
                        </th>                                         
                    </tr>
                </thead>
                <tbody>
                {arrayOfObjects.map((item, index) => (
                    <tr key={index} className="bg-gray-100 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.usuario.user_name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.accion + " " + item.entidad}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.fecha}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.hora}
                    </td>                                        
                    <td>
                        <div className=" bg-green-700 text-white text-center w-[150px]">Editar</div>
                    </td>
                </tr>                    
                ))}                                   
                </tbody>
              </table>
              
          </div>            
        </div>
     : <p>Session Invalid</p>        
    );    
}
