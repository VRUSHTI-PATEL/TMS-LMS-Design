"use client"
 
import { useState } from "react"
import { LeaveManagementPage } from "@/components/src/leave-management/leave-management-page"
 
interface LeaveManagementProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}

export default function LeaveManagement({ isDarkMode, sidebarOpen }: LeaveManagementProps) {
  return <LeaveManagementPage isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} />
}
