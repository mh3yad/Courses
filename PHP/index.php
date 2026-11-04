

<form action="register.php" method="POST">
  <input type="text" name="user" placeholder="الاسم" required>
  <input type="email" name="email" placeholder="البريد" required>
  <input type="password" name="pass" placeholder="كلمة المرور" required>
  
  <select name="country">
    <option value="EG">مصر</option>
    <option value="SA">السعودية</option>
  </select>
  
  <label><input type="checkbox" name="agree" value="1" required> أوافق على الشروط</label>
  <button type="submit">تسجيل حساب</button>
</form>