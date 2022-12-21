export interface User {
    name: string; 
    updated_at: Date; 
    count: number; 
    hash: string;
}

export interface ResponseType {
    status: boolean; 
    data: User;
    errors: Array<string>;
}