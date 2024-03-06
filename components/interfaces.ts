export interface LoginForm {
    email: string
    password: string
}

export interface PropsModal {
    setErrorLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface User {
    nombre: string;
    apePaterno: string;
    edad: number;
}