interface Tenant {
    tenant_id: string,
    tenant_name: string,
    address: string,
    postcode: string,
    tel: string,
    email: string,
}

interface User {
    user_id: string,
    mobile: string,
    user_name: string,
}

interface Captcha {
    captcha_id: string,
    captcha: string,
}