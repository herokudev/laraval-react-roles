import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";

export default function RolesNew() {
    const [loginOK, setLoginOK] = useState(false);
    const [error, setError] = useState(null);
    const [descripcion, setDescripcion] = useState("");

    const getEmail = localStorage.getItem("loginEmail");

    const handleDescripChange = (e) => {
        setDescripcion(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          descripcion: descripcion,
        };
        
        const request_options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };
    
        fetch("http://127.0.0.1:8000/api/rol/create", request_options)
          .then((res) => res.json())
          .then(
            (result) => {
                console.log("POST result -> " + result);
            },
            (error) => {
              setError(error);
              console.log(error);
            }
          );
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
              <h1 className=" font-bold text-3xl text-center pt-10 text-blue-800">Nuevo Role</h1>
              <br />
              <form    
                className="w-[330px] mx-4 mt-8 max-w-[1200px] lg:ml-[40%]"
                onSubmit={handleSubmit}
                >
                <div>
                    <p className=" font-bold text-2xl">Ingrese nuevo Role:</p>
                </div>
                <div className="w-[300px] mt-3 rounded-lg flex items-center justify-start border-2 border-gray-400">
                    <input
                    className="p-2 outline-none w-[450px]"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Descripcion"
                    onChange={handleDescripChange}
                    />
                </div>
                <button
                    className="bg-[#2F80ED] text-white w-[200px] h-[38px] mt-12 rounded-lg"
                    type="submit"
                >
                    Login
                </button>		
                </form>             
              <br />          
            </div>            
        </div>
     : <p>Session Invalid</p>        
    );         

};