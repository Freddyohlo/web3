import { http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Web3 Portfolio',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [mainnet, sepolia],
  ssr: true,
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY'),
  },
});


