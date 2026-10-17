// ==========================================
// 🔑 獨立人員帳號設定檔 (users.js)
// 角色可設定為："管理員"、"行政人員" 或 "員工"
// ==========================================

const userDatabase = [
    { username: "admin", password: "123", name: "系統總管理員", role: "管理員", badgeClass: "badge-admin" },
    { username: "staff", password: "123", name: "王專員",       role: "行政人員", badgeClass: "badge-staff" },
    { username: "emp01", password: "123", name: "張司機員",     role: "員工",     badgeClass: "badge-employee" },
    
    // 💡 未來要新增人員，直接複製底下格式貼在上方即可：
    // { username: "帳號", password: "密碼", name: "姓名", role: "員工", badgeClass: "badge-employee" }
];
