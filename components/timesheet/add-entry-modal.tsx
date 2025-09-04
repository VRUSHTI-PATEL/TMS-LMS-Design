"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AddEntryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (entry: {
    engagement: string
    task: string
    hours: number
    minutes: number
    comments: string
  }) => void
}

export function AddEntryModal({ isOpen, onClose, onSubmit }: AddEntryModalProps) {
  const [formData, setFormData] = useState({
    engagement: "",
    task: "",
    hours: 0,
    minutes: 0,
    comments: ""
  })

  const engagements = [
    "Smart Attendance System",
    "AI Chatbot for Customer Support",
    "IoT-Based Home Automation",
    "Blockchain Voting Platform",
    "E-commerce Product Recommendation Engine"
  ]

  const tasks = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Testing",
    "Documentation",
    "Code Review",
    "Meeting"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.engagement && formData.task) {
      onSubmit(formData)
      setFormData({
        engagement: "",
        task: "",
        hours: 0,
        minutes: 0,
        comments: ""
      })
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Time Entry</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="engagement">Select Engagement</Label>
            <Select 
              value={formData.engagement} 
              onValueChange={(value) => setFormData({...formData, engagement: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose engagement" />
              </SelectTrigger>
              <SelectContent>
                {engagements.map((engagement) => (
                  <SelectItem key={engagement} value={engagement}>
                    {engagement}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="task">Select Task</Label>
            <Select 
              value={formData.task} 
              onValueChange={(value) => setFormData({...formData, task: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose task" />
              </SelectTrigger>
              <SelectContent>
                {tasks.map((task) => (
                  <SelectItem key={task} value={task}>
                    {task}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hours">Hours</Label>
              <Input
                id="hours"
                type="number"
                min="0"
                max="24"
                value={formData.hours}
                onChange={(e) => setFormData({...formData, hours: parseInt(e.target.value) || 0})}
              />
            </div>
            <div>
              <Label htmlFor="minutes">Minutes</Label>
              <Input
                id="minutes"
                type="number"
                min="0"
                max="59"
                value={formData.minutes}
                onChange={(e) => setFormData({...formData, minutes: parseInt(e.target.value) || 0})}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              placeholder="Add comments..."
              value={formData.comments}
              onChange={(e) => setFormData({...formData, comments: e.target.value})}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Add Entry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
