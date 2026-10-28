/**
 * Home view — a Server Component.
 */
export const HomeView = () => {
  return (
    <main className="min-h-lvh flex items-center justify-center bg-black">
      <div className="text-center px-8">
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
          Loopstack
        </h1>
        <p className="text-2xl text-gray-300 mb-4 font-light">
          by Prasidh P Shetty
        </p>
        <div className="mt-8 space-y-2">
          <p className="text-lg text-green-400">
            ✓ Next.js 16 with Turbopack
          </p>
          <p className="text-lg text-green-400">
            ✓ Successfully deployed on Vercel
          </p>
          <p className="text-lg text-green-400">
            ✓ Ready for development
          </p>
        </div>
      </div>
    </main>
  );
};
