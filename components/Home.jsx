import Image from "next/image";
import '@/app/globals.css';
import BoxReveal from "@/components/ui/box-reveal";
import dynamic from 'next/dynamic';
import ShineBorder from "@/components/ui/shine-border";

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
      style={{ backgroundImage: 'linear-gradient(to right top, #331c52, #311c4c, #2e1c46, #2c1c40, #291c3a)' }}
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
            <h1 className="Title text-purple2 my-2">Farah Albouchi</h1>
            <h1 className="Title my-2 text-white">Full Stack Web <span className="text-purple2">&</span> Mobile developer</h1>
            <p className="mt-5 sm:text-lg text-sm font-normal text-purple3">
              Collaborating with highly skilled individuals,
            </p>
            <p className="mb-5 sm:text-lg text-sm font-normal text-purple3">
              I deliver top-quality services.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#DCCFED"} duration={0.5}>
            <div className="flex mb-14 sm:mb-40 mt-10 lg:justify-start space-x-4">
              <ShimmerButton shimmerColor='#DCCFED' background='linear-gradient(to left, #dccfed, #cbb1ea, #ba94e6, #a976e0, #9856da, #8946cc, #7a36be, #6b24b0, #5c2498, #4d2280, #401f69, #331c52)' className="shadow-xl w-36 h-12 flex  ">
                <button className="w-36 h-10 text-white font-light sm:text-normal sm:font-medium"
                  style={{ backgroundImage: 'linear-gradient(to left, #dccfed, #cbb1ea, #ba94e6, #a976e0, #9856da, #8946cc, #7a36be, #6b24b0, #5c2498, #4d2280, #401f69, #331c52)' }}>
                  Hire Me!
                </button>
              </ShimmerButton>
              <ShimmerButton onClick={handleDownload}  shimmerColor='#331C52' background='white' className="shadow-xl  w-56 h-12 ">
                <button onClick={handleDownload} className="bg-white  text-purple2  font-light sm:text-normal sm:font-medium flex items-center space-x-2">
                  <span className="text-customblue sm:text-lg text-xs">Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#8121D0"
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
      // borderRadius='300px'
      className="  w-56 h-56 sm:w-96 sm:h-96 p-28 rounded-full  md:shadow-xl"
      color={["#D16BA5", "#5FFBF1", "#FFBE7B"]}
    >
          <Image
            src="/assets/home_img.png"
            alt="Image Description"
        
            layout="fill"
            objectFit="cover"
            className="rounded-full p-1 "
          />
          </ShineBorder>
      </div>
    </section>
  );
}
