import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='max-w-2/3 min-w-1/3 mx-auto min-h-screen grid place-items-center'>
      <div className='bg-slate-800 p-3 grid gap-3 rounded-md'>
          <header>
            <h1 className='text-balance'>Manage your notes effortlessly</h1>
          </header>
          <main className='grid grid-cols-2 gap-3'>
            <div className='bg-slate-700 rounded-md p-2 grid'>
              <h2 className='text-balance'>Do you have account?</h2>
              <Link to='/login' className='bg-slate-700 border border-slate-600 p-2 rounded-lg mt-5 hover:bg-slate-800 transition-colors'>Log in</Link>
            </div>
            <div className='bg-slate-700 rounded-md p-3 grid'>
              <h2 className='text-balance'>Don't have account?</h2>
              <Link to="/register" className='bg-slate-700 border border-slate-600 p-2 rounded-lg mt-5 hover:bg-slate-800 transition-colors'>Register</Link>
            </div>
          </main>
      </div>
    </div>
  )
}
