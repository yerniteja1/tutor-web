import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface CreateUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateUserModal({ open, onOpenChange }: CreateUserModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[80vw] md:max-w-150 p-0 overflow-hidden rounded-xs">
        {/* Header */}
        <div className="p-6 pb-0">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#101828]">Create New User</DialogTitle>
            <p className="text-sm text-gray-400 mt-1">Fill in the details to edit the user.</p>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Name Field */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">Name</Label>
            <Input placeholder="Tutox Super Admin" className="rounded-md h-11 border-gray-200" />
          </div>

          {/* Designation Field */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">Designation</Label>
            <Input placeholder="Tutox Super Admin" className="rounded-md h-11 border-gray-200" />
          </div>

          {/* Mobile Field */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">Mobile</Label>
            <div className="flex gap-0 rounded-md border border-gray-200 overflow-hidden focus-within:ring-1 focus-within:ring-ring h-11">
              <div className="flex items-center gap-1 px-3 bg-white border-r border-gray-100 text-sm">
                +91 <ChevronDown size={14} className="text-gray-400" />
              </div>
              <Input 
                className="border-0 focus-visible:ring-0 h-full" 
                placeholder="9876543210" 
              />
            </div>
          </div>

          {/* Is Active Toggle */}
          <div className="flex items-center gap-2">
            <Checkbox id="active" className="rounded-sm" />
            <Label htmlFor="active" className="text-sm font-medium text-gray-700">Is Active?</Label>
          </div>

          {/* Institutions Selector */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">Institutions</Label>
            <p className="text-xs text-gray-400">Select the Institutions this user can access.</p>
            <div className="relative">
              <Input 
                readOnly 
                value="2 Institutions Selected" 
                className="h-11 border-gray-200 pr-10 text-gray-400 font-medium" 
              />
              <X className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" size={16} />
            </div>
          </div>

          <div className="border-t border-gray-100 my-2" />

          {/* Roles Section */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-semibold text-gray-700">Roles</Label>
              <p className="text-xs text-gray-400">Select the Roles this user will have.</p>
            </div>

            {/* School 1 */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-800">Sanjo CMI Public School</p>
              <div className="flex items-center gap-2 pl-1">
                <Checkbox id="role1" checked className="rounded-sm bg-slate-900 border-slate-900" />
                <Label htmlFor="role1" className="text-xs font-medium text-gray-600">TTXSUPERADMIN</Label>
              </div>
            </div>

          <div className="border-t border-gray-100 my-2" />

            {/* School 2 */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-800">Demo School</p>
              <div className="flex items-center gap-2 pl-1">
                <Checkbox id="role2" checked className="rounded-sm bg-slate-900 border-slate-900" />
                <Label htmlFor="role2" className="text-xs font-medium text-gray-600">TTXSUPERADMIN</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-2 flex justify-end gap-3">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="px-8 rounded-md border-gray-200"
          >
            Cancel
          </Button>
          <Button className="px-8 rounded-md bg-[#101828] hover:bg-slate-800">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}