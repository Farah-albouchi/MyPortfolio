
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Expertise() {
    return (
        <section

            id="services"
            className="flex flex-col sm:flex-row items-center justify-center  text-center sm:text-left px-6 pt-28 pb-28  bg-[#101337]"
        // style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}

        >
            <span className="flex flex-col items-center sm:items-start text-center sm:text-left  max-w-md sm:mr-36">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-300 to-blue-500  bg-clip-text text-transparent">My <span className="bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent">Expertise</span></h1>
                <p className="text-white">
                    Hello, digital innovators! I'm Farah Albouchi, a passionate and inventive web & mobile developer who thrives on turning tech dreams into tangible realities.
                </p>
            </span>

            <div class="  max-h-96 grid grid-rows-8 grid-flow-col gap-4">
                <div class=" space-y-5 row-start-1 row-span-3 ...">

                <ShineBorder
          // borderRadius='300px'
           className="   rounded-md sm:w-64 w-20 bg-transparent  flex justify-center flex-col items-center "
          color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
        >

                        <div

                           className="flex justify-center flex-col items-center p-2 space-y-2 "
                        >
                            <Image
                                src="/assets/front-end.png"
                                alt="front"
                                width={50}
                                height={50}
                            />
                            <h1 className="text-white text-lg">Front-End Development</h1>
                            <p className="text-xs font-light text-white text-center">Creating intuitive, visually appealing interfaces that provide seamless user experiences across all devices</p>
                        </div>
                    </ShineBorder>
                    <ShineBorder
          // borderRadius='300px'
           className="   rounded-md sm:w-64 w-20 bg-transparent  flex justify-center flex-col items-center "
          color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
        >

                        <div

                           className="flex justify-center flex-col items-center p-2 space-y-2 "
                        >
               
                        <Image
                            src="/assets/desktop.png"
                            alt="back"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-white text-lg">Back-End Development</h1>
                        <p className="text-xs font-light text-white text-center">Building robust, scalable server-side applications that ensure reliable performance and secure data management</p>
                    </div>
                    </ShineBorder>
                </div>
                <div class=" row-start-2 row-span-3 space-y-5 ...">
                <ShineBorder
          // borderRadius='300px'
           className="   rounded-md sm:w-64 w-20 bg-transparent  flex justify-center flex-col items-center "
          color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
        >

                        <div

                           className="flex justify-center flex-col items-center p-2 space-y-2 "
                        >
                        <Image
                            src="/assets/mobile.png"
                            alt="mobile"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-white text-lg">Mobile Development</h1>
                        <p className="text-xs font-light text-white text-center">Designing and developing mobile applications that combine functionality with an easy-to-use interface for a smooth on-the-go experience</p>
                    </div>
                    </ShineBorder>
                    <ShineBorder
          // borderRadius='300px'
           className="   rounded-md sm:w-64 w-20 bg-transparent  flex justify-center flex-col items-center "
          color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
        >

                        <div

                           className="flex justify-center flex-col items-center p-2 space-y-2 "
                        >
                        <Image
                            src="/assets/laptop.png"
                            alt="IT care"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-white text-lg">Preventative IT Care</h1>
                        <p className="text-xs font-light text-white text-center">Proactively maintaining and monitoring systems to prevent issues, optimize performance, and ensure smooth, uninterrupted operation</p>
                    </div>
                    </ShineBorder>
                </div>
            </div>
           
        </section>
    )
}