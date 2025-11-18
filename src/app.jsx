import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css'
import A from './components/A'
import { ErrorBoundary } from 'react-error-boundary'
import B from './components/B'

// function ErrorFallback({error}){
//   return(
//     <>
//     <p>Something went to wrong : {error.message}</p> 
//     </>
//   )

// }

export function App() {

  return (
    <>
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
    <A/>
    </ErrorBoundary> */}
    {/* <ErrorBoundary fallbackRender={({error,resetErrorBoundary})=>{
      return(
        <div>
          <h1>Something went wrong.{error.message}</h1>
          <button onClick={()=>resetErrorBoundary()}>reset</button>
        </div>
      )
    }}>
    <A/>
    </ErrorBoundary> */}

    {/* <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <A/>
    </ErrorBoundary> */}
  <B/>
     
    </>
  )
}
