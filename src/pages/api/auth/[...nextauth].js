import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers:[
        GoogleProvider[{
            clientId:process.env.Google_Client_ID,
            clientSecret:process.env.Google_Client_Secret,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        }]
    ],
    secret:process.env.jwt_Secret

})