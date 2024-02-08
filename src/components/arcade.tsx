import { FaCheck } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Arcade() {
    const pricingChart = [
        {
            credits: 750,
            cost: 100
        },
        {
            credits: 550,
            cost: 75
        },
        {
            credits: 400,
            cost: 60
        },
        {
            credits: 275,
            cost: 45
        },
        {
            credits: 200,
            cost: 35
        },
        {
            credits: 135,
            cost: 25
        },
        {
            credits: 75,
            cost: 15
        },
    ]

    const benefits = ["Unlimited Plays", "24/hr Access", "Cancel Anytime", "Unlimited Fun", "Exclusive Perks"]

    return (
        <div className="space-y-4 sm:space-y-12">
            <div className="w-full bg-pizza-purple text-pizza-white rounded-lg p-4 sm:p-12">
                <h2 className="font-space font-bold leading-tight text-[18px] sm:text-[48px] text-center">Arcade</h2>
                <p className="text-[12px] sm:text-[24px] font-inter text-center">Explore our exciting arcade games and have a blast!</p>
            </div>
            <div>
                <h3 className="font-space font-bold leading-tight text-[14px] sm:text-[32px] text-center">Pricing</h3>
                <div className="flex flex-col sm:flex-row w-full items-center justify-center space-y-4 sm:space-y-0 sm:space-x-24 mt-4 sm:mt-8">
                    <div className="flex flex-col items-center w-[255px] h-[355px] sm:w-[335px] sm:h-[455px] rounded-lg shadow-lg border-2 border-gray-100 justify-center">
                        <p className="text-[12px] sm:text-[16px] font-inter font-bold mt-2">Regular</p>
                        <h4 className="text-[16px] sm:text-[24px] font-inter font-bold">Credit-Based Play</h4>
                        <p className="font-inter text-[10px] sm:text-[12px] text-pizza-black/50">Games vary in credits.</p>
                        <div className="w-1/2 flex flex-col items-center mt-4">
                            {pricingChart.map((value, index) => (
                                <div className="flex flex-row justify-between items-baseline w-full space-y-4" key={index}>
                                    <p className="text-[12px] sm:text-[16px] font-inter">{value.credits} Credits</p>
                                    <p className="text-[12px] sm:text-[16px] font-inter">${value.cost}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[255px] h-[355px] sm:w-[335px] sm:h-[455px] rounded-lg shadow-lg border-2 border-gray-100 justify-center">
                        <p className="text-[12px] sm:text-[16px] font-inter font-bold mt-2">Membership</p>
                        <h4 className="text-[16px] sm:text-[24px] font-inter font-bold">$29/month</h4>
                        <p className="font-inter text-[10px] sm:text-[12px] text-pizza-black/50">or $299 yearly</p>
                        <div className="flex flex-col items-center justify-center mt-4">
                            {benefits.map((value, index) => (
                                <div className="flex flex-row space-x-2 items-center sm:items-baseline w-full sm:space-y-4" key={index}>
                                    <FaCheck className="w-[10px] sm:w-[16px]" />
                                    <p className="text-[12px] sm:text-[16px] font-inter">{value}</p>
                                </div>
                            ))}
                        </div>
                        <Button className="w-3/4  bg-pizza-purple font-inter mt-8 h-[28px] text-[8px] sm:h-[48px] sm:text-[16px] font-medium">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}