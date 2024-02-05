import logo from "../../public/logo_red.png"
import Nav from "./ui/nav";

export default function Header() {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
            <img src={logo.src} className="w-[64px] sm:w-[153px]" alt="Pizza Planet logo" />
            <Nav />
        </div>
    );
}