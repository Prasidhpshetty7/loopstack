/**
 * Home view — a Server Component.
 */
export const HomeView = () => {
  return (
    <main className="min-h-lvh flex items-center justify-center bg-black">
      <div className="text-center px-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to Loopstack
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Built by Prasidh P Shetty
        </p>
        <p className="text-gray-500">
          Your Next.js 16 project is successfully deployed on Vercel! 🎉
        </p>
      </div>
    </main>
  );
};
