import { User as AuthUser } from "next-auth";

export interface Tenant {
    tenant_id: string,
    tenant_name: string,
    address: string,
    postcode: string,
    tel: string,
    email: string,
}

export interface User {
    user_id: string,
    mobile: string,
    user_name: string,
    password: string,
}

export interface Captcha {
    captcha_id: string,
    captcha: string,
}

export interface LoginResponse extends AuthUser {
    user: User,
    tenants: Tenant[],
    access_token: string,
    refresh_token: string,
}

export interface RegisterRequest {
    tenant: Tenant,
    user: User,
}