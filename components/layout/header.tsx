// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Menu, Bell, Sun, Moon, User, ChevronDown, X } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { NotificationModal } from "./notification-modal"
// import Image from "next/image"
// import { Switch } from "@/components/ui/switch"

// interface HeaderProps {
//   onSidebarToggle: () => void
//   isDarkMode: boolean
//   onThemeToggle: () => void
// }

// export function Header({ onSidebarToggle, isDarkMode, onThemeToggle }: HeaderProps) {
//   const [notifications] = useState(5) // Mock notification count
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false)

//   return (
//     <header className={`border-b px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
//       <div className="flex items-center justify-between">
//         {/* Left side */}
//         <div className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={onSidebarToggle}
//             className="p-2"
//           >
//             <Menu className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
//           </Button>
          
//           {/* Company Logo */}
//           <div className="flex items-center gap-3">
//             <Image
//               src="/images/uci-logo.png"
//               alt="UCI Logo"
//               width={32}
//               height={32}
//               className="rounded-full"
//             />
//             <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
//               Timesheet Management System
//             </h1>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           {/*<div className="flex items-center gap-2">
//             <Sun className="w-4 h-4 text-yellow-500" />
//             <Switch
//               checked={isDarkMode}
//               onCheckedChange={onThemeToggle}
//               className="data-[state=checked]:bg-blue-600"
//             />
//             <Moon className="w-4 h-4 text-gray-600" />
//           </div>*/}

//           {/* Notifications */}
//           <Button 
//             variant="ghost" 
//             size="sm" 
//             className="p-2 relative"
//             onClick={() => setIsNotificationOpen(true)}
//           >
//             <Bell className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
//             {notifications > 0 && (
//               <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 text-white">
//                 {notifications}
//               </Badge>
//             )}
//           </Button>

//           {/* User Profile */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-2 px-3 py-2">
//                 <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                   <span className="text-white font-medium text-sm">JD</span>
//                 </div>
//                 <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>John Doe</span>
                
//               </Button>
//             </DropdownMenuTrigger>
            
//           </DropdownMenu>
//         </div>
//       </div>

//       <NotificationModal 
//         isOpen={isNotificationOpen}
//         onClose={() => setIsNotificationOpen(false)}
//       />
//     </header>
//   )
// }
////////////////////////////////////////////////////////////////////////////////////

"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Bell, Sun, Moon, User, ChevronDown, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationModal } from "./notification-modal"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
interface HeaderProps {
  onSidebarToggle: () => void
  isDarkMode: boolean
  onThemeToggle: () => void
}
export function Header({ onSidebarToggle, isDarkMode, onThemeToggle }: HeaderProps) {
  const [notifications] = useState(5) // Mock notification count
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  return (
<header className={`fixed top-0 left-0 right-0 z-40 border-b px-4 py-3 h-16 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
<div className="flex items-center justify-between h-full">
        {/* Left side */}
<div className="flex items-center gap-4">
<Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="p-2"
>
<Menu className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
</Button>
          {/* Company Logo */}
<div className="flex items-center gap-3">
<Image
              src="/images/uci-logo.png"
              alt="UCI Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
<h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Timesheet Management System
</h1>
</div>
</div>
        {/* Right side */}
<div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {/*<div className="flex items-center gap-2">
<Sun className="w-4 h-4 text-yellow-500" />
<Switch
              checked={isDarkMode}
              onCheckedChange={onThemeToggle}
              className="data-[state=checked]:bg-blue-600"
            />
<Moon className="w-4 h-4 text-gray-600" />
</div>*/}
          {/* Notifications */}
<Button
            variant="ghost"
            size="sm"
            className="p-2 relative"
            onClick={() => setIsNotificationOpen(true)}
>
<Bell className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
            {notifications > 0 && (
<Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 text-white">
                {notifications}
</Badge>
            )}
</Button>
          {/* User Profile */}
<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button variant="ghost" className="flex items-center gap-2 px-3 py-2">
<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
<span className="text-white font-medium text-sm">JD</span>
</div>
<span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>John Doe</span>
</Button>
</DropdownMenuTrigger>
</DropdownMenu>
</div>
</div>
<NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
</header>
  )
}
 