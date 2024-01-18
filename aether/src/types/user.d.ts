export interface UserClientData {
    username: string
    password: string
}

export interface User extends UserClientData{
    id: string
    email: string
    password: string
}

