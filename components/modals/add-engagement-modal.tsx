"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Save, Plus, X, Search, Edit } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface AddEngagementModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: any) => void
  initialData?: any
  mode?: 'add' | 'edit' | 'copy'
}

interface TeamMemberTableData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export function AddEngagementModal({ isOpen, onClose, onSave, initialData, mode = 'add' }: AddEngagementModalProps) {
  const [formData, setFormData] = useState({
    project: "",
    startDate: "",
    endDate: "",
    description: "",
    projectOwners: [] as string[],
    teamMembers: [] as string[],
    selectedTasks: [] as string[]
  })

  const [newTask, setNewTask] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [teamMembersTableData, setTeamMembersTableData] = useState<TeamMemberTableData[]>([])

  const availableProjectOwners = [
    { id: "paritosh-unakar", name: "Paritosh Unakar" },
    { id: "tushar-mishra", name: "Tushar Mishra" },
    { id: "swet-soni", name: "Swet Soni" },
  ]

  const availableTeamMembers = [
    { id: "nancy-sheth", name: "Nancy Sheth" },
    { id: "krunal-vasava", name: "Krunal Vasava" },
    { id: "rajesh-kumar", name: "Rajesh Kumar" },
    { id: "priya-sharma", name: "Priya Sharma" },
    { id: "amit-singh", name: "Amit Singh" },
    { id: "kavita-reddy", name: "Kavita Reddy" },
  ]

  const allTasks = [
    "API for Save/Update", "Frontend Development", "Continuous Integration Setup",
    "Client Meeting", "Budget Management", "API for Deleting Data",
    "Backend Integration", "Cloud Deployment", "Project Planning",
    "Team Meeting", "Database Design", "Unit Testing",
    "Data Migration", "Documentation", "Stakeholder Communication",
    "API Development", "Code Review", "Security Audit",
    "Testing", "Quality Assurance", "Risk Assessment", "Legal Compliance Check",
  ]

  useEffect(() => {
    if (isOpen && initialData) {
      const parsedOwners = typeof initialData.owner === 'string' && initialData.owner
        ? initialData.owner.split(', ').map((name: string) => {
            const owner = availableProjectOwners.find(o => o.name === name);
            return owner ? owner.id : name.toLowerCase().replace(/\s+/g, '-');
          })
        : [];

      const parsedTeamMembers = typeof initialData.teamMembers === 'string' && initialData.teamMembers
        ? initialData.teamMembers.split(', ').map((name: string) => {
            const member = availableTeamMembers.find(m => m.name === name);
            return member ? member.id : name.toLowerCase().replace(/\s+/g, '-');
          })
        : [];

      setFormData({
        project: initialData.title || "",
        startDate: initialData.startDate || "",
        endDate: initialData.endDate || "",
        description: initialData.description || "",
        projectOwners: parsedOwners,
        teamMembers: parsedTeamMembers,
        selectedTasks: Array.isArray(initialData.tasks) ? initialData.tasks : []
      });

      const initialTableMembers = parsedTeamMembers.map((memberId: string) => {
        const member = availableTeamMembers.find(m => m.id === memberId);
        const memberName = member ? member.name : memberId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return {
          id: member?.id || memberId,
          name: memberName,
          startDate: initialData.startDate || "2025-01-01",
          endDate: initialData.endDate || "2025-12-31",
        };
      });
      setTeamMembersTableData(initialTableMembers);
    } else if (isOpen && !initialData) {
      setFormData({
        project: "",
        startDate: "",
        endDate: "",
        description: "",
        projectOwners: [],
        teamMembers: [],
        selectedTasks: []
      });
      setTeamMembersTableData([]);
    }
  }, [isOpen, initialData]);

