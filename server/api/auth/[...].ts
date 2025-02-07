import {NuxtAuthHandler} from "#auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "~/server/models/User"
import bcrypt from "bcrypt"


export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,

    pages: {
        signIn: "/login",
    },

    providers: [
        //@ts-expect-error
        CredentialsProvider.default({
            name: "credentials",
            credentials: {},
            async authorize(credentials: { username: string, password: string }) {

                const user = await User.findOne({ username: credentials.username });

                if (!user) {
                    throw createError({
                        statusMessage: "Unauthorized",
                        statusCode: 401,
                    })
                }

                const isValid = bcrypt.compare(credentials.username, credentials.password)

                if (!isValid) {
                    throw createError({
                        statusMessage: "Unauthorized",
                        statusCode: 401,
                    })
                }

                return {
                    ...user.toObject(),
                    password: undefined
                };
            }
        })
    ],

    session: {
        strategy: "jwt"
    },

    callbacks: {
        jwt({ token, user, account }) {
            if (user) {
                token = {
                    ...token,
                    ...user
                }
            }

            return token;
        },

        session({ session, token }) {
            session.user = {
                ...session,
                ...token
            }

            return session;
        }
    }

})
