import React from "react";
import {
    RiLogoutBoxLine,
    RiMoreFill,
    RiHome2Line,
    RiStore2Line,
    RiShoppingBag3Line,
    RiAddBoxLine,
    RiLinksFill,
    RiToggleLine,
    RiUser3Line,
    RiCloseLine,
} from "react-icons/ri";
import { PiBellSimple } from "react-icons/pi";
import Router from "next/router";

interface SidebarProps {
    setOpen: Function;
}

export default function Sidebar({ setOpen }: SidebarProps) {
    const router = Router;
    const menuOptions = [
        {
            name: "Home",
            icon: <RiHome2Line />,
            disabled: false,
            subitems: [],
        },
        {
            name: "Produtos",
            icon: <RiStore2Line />,
            disabled: false,
            subitems: [
                {
                    icon: <RiShoppingBag3Line />,
                    name: "Meus produtos",
                },
                {
                    icon: <RiAddBoxLine />,
                    name: "Cadastrar",
                },
            ],
        },
        {
            name: "Link de pagamento",
            icon: <RiLinksFill />,
            disabled: true,
            subitems: [],
        },
    ];
    const userOptions = [
        {
            name: "Gerenciar",
            icon: <RiUser3Line />,
            disabled: false,
        },
        {
            name: "Permissões",
            icon: <RiToggleLine />,
            disabled: true,
        },
    ];

    return (
        <div className="h-screen p-6 flex flex-col justify-between bg-neutral-50 w-full text-neutral-950">
            <div className="line-left justify-between flex-wrap gap-6">
                <div>
                    <div className="line-left gap-2">
                        <div className="h-10 w-10 text-secundary-700 rounded-full font-bold line-center bg-secundary-200">
                            U
                        </div>
                        <div>
                            <div className="line-left font-bold gap-2">
                                User{" "}
                                <div className="px-1 line-center rounded bg-neutral-200 text-neutral-700 font-bold text-xs">
                                    Free
                                </div>
                            </div>
                            <div className="font-sm text-neutral-500">
                                user@email.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-right gap-1 text-neutral-500">
                    <PiBellSimple size={25} />
                    <RiMoreFill size={25} />
                    <div
                        className="text-neutral-950 sm:hidden ml-8"
                        onClick={() => setOpen(false)}
                    >
                        <RiCloseLine size={45} />
                    </div>
                </div>
                <div className="w-full line-center flex-wrap gap-1">
                    {menuOptions.map((item: any) => (
                        <>
                            <div
                                key={item.name}
                                className={`line-left rounded-md gap-2 w-full p-1 with-transition text-sm font-semibold ${
                                    !item.disabled
                                        ? " cursor-pointer hover:bg-neutral-200"
                                        : "text-neutral-500"
                                }`}
                            >
                                <div
                                    className={
                                        item.disabled
                                            ? "text-neutral-500"
                                            : "text-neutral-700"
                                    }
                                >
                                    {item.icon}
                                </div>
                                {item.name}
                            </div>
                            {item.subitems.length > 0 && (
                                <div className="ml-2 pl-2 w-full border-l border-neutral-500">
                                    {item.subitems.map((sub: any) => (
                                        <div
                                            className={`line-left rounded-md gap-2 w-full p-1 with-transition text-sm text-neutral-700 `}
                                            key={sub.name}
                                        >
                                            <div className="text-neutral-700">
                                                {sub.icon}
                                            </div>
                                            {sub.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ))}
                </div>
                <div className="w-full text-neutral-700 text-sm ">Usuários</div>
                <div className="w-full">
                    {userOptions.map((item: any) => (
                        <div
                            key={item.name}
                            className={`line-left rounded-md gap-2 w-full p-1 with-transition text-sm font-semibold ${
                                !item.disabled
                                    ? " cursor-pointer hover:bg-neutral-200"
                                    : "text-neutral-500"
                            }`}
                        >
                            <div
                                className={
                                    item.disabled
                                        ? "text-neutral-500"
                                        : "text-neutral-700"
                                }
                            >
                                {item.icon}
                            </div>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="w-full line-left gap-2 with-transition cursor-pointer p-1 rounded-md hover:bg-neutral-300"
                onClick={() => router.push("/")}
            >
                <div className="text-neutral-500">
                    <RiLogoutBoxLine />
                </div>
                <div className="text-sm font-semibold">Logout</div>
            </div>
        </div>
    );
}
