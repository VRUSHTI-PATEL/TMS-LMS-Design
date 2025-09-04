import { PendingApprovalPage } from "@/components/src/pending-approval"
 
interface PendingApprovalsProps {
  isDarkMode: boolean
}
 
export default function PendingApprovals({ isDarkMode }: PendingApprovalsProps) {
  return <PendingApprovalPage isDarkMode={isDarkMode} />
}
