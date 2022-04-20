require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember smile inner enrich orange snap'; 
let testAccounts = [
"0xb62b2b0fde08047d819f45e5afc484876e2b77d678ea10217f433be04d73108b",
"0x65dee08c89e6aaf6b9412a57efa93b3d04d604470fef2882773b9f30a934c9c3",
"0x9ec35c703e6c3e6c2e8f2a1bd5fae425339f6d42a2b00ca18dae5907051a368c",
"0x482f6c058096a24e1cc7c67d8038037543dc694d7c32a06c099d64e86973d6d6",
"0xaeca1fbfd24270980627618168e1cdfaada4f2453522b93f860379857a91082a",
"0x8b2ef3ef0258b6880265bfeb71e911e96a7791717be7448bc6d70cea81c4fe89",
"0x78831e683811cbdb04bd01e70ee590c46f9094bf26c1eebd7c689d9dee35f737",
"0x7d630110fdc945c90ec66127a00562654c859ac31905f85968bf320c0869a3be",
"0x5f66ccb9ec4f1e19fc221730558565a965b94ae314f5e2f521c1cf7e7b6f1192",
"0x3a2ba70fd58ffa6ff4e819be4b96fa915e08ed232c4d496b517b4fc6a66cbce0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

