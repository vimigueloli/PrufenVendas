import React from "react";
import { RiCheckFill } from "react-icons/ri";

interface CheckboxProps {
    check: boolean;
    setCheck: Function;
    required?: boolean;
}

export default function Checkbox({ check, setCheck, required }: CheckboxProps) {
    return (
        <div
            className="w-3 h-3 rounded border border-neutral-500 cursor-pointer overflow-hidden"
            onClick={() => setCheck(!check)}
        >
            {check && (
                <div className="w-full h-full text-neutral-50 bg-neutral-950 line-center">
                    <RiCheckFill />
                </div>
            )}
        </div>
    );
}
