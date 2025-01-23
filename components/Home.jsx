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
      className="home flex flex-col sm:flex-row items-center justify-center min-h-screen "
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #331c52, #2b1b4d, #241948, #1d1742, #16153d, #101337, #0b0f31, #050b2b);' }}
    >
      <div className="w-2/4 sm:mr-24 flex items-center justify-center">
        <div>
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
            <h2 className="sm:text-lg text-sm mt-20 sm:mt-40 mb-2 text-purple3">
              Welcome to my Portfolio
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
            <h1 className="Title my-2 text-white">Hi I’m</h1>
            <h1
              className="Title my-2 bg-gradient-to-r from-pink-500 via-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              Farah Albouchi
            </h1>

            <h1 className="Title my-2 text-white">Full Stack Web <span className="bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent">&</span> Mobile developer</h1>
            <p className="mt-5 sm:text-lg text-sm font-normal text-purple3">
              Collaborating with highly skilled individuals,
            </p>
            <p className="mb-5 sm:text-lg text-sm font-normal text-purple3">
              I deliver top-quality services.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
            <div className="flex mb-14 sm:mb-40 mt-10 lg:justify-start space-x-2">
              <ShimmerButton shimmerColor='#DCCFED' background = 'linear-gradient(360deg, #331c52, #321c51, #301b50, #2f1b50, #2e1b4f, #2d1a4e, #2b1a4d, #2a194c, #29194c, #27194b, #26184a, #251849)' className="w-40 h-12   ">
                Hire Me!

              </ShimmerButton>
              <ShimmerButton onClick={handleDownload} shimmerColor='#331C52' background='white' className="shadow-xl  w-56 h-12 ">
                <button onClick={handleDownload} className="bg-white  text-purple2  font-light sm:text-normal sm:font-medium flex items-center space-x-2">
                  <span className="text-[#ff00c3] sm:text-lg text-xs">Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ff00c3"
                    className="size-6"
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
      <div className=" flex items-center justify-center">
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
           className=" p-1 rounded-full"
          />
        </ShineBorder>
      </div>
    </section>
  );
}
