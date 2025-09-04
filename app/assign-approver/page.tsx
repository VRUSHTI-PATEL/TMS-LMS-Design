import { AssignApproverPage } from "@/components/src/assign-approver"

interface AssignApproverProps {
  isDarkMode: boolean
}

export default function AssignApprover({ isDarkMode }: AssignApproverProps) {
  return <AssignApproverPage isDarkMode={isDarkMode} />
}
