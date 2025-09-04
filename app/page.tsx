// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { EmployeeDashboard } from '@/components/employee-dashboard'
// import { ManagerDashboard } from '@/components/manager-dashboard'
// import { HRDashboard } from '@/components/hr-dashboard'
// import { Button } from '@/components/ui/button'
// import { Plus, Calendar } from 'lucide-react'

// interface DashboardProps {
//   isDarkMode: boolean
// }

// // Mock user data with roles
// const mockUsers = [
//   { id: 1, name: 'John Doe', roles: ['employee'], title: 'Software Developer' },
//   { id: 2, name: 'Sarah Johnson', roles: ['employee', 'manager'], title: 'Team Lead' },
//   { id: 3, name: 'Mike Wilson', roles: ['hr', 'employee'], title: 'HR Executive' },
//   { id: 4, name: 'Emily Davis', roles: ['employee', 'manager', 'hr'], title: 'Department Head' },
// ]

// export default function Dashboard({ isDarkMode }: DashboardProps) {
//   const [currentUser, setCurrentUser] = useState(mockUsers[0])
//   const [activeView, setActiveView] = useState('employee')
//   const router = useRouter()

//   const getRoleBasedDashboard = () => {
//     const { roles } = currentUser

//     // Always show dashboard based on active view
//     switch (activeView) {
//       case 'employee':
//         return <EmployeeDashboard userRoles={roles} />
//       case 'manager':
//         return <ManagerDashboard userRoles={roles} />
//       case 'hr':
//         return <HRDashboard userRoles={roles} />
//       default:
//         return <EmployeeDashboard userRoles={roles} />
//     }
//   }

//   const handleAddTimeClick = () => {
//     router.push('/timesheet')
//   }

//   const handleAddLeaveClick = () => {
//     router.push('/add-view-leaves')
//   }

//   return (
//     <div className="max-w-7xl mx-auto mb-6 p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between flex-wrap gap-4">
//         {/* Title and Welcome Text */}
//         <div>
//           <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
//           <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Welcome back, {currentUser.name}</p>
//         </div>

//         {/* Centered Role Buttons */}
//         <div className="flex justify-center items-center gap-1 flex-1">
//           <div className="mx-auto flex gap-2">
//             {['employee', 'manager', 'hr'].map(role => (
//               <button
//                 key={role}
//                 onClick={() => setActiveView(role)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
//                   activeView === role
//                     ? 'bg-blue-600 text-white'
//                     : isDarkMode
//                       ? 'text-gray-300 hover:bg-gray-700'
//                       : 'text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {role === 'hr' ? 'Hr' : role}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             className="h-10 flex flex-row items-center gap-2 bg-white px-4 py-2"
//             onClick={handleAddTimeClick}
//           >
//             <Plus className="w-4 h-4" />
//             <span className="text-sm">Add Time</span>
//           </Button>

//           <Button
//             variant="outline"
//             className="h-10 flex flex-row items-center gap-2 bg-white px-4 py-2"
//             onClick={handleAddLeaveClick}
//           >
//             <Calendar className="w-4 h-4" />
//             <span className="text-sm">Add Leave</span>
//           </Button>
//         </div>
//       </div>

//       {/* Role-based Dashboard */}
//       {getRoleBasedDashboard()}
//     </div>
//   )
// }



//page.tsx: (app/main which contains dashboard code only)
 
 
'use client'
 
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EmployeeDashboard } from '@/components/employee-dashboard'
import { ManagerDashboard } from '@/components/manager-dashboard'
import { HRDashboard } from '@/components/hr-dashboard'
import { Button } from '@/components/ui/button'
import { Plus, Calendar, LayoutDashboard } from 'lucide-react'
 
interface DashboardProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}
 
// Mock user data with roles
const mockUsers = [
  { id: 1, name: 'John Doe', roles: ['employee'], title: 'Software Developer' },
  { id: 2, name: 'Sarah Johnson', roles: ['employee', 'manager'], title: 'Team Lead' },
  { id: 3, name: 'Mike Wilson', roles: ['hr', 'employee'], title: 'HR Executive' },
  { id: 4, name: 'Emily Davis', roles: ['employee', 'manager', 'hr'], title: 'Department Head' },
]
 
export default function Dashboard({ isDarkMode, sidebarOpen }: DashboardProps) {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [activeView, setActiveView] = useState('employee')
  const router = useRouter()
 
  const getRoleBasedDashboard = () => {
    const { roles } = currentUser
 
    // Always show dashboard based on active view
    switch (activeView) {
      case 'employee':
        return <EmployeeDashboard userRoles={roles} />
      case 'manager':
        return <ManagerDashboard userRoles={roles} />
      case 'hr':
        return <HRDashboard userRoles={roles} />
      default:
        return <EmployeeDashboard userRoles={roles} />
    }
  }
 
  const handleAddTimeClick = () => {
    router.push('/timesheet')
  }
 
  const handleAddLeaveClick = () => {
    router.push('/add-view-leaves')
  }
 
  return (
<div className={`w-full mb-6 p-4 lg:p-6 overflow-x-hidden ${!sidebarOpen ? 'max-w-none' : 'max-w-7xl mx-auto'}`}>
      {/* Header */}
<div className="flex items-center justify-between flex-wrap gap-4 mb-2">
        {/* Title and Welcome Text */}
<div>
  {/* Row with Icon + Dashboard */}
<div className="flex items-center space-x-2">
<LayoutDashboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
<h1
      className={`text-3xl font-bold ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
>
      Dashboard
</h1>
</div>
  {/* Welcome message below */}
<p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
    Welcome back, {currentUser.name}
</p>
</div>
 
        {/* Centered Role Buttons */}
<div className="flex justify-center items-center gap-1 flex-1">
<div className="mx-auto flex gap-2">
            {['employee', 'manager', 'hr'].map(role => (
<button
                key={role}
                onClick={() => setActiveView(role)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  activeView === role
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-200'
                }`}
>
                {role === 'hr' ? 'HR' : role}
</button>
            ))}
</div>
</div>
 
        <div className="flex gap-2">
<Button
            variant="outline"
            className="h-10 flex flex-row items-center gap-2 bg-white px-4 py-2"
            onClick={handleAddTimeClick}
>
<Plus className="w-4 h-4" />
<span className="text-sm">Add Time</span>
</Button>
 
          <Button
            variant="outline"
            className="h-10 flex flex-row items-center gap-2 bg-white px-4 py-2"
            onClick={handleAddLeaveClick}
>
<Calendar className="w-4 h-4" />
<span className="text-sm">Add Leave</span>
</Button>
</div>
</div>
 
      {/* Role-based Dashboard */}
      {getRoleBasedDashboard()}
</div>
  )
}