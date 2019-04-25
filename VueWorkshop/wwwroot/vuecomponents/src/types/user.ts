export interface IUser {
    id: string;
    name: string;
    email: string;
    city: string;
}

export interface IUserState {
    users?: IUser[];
    error: boolean;
    message: string;
}