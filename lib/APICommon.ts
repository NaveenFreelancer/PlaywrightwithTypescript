import {request } from "@playwright/test";

export class APICommon {

    static async getAuthorizationToken(username: string, password: string): Promise<string> {

        const contextRequest = await request.newContext();
        const response = await contextRequest.post("/Account/v1/GenerateToken", {
            data: {
                "userName": username,
                "password": password,
            },
        });
        console.log((await response.json()).token)
        return (await response.json()).token;
    }
}