/// <reference types="node" />
import { Strategy as PassportStrategy } from 'passport-strategy';
import { IncomingMessage } from 'http';
interface Options {
    challengeField?: string;
    responseField?: string;
}
declare class CryptoStrategy extends PassportStrategy {
    name: string;
    private readonly challengeField;
    private readonly responseField;
    private readonly cryptoAuthFactory;
    private readonly baseCryptoAuth;
    constructor(options: Options);
    private getChallenge;
    private verifyResponse;
    authenticate(req: IncomingMessage): Promise<void> | undefined;
}
export default CryptoStrategy;
export { CryptoStrategy as Strategy };
