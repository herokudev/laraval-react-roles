import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

export default function Usuariospage() {
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
          const response = await fetch('http://127.0.0.1:8000/api/user');
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
              <h1 className=" font-bold text-3xl text-center pt-10 text-blue-800">Listado de Usuarios</h1>
              <br />
              <div className="bg-[#2F80ED] text-white text-center pt-2 w-[150px] h-[45px] mt-3 mb-8 ml-[80%]">
                <Link to="/usuarios/create" >+Agregar</Link>
              </div>            
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
                        Nombre completo
                        </th>      
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Roles
                        </th>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Estado
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
                  
                  </tbody>    
                </table>        
            </div>            
        </div>
     : <p>Session Invalid</p>        
    );    
}
