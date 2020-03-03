import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Spinner from './spinner'
import { Suspense } from 'react'

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Suspense>
  )
}
