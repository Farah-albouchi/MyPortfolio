import NumberTicker from "@/components/ui/number-ticker";

export default function Numbers () {
    return (
        <section
        className="flex flex-row justify-around items-center "
        style={{ backgroundImage: 'linear-gradient(90deg, rgba(5,11,43,1) 0%, rgba(36,25,72,1) 24%, rgba(51,28,82,1) 55%, rgba(74,65,97,1) 100%, rgba(144,144,168,1) 100%)' }}
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