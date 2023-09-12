import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo_img from "../../assets/devchallenges.svg";
import email_img from "../../assets/Email.svg";
import pwd_img from "../../assets/Locked.svg";
import google_img from "../../assets/Google.svg";
import facebook_img from "../../assets/Facebook.svg";
import twitter_img from "../../assets/Twitter.svg";
import github_img from "../../assets/Github.svg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigatetoUrl = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loginEmail");
    localStorage.removeItem("userName");
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    
    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://127.0.0.1:8000/api/user/login", request_options)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result == "1") {
            localStorage.setItem("loginEmail", email);
            navigatetoUrl("/home");
          } else {
            navigatetoUrl("/nouser");
          }
        },
        (error) => {
          setError(error);
          console.log(error);
        }
      );
  };

  return (
    <main className="box-content w-[470px] mx-[4%] pl-[2%] lg:mt-10 lg:ml-[30%] lg:border-4 border-gray-300 rounded-3xl">
    <div className="w-[300px] mx-4 lg:ml-[15%] lg:max-w-[1200px]">
      <div className="w-[300px] mt-10">
        <img
          className="h-5 w-auto"
          src={logo_img}
          alt="Your Company"
        />
      </div>
      <div className="w-[275px] mt-6">
        <p className="text-1xl font-bold text-black">Login</p>
      </div>
    </div>
    <form    
      className="w-[330px] mx-4 mt-8 max-w-[1200px] lg:ml-[15%]"
      onSubmit={handleSubmit}
    >
      <div className="w-[300px] mt-3 rounded-lg flex items-center justify-start border-2 border-gray-400">
        <img
          className="h-5 w-auto pl-2 pr-2"
          src={email_img}
          alt="email-icon"
        />
        <input
          className="p-2 outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="w-[300px] mt-3 rounded-lg flex items-center justify-start border-2 border-gray-400">
        <img
          className="h-5 w-auto pl-2 pr-2"
          src={pwd_img}
          alt="pwd-icon"
        />
        <input
          className="p-2 outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="bg-[#2F80ED] text-white w-[300px] h-[38px] mt-6 rounded-lg"
        type="submit"
      >
        Login
      </button>		
    </form>
    <div className="w-[300px] mx-4 mt-5 lg:ml-[15%] max-w-[1200px]">
      <div className="flex items-center justify-center">
        <p>or continue with these social profile</p>
      </div>
      <div className="flex items-center justify-center gap-8 mt-5">
        <img
          className="w-[42px] h-[42px]"
          src={google_img}
          alt="google-icon"
        />
        <img
          className="w-[42px] h-[42px]"
          src={facebook_img}
          alt="facebook-icon"
        />
        <img
          className="w-[42px] h-[42px]"
          src={twitter_img}
          alt="twitter-icon"
        />
        <img
          className="w-[42px] h-[42px]"
          src={github_img}
          alt="github-icon"
        />
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">

      </div>
    </div>
  </main>
  );
}

export default LoginForm;