  const handleTaskToggle = (task: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTasks: prev.selectedTasks.includes(task)
        ? prev.selectedTasks.filter((t: string) => t !== task)
        : [...prev.selectedTasks, task]
    }))
  }

  const handleAddTask = () => {
    if (newTask.trim() && !formData.selectedTasks.includes(newTask.trim()) && !allTasks.includes(newTask.trim())) {
      setFormData(prev => ({
        ...prev,
        selectedTasks: [...prev.selectedTasks, newTask.trim()]
      }))
      setNewTask("")
    }
  }

  const handleDeleteTask = (taskToDelete: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTasks: prev.selectedTasks.filter((task: string) => task !== taskToDelete)
    }))
  }

  const handleSave = () => {
    const savedData = {
      title: formData.project,
      startDate: formData.startDate,
      endDate: formData.endDate,
      description: formData.description,
      owner: formData.projectOwners.map((id: string) => availableProjectOwners.find(o => o.id === id)?.name || id).join(', '),
      teamMembers: formData.teamMembers.map((id: string) => availableTeamMembers.find(m => m.id === id)?.name || id).join(', '),
      tasks: formData.selectedTasks,
      teamMembersDetails: teamMembersTableData
    }
    onSave(savedData)
    onClose()
  }

  const handleOwnerSelect = (value: string) => {
    if (!formData.projectOwners.includes(value)) {
      setFormData(prev => ({
        ...prev,
        projectOwners: [...prev.projectOwners, value]
      }))
    }
  }

  const handleRemoveOwner = (idToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      projectOwners: prev.projectOwners.filter((id: string) => id !== idToRemove)
    }))
  }

  const handleTeamMemberSelect = (value: string) => {
    if (!formData.teamMembers.includes(value)) {
      const selectedMember = availableTeamMembers.find(m => m.id === value);
      if (selectedMember) {
        setFormData(prev => ({
          ...prev,
          teamMembers: [...prev.teamMembers, value]
        }));
        setTeamMembersTableData(prev => [
          ...prev,
          {
            id: selectedMember.id,
            name: selectedMember.name,
            startDate: formData.startDate || "2025-01-01",
            endDate: formData.endDate || "2025-12-31",
          }
        ]);
      }
    }
  }

  const handleRemoveTeamMember = (idToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((id: string) => id !== idToRemove)
    }));
    setTeamMembersTableData(prev => prev.filter(member => member.id !== idToRemove));
  }

  const filteredTasks = allTasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const isTaskCustom = (task: string) => !allTasks.includes(task)

  // Get modal title based on mode
  const getModalTitle = () => {
    switch (mode) {
      case 'edit':
        return "Edit Engagement"
      case 'copy':
        return "Add New Engagement"
      default:
        return "Add New Engagement"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent style={{ maxWidth: '1200px', height: '95vh' }} className="w-full flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-0">
        <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-4 px-6 pt-6">
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {getModalTitle()}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="project" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project *</Label>
              <Input
                id="project"
                placeholder="test project"
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">Start Date *</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">End Date *</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Description *</Label>
            <Textarea
              id="description"
              placeholder="test project description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="min-h-[100px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="owners" className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Owners</Label>
              <Select value="" onValueChange={handleOwnerSelect}>
                <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select project owners" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {availableProjectOwners.filter(owner => !formData.projectOwners.includes(owner.id)).map(owner => (
                    <SelectItem key={owner.id} value={owner.id} className="text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                      {owner.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.projectOwners.map((ownerId: string) => {
                  const owner = availableProjectOwners.find(o => o.id === ownerId);
                  return owner ? (
                    <Badge key={owner.id} variant="secondary" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md flex items-center gap-1">
                      {owner.name}
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveOwner(owner.id)} className="h-4 w-4 p-0 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full">
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="members" className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Members</Label>
              <Select value="" onValueChange={handleTeamMemberSelect}>
                <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select team members" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  {availableTeamMembers.filter(member => !formData.teamMembers.includes(member.id)).map(member => (
                    <SelectItem key={member.id} value={member.id} className="text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                      {member.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.teamMembers.map((memberId: string) => {
                  const member = availableTeamMembers.find(m => m.id === memberId);
                  return member ? (
                    <Badge key={member.id} variant="secondary" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md flex items-center gap-1">
                      {member.name}
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveTeamMember(member.id)} className="h-4 w-4 p-0 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full">
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>
          </div>

          {teamMembersTableData.length > 0 && (
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                    <TableHead className="font-semibold text-gray-700 dark:text-gray-200 p-3">Team Member</TableHead>
                    <TableHead className="font-semibold text-gray-700 dark:text-gray-200 p-3">Start Date</TableHead>
                    <TableHead className="font-semibold text-gray-700 dark:text-gray-200 p-3">End Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembersTableData.map((member) => (
                    <TableRow key={member.id} className="border-b border-gray-100 dark:border-gray-600 even:bg-gray-50 dark:even:bg-gray-700/50">
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100 p-3">{member.name}</TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-200 p-3">
                        <Input
                          type="date"
                          value={member.startDate}
                          onChange={(e) => setTeamMembersTableData(prev => prev.map(m => m.id === member.id ? { ...m, startDate: e.target.value } : m))}
                          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white h-8 px-2 py-1"
                        />
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-200 p-3">
                        <Input
                          type="date"
                          value={member.endDate}
                          onChange={(e) => setTeamMembersTableData(prev => prev.map(m => m.id === member.id ? { ...m, endDate: e.target.value } : m))}
                          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white h-8 px-2 py-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative flex items-center w-64">
                <Search className="absolute left-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search for tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm font-medium">
                  {formData.selectedTasks.length} Tasks Selected
                </Badge>
                <Input
                  placeholder="Enter task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                  className="w-48 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <Button onClick={handleAddTask} size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium rounded-md shadow-sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Task
                </Button>
              </div>
            </div>

            <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
              * Blue text indicates tasks that are created by me
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 max-h-64 overflow-y-auto bg-gray-50 dark:bg-gray-700 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredTasks.map((task) => (
                  <div key={task} className="flex items-center space-x-2">
                    <Checkbox
                      id={task}
                      checked={formData.selectedTasks.includes(task)}
                      onCheckedChange={() => handleTaskToggle(task)}
                      className="border-gray-300 dark:border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor={task}
                      className={`text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1 ${
                        isTaskCustom(task) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {task}
                      <Edit className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                    </label>
                  </div>
                ))}
                {/* Show custom tasks that are selected */}
                {formData.selectedTasks.filter(task => !allTasks.includes(task)).map((task) => (
                  <div key={task} className="flex items-center space-x-2">
                    <Checkbox
                      id={task}
                      checked={true}
                      onCheckedChange={() => handleTaskToggle(task)}
                      className="border-gray-300 dark:border-gray-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor={task}
                      className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                    >
                      {task}
                      <Edit className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="destructive" onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-base font-medium rounded-md shadow-sm">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-base font-medium rounded-md shadow-sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
