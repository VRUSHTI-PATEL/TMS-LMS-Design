import { TimesheetPage } from "@/components/timesheet/timesheet-page"

interface TimesheetProps {
  isDarkMode: boolean
}

export default function Timesheet({ isDarkMode }: TimesheetProps) {
  return <TimesheetPage isDarkMode={isDarkMode} />
}
