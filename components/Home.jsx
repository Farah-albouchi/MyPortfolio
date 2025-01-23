import Image from "next/image";
import '@/app/globals.css';
import BoxReveal from "@/components/ui/box-reveal";
import dynamic from 'next/dynamic';
import {ShineBorder} from "@/components/ui/shine-border";

const ShimmerButton = dynamic(() => import('@/components/ui/shimmer-button'), { ssr: false });

export default function Home() {
  const handleDownload = () => {
    console.log(" aa")
    const downloadUrl = '/Farah_Albouchi.pdf';
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => console.error('Download failed:', err));
  };

  return (
    <section
      id="homepart"
      className="home flex flex-col  md:flex-row items-center justify-center min-h-screen px-6 w-full  "
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}
    >
        <div className="w-full sm:w-3/4 lg:w-2/4 flex items-center justify-center sm:mr-12 mt-10 sm:mt-0">
        <div className="w-full">
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
          <h2 className="sm:text-lg text-sm mt-10 sm:mt-20 lg:mt-40 mb-2 text-purple3 text-center md:text-left">
              Welcome to my Portfolio
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
          <h1 className="Title my-2 text-white text-center md:text-left">Hi I’m</h1>
            <h1 className="Title my-2 bg-gradient-to-r from-pink-500 via-blue-500 to-red-500 bg-clip-text text-transparent text-center md:text-left">
              Farah Albouchi
            </h1>

            <h1 className="Title my-2 text-white text-center md:text-left">
              Full Stack Web <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">&</span> Mobile Developer
            </h1>
            <p className="mt-5 sm:text-lg text-sm font-normal text-purple3 text-center md:text-left">
              Collaborating with highly skilled individuals,
            </p>
            <p className="mb-5 sm:text-lg text-sm font-normal text-purple3 text-center md:text-left">
              I deliver top-quality services.
            </p>
          </BoxReveal>
          <BoxReveal width="full" boxColor={"#DCCFED"} duration={0.5}>
            <div className="flex mb-14 sm:mb-40 mt-10 justify-center items-center lg:justify-start space-x-2 w-full">
              <ShimmerButton shimmerColor='#DCCFED' background = 'linear-gradient(360deg, #331c52, #321c51, #301b50, #2f1b50, #2e1b4f, #2d1a4e, #2b1a4d, #2a194c, #29194c, #27194b, #26184a, #251849)' className=" w-40 h-12   ">
                Hire Me!

              </ShimmerButton>
              <ShimmerButton onClick={handleDownload} shimmerColor='#331C52' background='white' className="shadow-xl w-36 sm:w-56 h-12 ">
                <button onClick={handleDownload} className="bg-white  text-purple2  font-light sm:text-normal sm:font-medium flex items-center space-x-2">
                  <span className="text-pink-500 sm:text-lg text-sm font-bold">Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ff00c3"
                    className="sm:size-6 size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
              </ShimmerButton>

            </div>
          </BoxReveal>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 md:mt-0">
        <ShineBorder
          borderRadius = "250"
          borderWidth={5}
          className="  w-72 h-72 sm:w-96 sm:h-96 p-28 bg-transparent  rounded-full  md:shadow-xl"
          color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
        >
          <Image
            src="/assets/home_img.png"
            alt="Image Description"

            layout="fill"
            objectFit="cover"
           className=" p-1 rounded-full w-24 h-24 md:w-72 md:h-72 "
          />
        </ShineBorder>
      </div>
    </section>
  );
}
