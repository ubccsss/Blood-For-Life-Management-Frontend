import ProfileCard from "@/components/ProfileCard";
import FormDialog from "./dashboard";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-teal-100 flex flex-col h-screen ">
            <div className="p-4 flex flex-col h-screen rounded-sm">
                <div className="flex flex-row">
                    <div className="bg-teal-200 rounded-tl-xl">
                        <Image
                            src="/favicon.svg"
                            alt="logo"
                            width={36}
                            height={36}
                            className="bg-white rounded-t-xl w-14 h-14 shadow-lg p-2"
                        />
                    </div>
                    <div className="bg-teal-200 h-14 justify-center items-center flex-grow shadow-lg rounded-r-3xl">
                        <h1 className="text-2xl font-bold text-red-600 p-3">Dashboard</h1>
                    </div>
                </div>
                <div className="flex flex-grow">
                    <aside className="bg-teal-500 min-w-14 rounded-b-3xl" />
                    <div className="flex-1 p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}