import '../styles/Pages.css'

export default function Settings() {
  return (
    <div className="page">
      <h1>الإعدادات</h1>
      
      <div className="card">
        <h2>بيانات الشركة</h2>
        <div className="form-group">
          <div>
            <label>اسم الشركة</label>
            <input type="text" value="Silver Eagle For Trade & Distribution" disabled />
          </div>
          <div>
            <label>رقم الهاتف</label>
            <input type="text" placeholder="+20 1234567890" />
          </div>
          <div>
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="info@silveregle.com" />
          </div>
          <div>
            <label>العنوان</label>
            <textarea placeholder="عنوان الشركة" rows="3"></textarea>
          </div>
          <button className="btn btn-success" style={{marginTop: '1rem'}}>حفظ التغييرات</button>
        </div>
      </div>

      <div className="card">
        <h2>الحساب</h2>
        <div className="form-group">
          <div>
            <label>اسم المستخدم</label>
            <input type="text" value="admin" disabled />
          </div>
          <div>
            <label>كلمة المرور الحالية</label>
            <input type="password" />
          </div>
          <div>
            <label>كلمة المرور الجديدة</label>
            <input type="password" />
          </div>
          <div>
            <label>تأكيد كلمة المرور</label>
            <input type="password" />
          </div>
          <button className="btn btn-success" style={{marginTop: '1rem'}}>تحديث كلمة المرور</button>
        </div>
      </div>

      <div className="card">
        <h2>إشعارات</h2>
        <div className="setting-option">
          <input type="checkbox" defaultChecked /> <label>إشعارات المبيعات الجديدة</label>
        </div>
        <div className="setting-option">
          <input type="checkbox" defaultChecked /> <label>تنبيهات المخزون المنخفض</label>
        </div>
        <div className="setting-option">
          <input type="checkbox" /> <label>إشعارات البريد الإلكتروني</label>
        </div>
      </div>
    </div>
  )
}