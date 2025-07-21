import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user; // обязательно должен быть id/email
                }

                return null;
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

// 👇 Экспорт по умолчанию
export default NextAuth(authOptions);
