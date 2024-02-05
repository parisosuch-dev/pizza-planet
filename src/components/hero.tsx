import heroImage from "../../public/hero.png"
import { Button } from "./ui/button"

export default function Hero() {
    const buttonStyle = "bg-pizza-red hover:bg-pizza-red/75 w-[64px] h-[28px] sm:w-[128px] sm:h-[48px] font-inter text-[8px] sm:text-[16px] font-medium";

    return (
        <div className="flex flex-col sm:flex-row text-center items-center sm:text-left sm:justify-between sm:space-x-8 space-y-8 sm:space-y-0">
            <div className="sm:w-1/2 space-y-2 sm:space-y-8">
                <h1 className="font-space font-bold text-[24px] sm:text-[64px] leading-tight">Experience the out-of-this-world taste at Pizza Planet</h1>
                <p className="text-[12px] sm:text-[24px]">Indulge in delicious pizza and enjoy a fun-filled arcade experience at our space-themed restaurant.</p>
                <div className="space-x-8 font-inter">
                    <Button className={buttonStyle}>Order</Button>
                    <Button className={buttonStyle}>Visit</Button>
                </div>
            </div>
            <img
                className="w-[345px] h-[234px] sm:w-1/2 sm:h-[467px] rounded-lg"
                src={heroImage.src}
            />
        </div >
    )
}