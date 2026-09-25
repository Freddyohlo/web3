import { http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Se configuran en .env.local (ver .env.example). Nunca subir el .env real.
const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? 'YOUR_WALLETCONNECT_PROJECT_ID';
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

// Si hay API key de Alchemy se usa ese nodo; si no, el RPC público de la red.
function rpc(chain: 'mainnet' | 'sepolia') {
  return alchemyKey ? http(`https://eth-${chain}.g.alchemy.com/v2/${alchemyKey}`) : http();
}

export const config = getDefaultConfig({
  appName: 'Web3 Portfolio',
  projectId,
  chains: [mainnet, sepolia],
  ssr: true,
  transports: {
    [mainnet.id]: rpc('mainnet'),
    [sepolia.id]: rpc('sepolia'),
  },
});
