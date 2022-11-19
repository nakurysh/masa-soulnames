export const config = {
    mainWalletPrivateKey: 'd57dff2e0289824dc22b2f1ece2a66f3948b5ffb536d6ca2859de74a717d3d14',
    ethPerWallet: 0.15, // increase this value if transactions fails because the gasPrice is too high
    transferToMain: true, // if true, eth wil be trasfered back to the main wallet after mint
    retryAfterCrash: false // set to true if script failed after sending ETH to accounts
};
