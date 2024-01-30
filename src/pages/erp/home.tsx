import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import banner from "@/../../public/banner.png";
import {
    RiArrowRightLine,
    RiWalletLine,
    RiBankCardLine,
    RiBarcodeLine,
} from "react-icons/ri";
import { MdPix } from "react-icons/md";
import toast from "react-hot-toast";
import Loading from "react-loading";
import { money } from "@/masks";
import { HiOutlineClock } from "react-icons/hi";
import ConversionBox from "@/components/ConversionBox";

export default function Home() {
    const [sellInfo, setSellInfo] = useState<any>();
    const [conversionInfo, setConverionInfo] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setSellInfo({
                total: 50000.55,
                month: 20000.35,
                lastMonth: 150571.0,
                today: 10000.1,
                saldo: 245240.9,
                waiting: 20500.25,
                yesterday: 9000.32,
            });
            setConverionInfo({
                card: {
                    number: 9854,
                    percentage: 79,
                },
                pix: {
                    number: 3589,
                    percentage: 51,
                },
                boleto: {
                    number: 158,
                    percentage: 10,
                },
                canceladas: {
                    number: 120,
                    percentage: 9,
                },
            });
            setLoading(false);
        }, 1000);
    }, []);

    async function openMore() {
        toast.error("area em desenvolvimento");
    }

    return (
        <Layout>
            <div className="line-center flex-wrap gap-12">
                <div
                    style={{ backgroundImage: `url(${banner.src})` }}
                    className="w-full bg-cover bg-center h-56 rounded-3xl line-left p-8"
                >
                    <div className="text-neutrel-50 text-3xl md:text-5xl text-bold">
                        Transforme sua <br /> paixão em
                        <a className="text-primary-300"> lucro!</a>
                    </div>
                </div>
                <div className="w-full gap-8 flex-wrap items-start line-between">
                    <div className="p-4 w-full md:w-auto rounded-xl text-neutral-950 bg-neutral-50 border-neutral-300 border">
                        <div className="text-lg font-semibold line-left gap-4 justify-between">
                            <div>Suas vendas</div>
                            <button
                                onClick={() => openMore()}
                                className="line-left rounded-lg hover:opacity-50 cursor-pointer with-transition border-neutral-500 border font-normal text-sm  text-neutral-500 px-2 py-1"
                            >
                                <div>ver todas</div>
                                <RiArrowRightLine />
                            </button>
                        </div>
                        {loading ? (
                            <div className="w-full line-center text-primary-300">
                                <Loading
                                    color={"#1e8381"}
                                    type="spin"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        ) : (
                            <>
                                <div className="text-secundary-600 font-semibold mt-6 text-lg">
                                    {money.format(sellInfo.total)}
                                </div>
                                <div className="bg-secundary-800 p-4 rounded-xl mt-4">
                                    <div className=" line-between flex-wrap gap-2">
                                        <div className="w-full st:w-48">
                                            <div className="text-neutral-50 font-semibold text-sm">
                                                Total de vendas hoje
                                            </div>
                                            <div className="text-primary-300 font-semibold text-lg">
                                                {money.format(sellInfo.today)}
                                            </div>
                                            <div className="text-sm text-neutral-300/50">
                                                Ontem{" "}
                                                {money.format(
                                                    sellInfo.yesterday
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full st:w-48">
                                            <div className="text-neutral-50 font-semibold text-sm">
                                                Total do mês
                                            </div>
                                            <div className="text-primary-300 font-semibold text-lg">
                                                {money.format(sellInfo.month)}
                                            </div>
                                            <div className="text-sm text-neutral-300/50">
                                                Mês anterior{" "}
                                                {money.format(
                                                    sellInfo.lastMonth
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-between flex-wrap gap-2 mt-4">
                                        <div className="w-full st:w-48">
                                            <div className="text-neutral-50 font-semibold text-sm">
                                                Saldo
                                            </div>
                                            <div className="text-neutral-50 line-left gap-1 font-semibold text-lg">
                                                <RiWalletLine />
                                                {money.format(sellInfo.saldo)}
                                            </div>
                                            <div className="text-sm text-neutral-300/50">
                                                Disponível para saque
                                            </div>
                                        </div>
                                        <div className="w-full st:w-48">
                                            <div className="text-neutral-50 font-semibold text-sm">
                                                A Receber
                                            </div>
                                            <div className=" text-warning-200 line-left gap-1 font-semibold text-lg">
                                                {money.format(sellInfo.waiting)}
                                            </div>
                                            <div className="text-sm text-neutral-300/50">
                                                Vendas pendentes
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="p-4 w-full md:w-auto rounded-xl text-neutral-950 bg-neutral-50 border-neutral-300 border">
                        <div className="text-lg font-semibold line-left gap-4 justify-between">
                            <div>Conversão de pagamento</div>
                        </div>
                        {loading ? (
                            <div className="w-full line-center text-primary-300">
                                <Loading
                                    color={"#1e8381"}
                                    type="spin"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        ) : (
                            <>
                                <div className=" mt-4">
                                    <div className=" line-center st:line-between flex-wrap gap-4">
                                        <ConversionBox
                                            name="Cartão"
                                            icon={<RiBankCardLine />}
                                            number={conversionInfo.card.number}
                                            percentage={
                                                conversionInfo.card.percentage
                                            }
                                        />
                                        <ConversionBox
                                            name="Pix"
                                            icon={<MdPix />}
                                            number={conversionInfo.pix.number}
                                            percentage={
                                                conversionInfo.pix.percentage
                                            }
                                        />
                                    </div>
                                    <div className=" line-center st:line-between flex-wrap gap-4 mt-4">
                                        <ConversionBox
                                            name="Boleto"
                                            icon={<RiBarcodeLine />}
                                            number={
                                                conversionInfo.boleto.number
                                            }
                                            percentage={
                                                conversionInfo.boleto.percentage
                                            }
                                        />
                                        <ConversionBox
                                            name="Cancelados"
                                            icon={<HiOutlineClock />}
                                            number={
                                                conversionInfo.canceladas.number
                                            }
                                            percentage={
                                                conversionInfo.canceladas
                                                    .percentage
                                            }
                                            red
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
