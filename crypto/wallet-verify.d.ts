export interface WalletSignatureData {
    address: string;
    signature: string;
    publicKey?: string;
    message: string;
}
export interface IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
}
