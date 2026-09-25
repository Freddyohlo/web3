# 🔗 Web3 Portfolio — Billetera descentralizada

Aplicación web que permite **conectar una billetera Ethereum** y consultar el
saldo de la cuenta, además de interactuar con la red. Soporta **Mainnet** (red
principal) y **Sepolia** (red de prueba).

**Demo en vivo:** https://walletweb3portafolio.netlify.app/

## ✨ Qué hace

- **Conexión de billetera** con el modal de RainbowKit (MetaMask, WalletConnect, Coinbase Wallet y más).
- **Consulta de saldo** de la cuenta conectada.
- **Cambio de red** entre Ethereum Mainnet y Sepolia.
- **Compatibilidad EVM**.

## 🛠️ Tecnologías

| Tecnología | Rol |
| --- | --- |
| **Next.js 13** (App Router) | Framework y SSR |
| **TypeScript** | Tipado estático |
| **wagmi** | Hooks de React para Ethereum |
| **viem** | Cliente de bajo nivel para la blockchain |
| **RainbowKit** | UI de conexión de billetera |
| **Tailwind CSS** + **shadcn/ui** | Estilos y componentes |
| **Netlify** | Hosting y despliegue |

## 🚀 Puesta en marcha

```bash
git clone https://github.com/Freddyohlo/web3.git
cd web3
npm install
cp .env.example .env.local   # completa tus credenciales
npm run dev
```

Abre http://localhost:3000

### Variables de entorno

| Variable | Obligatoria | Dónde obtenerla |
| --- | --- | --- |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | **Sí** | [WalletConnect Cloud](https://cloud.reown.com) |
| `NEXT_PUBLIC_ALCHEMY_API_KEY` | No | [Alchemy](https://dashboard.alchemy.com) |

Sin el **Project ID**, el botón de conexión no abre el modal de billeteras.
Sin la **API key de Alchemy**, la app usa el RPC público de cada red (funciona,
pero con límites de velocidad).

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificación de tipos |

## 📁 Estructura

```
app/
  layout.tsx             Layout raíz (metadatos, SEO y Open Graph)
  page.tsx               Página principal
  globals.css            Estilos globales
components/
  ConnectButton.tsx      Botón de conexión de billetera
  Providers.tsx          Providers de wagmi, react-query y RainbowKit
  ui/                    Componentes de shadcn/ui
lib/
  wagmi.ts               Configuración de redes y transportes
  utils.ts               Utilidades de clases CSS
public/
  og-image.png           Imagen para compartir en redes (1200x630)
  icon.png               Ícono de la app
  apple-touch-icon.png   Ícono para iOS
netlify.toml             Configuración de despliegue en Netlify
```

## 🔐 Seguridad

- Las credenciales se leen desde `.env.local`, que **no** se sube al repositorio.
- `.env.example` sirve de plantilla y sí se versiona.
- La app es de **solo lectura sobre la blockchain**: no custodia fondos ni
  solicita claves privadas. La firma siempre ocurre en la billetera del usuario.

## 📄 Licencia

Uso personal. Todos los derechos reservados.
