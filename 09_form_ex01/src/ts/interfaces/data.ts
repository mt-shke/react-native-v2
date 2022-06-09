export interface IData {
    [inputId: string]: string;
}

export interface IUser {
    email: string;
    password: string;
    passwordConfirmation: string;
    civility: string;
    firstname: string;
    lastname: string;
    birthdate: string;
}

// SignIn Credentials

export interface ICredentials {
    email: string;
    password: string;
}

// Form

export interface IFormData {
    email: string;
    password: string;
    passwordConfirmation: string;
    civility: string;
    firstname: string;
    lastname: string;
    birthdate: string;
}

export interface IFormDataSignUpEndScreen {
    email: string;
    password: string;
    passwordConfirmation: string;
    civility?: string;
    firstname?: string;
    lastname?: string;
    birthdate?: string;
}
