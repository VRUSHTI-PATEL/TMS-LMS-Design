import { ManageEngagementsPage } from "@/components/src/manage-engagements"
 
interface ManageEngagementsProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}

export default function ManageEngagements({ isDarkMode, sidebarOpen }: ManageEngagementsProps) {
  return <ManageEngagementsPage isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} />
}
