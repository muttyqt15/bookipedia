import { LoginData, SignInData } from "./auth.interfaces"
import { login, register } from "./auth.repository"

export const loginUser = async (userData: LoginData) => {
    const user = await login(userData)
    return user
}

export const registerUser = async (userData: SignInData) => {
    const user = await register(userData)
    return user
}