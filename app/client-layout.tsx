// // // app/client-layout.tsx
// // "use client";
// // import React from "react";
// // import { useState, useEffect } from "react";
// // import { Sidebar } from "@/components/layout/sidebar";
// // import { Header } from "@/components/layout/header";
// // import { Footer } from "@/components/layout/footer";

// // export default function ClientLayout({ children }: { children: React.ReactNode }) {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   useEffect(() => {
// //     if (isDarkMode) {
// //       document.documentElement.classList.add('dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //     }
// //   }, [isDarkMode]);

// //   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
// //   const toggleTheme = () => setIsDarkMode(!isDarkMode);

// //   return (
// //     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
// //       <Header
// //         onSidebarToggle={toggleSidebar}
// //         isDarkMode={isDarkMode}
// //         onThemeToggle={toggleTheme}
// //       />
// //       <Sidebar
// //         isOpen={sidebarOpen}
// //         onToggle={toggleSidebar}
// //         isDarkMode={isDarkMode}
// //       />
// //       <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
// //         <div>
// //           {React.cloneElement(children as React.ReactElement)}
// //         </div>
// //       </main>
// //       <Footer/>
// //     </div>
// //   );
// // }





// //********************************************************  above is previous code mine*********************************************************************** */
// //********************************************************  below is vrushti code v0.dev*********************************************************************** */

// "use client"

// import React from "react"

// import { useState, useEffect } from "react"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Sidebar } from "@/components/layout/sidebar"
// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"

// const inter = Inter({ subsets: ["latin"] })

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   useEffect(() => {
//     // Apply dark mode class to document
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }, [isDarkMode])

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen)
//   }

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode)
//   }

//   return (
//     <html lang="en" className={isDarkMode ? "dark" : ""}>
//       <body className={inter.className}>
//         <div
//           className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
//         >
//           <Header onSidebarToggle={toggleSidebar} isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
//           <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} isDarkMode={isDarkMode} />

//           <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}>
//             <div className="min-h-full flex flex-col">
//               {React.cloneElement(children as React.ReactElement)}
//             </div>
//           </main>

//           <Footer isDarkMode={isDarkMode} />
//         </div>
//       </body>
//     </html>
//   )
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//******************************************************below is the sidebar height adjusted code************************************************************** */


"use client"
 
import React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
 
const inter = Inter({ subsets: ["latin"] })
 
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
 
  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])
 
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
 
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className={inter.className}>
        <div
          className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
        >
          <Header 
            onSidebarToggle={toggleSidebar} 
            isDarkMode={isDarkMode} 
            onThemeToggle={toggleTheme} 
          />
          <Sidebar 
            isOpen={sidebarOpen} 
            onToggle={toggleSidebar} 
            isDarkMode={isDarkMode} 
          />
 
          <main className={`flex-1 pt-16 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""} overflow-x-hidden`}>
            <div className="min-h-full flex flex-col w-full max-w-full">
              {React.cloneElement(children as React.ReactElement, { sidebarOpen })}
            </div>
          </main>
 
          <Footer isDarkMode={isDarkMode} />
        </div>
      </body>
    </html>
  )
}