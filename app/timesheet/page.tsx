import { TimesheetPage } from "@/components/timesheet/timesheet-page"

interface TimesheetProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}

export default function Timesheet({ isDarkMode, sidebarOpen }: TimesheetProps) {
  return <TimesheetPage isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} />
}
