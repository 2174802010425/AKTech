import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen text-gray-800'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <h2 className='text-3xl mb-8'>Page Not Found</h2>
      <p className='text-lg text-center mb-12'>We're sorry, but the page you were looking for could not be found</p>
      <Link href={'/'} className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'>
        Go to homepage
      </Link>
    </div>
  )
}