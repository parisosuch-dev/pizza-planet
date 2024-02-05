import { Button } from "./ui/button"
import pizza from "../../public/pizza.png";

export default function Menu() {
    const buttonStyle = "bg-pizza-red hover:bg-pizza-red/75 w-[64px] h-[28px] sm:w-[128px] sm:h-[48px] font-inter text-[8px] sm:text-[16px] font-medium";

    return (
        <div className="flex flex-col items-center text-center sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
            <div className="flex flex-col items-center sm:items-start sm:text-left space-y-4 sm:space-y-8 sm:w-1/2">
                <h2 className="font-space font-bold text-[18px] sm:text-[48px] leading-tight">Explore Our Delicious Pizza Menu and Discover Your Favorite Toppings</h2>
                <Button className={buttonStyle}>Menu</Button>
            </div>
            <img src={pizza.src} className="w-full sm:w-1/2 object-cover rounded-lg" />
        </div>

    )
}