import { env } from '../config/env.ts';
import debug from 'debug';

const log = debug(`${env.PROJECT_NAME}:middleware:auth`);
log('Loading middleware (AuthInterceptor)...');

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthInterceptor {}
