import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
      <div className='bg-neutral-950 my-3 mx-6 p-5 rounded-xl'>
          <header>
            <h1 className='text-balance text-2xl font-bold font-sans'>Manage your notes effortlessly</h1>
          </header>
          <main className='grid grid-cols-2 gap-3 mt-4'>
            <div className='bg-neutral-700 rounded-lg p-3 grid inset-shadow-xs inset-shadow-neutral-500 shadow-md shadow-neutral-800'>
              <h2 className='text-balance'>Do you have account?</h2>
              <Link to='/login' className='bg-neutral-700 border border-neutral-600 p-2 rounded-xl mt-5 hover:bg-neutral-800 transition-colors'>Log in</Link>
            </div>
            <div className='bg-neutral-700 rounded-lg p-3 grid inset-shadow-xs inset-shadow-neutral-500 shadow-md shadow-neutral-800'>
              <h2 className='text-balance'>Don't have account?</h2>
              <Link to="/register" className='bg-neutral-700 border border-neutral-600 p-2 rounded-xl mt-5 hover:bg-neutral-800 transition-colors'>Register</Link>
            </div>
          </main>
      </div>
  )
}
