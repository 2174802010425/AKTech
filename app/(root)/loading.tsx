export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Vòng xoay */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-gray-900"></div>
      </div>

    
      <p className="mt-6 text-lg font-medium tracking-wide text-gray-300 animate-pulse">
        Loading...
      </p>
    </div>
  )
}
