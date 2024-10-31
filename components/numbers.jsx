import NumberTicker from "@/components/ui/number-ticker";

export default function Numbers () {
    return (
        <section
        className="flex flex-row justify-around items-center "
        style={{ backgroundImage: 'linear-gradient(90deg, rgba(51,28,82,1) 10%, rgba(129,33,208,1) 46%, rgba(150,99,218,1) 100%)' }}
        >
        <div className="flex flex-col justify-center items-center">
        <p className="whitespace-pre-wrap text-4xl sm:text-8xl font-medium  text-white ">
      <NumberTicker className="text-white" value={10} /><span className=" text-3xl sm:text-7xl">+</span>
    </p>
    <p className="text-white text-sm sm:text-xl">
        Projects Completed 
    </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
        <p className="whitespace-pre-wrap text-4xl sm:text-8xl font-medium  text-white ">
      <NumberTicker className="text-white" value={5} /><span className=" text-3xl sm:text-7xl">+</span>
    </p>
    <p className="text-white text-sm sm:text-xl">
        Certifications
    </p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="whitespace-pre-wrap text-4xl sm:text-8xl font-medium  text-white ">
      <NumberTicker className="text-white" value={6} /><span  className=" text-3xl sm:text-7xl">+</span>
    </p>
    <p className="text-white text-sm sm:text-xl">
       Awards And Achievements
    </p>
        </div>
        </section>
    )
}