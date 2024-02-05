import purplePlanets from "../../public/purple_planets.png"

export default function About() {
    return (
        <div className="flex flex-col sm:flex-row justify-center text-center sm:text-left space-y-2 sm:space-y-0 sm:justify-between items-center">
            <h2 className="font-space font-bold leading-tight text-[18px] sm:text-[48px] sm:w-1/3">Discover a Galactic Dining Experience at Pizza Planet</h2>
            <img
                src={purplePlanets.src}
                className="w-[64px] sm:w-[256px]"
            />
            <p className="sm:w-1/3 text-[12px] sm:text-[24px] font-inter">Pizza Planet is a unique pizza restaurant and arcade that takes you on a journey through outer space. With its alien-themed décor and rocket ship designs, it offers a dining experience like no other. Our menu features a wide variety of delicious pizzas with out-of-this-world flavors.</p>
        </div>
    )
}