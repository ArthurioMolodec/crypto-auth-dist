import { BaseCryptoAuth } from '../base';
import { IWalletVerifier, WalletSignatureData } from '../wallet-verify';
export declare class EVMWalletVerifier extends BaseCryptoAuth implements IWalletVerifier {
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
}
