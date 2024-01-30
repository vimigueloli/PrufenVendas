import React, { FormEvent, useState } from "react";
import background from "@/../../public/background.png";
import logo from "@/../../public/logo.png";
import logotipo from "@/../../public/Logotipo.png";
import AsyncButton from "@/components/AsyncButton";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Router from "next/router";
import toast from "react-hot-toast";

export default function Home() {
    const router = Router;
    const [loading, setLoading] = useState<boolean>(false);
    const [persist, setPersist] = useState<boolean>(false);

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        // todo // integrar api futuramente com o codigo comentado abaixo
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                toast.success("Login efetuado com sucesso!");
                router.push("erp/home");
            }, 2000);
        } catch (e: any) {
            toast.error(e.message);
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-screen line-center  relative">
            <div className="bg-primary-300 w-full h-full absolute  -z-10">
                <img
                    src={background.src}
                    alt="fundo personalizado prufen"
                    className="w-full h-full bg-cover"
                />
            </div>
            <div className=" w-full p-4 overflow-y-auto sm:w-96 overflow-x-hidden h-full gap-8 line-center flex-col">
                <div className="line-left w-full">
                    <div className="w-32 h-8">
                        <img
                            src={logo.src}
                            alt="logo prufen"
                            className="h-full w-fuçll bg-cover"
                        />
                    </div>
                </div>
                <form
                    onSubmit={(e: any) => handleLogin(e)}
                    className="w-full sm:w-96 bg-neutral-50 rounded-md z-10 shadow-xl p-4 sm:p-12 shadow-neutral-950/50 drop-shadow-xl"
                >
                    <div className="line-center flex-wrap gap-8">
                        <div className=" w-full text-neutral-950 font-bold text-2xl">
                            Acessar conta
                        </div>
                        <div className="w-full">
                            <div className="text-neutral-950 font-bold mb-2 text-xs">
                                E-mail
                            </div>
                            <Input
                                type="email"
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-neutral-950 font-bold mb-2 text-xs">
                                Senha
                            </div>
                            <Input
                                type="password"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <div className="line-left w-full gap-2 text-xs font-semibold items-start text-neutral-950">
                            <Checkbox
                                required={true}
                                check={persist}
                                setCheck={setPersist}
                            />{" "}
                            Permanecer conectado
                        </div>
                        <AsyncButton loading={loading} text="Acessar conta" />
                    </div>
                </form>
                <div className="line-left gap-1 text-sm">
                    <div>Não tem conta?</div>
                    <a
                        href="register"
                        className="text-primary-300 cursor-pointer border-b border-primary-300/0 hover:border-primary-300 with-transition"
                    >
                        Cadastrar-me
                    </a>
                </div>
                <div className="line-center text-xs gap-2">
                    <div className="opacity-50">Powered by</div>
                    <img src={logotipo.src} alt="prufen logo" />
                </div>
            </div>
        </div>
    );
}
