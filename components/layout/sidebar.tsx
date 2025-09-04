// //sidebar.tsx:
// "use client"
 
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { LayoutDashboard, Clock, X, CheckCircle, UserCheck, Calendar, CalendarPlus, FileCheck, BriefcaseBusiness, BarChart3, Hourglass } from 'lucide-react'
// import Link from "next/link"
// import { usePathname } from "next/navigation"


// interface SidebarProps {

// isOpen: boolean

// onToggle: () => void

// isDarkMode: boolean

// }
 
// export function Sidebar({ isOpen, onToggle, isDarkMode }: SidebarProps) {

// const pathname = usePathname()
 
// const menuItems = [

//   {

//     title: "Dashboard",

//     icon: LayoutDashboard,

//     href: "/",

//     active: pathname === "/"

//   },

//   {

//     title: "Add/View Timesheet",

//     icon: Clock,

//     href: "/timesheet",

//     active: pathname === "/timesheet"

//   },

//   {

//     title: "Add/View Leaves",

//     icon: CalendarPlus,

//     href: "/add-view-leaves",

//     active: pathname === "/add-view-leaves"

//   },

//   //{

//     //title: "Approval Status",

//     //icon: CheckCircle,

//     //href: "/approval-status",

//     //active: pathname === "/approval-status"

//   //},

//   {

//     title: "Assign Approver",

//     icon: UserCheck,

//     href: "/assign-approver",

//     active: pathname === "/assign-approver"

//   },

//   {

//     title: "Leave Management",

//     icon: Calendar,

//     href: "/leave-management",

//     active: pathname === "/leave-management"

//   },

//   {

//     title: "Pending Approvals",

//     icon: Hourglass,

//     href: "/pending-approvals",

//     active: pathname === "/pending-approvals"

//   },

//   //{

//     //title: "Approved Timesheets",

//    // icon: FileCheck,

//     //href: "/approved-timesheets",

//     //active: pathname === "/approved-timesheets"

// // },

//   {

//     title: "Manage Engagements",

//     icon: BriefcaseBusiness,

//     href: "/manage-engagements",

//     active: pathname === "/manage-engagements"

//   },

//   {

//     title: "Reports",

//     icon: BarChart3,

//     href: "/reports",

//     active: pathname === "/reports"

//   }

// ]
 
// return (
// <>

//     {/* Overlay for mobile */}

//     {isOpen && (
// <div 

//         className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"

//         onClick={onToggle}

//       />

//     )}

//     {/* Sidebar */}
// <div className={cn(

//       "fixed left-0 top-15 h-full border-r z-50 transition-transform duration-300 ease-in-out w-64",

//       isOpen ? "translate-x-0" : "-translate-x-full",

//       isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"

//     )}>

//       {/*<div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
// <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Navigation</h2>
// <Button

//           variant="ghost"

//           size="sm"

//           onClick={onToggle}
// >
// <X className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
// </Button>
// </div>*/}
// <nav className="p-4 space-y-2">

//         {menuItems.map((item) => (
// <Link

//             key={item.href}

//             href={item.href}

//             className={cn(

//               "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",

//               item.active 

//                 ? "bg-blue-100 text-blue-700" 

//                 : isDarkMode 

//                   ? "text-gray-300 hover:bg-gray-800 hover:text-white"

//                   : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"

//             )}

//             onClick={() => {

//               // Close sidebar on mobile after navigation

//               if (window.innerWidth < 1024) {

//                 onToggle()

//               }

//             }}
// >
// <item.icon className="w-4 h-4" />

//             {item.title}
// </Link>

//         ))}
// </nav>
// </div>
// </>

// )

// }

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
"use client"
 
import { cn } from "@/lib/utils"
 
import { Button } from "@/components/ui/button"
 
import { LayoutDashboard, Clock, X, CheckCircle, UserCheck, Calendar, CalendarPlus, FileCheck, BriefcaseBusiness, BarChart3, Hourglass } from 'lucide-react'
 
import Link from "next/link"
 
import { usePathname } from "next/navigation"
 
interface SidebarProps {
 
  isOpen: boolean
 
  onToggle: () => void
 
  isDarkMode: boolean
 
}
 
export function Sidebar({ isOpen, onToggle, isDarkMode }: SidebarProps) {
 
  const pathname = usePathname()
 
  const menuItems = [
 
    {
 
      title: "Dashboard",
 
      icon: LayoutDashboard,
 
      href: "/",
 
      active: pathname === "/"
 
    },
 
    {
 
      title: "Add/View Timesheet",
 
      icon: Clock,
 
      href: "/timesheet",
 
      active: pathname === "/timesheet"
 
    },
 
    {
 
      title: "Add/View Leaves",
 
      icon: CalendarPlus,
 
      href: "/add-view-leaves",
 
      active: pathname === "/add-view-leaves"
 
    },
 
    {
 
      title: "Assign Approver",
 
      icon: UserCheck,
 
      href: "/assign-approver",
 
      active: pathname === "/assign-approver"
 
    },
 
    {
 
      title: "Leave Management",
 
      icon: Calendar,
 
      href: "/leave-management",
 
      active: pathname === "/leave-management"
 
    },
 
    {
 
      title: "Review & Approvals",
 
      icon: Hourglass,
 
      href: "/pending-approvals",
 
      active: pathname === "/pending-approvals"
 
    },
 
    {
 
      title: "Manage Engagements",
 
      icon: BriefcaseBusiness,
 
      href: "/manage-engagements",
 
      active: pathname === "/manage-engagements"
 
    },
 
    {
 
      title: "Reports",
 
      icon: BarChart3,
 
      href: "/reports",
 
      active: pathname === "/reports"
 
    }
 
  ]
 
  return (
<>
 
      {/* Overlay for mobile */}
 
      {isOpen && (
<div
 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
 
          onClick={onToggle}
 
        />
 
      )}
 
      {/* Sidebar */}
<div className={cn(
 
        "fixed left-0 top-16 h-[calc(100vh-4rem)] border-r z-50 transition-transform duration-300 ease-in-out w-64",
 
        isOpen ? "translate-x-0" : "-translate-x-full",
 
        isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
 
      )}>        
<nav className="p-4 space-y-2 overflow-y-auto h-full">
 
          {menuItems.map((item) => (
<Link
 
              key={item.href}
 
              href={item.href}
 
              className={cn(
 
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
 
                item.active
 
                  ? "bg-blue-100 text-blue-700"
 
                  : isDarkMode
 
                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
 
              )}
 
              onClick={() => {
 
                // Close sidebar on mobile after navigation
 
                if (window.innerWidth < 1024) {
 
                  onToggle()
 
                }
 
              }}
>
<item.icon className="w-4 h-4" />
 
              {item.title}
</Link>
 
          ))}
</nav>
</div>
</>
 
  )
 
}