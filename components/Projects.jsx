import Image from "next/image";
export default function Projects() {
    return (
        <section
        id="project"
            className="flex flex-col border-t items-center justify-center text-center sm:text-left px-6 pt-56 sm:pt-28 pb-20"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}
        >
           
           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-300 to-blue-500  bg-clip-text text-transparent">My <span className="bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent">Projects</span></h1>
            <p className="text-white">
                Showcasing a selection of my work that blends creativity with technical skill to solve real-world problems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
                {/* Project 1 */}
                <div className="relative border rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
                    <Image
                        src="/assets/ViaVolt.png"
                        width={500}
                        height={300}
                        layout="responsive"
                        className="rounded-lg transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a className="text-white" target="_blank" href="https://github.com/Farah-albouchi/VIA-VOLT" >ViaVolt</a>
                        {/* <span className="text-white text-lg font-semibold">Project 1</span> */}
                    </div>
                </div>
                
                {/* Project 2 */}
                <div className="relative border rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
                    <Image
                        src="/assets/Dashboard.png"
                        width={500}
                        height={300}
                        layout="responsive"
                        className="rounded-lg transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a className="text-white" target="_blank" href="https://github.com/Farah-albouchi/Portfolio-Dashboard" >GenPort</a>
                    </div>
                </div>
                
                {/* Project 3 */}
                <div className="relative border rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
                    <Image
                        src="/assets/Petsn.png"
                        width={500}
                        height={300}
                        layout="responsive"
                        className="rounded-lg transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a className="text-white" target="_blank" href="https://github.com/Farah-albouchi/Petsn" >Petsn</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
