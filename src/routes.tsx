import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import EditInfo from './pages/EditInfo'
import ViewInfo from './pages/ViewInfo'

function Router(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/edit" element={<EditInfo />} />
          <Route path="/view" element={<ViewInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
