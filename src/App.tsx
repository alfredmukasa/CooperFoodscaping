import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  AboutPage,
  ContactPage,
  FoodscapingLayout,
  GalleryPage,
  HomePage,
  ServiceAreaPage,
  ServicesPage,
} from './foodscaping'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FoodscapingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
