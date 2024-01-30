import React from "react";

interface ConverionBoxProps {
    name: string;
    icon: any;
    number: number;
    percentage: number;
    red?: boolean;
}

export default function ConversionBox({
    name,
    icon,
    number,
    percentage,
    red,
}: ConverionBoxProps) {
    return (
        <div className="p-2 rounded-xl w-full st:w-40 border border-neutral-500">
            <div className="line-left gap-2 font-semibold text-xl">
                {icon}
                {name}
            </div>
            <div className="my-2">
                <a className="p-1 font-bold border-neutral-500 border rounded-md text-xs">
                    {number}
                </a>
            </div>
            <div className=" line-left w-full overflow-hidden bg-neutral-300 rounded-xl h-2 mt-4">
                <div
                    className={` h-2 ${
                        red ? "bg-error-800/50" : "bg-secundary-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <div
                className={`mt-2 ${
                    red ? "text-error-800/50" : "text-secundary-500"
                } text-lg font-bold`}
            >
                {percentage}%
            </div>
        </div>
    );
}
