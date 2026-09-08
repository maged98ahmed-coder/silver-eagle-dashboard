import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Menu, X, Home, BarChart3, DollarSign, Package, Settings, LogOut } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales'
import Expenses from './pages/Expenses'
import Products from './pages/Products'
import SettingsPage from './pages/Settings'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h1>🦅 Silver Eagle</h1>
            <button 
              className="toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="nav-menu">
            <Link to="/" className="nav-item">
              <Home size={20} />
              <span>الرئيسية</span>
            </Link>
            <Link to="/sales" className="nav-item">
              <BarChart3 size={20} />
              <span>المبيعات</span>
            </Link>
            <Link to="/expenses" className="nav-item">
              <DollarSign size={20} />
              <span>المصاريف</span>
            </Link>
            <Link to="/products" className="nav-item">
              <Package size={20} />
              <span>المنتجات</span>
            </Link>
            <Link to="/settings" className="nav-item">
              <Settings size={20} />
              <span>الإعدادات</span>
            </Link>
            <a href="#" className="nav-item logout">
              <LogOut size={20} />
              <span>تسجيل الخروج</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App