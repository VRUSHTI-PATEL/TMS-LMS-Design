import { PendingApprovalPage } from "@/components/src/pending-approval"
 
interface PendingApprovalsProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}

export default function PendingApprovals({ isDarkMode, sidebarOpen }: PendingApprovalsProps) {
  return <PendingApprovalPage isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} />
}
