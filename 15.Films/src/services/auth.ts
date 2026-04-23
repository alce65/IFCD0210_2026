import { compare, hash } from "bcryptjs";
import { env } from '../config/env.ts';
import debug from 'debug';

const log = debug(`${env.PROJECT_NAME}:service:auth`);
log('Loading auth service...');


// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthService {

    static hash (password: string): Promise<string> {
        return hash(password, 10)
    }

    static compare (password: string, hash: string): Promise<boolean> {
        return compare(password, hash)
    }

}
