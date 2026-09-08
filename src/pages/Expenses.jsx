import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import '../styles/Pages.css'

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'إيجار', amount: 2000, date: '2024-01-15', description: 'إيجار المحل' },
    { id: 2, category: 'رواتب', amount: 3000, date: '2024-01-10', description: 'رواتب الموظفين' },
    { id: 3, category: 'مشتريات', amount: 1500, date: '2024-01-08', description: 'شراء مستوعبات' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    description: '',
  })

  const handleAdd = () => {
    if (newExpense.category && newExpense.amount) {
      setExpenses([...expenses, {
        id: expenses.length + 1,
        ...newExpense,
        amount: parseFloat(newExpense.amount),
        date: new Date().toISOString().split('T')[0],
      }])
      setNewExpense({ category: '', amount: '', description: '' })
      setShowForm(false)
    }
  }

  const handleDelete = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="page">
      <div className="page-header">
        <h1>المصاريف</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <Plus size={20} />
          إضافة مصروف
        </button>
      </div>

      {/* Summary */}
      <div className="card summary-card">
        <h3>إجمالي المصاريف</h3>
        <p className="amount">{totalExpenses.toLocaleString('ar-EG')} جنيه</p>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="card form-card">
          <h2>إضافة مصروف جديد</h2>
          <div className="form-group">
            <div className="form-row">
              <div>
                <label>الفئة</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                >
                  <option>اختر الفئة</option>
                  <option>إيجار</option>
                  <option>رواتب</option>
                  <option>مشتريات</option>
                  <option>نقل</option>
                  <option>إعلانات</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div>
                <label>المبلغ</label>
                <input
                  type="number"
                  placeholder="المبلغ"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label>الوصف</label>
              <textarea
                placeholder="الوصف (اختياري)"
                value={newExpense.description}
                onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                rows="3"
              ></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-success" onClick={handleAdd}>حفظ</button>
              <button className="btn" style={{background: 'var(--light)'}} onClick={() => setShowForm(false)}>إلغاء</button>
            </div>
          </div>
        </div>
      )}

      {/* Expenses Table */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>الفئة</th>
              <th>المبلغ</th>
              <th>الوصف</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td className="total">{expense.amount.toLocaleString('ar-EG')} جنيه</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td className="actions">
                  <button className="btn-icon"><Edit2 size={18} /></button>
                  <button className="btn-icon danger" onClick={() => handleDelete(expense.id)}>
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