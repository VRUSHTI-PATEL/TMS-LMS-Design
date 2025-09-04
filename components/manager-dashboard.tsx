"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, UserCheck, TrendingUp } from "lucide-react"
import { LeaveHistoryModal } from "@/components/leave-history-modal"
import { useState } from "react"

interface ManagerDashboardProps {
  userRoles: string[]
}

export function ManagerDashboard({ userRoles }: ManagerDashboardProps) {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false)

  const handleReviewApprovals = () => {
    alert("Navigating to Review Approvals page...")
    // Here you would typically navigate to the approvals page
    // router.push('/approvals') or similar
  }

  return (
    <div className="space-y-6">
      {/* Metric Cards Row - Border Only */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-black-600">2TS ,4L</div>
              <div className="text-sm text-gray-600">Pending Approvals</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-black-600">24</div>
              <div className="text-sm text-gray-600">Managed Users</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-black-600">2</div>
              <div className="text-sm text-gray-600">Missing Timesheet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Grid Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Recent Activity (8 cols) */}
        <div className="col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Tushar Mishra applied for sick leave</p>
                <p className="text-xs text-gray-500">Pending HR approval • 2 hours ago</p>
              </div>
              <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
                pending
              </Badge>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Shivam Soni July's 4th Week Timesheet</p>
                <p className="text-xs text-gray-500">Rejected • 1 day ago</p>
              </div>
              <Badge variant="outline" className="text-red-600 border-red-300 bg-red-50">
                Rejected
              </Badge>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Nancy Sheth casual leave request</p>
                <p className="text-xs text-gray-500">approved • 2 days ago</p>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                approved
              </Badge>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Kunal Mali submitted July's 3rd Week Timesheet</p>
                <p className="text-xs text-gray-500">approved • 3 days ago</p>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                approved
              </Badge>
            </div>
          </div>
        </div>

        {/* Team Status (4 cols) */}
        <Card className="col-span-4 border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2 text-slate-800">
                <UserCheck className="w-5 h-5" />
                Today's Team Status
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    PU
                  </div>
                  <span className="text-sm font-medium">Paritosh Unakar</span>
                </div>
                <Badge className="bg-red-400 text-white text-xs">On Leave</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    TM
                  </div>
                  <span className="text-sm font-medium">Tushar Mishra</span>
                </div>
                <Badge className="bg-yellow-400 text-white text-xs">On Half Day</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    VP
                  </div>
                  <span className="text-sm font-medium">Vrushti Patel</span>
                </div>
                <Badge className="bg-blue-400 text-white text-xs">WFH</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    NS
                  </div>
                  <span className="text-sm font-medium">Nancy Sheth</span>
                </div>
                <Badge className="bg-purple-400 text-white text-xs">Recruitment Drive</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <LeaveHistoryModal isOpen={isLeaveModalOpen} onClose={() => setIsLeaveModalOpen(false)} />
    </div>
  )
}
