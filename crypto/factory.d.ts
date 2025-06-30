import { BaseCryptoAuth } from './base';
import { WalletType } from './constants';
import { BitcoinWalletVerifier } from './wallets/bitcoin';
import { EVMWalletVerifier } from './wallets/evm';
import { SolanaWalletVerifier } from './wallets/solana';
import { KusamaWalletVerifier, PolkadotWalletVerifier } from './wallets/substrate';
import { TonCryptoAuth } from './wallets/ton';
export declare class CryptoAuthFactory {
    private readonly baseCryptoAuth;
    private readonly walletVerifiers;
    constructor(baseCryptoAuth?: typeof BaseCryptoAuth, walletVerifiers?: {
        bitcoin: typeof BitcoinWalletVerifier;
        solana: typeof SolanaWalletVerifier;
        evm: typeof EVMWalletVerifier;
        ton: typeof TonCryptoAuth;
        polkadot: typeof PolkadotWalletVerifier;
        kusama: typeof KusamaWalletVerifier;
    });
    getBaseCryptoAuth(): BaseCryptoAuth;
    walletVerifier(walletType: WalletType): BitcoinWalletVerifier | EVMWalletVerifier | SolanaWalletVerifier | PolkadotWalletVerifier | KusamaWalletVerifier | TonCryptoAuth;
}
