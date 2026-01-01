import NextAuth from "next-auth";
import prisma from "./lib/prisma";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
        GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({ user }:any) {
  //     const { email, name } = user;

  //     try {
  //       if (email && name) {
  //         const existingUser = await prisma.user.findUnique({
  //           where: { email },
  //         });

  //         // Create user if they don't exist
  //         if (!existingUser) {
  //           await prisma.user.create({
  //             data: { name, email },
  //           });
  //         }
  //         return true;
  //       }
  //       return false;
  //     } catch (error) {
  //       console.error("Error during sign-in callback:", error);
  //       return false;
  //     }
  //   },
  //   async jwt({ token, account, user }:{token:JWT, account:any, user:any}) {
  //     if (account && user) {
  //       const {name,email}=user
  //       const newUser=await prisma.user.findUnique({where:{email}})
  //       if(newUser){
  //         token.id=newUser?.id
  //       }
  //       return token;
  //     }

  //     return token;
  //   },
  //   async session({ session, token }:{session:any, token:JWT}) {
  //     Object.assign(session, {id:token.id});
  //     return session;
  //   },
  // },
})
