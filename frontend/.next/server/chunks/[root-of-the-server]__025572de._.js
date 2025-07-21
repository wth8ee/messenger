module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next-auth [external] (next-auth, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next-auth", () => require("next-auth"));

module.exports = mod;
}}),
"[externals]/next-auth/providers/credentials [external] (next-auth/providers/credentials, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next-auth/providers/credentials", () => require("next-auth/providers/credentials"));

module.exports = mod;
}}),
"[project]/src/pages/api/auth/[...nextauth].js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "authOptions": ()=>authOptions,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth [external] (next-auth, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$credentials__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$credentials$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/providers/credentials [external] (next-auth/providers/credentials, cjs)");
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$credentials__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$credentials$2c$__cjs$29$__["default"])({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const res = await fetch("http://localhost:8000/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    })
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user; // обязательно должен быть id/email
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signin"
    },
    secret: process.env.NEXTAUTH_SECRET
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__["default"])(authOptions);
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__025572de._.js.map