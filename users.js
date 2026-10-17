// ==========================================
// 🔑 獨立人員帳號設定檔 (users.js)
// 排序順序：行政人員 ➔ 管理員 ➔ 員工
// ==========================================

const userDatabase = [
    // 1. 行政人員
    { username: "lllyuix",   password: "0216", name: "副經理",       role: "行政人員", badgeClass: "badge-staff" },
    
    // 2. 管理員
    { username: "admin",   password: "123", name: "系統管理員", role: "管理員",   badgeClass: "badge-admin" },
    
    // 3. 員工
    { username: "emp01",   password: "123", name: "張司機員",     role: "員工",     badgeClass: "badge-employee" },
    
    // 💡 未來要新增其他人員，可依照您想要的排序直接加在對應的位置！
];
