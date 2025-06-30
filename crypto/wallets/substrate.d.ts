import { IWalletVerifier, WalletSignatureData } from '../wallet-verify';
import { BaseCryptoAuth } from '../base';
export declare class SubstrateWalletVerifier extends BaseCryptoAuth implements IWalletVerifier {
    private ss58Format;
    constructor(ss58Format?: number);
    verifySignature(data: WalletSignatureData): Promise<boolean>;
    validateAddress(address: string): boolean;
}
export declare class PolkadotWalletVerifier extends SubstrateWalletVerifier {
    constructor();
}
export declare class KusamaWalletVerifier extends SubstrateWalletVerifier {
    constructor();
}
