import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import {
    RiLockPasswordFill,
    RiEyeOffFill,
    RiEyeFill,
    RiUser3Fill,
} from "react-icons/ri";

interface InputProps {
    width?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
}

export default function Input({ width, type, ...rest }: InputProps) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className={` w-full h-10 border line-left overflow-hidden rounded-lg bg-neutral-50 text-neutral-500`}
        >
            {type === "user" && (
                <RiUser3Fill className="text-neutral-500 mx-4" size="20" />
            )}
            {type === "email" && (
                <IoMail className="text-neutral-500 mx-4" size="20" />
            )}
            {type === "password" && (
                <RiLockPasswordFill
                    className="text-neutral-500 mx-4"
                    size="25"
                />
            )}
            <input
                type={type === "password" ? (open ? "text" : "password") : type}
                {...rest}
                className="w-full text-neutral-950 text-sm border-none outline-none bg-neutral-50"
            />
            {type === "password" && (
                <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                    {!open ? (
                        <RiEyeOffFill
                            className="text-neutral-500 mx-4"
                            size="20"
                        />
                    ) : (
                        <RiEyeFill
                            className="text-neutral-500 mx-4"
                            size="20"
                        />
                    )}
                </div>
            )}
        </div>
    );
}
