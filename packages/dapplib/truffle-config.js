require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind atom harvest photo flat tumble'; 
let testAccounts = [
"0xb88c22a361837cdaa4983b31b3f68ff15803ab5d0d985671a5c8b0403120bba5",
"0xe2bb77c24f851e5e4d4b856889b8f36cd77ca9fa47139b141f8a600bbd4c03ef",
"0x0b624e8c616a14c093bcc39743ede6d607aa8f36068860d4146f669eb593da17",
"0x856c128f56abd7879b543e7935facd2c6d64b9f736c2c5270aee28e362beeb65",
"0x2bac1f30c25a1cdd9511fd3edf169ed905789b84d6489d972e01550704a95444",
"0x7b7d4f35c115c800ba792fd0e49c45bbbc5d7d450e80b8490bd36b384babccab",
"0x697c61a56fdb26a593726a31379aded0aa26af1b6a24970afa3ec2d2bd127517",
"0xba0404f1678cf4352011e51723b440cbda670501ec215cee02885798a9ae231b",
"0x5a82bcc3440345c9f48bc2e0b7aa031e1806d2b39a510a89982d105615fcd7c0",
"0xbe09737b9409eae23bbdcfb596d48dcfba5044e74e77c586e3fb25d550b04d23"
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
            version: '^0.5.11'
        }
    }
};
