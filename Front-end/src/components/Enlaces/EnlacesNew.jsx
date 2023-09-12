import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";

export default function EnlacesNew() {
    const [loginOK, setLoginOK] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  

    const getEmail = localStorage.getItem("loginEmail");

    function handleNew() {
        console.log("Agregar nuevo Enlace");
    };

    useEffect(() => {    
        if (getEmail) {
          setLoginOK(true);
        }
    
      }, []);       
      
      return (
        loginOK ? 
        <div className="bg-slate-400 h-screen">
          <Nav />
          <div>
              <br />
              <br />
              <br />
              <h1 className=" font-bold text-3xl text-center pt-10 text-blue-800">Nuevo Enlace</h1>
              <br />
              <button onClick={handleNew}
                    className="bg-[#2F80ED] text-white w-[150px] h-[38px] mt-3 mb-8 ml-[80%]"
                    type="button"
                >
                    Grabar
                </button>	
                <br />          

            </div>            
        </div>
     : <p>Session Invalid</p>        
    );         

};