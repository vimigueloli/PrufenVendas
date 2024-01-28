import React, { FormEvent, useState } from "react";
import cover from "@/../../public/cover.png";
import logo from "@/../../public/logo.png";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import AsyncButton from "@/components/AsyncButton";
import logotipo from "@/../../public/Union.png";
import Router from "next/router";
import toast from "react-hot-toast";

export default function Register() {
    const [agree, setAgree] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const router = Router;

    async function sendRegister(e: FormEvent) {
        e.preventDefault();
        // todo // integrar api futuramente com o codigo comentado abaixo
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                toast.success("Conta criada com sucesso!");
                router.push("/");
            }, 2000);
        } catch (e: any) {
            toast.error(e.message);
            setLoading(false);
        }
    }

    return (
        <div className="w-full line-center h-screen ">
            <div
                style={{ backgroundImage: `url(${cover.src})` }}
                className="bg-neutral-50 hidden md:flex  line-left items-start p-12 line-center bg-cover bg-bottom w-1/2 h-screen overflow-hidden"
            >
                <div className="line-left gap-4 items-start flex-wrap">
                    <div className="w-full">
                        <div className="w-32 h-8">
                            <img
                                src={logo.src}
                                alt="logo prufen"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="text-neutral-50 w-2/3 text-3xl font-semibold">
                        Expore, descubra, e transforme sua experiência com{" "}
                        <div className="text-primary-300">vendas digitais!</div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 line-center bg-neutral-50 h-screen">
                <form
                    onSubmit={(e: any) => sendRegister(e)}
                    className=" w-full p-4 md:w-2/3 line-center flex-wrap gap-4"
                >
                    <div className=" w-full text-center md:text-left text-neutral-950 font-bold text-2xl">
                        Crie sua conta
                    </div>
                    <div className="w-full">
                        <div className="text-neutral-950 font-bold mb-2 text-xs">
                            Nome completo
                        </div>
                        <Input
                            type="user"
                            placeholder="Digite seu nome"
                            required
                        />
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
                    <div className=" w-full line-left gap-2 text-xs font-semibold md:items-start text-neutral-950">
                        <a>
                            <Checkbox
                                required={true}
                                check={agree}
                                setCheck={setAgree}
                            />
                        </a>
                        Concordo em receber atualizações por e-mail
                    </div>
                    <div className=" text-justify text-neutral-950 text-xs font-semibold w-full">
                        Ao criar sua conta, você confirma que leu e concorda com
                        os{" "}
                        <a
                            target="_blank"
                            href="https://cdn.aqbank.com.br/termos-legais/aqbank/termos-condicoes-conta-digital.pdf"
                            className="text-secundary-500 underline cursor-pointer with-transition hover:opacity-50"
                        >
                            termos de uso
                        </a>{" "}
                        da Prufen
                    </div>
                    <AsyncButton text="Criar conta grátis" loading={loading} />
                    <div className=" text-center w-full text-neutral-950 gap-1 text-sm">
                        Já tem uma conta?
                        <a
                            onClick={() => router.back()}
                            className="text-secundary-500 cursor-pointer border-b border-primary-300/0 hover:border-secundary-500 with-transition"
                        >
                            Acessar minha conta
                        </a>
                    </div>
                    <div className="line-center w-full text-xs gap-2 text-neutral-900">
                        <div className="opacity-50">Powered by</div>
                        <img src={logotipo.src} alt="prufen logo" />
                    </div>
                </form>
            </div>
        </div>
    );
}
