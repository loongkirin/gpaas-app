import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import axios from "@/lib/axios";
import { LoginResponse } from "@/models/Account";

import { authOptions } from "@/app/auth/authOptions";

// export const authOptions: AuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//     }),
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         mobile: { label: "Mobile", type: "text", placeholder: "Mobile" },
//         password: { label: "Password", type: "password" }, 
//         captcha: { label: "Captcha", type: "text", placeholder: "Captcha" },
//         captcha_id:{ label: "CaptchaId", type: "text", placeholder: "CaptchaId" },
//       },
//       async authorize(credentials, request) {
//         if (!credentials?.mobile || !credentials?.password) {
//           throw new Error('Invalid credentials');
//         }
//         const loginResponse = await axios.post("http://localhost:8081/v1/auth/login", {
//           ...credentials
//         });
//         // console.log("login res:", res);
//         const result = loginResponse.data;
//         if (result.code !== 200) {
//             return null;
//         }
//         const data : LoginResponse = { ...result.data };
//         // console.log("login data:", data);
//         return data;
//       }
//     })
//   ],
//   callbacks: {
//     // async signIn(params) {
//     //   if(!params) {
//     //     return "/auth/signin?status=fail"
//     //   }
//     //   return "/";
//     // },
//     //记住，它们的执行顺序是先 jwt 执行， 然后才是 session。
//     async jwt(params) {
//         // console.log("jwt function params:", params);
//         const { token, user } = params;

//         // console.log("jwt function user: ", user, "  token:", token);

//         if(user){
//           token.access_token = user.access_token;
//           token.refresh_token = user.refresh_token;
//           token.id = user.user.user_id;
//           token.user = user;
//         }
//         // console.log("end jwt function token: ", token);

//         return token;
//     },
//     // 每次调用 getSession() 、useSession() 的时候 都会触发并将 token 存入 user 中
//     async session(params) {
//         // session.user.accessToken = token.accessToken
//         // session.user.refreshToken = token.refreshToken
//         // session.error = token.error // 用于处理token 失效
//         // console.log("session function params:", params);
//         const { session, token } = params;
//         if(token){
//           session.user = token.user.user;
//           session.access_token = token.access_token;
//           session.refresh_token = token.refresh_token;
//         }

//         // console.log("end session function session:", session)

//         return session;
//     },
//   },
//   debug: process.env.NODE_ENV === 'development',
//   session: {
//     strategy: "jwt",
//   },
//   //generate next auth secret key:  openssl rand -base64 32 
//   secret: process.env.NEXTAUTH_SECRET,
// }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
