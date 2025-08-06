import React from "react";
import { ShoppingCart, User, Home, Package } from "lucide-react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-900">My Store</h1>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/cart"
                    className="flex space-x-1 text-gray-600 hover:text-gray-900"
                  >
                    <ShoppingCart className="w-4 h-4 mt-1" />
                    <span>Cart</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 BuyMeBack store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
