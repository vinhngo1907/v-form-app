import { type GetServerSidePropsContext } from "next"
import {
    getServerSession,
    type NextAuthOptions,
    type DefaultSession,
} from "next-auth";

/**
* Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
*
* @see https://next-auth.js.org/configuration/options
*/
export const authOptions: NextAuthOptions = {

}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
}