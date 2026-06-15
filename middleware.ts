import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.headers.get("x-forwarded-proto") === "http") {
    return NextResponse.redirect(
      `https://${request.headers.get("host")}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico).*)"],
};
