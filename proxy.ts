import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
  });
}

function decodeBasicAuth(header: string): { username: string; password: string } | null {
  if (!header.startsWith("Basic ")) return null;
  const encoded = header.slice(6).trim();
  if (!encoded) return null;

  try {
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex < 0) return null;

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const expectedUser = process.env.ADMIN_BASIC_USER;
  const expectedPass = process.env.ADMIN_BASIC_PASS;

  if (!expectedUser || !expectedPass) {
    return NextResponse.json(
      { error: "Admin auth niet geconfigureerd. Stel ADMIN_BASIC_USER en ADMIN_BASIC_PASS in." },
      { status: 500 }
    );
  }

  const credentials = decodeBasicAuth(request.headers.get("authorization") ?? "");
  if (!credentials) return unauthorizedResponse();

  if (credentials.username !== expectedUser || credentials.password !== expectedPass) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
