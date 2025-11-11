import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <main className='mt-9 mx-auto w-2/5 bg-neutral-950 rounded-xl p-3'>
    <form className='grid gap-3'>
      
      <legend className='text-2xl text-balance font-sans'>Register form</legend>

      <div className='flex flex-col rounded-lg p-3'>
        <label className='text-lg' htmlFor='username'>Username:</label>
        <input className='bg-neutral-700 rounded-lg p-1' type='text' autoComplete='username' name='username'/>
      </div>

      <div className='flex flex-col rounded-lg p-3'>
        <label className='text-lg' htmlFor='email'>Email:</label>
        <input className='bg-neutral-700 rounded-lg p-1' type='email' autoComplete='email' name='email'/>
      </div>

      <div className='flex flex-col rounded-lg p-3'>
        <label className='text-lg' htmlFor='password'>Password:</label>
        <input className='bg-neutral-700 rounded-lg p-1' type='password' autoComplete='new-password' name='password'/>
      </div>

      <div className='flex flex-col rounded-lg p-3'>
        <label className='text-lg' htmlFor='passwordConfirm'>Repeat Password:</label>
        <input className='bg-neutral-700 rounded-lg p-1' type='password' autoComplete='new-password' name='passwordConfirm'/>
      </div>


      <button type='submit' className='bg-neutral-700 p-2 rounded-lg hover:inset-shadow-sm hover:inset-shadow-neutral-800 hover:shadow-sm hover:shadow-neutral-500 hover:opacity-85 inset-shadow-sm inset-shadow-neutral-600 shadow-sm shadow-neutral-900 transition-all'>Create user</button>

    </form>
  </main>)
}
