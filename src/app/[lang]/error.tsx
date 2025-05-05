'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log('Error:', error);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="bg-blue-main text-white px-4 py-2 rounded hover:bg-blue-main/90"
      >
        Try again
      </button>
    </div>
  );
}
