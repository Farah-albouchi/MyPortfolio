import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Expertise() {
    return (
        <section
            id="services"
            className="flex flex-col items-center justify-center px-6 pt-28 pb-28 bg-[#101337]"
        >
            {/* Header Section */}
            <div className="text-center max-w-4xl mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-300 to-blue-500 bg-clip-text text-transparent">
                    My <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Expertise</span>
                </h1>
                <p className="text-white text-base lg:text-lg">
                    Hello, digital innovators! I'm Farah Albouchi, a passionate and inventive web & mobile developer who thrives on turning tech dreams into tangible realities.
                </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
                {/* Front-End Development */}
                <ShineBorder
                    className="rounded-md bg-transparent flex flex-col items-center p-6"
                    color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
                >
                    <Image
                        src="/assets/front-end.png"
                        alt="front-end"
                        width={60}
                        height={60}
                        className="mb-4"
                    />
                    <h2 className="text-white text-lg font-semibold mb-2">Front-End Development</h2>
                    <p className="text-sm font-light text-white text-center">
                        Creating intuitive, visually appealing interfaces that provide seamless user experiences across all devices.
                    </p>
                </ShineBorder>

                {/* Back-End Development */}
                <ShineBorder
                    className="rounded-md bg-transparent flex flex-col items-center p-6"
                    color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
                >
                    <Image
                        src="/assets/desktop.png"
                        alt="back-end"
                        width={60}
                        height={60}
                        className="mb-4"
                    />
                    <h2 className="text-white text-lg font-semibold mb-2">Back-End Development</h2>
                    <p className="text-sm font-light text-white text-center">
                        Building robust, scalable server-side applications that ensure reliable performance and secure data management.
                    </p>
                </ShineBorder>

                {/* Mobile Development */}
                <ShineBorder
                    className="rounded-md bg-transparent flex flex-col items-center p-6"
                    color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
                >
                    <Image
                        src="/assets/mobile.png"
                        alt="mobile"
                        width={60}
                        height={60}
                        className="mb-4"
                    />
                    <h2 className="text-white text-lg font-semibold mb-2">Mobile Development</h2>
                    <p className="text-sm font-light text-white text-center">
                        Designing and developing mobile applications that combine functionality with an easy-to-use interface for a smooth on-the-go experience.
                    </p>
                </ShineBorder>

                {/* Preventative IT Care */}
                <ShineBorder
                    className="rounded-md bg-transparent flex flex-col items-center p-6"
                    color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
                >
                    <Image
                        src="/assets/laptop.png"
                        alt="IT care"
                        width={60}
                        height={60}
                        className="mb-4"
                    />
                    <h2 className="text-white text-lg font-semibold mb-2">Preventative IT Care</h2>
                    <p className="text-sm font-light text-white text-center">
                        Proactively maintaining and monitoring systems to prevent issues, optimize performance, and ensure smooth, uninterrupted operation.
                    </p>
                </ShineBorder>
            </div>
        </section>
    );
}
