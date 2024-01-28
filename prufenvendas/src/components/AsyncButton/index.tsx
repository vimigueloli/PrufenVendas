import React from "react";
import Loading from "react-loading";

interface ButtonProps {
    text: string;
    loading?: boolean;
    onClick?: Function;
    color?: string;
}

export default function AsyncButton({
    text,
    loading,
    onClick,
    color,
}: ButtonProps) {
    return (
        <button
            className="w-full line-center bg-neutral-950 text-neutral-50 text-xs font-bold h-8 rounded-lg with-transition hover:opacity-50"
            onClick={() => (onClick !== undefined ? onClick() : null)}
        >
            {loading ? (
                <Loading type="spin" height={20} width={20} color="white" />
            ) : (
                <div>{text}</div>
            )}
        </button>
    );
}
