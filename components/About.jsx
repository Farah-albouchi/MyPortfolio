import {IconCloud} from "@/components/ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "firebase",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "nestjs",
    "mongodb",
    "mysql",
    "intelliJ IDEA",
    "php",
    "symfony",
   "electron"

];
export default function About() {
    
const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

    return (
        <section
            //   style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}

        id="about"
            className="flex flex-col sm:flex-row items-center py-36 text-center sm:text-left  bg-[#101337] "
            >
            <div className="mt-10 sm:mt-0 flex-1 flex justify-center w-full size-full">
                <IconCloud   images={images}  />
            </div>
            <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left  max-w-md sm:mr-36">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-300 to-blue-500  bg-clip-text text-transparent"><span className="bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent">About</span> Me</h1>
                <p className="text-white">
                    I’m a tech enthusiast and a passionate web & mobile developer.
                    Currently pursuing my engineering degree in IT at the Higher Institute of Applied Sciences and Technology of Sousse, I thrive on innovation and creativity.
                    Throughout my journey, I’ve had the privilege of working on numerous projects, allowing me to develop a diverse set of skills.<br /> My dedication has earned me certificates and victories in various competitions, highlighting my commitment to excellence. For me, technology isn’t just a career; it’s a way of turning ideas into reality.
                </p>
            </div>

        </section>
    );
}
