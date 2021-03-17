export interface LoginDataI{
    email:string;
    password:string;
}

export interface LoginResI{
    success?:boolean
}
export interface LoginResAPII{
    jwt:string
}