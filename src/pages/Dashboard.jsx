import { TrendingUp, TrendingDown, DollarSign, Package } from 'lucide-react'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const stats = [
    {
      title: 'إجمالي المبيعات',
      value: '15,250',
      currency: 'جنيه',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'المصاريف',
      value: '5,800',
      currency: 'جنيه',
      change: '+4.2%',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'الأرباح',
      value: '9,450',
      currency: 'جنيه',
      change: '+18.3%',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'المنتجات',
      value: '128',
      currency: 'منتج',
      change: '+5',
      icon: Package,
      color: 'purple'
    }
  ]

  const recentSales = [
    { id: 1, product: 'كريم مرطب', quantity: 5, price: 150, total: 750, date: '2024-01-15' },
    { id: 2, product: 'شامبو علاجي', quantity: 3, price: 200, total: 600, date: '2024-01-14' },
    { id: 3, product: 'زيت طبيعي', quantity: 8, price: 100, total: 800, date: '2024-01-13' },
  ]

  return (
    <div className="dashboard">
      <h1>لوحة التحكم</h1>
      
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-header">
                <Icon size={28} />
                <span className="change">{stat.change}</span>
              </div>
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
              <small>{stat.currency}</small>
            </div>
          )
        })}
      </div>

      {/* Recent Sales */}
      <div className="card recent-sales">
        <h2>آخر المبيعات</h2>
        <table>
          <thead>
            <tr>
              <th>المنتج</th>
              <th>الكمية</th>
              <th>السعر</th>
              <th>الإجمالي</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {recentSales.map(sale => (
              <tr key={sale.id}>
                <td>{sale.product}</td>
                <td>{sale.quantity}</td>
                <td>{sale.price} جنيه</td>
                <td className="total">{sale.total} جنيه</td>
                <td>{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}