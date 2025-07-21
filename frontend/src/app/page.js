import Image from "next/image";
import { Silkscreen } from "next/font/google";
import clsx from "clsx";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/signin"); // редирект на вход
    }

    return (
        <main
            className={clsx(
                silkscreen.className,
                "bg-white h-screen w-screen text-black flex items-center justify-center text-[5vmax]"
            )}
        >
            <h1>Добро пожаловать, {session.user.email}!</h1>
            <p>Вы авторизованы.</p>
        </main>
    );
}
