import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { RiMenuLine } from "react-icons/ri";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="relative">
            <div className="w-screen h-screen line-left">
                <div
                    className={`${
                        open ? "w-full" : "w-0"
                    } sm:w-96 overflow-hidden with-transition h-screen sm:relative absolute`}
                >
                    <Sidebar setOpen={setOpen} />
                </div>
                <div className="bg-neutral-200 w-full h-full overflow-y-auto">
                    <div className="w-full h-12 line-right sm:hidden p-2 bg-neutral-50">
                        <div
                            className="cursor-pointer text-neutral-700"
                            onClick={() => setOpen(true)}
                        >
                            <RiMenuLine size={25} />
                        </div>
                    </div>
                    <div className="p-2 sm:p-12">{children}</div>
                </div>
            </div>
        </div>
    );
}
