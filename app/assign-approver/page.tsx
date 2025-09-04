import { AssignApproverPage } from "@/components/src/assign-approver"

interface AssignApproverProps {
  isDarkMode?: boolean
  sidebarOpen?: boolean
}

export default function AssignApprover({ isDarkMode, sidebarOpen }: AssignApproverProps) {
  return <AssignApproverPage isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} />
}
