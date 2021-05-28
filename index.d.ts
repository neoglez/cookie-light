// Type definitions for cookie-light
declare namespace cookieLight {
    interface CookieOptions {
        expires?: Date;
        path?: string;
        domain?: string;
        secure?: string;
    }

    interface cookieLight {
        set(key: string, value: string|number|null, opts?: CookieOptions): void;
        get(key: string): string|undefined;
    }
}

declare let cookieLight: cookieLight.cookieLight;
export = cookieLight;
