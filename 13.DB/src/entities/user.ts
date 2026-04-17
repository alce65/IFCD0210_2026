export interface User {
    id: number;
    email: string;
    handleName?: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
}


//  email: z.string().email().nonempty(),
//  handleName: z.string().min(3).optional(),
//  password: z.string().min(5).nonempty(),
//  firstName: z.string().min(3).nonempty(),
//  lastName: z.string().min(3).nonempty(),
//  avatar: z.string().optional(),
