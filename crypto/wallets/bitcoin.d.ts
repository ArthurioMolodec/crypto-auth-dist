import { IWalletVerifier, WalletSignatureData } from '../wallet-verify';
import { BaseCryptoAuth } from '../base';
export declare class BitcoinWalletVerifier extends BaseCryptoAuth implements IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
}
