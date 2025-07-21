"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Silkscreen } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result.ok) {
            router.push("/dashboard");
        } else {
            alert("Ошибка входа");
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
                onSubmit={handleLogin}
                className="flex flex-col bg-white p-[1vmax] rounded-[0.75vmax] gap-[2vmax] transition-all shadow"
            >
                <div>
                    <div className="flex flex-col gap-[1vmax]">
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
                        Don't have an account yet?{" "}
                        <Link
                            className="text-blue-500 underline"
                            href="/register"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
                <button
                    type="submit"
                    className="bg-violet-500 text-white rounded-[0.25vmax] cursor-pointer hover:bg-violet-700 transition-all py-[0.5vmax] px-[2vmax]"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
