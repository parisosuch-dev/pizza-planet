import { Button } from "./button";

export default function Nav() {
    const linkStyle = "font-inter text-[12px] sm:text-[16px] font-medium hover:underline hover:cursor-pointer"

    return (
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-2 sm:space-y-0 items-center">
            <div className="space-x-4 sm:space-x-12">
                <a className={linkStyle}>Home</a>
                <a className={linkStyle}>About Us</a>
                <a className={linkStyle}>Menu</a>
                <a className={linkStyle}>Arcade</a>
                <a className={linkStyle}>Locations</a>
                <a className={linkStyle}>Contact</a>
            </div>
            <div>
                <Button className="bg-pizza-red hover:bg-pizza-red/75 w-[96px] sm:w-[128px] font-inter text-[12px] sm:text-[16px] font-medium">Order</Button>
            </div>
        </div>
    );
}