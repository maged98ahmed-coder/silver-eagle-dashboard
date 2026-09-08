import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import '../styles/Pages.css'

export default function Sales() {
  const [sales, setSales] = useState([
    { id: 1, product: 'كريم مرطب', customer: 'أحمد علي', quantity: 5, price: 150, total: 750, date: '2024-01-15', status: 'مكتمل' },
    { id: 2, product: 'شامبو علاجي', customer: 'فاطمة محمد', quantity: 3, price: 200, total: 600, date: '2024-01-14', status: 'معلق' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newSale, setNewSale] = useState({
    product: '',
    customer: '',
    quantity: '',
    price: '',
  })

  const handleAdd = () => {
    if (newSale.product && newSale.customer && newSale.quantity && newSale.price) {
      const total = newSale.quantity * newSale.price
      setSales([...sales, {
        id: sales.length + 1,
        ...newSale,
        quantity: parseInt(newSale.quantity),
        price: parseFloat(newSale.price),
        total,
        date: new Date().toISOString().split('T')[0],
        status: 'مكتمل'
      }])
      setNewSale({ product: '', customer: '', quantity: '', price: '' })
      setShowForm(false)
    }
  }

  const handleDelete = (id) => {
    setSales(sales.filter(s => s.id !== id))
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>المبيعات</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <Plus size={20} />
          إضافة مبيعة
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="card form-card">
          <h2>إضافة مبيعة جديدة</h2>
          <div className="form-group">
            <div className="form-row">
              <div>
                <label>المنتج</label>
                <input
                  type="text"
                  placeholder="اسم المنتج"
                  value={newSale.product}
                  onChange={(e) => setNewSale({...newSale, product: e.target.value})}
                />
              </div>
              <div>
                <label>العميل</label>
                <input
                  type="text"
                  placeholder="اسم العميل"
                  value={newSale.customer}
                  onChange={(e) => setNewSale({...newSale, customer: e.target.value})}
                />
              </div>
            </div>
            <div className="form-row">
              <div>
                <label>الكمية</label>
                <input
                  type="number"
                  placeholder="الكمية"
                  value={newSale.quantity}
                  onChange={(e) => setNewSale({...newSale, quantity: e.target.value})}
                />
              </div>
              <div>
                <label>السعر</label>
                <input
                  type="number"
                  placeholder="السعر"
                  value={newSale.price}
                  onChange={(e) => setNewSale({...newSale, price: e.target.value})}
                />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-success" onClick={handleAdd}>حفظ</button>
              <button className="btn" style={{background: 'var(--light)'}} onClick={() => setShowForm(false)}>إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* Sales Table */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>المنتج</th>
              <th>العميل</th>
              <th>الكمية</th>
              <th>السعر</th>
              <th>الإجمالي</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => (
              <tr key={sale.id}>
                <td>{sale.product}</td>
                <td>{sale.customer}</td>
                <td>{sale.quantity}</td>
                <td>{sale.price} جنيه</td>
                <td className="total">{sale.total} جنيه</td>
                <td>{sale.date}</td>
                <td>
                  <span className={`badge ${sale.status === 'مكتمل' ? 'badge-success' : 'badge-warning'}`}>
                    {sale.status}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn-icon"><Edit2 size={18} /></button>
                  <button className="btn-icon danger" onClick={() => handleDelete(sale.id)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}