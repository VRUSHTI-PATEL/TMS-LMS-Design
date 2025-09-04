"use client"

import { useState } from "react"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Plus, Copy, Edit, Trash2, Briefcase, Info, ChevronDown } from 'lucide-react'
import { AddEngagementModal } from "@/components/modals/add-engagement-modal"
import { CopyEngagementModal } from "@/components/modals/copy-engagement-modal"
import { Pagination } from "@/components/common/pagination"
import { useToast } from "@/hooks/use-toast"



type Engagement = {
  id: number
  title: string
  owner: string
  startDate: string
  endDate: string
  teamMembers: string
  tasks: string[]
  status: "Active" | "InActive"
  description: string
}

const mockEngagements = [
  { id: 1, title: "E-commerce Platform Development", owner: "Rahul Sharma, Priya Patel", startDate: "2024-10-01", endDate: "2024-11-30", teamMembers: "Nancy Sheth, Tushar Mishra", tasks: ["Frontend Development", "Backend Integration"], status: "Active", description: "Building a comprehensive e-commerce platform with modern features" },
  { id: 2, title: "Mobile Banking App", owner: "Amit Kumar", startDate: "2024-10-01", endDate: "2024-12-15", teamMembers: "Krunal Vasava, Rajesh Kumar", tasks: ["UI/UX Design Review", "Bug Fixing"], status: "InActive", description: "Developing a secure mobile banking application" },
  { id: 3, title: "HR Management System", owner: "Sneha Gupta, Vikram Singh", startDate: "2024-10-01", endDate: "2024-12-31", teamMembers: "Priya Sharma, Amit Singh", tasks: ["Database Schema Update", "API Development"], status: "Active", description: "Complete HR management solution for employee lifecycle" },
  { id: 4, title: "Inventory Management Tool", owner: "Ravi Agarwal, Neha Joshi", startDate: "2024-10-01", endDate: "2024-12-31", teamMembers: "Kavita Reddy", tasks: ["Project Planning", "Team Meeting"], status: "InActive", description: "Advanced inventory tracking and management system" },
  { id: 5, title: "Customer Support Portal", owner: "Deepak Verma", startDate: "2024-11-15", endDate: "2025-02-28", teamMembers: "Nancy Sheth", tasks: ["Client Meeting", "Documentation"], status: "Active", description: "Comprehensive customer support and ticketing system" },
]

interface ManageEngagementsPageProps {
  isDarkMode?: boolean
}

