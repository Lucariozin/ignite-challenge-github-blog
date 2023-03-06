import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@layouts/DefaultLayout'

import { Home } from '@pages/Home'
import { Publication } from '@pages/Publication'
import { NotFound } from '@pages/NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications/:id" element={<Publication />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
