/// <reference types="node" />
import { Strategy as PassportStrategy } from 'passport-strategy';
import { IncomingMessage } from 'http';
export interface Options {
    responseField?: string;
}
declare class CryptoStrategy extends PassportStrategy {
    name: string;
    private readonly responseField;
    private readonly cryptoAuthFactory;
    private readonly baseCryptoAuth;
    constructor(options?: Options);
    private getChallenge;
    private verifyResponse;
    authenticate(req: IncomingMessage): Promise<any>;
    protected failWithChallenge(req: IncomingMessage, message: string, challenge?: any): Promise<any>;
}
export default CryptoStrategy;
export { CryptoStrategy as Strategy };
