export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

export interface IUserState {
    users?: IUser[];
    selectedUser?: IUser;
    error: boolean;
    message: string;
}