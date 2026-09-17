import { NavBar } from '@/shared/components/core/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import { CartPage, CheckoutPage, CMSOrdersPage, CMSPage, CMSProductsPage, LoginPage, ShopPage, ThanksPage } from './pages';
import { PrivateRoute } from './shared';

// IffugOnCode21!

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <NavBar />
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="thankyou" element={<ThanksPage />} />

          <Route path="cms" element={<PrivateRoute><CMSPage /></PrivateRoute>}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route index element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
