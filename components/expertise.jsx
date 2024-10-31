
import Image from "next/image";
export default function Expertise() {
    return (
        <section
            className="flex flex-col sm:flex-row items-center justify-center min-h-screen text-center sm:text-left px-6 py-12"
            style={{ backgroundImage: 'linear-gradient(90deg, rgba(220,207,237,1) 59%, rgba(225,235,237,1) 100%)' }}
        >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left  max-w-md sm:mr-36">
                <h1 className="text-purple0 text-5xl font-bold mb-6">My <span className="text-purple2">Expertise</span></h1>
                <p className="text-purple1">
                    Hello, digital innovators! I'm Farah Albouchi, a passionate and inventive web & mobile developer who thrives on turning tech dreams into tangible realities.
                </p>
            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4">
                {/* <div class="  row-start-2 row-span-2 ...">
                    <div style={{backgroundImage:'radial-gradient(circle, rgba(129,33,208,1) 0%, rgba(225,235,237,1) 100%)'}} className="border-2 border-purple2 rounded-md flex justify-center flex-col items-center p-11">
                        <Image
                            src="/assets/front-end.png"
                            alt="Image Description"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-white">FrontEnd Development</h1>
                        <p></p>
                    </div>
                    <div className="bg-red-700">
                        04
                    </div>
                </div>
                <div class="bg-blue-500 row-end-3 row-span-2 ...">
                    <div>
                        04
                    </div>
                    <div>
                        04
                    </div>
                </div> */}
            </div>

        </section>
    )
}