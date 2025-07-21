import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <p>Доступ запрещён. Войдите в систему.</p>;
    }

    return <p>Добро пожаловать, {session.user.email}!</p>;
}
