import Layout from "@/components/Layout";
import React from "react";
import banner from "@/../../public/banner.png";

export default function Home() {
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
            </div>
        </Layout>
    );
}
