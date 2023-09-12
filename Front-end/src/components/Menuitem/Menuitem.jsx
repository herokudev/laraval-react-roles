import { Dropdown, Navbar } from "flowbite-react";

export default function Menuitem(props) {
    const { tipo, url, menuLabel } = props;
    return (
        <Navbar.Link
            href={url}
            className=" border-b-0 flex h-20 p-4 items-center text-white   hover:bg-blue-900"
        >
            {menuLabel}
        </Navbar.Link>        
    )
}