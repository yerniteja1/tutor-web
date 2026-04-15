export const mockSchool = {
  name: "School Name Here",
  id: "School ID",
};

export const mockAdmin = {
  name: "School Admin",
};

export const mockCollection = {
  greeting: "Hi, John! 👋",
  subtitle: "Here's a quick overview of your day",
  julyCollection: "₹33.4L",
  totalAmount: "₹54.95L",
  julyPercent: 70,
  remainPercent: 30,
};

export const mockFeeStatus = {
  percent: 70,
  totalStudents: 1320,
  collected: "₹33.4L",
  overdue: "₹12.5L",
};

export const mockStatCards = [
  {
    id: "1",
    label: "No. of Events",
    value: "20",
    sub: "In whole academic year",
    icon: "👥",
    progress: 40,
  },
  {
    id: "2",
    label: "Overall Student Strength",
    value: "1320",
    sub: "520 boys, 550 girls",
    icon: "📈",
    progress: 65,
  },
  {
    id: "3",
    label: "Teachers Present",
    value: "45",
    sub: "out of 48",
    icon: "$",
    progress: 90,
  },
  {
    id: "4",
    label: "Current Fee",
    value: "₹12,239",
    sub: "Exam Fee",
    icon: "▣",
    progress: 55,
  },
];

export const mockAttendance = [
  {
    id: "1",
    label: "Present",
    percent: "70%",
    count: "1300",
    color: "text-green-500",
    updated: "Last Updated: 2h ago",
  },
  {
    id: "2",
    label: "Absent",
    percent: "10%",
    count: "6",
    color: "text-red-500",
    updated: "Last Updated: 2h ago",
  },
  {
    id: "3",
    label: "Leave",
    percent: "20%",
    count: "14",
    color: "text-yellow-500",
    updated: "Last Updated: 2h ago",
  },
];

export const mockAttendanceChart = [
  { day: "Mon", present: 80, absent: 20, leave: 10 },
  { day: "Tue", present: 70, absent: 15, leave: 8 },
  { day: "Wed", present: 90, absent: 12, leave: 6 },
  { day: "Thu", present: 90, absent: 5, leave: 3 },
  { day: "Fri", present: 5, absent: 25, leave: 12 },
];

export const mockAttendanceSummary = {
  present: 30,
  absent: 3,
  leave: 2,
};

export const mockEvents = [
  { id: "1", name: "Annual Sports Day", date: "Today", classes: "Class 1-10" },
  { id: "2", name: "Science Exhibition", date: "Today", classes: "Class 5-10" },
  { id: "3", name: "Talent Show", date: "Today", classes: "Class 1-4" },
];

export const mockAppUsage = [
  {
    app: "Web Magic App",
    count: 38,
    color: "#64748B",
    weeks: [40, 40, 40, 2],
  },
  {
    app: "School Magic App",
    count: 40,
    color: "#020617",
    weeks: [45, 45, 45, 2],
  },
  {
    app: "School Connect App",
    count: 60,
    color: "#E2E8F0",
    weeks: [50, 50, 50, 2],
  },
];

export const mockNavItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", badge: null, href: "/dashboard" },
  { id: "user-management", label: "User Management", icon: "Users", badge: 6, href: "/user-management" },
  { id: "class-management", label: "Class Management", icon: "School", badge: null, href: "/class-management" },
  { id: "subject-master", label: "Subject Master", icon: "BookOpen", badge: null, href: "/subject-master" },
  { id: "teacher-management", label: "Teacher Management", icon: "GraduationCap", badge: null, href: "/teacher-management" },
  { id: "student-management", label: "Student Management", icon: "UserCheck", badge: null, href: "/student-management" },
  { id: "exam-master", label: "Exam Master", icon: "ClipboardList", badge: null, href: "/exam-master" },
  { id: "tabulation", label: "Tabulation", icon: "BarChart2", badge: null, href: "/tabulation" },
  { id: "attendance", label: "Attendance", icon: "CalendarCheck", badge: null, href: "/attendance" },
  { id: "reports", label: "Reports", icon: "FileText", badge: null, href: "/reports" },
];