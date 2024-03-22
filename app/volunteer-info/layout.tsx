import Image from "next/image";

export default function VolunteerInfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#E7FFF9] flex flex-row items-center justify-center h-screen w-screen">

            <div className="p-5 h-screen w-screen flex flex-col">
                <div className="flex flew-row">
                    <div className="w-[3vw] h-[3vw] bg-white rounded-tl-xl flex flex-row items-center justify-center">
                        <Image 
                            src="/favicon.svg"
                            alt="Canadian Blood Services Logo"
                            width={0}
                            height={0}
                            style={{ width: "2.5vw", height: "2.5vw" }}
                        />
                    </div>
                    <div className="w-[94vw] h-[3vw] bg-[#9DE1DA] rounded-r-2xl"></div>
                </div>

                <div className="flex flex-row h-full">
                    <div className="w-[3vw] h-full bg-[#2FC1A3] rounded-b-2xl"></div>

                    <div className="p-8 h-full w-full">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
    
}