import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
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
        const response = await fetch('http://127.0.0.1:8000/api/user/details/' + getEmail);
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

    //console.log(data[0].user_name);
    localStorage.setItem("userName", data[0].user_name);

  return (
    loginOK ? 
    <div className="bg-slate-400 h-screen">
      <Nav />
      <div className="flex">
        <div>
          <br />
          <br />
          <br />          
          <Sidebar userData={data} />
        </div>
        <div>
          <br />
          <br />
          <br />
        </div>  
      </div>


    </div>
 : <p>Session Invalid</p>
    
  );

};
