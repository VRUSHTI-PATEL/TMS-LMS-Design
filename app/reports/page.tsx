import { PlaceholderPage } from "@/components/src/placeholder-page"
import { BarChart3 } from 'lucide-react'
 
interface ReportsProps {
  isDarkMode: boolean
}
 
export default function Reports({ isDarkMode }: ReportsProps) {
  return <PlaceholderPage title="Reports" icon={<BarChart3 className="h-6 w-6" />} />
}
