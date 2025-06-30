import { BaseCryptoAuth } from "../base";
import { IWalletVerifier, WalletSignatureData } from "../wallet-verify";
export declare class TonCryptoAuth extends BaseCryptoAuth implements IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
}
