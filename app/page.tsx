import ConnectButton from '@/components/ConnectButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h1 className="text-lg font-semibold">Web3 Portfolio</h1>
        <ConnectButton />
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          ¡Portafolio listo para Web3!
        </h2>
        <p className="text-muted-foreground text-lg max-w-md text-center">
          Conecta tu billetera para comenzar a interactuar con la aplicación
          descentralizada.
        </p>
      </main>
    </div>
  );
}
