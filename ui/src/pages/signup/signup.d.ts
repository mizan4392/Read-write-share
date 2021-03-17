export interface SignupDataI{
    fullName:string;
    email:string;
    password:string;
    confirm_password:string;
}

export interface SignupI{
    fullName:string;
    email:string;
    password:string;
}

export interface SignupResI{
    success:boolean
    message?:string
    description?:string
}