export function ManageEngagementsPage({ isDarkMode }: ManageEngagementsPageProps) {
  const [isRulesOpen, setIsRulesOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false)
  const [selectedEngagement, setSelectedEngagement] = useState<Engagement | null>(null)
  const [editingEngagement, setEditingEngagement] = useState<Engagement | null>(null)
  const [pageSize, setPageSize] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)
  const [engagements, setEngagements] = useState<Engagement[]>(mockEngagements)
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'copy'>('add')
  const { toast } = useToast()

  const handleCopy = (engagement: any) => {
    // Set up for copy mode - this will open "Add New Engagement" modal with copied data
    setModalMode('copy')
    setEditingEngagement({ 
      ...engagement, 
      title: `${engagement.title} (Copy)`,
      // Don't include the original ID so it creates a new one
      id: undefined 
    })
    setIsAddModalOpen(true)
  }

  const handleEdit = (engagement: any) => {
    // Set up for edit mode
    setModalMode('edit')
    setEditingEngagement(engagement)
    setIsAddModalOpen(true)
  }

  const handleAddNew = () => {
    // Set up for add mode
    setModalMode('add')
    setEditingEngagement(null)
    setIsAddModalOpen(true)
  }

  const handleSave = (data: any) => {
    console.log("Save engagement:", data)
    if (modalMode === 'edit' && editingEngagement?.id) {
      // Update existing engagement
      setEngagements(prev => prev.map(eng => eng.id === editingEngagement.id ? { ...eng, ...data, id: editingEngagement.id } : eng))
    } else {
      // Add new engagement (for both 'add' and 'copy' modes)
      const newId = Math.max(...engagements.map(e => e.id)) + 1
      setEngagements(prev => [...prev, { ...data, id: newId, status: "Active" }])
    }
    setEditingEngagement(null)
    setModalMode('add')
    toast({
      title: "Success",
      description: "Engagement saved successfully!",
      duration: 3000,
    })
  }

  const handleDelete = (engagement: any) => {
    setEngagements(prev => prev.filter(eng => eng.id !== engagement.id))
    toast({
      title: "Deleted",
      description: `Engagement "${engagement.title}" has been deleted.`,
      duration: 3000,
    })
  }

  const totalPages = Math.ceil(engagements.length / parseInt(pageSize))
  const startIndex = (currentPage - 1) * parseInt(pageSize)
  const endIndex = startIndex + parseInt(pageSize)
  const currentData = engagements.slice(startIndex, endIndex)

  return (
    <div className={`p-6 space-y-6 ${isDarkMode ? 'text-white bg-gray-900' : 'text-gray-900 bg-gray-50'}`}>
      <div className="space-y-4">
        {/* Engagement Guidelines - Updated to match timesheet style */}
        <Collapsible open={isRulesOpen} onOpenChange={setIsRulesOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto text-blue-600 hover:text-blue-700">
              <Info className="w-4 h-4" />
              <span className="font-medium">Engagement Guidelines</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isRulesOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
              <ul className="space-y-2 text-sm">
                <li>• Team Member Dates are in sync with Engagement Dates. Any changes to Engagement Dates will be reflected in Team Member Dates as well.</li>
                <li>• The creator of Engagement will be added as Owner and Team Member by default.</li>
                <li>• Co-Owner will be added as Team Member by default.</li>
                <li>• Copying the Engagement will copy all the Details of that Engagement. Any changes will need to be made manually.</li>
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm">
          <CardHeader className="border-b border-gray-200 dark:border-gray-600 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                List of Engagements
              </CardTitle>
              <Button onClick={handleAddNew} className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Engagement
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <TableHead className="w-12 font-semibold text-gray-700 dark:text-gray-200">#</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Engagements</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Owner</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Start Date</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">End Date</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Team M...</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Tasks</TableHead>
                  <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Status</TableHead>
                  <TableHead className="w-32 font-semibold text-gray-700 dark:text-gray-200">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((engagement) => (
                  <TableRow key={engagement.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                    <TableCell className="font-medium text-gray-600 dark:text-gray-300">{engagement.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">{engagement.title}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopy(engagement)}
                          className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-200">{engagement.owner}</TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-200">
                      {new Date(engagement.startDate).toLocaleDateString('en-GB', { 
                        day: '2-digit', 
                        month: 'short', 
                        year: 'numeric' 
                      }).replace(/ /g, '-')}
                    </TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-200">
                      {new Date(engagement.endDate).toLocaleDateString('en-GB', { 
                        day: '2-digit', 
                        month: 'short', 
                        year: 'numeric' 
                      }).replace(/ /g, '-')}
                    </TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-200">{engagement.teamMembers}</TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-200">{engagement.tasks.length}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={engagement.status === "Active" 
                          ? "border-green-200 text-green-700 bg-green-50 dark:border-green-700 dark:text-green-300 dark:bg-green-900/20" 
                          : "border-red-200 text-red-700 bg-red-50 dark:border-red-700 dark:text-red-300 dark:bg-red-900/20"
                        }
                      >
                        {engagement.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(engagement)}
                          className="h-8 w-8 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(engagement)}
                          className="h-8 w-8 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={pageSize}
              totalItems={engagements.length}
              onPageChange={setCurrentPage}
              onPageSizeChange={setPageSize}
            />
          </CardContent>
        </Card>

        <AddEngagementModal
          isOpen={isAddModalOpen}
          onClose={() => {
            setIsAddModalOpen(false)
            setEditingEngagement(null)
            setModalMode('add')
          }}
          onSave={handleSave}
          initialData={editingEngagement}
          mode={modalMode}
        />

        <CopyEngagementModal
          isOpen={isCopyModalOpen}
          onClose={() => setIsCopyModalOpen(false)}
          onConfirm={() => {}}
          engagementTitle={selectedEngagement?.title || ""}
        />
      </div>
    </div>
  )
}
