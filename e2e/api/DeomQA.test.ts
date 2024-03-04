import { expect, test } from "@playwright/test";
import { ADD_LIST_OF_BOOKS_PATH, API_ACCOUNT_CREATION_PATH, DELETE_BOOK_PATH } from "../../testConfig";
import { APICommon } from "../../lib/APICommon";

let userId: string;
let username: string;
let password: string;
let token: string;

test.describe.serial('APITest', async () => {

    /*
        Code not removed
    */
        // test.beforeEach(async ({ page }) => {
        //     await page.waitForTimeout(2000);
        // });

    //Deleting the Created user
    test.afterAll(async ({ request }) => {
        let token = await APICommon.getAuthorizationToken(username, password);
        const response = await request.delete(`${API_ACCOUNT_CREATION_PATH}/${userId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(204);
      });


    test("Fail to Create User Account", async ({ request }) => {

        const response = await request.post(`${API_ACCOUNT_CREATION_PATH}`, {
            data: {
                "userName": "u12345",
                "password": "Password"
            }, headers: {
                "Accept": "application/json"
            }
        });
        expect(response.status()).toBe(400);
        const responseUser = await response.json();
        expect(responseUser.code).toBe("1300")
        expect(responseUser.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
    })

    test("Create User account", async ({ request }) => {

        username = `TestUser_${new Date().toISOString().replace(/[^a-zA-Z0-9]/gim, "")}`;
        password = `${username}$ecreT1`;
        const response = await request.post(`${API_ACCOUNT_CREATION_PATH}`, {
            data: {
                "userName": username,
                "password": password
            }, headers: {
                "Accept": "application/json"
            }
        });
        expect(response.status()).toBe(201);
        const responseUser = await response.json();
        userId = responseUser.userID;

        console.log(userId);
    })


    test("Add list of books to created user", async ({ request }) => {

        token = await APICommon.getAuthorizationToken(username, password);
        let collectionOfIsbns: any[] = [{ "isbn": "Book1" }, { "isbn": "Book2" }, { "isbn": "Book3" }];
        const response = await request.post(`${ADD_LIST_OF_BOOKS_PATH}`, {
            data: {
                "userId": userId,
                "collectionOfIsbns": collectionOfIsbns
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(201);
        const responseBook = await response.json();
    })



    test("Delete a book of user", async ({ request }) => {

        //let token = await APICommon.getAuthorizationToken(username, password);
        let response = await request.delete(`${DELETE_BOOK_PATH}`, {
            data: {
                "userId": userId,
                "isbn": "Book1"
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(204);
        //All Books are getting deleted(bug), not able to verify
        response = await request.get(`${API_ACCOUNT_CREATION_PATH}/${userId}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(200);
        expect((await response.json()).books).not.toContain({ "isbn": "Book1" });

    })

    test("Delete a book never added to user", async ({ request }) => {

        //let token = await APICommon.getAuthorizationToken(username, password);
        let response = await request.delete(`${DELETE_BOOK_PATH}`, {
            data: {
                "userId": userId,
                "isbn": "Book5"
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(400);
        // response = await request.get(`${API_ACCOUNT_CREATION_URL}/${userId}`,{
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //         "authorization": `Bearer ${token}`,
        //     },
        // });
        // expect(response.status()).toBe(200);
        // expect((await response.json()).books).not.toContain({"isbn": "Book1"});

    })

    test("Failed to Add list of books to created user", async ({ request }) => {

       // let token = await APICommon.getAuthorizationToken(username, password);
        let collectionOfIsbns: any[] = [{ "isbn": "Book1" }, { "isbn": "Book2" }, { "isbn": "Book3" }];
        const response = await request.post(`${ADD_LIST_OF_BOOKS_PATH}`, {
            data: {
                "userId": userId + username,
                "collectionOfIsbns": collectionOfIsbns
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
            },
        });
        expect(response.status()).toBe(401);
        const responseBook = await response.json();
    })

})