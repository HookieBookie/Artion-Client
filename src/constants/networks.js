import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0x0cF57A243345E8421abC37913110203a3c45fe8d',
    sales: '0xbcd69a84887f68B39c0636FbD05a8c3E33857952',
    bundleSales: '0xA1Be7bC65Db22eeacD4CCE8E0aB3b1bAC518e334',
    factory: '0x7ffAa7C0B6A482068993597b9043659A658E5De7', //FantomNFTFactory
    privateFactory: '0xb7723715cA205ECA949E0e946e6244fF88c2C950', //FantomNFTFactoryPrivate
    artFactory: '0x71C28F628266e2573952BC6592cbD563FDABeDFd', //FantomArtFactory
    privateArtFactory: '0xFb0e36e17f65b82Dc4316B2Da4144C55c59b8026', //FantomArtFactoryPrivate
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0xCf4dc8a2e6900d15fc40561B5C00dDEcFd95F8Fd',
    sales: '0xA043cDA13E145C393f926F5Fdd59C779adF1F55e',
    bundleSales: '0xCB44177Cc47d5Cf1aC0d2341eAF7d764f4479Cb3',
    factory: '0xE8448E00D3E285Fe0EC70D2825AF55A5Fc8039f7', //FantomNFTFactory
    privateFactory: '0xbA6b0CF52B02f4B0C34D3ACa0dD9f6662521e074', //FantomNFTFactoryPrivate
    artFactory: '0x7D4A35F4ab8FF5364A20C05Fbb01C5fAB54c5a35', //FantomArtFactory
    privateArtFactory: '0xCB41a7cbB8C090F12Cc2471ebF4D206Aec2a05bF', //FantomArtFactoryPrivate
  },
};
