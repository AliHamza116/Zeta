export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white/80 backdrop-blur">
      <div
        role="status"
        aria-label="Loading"
        className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
      />
    </div>
  );
}
