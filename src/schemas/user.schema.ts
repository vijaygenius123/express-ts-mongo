import {object, string, TypeOf} from "zod";

export const createUserSchema = object({
    body: object({
        id: string(),
        firstName: string(),
        lastName: string(),
        email: string({
            required_error: "Email is required"
        }).email('Not an valid Email')
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>
