import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@layouts/DefaultLayout'

import { Home } from '@pages/Home'
import { Publication } from '@pages/Publication'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications/:id" element={<Publication />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
