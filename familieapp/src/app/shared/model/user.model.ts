export interface Roles{
    child: boolean;
    parent?:boolean;
}

export class User{

    email: string;
    role: Roles;


    constructor(authData){
        this.email = authData.email
        this.role = { child: true}
    }
}