import IconCloud from "@/components/ui/icon-cloud";

export default function About() {
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
        "nestjs"
    ];

    return (
        <section
            className="flex flex-col sm:flex-row items-center justify-center min-h-screen text-center sm:text-left px-6 py-12"
            style={{ backgroundImage: 'linear-gradient(90deg, rgba(220,207,237,1) 59%, rgba(225,235,237,1) 100%)' }}
        >
            <div className="mt-10 sm:mt-0">
                <IconCloud iconSlugs={slugs} />
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left  max-w-md sm:mr-36">
                <h1 className="text-purple0 text-5xl font-bold mb-6"><span className="text-purple2">About</span> Me</h1>
                <p className="text-purple1">
                    I’m a tech enthusiast and a passionate web & mobile developer.
                    Currently pursuing my engineering degree in IT at the Higher Institute of Applied Sciences and Technology of Sousse, I thrive on innovation and creativity.
                    Throughout my journey, I’ve had the privilege of working on numerous projects, allowing me to develop a diverse set of skills.<br /> My dedication has earned me certificates and victories in various competitions, highlighting my commitment to excellence. For me, technology isn’t just a career; it’s a way of turning ideas into reality.
                </p>
            </div>

        </section>
    );
}
