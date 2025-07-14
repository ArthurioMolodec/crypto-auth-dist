import { IWalletVerifier, WalletSignatureData } from './wallet-verify';
export declare class PublicException extends Error {
    constructor(message: string);
}
export declare class UnauthorizedException extends PublicException {
    constructor(message: string);
}
export declare class BadRequestException extends PublicException {
    constructor(message: string);
}
export interface AuthChallenge {
    message: string;
    nonce: string;
    timestamp: number;
    expiresAt: number;
}
export declare class BaseCryptoAuth implements IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
    generateChallenge(payload: {
        address: string;
        additional_info?: string;
    }): Promise<AuthChallenge>;
    verifyResponse(payload: {
        message?: string;
        address: string;
        signature: string;
        publicKey?: string;
        challenge: AuthChallenge;
        additional_info?: string;
    }): Promise<{
        status: false;
        address?: undefined;
    } | {
        status: true;
        address: string;
    }>;
    protected generateNonce(): string;
    protected buildChallengeMessage(address: string, nonce: string, timestamp: number, expiresAt: number, additional_info?: string): string;
    protected parseChallengeMessage(message: string): {
        address: string;
        nonce: string;
        timestamp: number;
        expiresAt: number;
        additional_info: string;
    };
}
