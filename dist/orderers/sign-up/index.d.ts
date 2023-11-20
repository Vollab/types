export interface IOrdererSignUpRequest {
    name: string;
    email: string;
    phone: string;
    password: string;
    biography: string;
}
export interface IOrdererSignupResponse {
    orderer: {
        id: string;
        name: string;
        email: string;
        phone: string;
        biography: string;
        created_at: string;
        updated_at: string;
    };
}
