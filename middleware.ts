import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        console.log(req.nextauth);
        if (
            req.nextUrl.pathname == "/admin-dashboard" && //if dashboard page and not an admin
            req.nextauth.token?.role !== "admin"
        ) {
            return new NextResponse("Restricted to Authorized Administrators");
        }
    },
    {
        callbacks: {
            authorized: (params) => {
                let { token } = params;
                return !!token;
            }
        }
    }
)



export const config = {matcher: "/admin-dashboard" };