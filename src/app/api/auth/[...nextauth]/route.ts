import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import axios from "@/lib/axios";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        mobile: { label: "Mobile", type: "text", placeholder: "Mobile" },
        password: { label: "Password", type: "password" }, 
        captcha: { label: "Captcha", type: "text", placeholder: "Captcha" },
        captcha_id:{ label: "CaptchaId", type: "text", placeholder: "CaptchaId" },
      },
      async authorize(credentials, req) {
        if (!credentials?.mobile || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        const res = await axios.post("http://localhost:8081/v1/auth/login", {
          ...credentials
        });
        const result = res.data;
        if (result.code !== 200) {
            return null;
        }
        const data = result.data;
        const user : { user_id: string, user_name: string, mobile: string, access_token: string } = { ...data};
        return user;
      }
    })
  ],
  callbacks: {
    async signIn(params) {
      if(!params) {
        return "/auth/signin?status=fail"
      }
      return "/";
    },
    //记住，它们的执行顺序是先 jwt 执行， 然后才是 session。
    async jwt(params) {
        console.log("jwt function:", params);
        const { token, user } = params

        if(user){
            token.accessToken = user.access_token
            token._id = user.user_id
        }
    },
    // 每次调用 getSession() 、useSession() 的时候 都会触发并将 token 存入 user 中
    async session(params) {
        // session.user.accessToken = token.accessToken
        // session.user.refreshToken = token.refreshToken
        // session.error = token.error // 用于处理token 失效
        console.log("session function:", params)
        const { session, user, token } = params;
        if(token){
          session.user = user;
          session.user.user_id = token._id
          session.user.access_token = token.accessToken
        }

        return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
