import { IWalletVerifier, WalletSignatureData } from './wallet-verify';
export interface AuthChallenge {
    message: string;
    nonce: string;
    timestamp: number;
    expiresAt: number;
}
export declare class BaseCryptoAuth implements IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
    generateChallenge(address: string): Promise<AuthChallenge>;
    verifyResponse(payload: {
        message: string;
        address: string;
        signature: string;
        publicKey?: string;
    }): Promise<{
        status: false;
        address?: undefined;
    } | {
        status: true;
        address: string;
    }>;
    protected generateNonce(): string;
    protected buildChallengeMessage(address: string, nonce: string, timestamp: number, expiresAt: number): string;
    protected parseChallengeMessage(message: string): {
        address: string;
        nonce: string;
        timestamp: number;
        expiresAt: number;
    };
}
