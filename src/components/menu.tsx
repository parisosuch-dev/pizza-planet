import { Button } from "./ui/button"

export default function Menu() {
    const buttonStyle = "bg-pizza-red hover:bg-pizza-red/75 w-[64px] h-[28px] sm:w-[128px] sm:h-[48px] font-inter text-[8px] sm:text-[16px] font-medium";

    return (
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-8">
            <h2 className="font-space font-bold text-[18px] sm:text-[48px] sm:w-1/3">Explore Our Delicious Pizza Menu and Discover Your Favorite Toppings</h2>
            <Button className={buttonStyle}>Menu</Button>
        </div>
    )
}