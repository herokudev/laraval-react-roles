import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigatetoUrl = useNavigate();   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigatetoUrl("/home");
    };

    return (
        <div>
            <Nav />
            <br />
            <br />              
            <main className="box-content w-[625px] mx-[4%] p-10 my-6 border-4 border-gray-300 rounded-3xl lg:mx-[12%]">
            <div>
            <div className=" text-2xl">Change Info</div>
            <div className=" text-sm text-gray-400">
                Changes wil be reflected to every services
            </div>
            </div>
            <form onSubmit={handleSubmit} >
            <div className="flex items-center justify-start mt-5">
                <div>
                <img
                    className="h-14 rounded-full border border-black"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                    alt="user"
                />
                </div>
                <label className="change-photo">
                <input className="input-file" type="file" name="imagen" id="image" />
                <span>CHANGE PHOTO</span>
                </label>
            </div>
            <div className="mt-5">
                <span>Name</span>
                <div className="w-[415] h-[52px] border-[1px] border-[#828282] rounded-[12px]">
                <input
                    className="ml-2 p-3 outline-none"
                    type="text"
                    name="userName"
                    id="userName"
                    defaultValue=""
                    placeholder="Enter your name..."
                />
                </div>
            </div>
            <div className="mt-5">
                <span>Bio</span>
                <div className="w-[415] h-[52px] border-[1px] border-[#828282] rounded-[12px]">
                <input
                    className="ml-2 p-3 outline-none"
                    type="text"
                    name="userBio"
                    id="userBio"
                    defaultValue=""
                    placeholder="Enter your bio..."
                />
                </div>
            </div>
            <div className="mt-5">
                <span>Phone</span>
                <div className="w-[415] h-[52px] border-[1px] border-[#828282] rounded-[12px]">
                <input
                    className="ml-2 p-3 outline-none"
                    type="text"
                    name="userPhone"
                    id="userPhone"
                    defaultValue=""
                    placeholder="Enter your phone..."
                />
                </div>
            </div>
            <div className="mt-5">
                <span>Email</span>
                <div className="w-[415] h-[52px] border-[1px] border-[#828282] rounded-[12px]">
                <input
                    className="ml-2 p-3 outline-none"
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    defaultValue=""
                    placeholder="Enter your email..."
                />
                </div>
            </div>
            <div className="mt-5">
                <span>Password</span>
                <div className="w-[415] h-[52px] border-[1px] border-[#828282] rounded-[12px]">
                <input
                    className="ml-2 p-3 outline-none"
                    type="password"
                    name="userPassword"
                    id="userPassword"
                    defaultValue=""
                    placeholder="Enter your password..."
                />
                </div>
            </div>
            <button
                className="bg-[#2F80ED] text-white w-[150px] h-[38px] mt-6 rounded-lg"
                type="submit"
            >
                Submit
            </button>	
            </form>
        </main>
        </div>                    
    );

}