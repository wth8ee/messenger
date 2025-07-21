"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Silkscreen } from "next/font/google";
import Link from "next/link";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password }),
        });

        if (res.ok) {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            router.push("/dashboard");
        } else {
            alert("Ошибка регистрации");
        }
    };

    const inputClassName =
        "p-[0.5vmax] outline-[0.1vmax] rounded-[0.25vmax] outline-black/20 focus:outline-black/20";

    return (
        <div
            className={clsx(
                silkscreen.className,
                "bg-slate-200 h-screen w-screen text-black flex justify-center items-center text-[1vmax]"
            )}
        >
            <form
                onSubmit={handleRegister}
                className="flex flex-col bg-white p-[1vmax] rounded-[0.75vmax] gap-[2vmax] transition-all shadow"
            >
                <div>
                    <div className="flex flex-col gap-[1vmax]">
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            className={inputClassName}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClassName}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClassName}
                        />
                    </div>
                    <p className="text-[0.75vmax] pt-[0.25vmax] text-black">
                        Already have an account?{" "}
                        <Link
                            className="text-blue-500 underline"
                            href="/signin"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
                <button
                    type="submit"
                    className="bg-violet-500 text-white rounded-[0.25vmax] cursor-pointer hover:bg-violet-700 transition-all py-[0.5vmax] px-[2vmax]"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
