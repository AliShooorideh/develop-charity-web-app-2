const crypto = require("crypto");

import { initAuth0 } from "@auth0/nextjs-auth0";
const cookieSecret = crypto.randomBytes(32).toString("hex");

export default initAuth0({
  clientId: "lh0CETO0CVB6gs04PWeoRuwXAXNeRPj2",
  clientSecret:
    "b3dqwZ0zyUBzZqKAuTWkGCSqGbtaHNMuFkcrq_Y4WQM6OdvL7Oq2WJgf7DIzg39Z",
  scope: "openid profile",
  domain: "minireactproject.us.auth0.com",
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: cookieSecret,
    cookieLifetime: 60 * 60 * 8, // 8 hours
    cookieSameSite: "lax",
    storeAccessToken: true,
    storeRefreshToken: true,
  },
});
