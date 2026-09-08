import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import '../styles/Pages.css'

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'كريم مرطب', category: 'العناية بالوجه', price: 150, stock: 45, status: 'متوفر' },
    { id: 2, name: 'شامبو علاجي', category: 'العناية بالشعر', price: 200, stock: 28, status: 'متوفر' },
    { id: 3, name: 'زيت طبيعي', category: 'الزيوت', price: 100, stock: 5, status: 'قليل' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  })

  const handleAdd = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stock) {
      const stock = parseInt(newProduct.stock)
      setProducts([...products, {
        id: products.length + 1,
        ...newProduct,
        price: parseFloat(newProduct.price),
        stock: stock,
        status: stock > 10 ? 'متوفر' : 'قليل'
      }])
      setNewProduct({ name: '', category: '', price: '', stock: '' })
      setShowForm(false)
    }
  }

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>المنتجات</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <Plus size={20} />
          إضافة منتج
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="card form-card">
          <h2>إضافة منتج جديد</h2>
          <div className="form-group">
            <div className="form-row">
              <div>
                <label>اسم المنتج</label>
                <input
                  type="text"
                  placeholder="اسم المنتج"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
              </div>
              <div>
                <label>الفئة</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                >
                  <option>اختر الفئة</option>
                  <option>العناية بالوجه</option>
                  <option>العناية بالشعر</option>
                  <option>الزيوت</option>
                  <option>العطور</option>
                  <option>الماكياج</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div>
                <label>السعر</label>
                <input
                  type="number"
                  placeholder="السعر"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
              </div>
              <div>
                <label>المخزون</label>
                <input
                  type="number"
                  placeholder="الكمية"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
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

      {/* Products Table */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>اسم المنتج</th>
              <th>الفئة</th>
              <th>السعر</th>
              <th>المخزون</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price} جنيه</td>
                <td>{product.stock}</td>
                <td>
                  <span className={`badge ${product.status === 'متوفر' ? 'badge-success' : 'badge-warning'}`}>
                    {product.status}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn-icon"><Edit2 size={18} /></button>
                  <button className="btn-icon danger" onClick={() => handleDelete(product.id)}>
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