"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, ChevronDown } from "lucide-react";
import { mockUsers } from "@/lib/mock-data";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export default function PeopleManagement() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Selection Logic
  const toggleAll = () => {
    if (selectedUsers.length === mockUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(mockUsers.map(user => user.id));
    }
  };

  const toggleUser = (id: string) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 space-y-6 bg-white border rounded-sm flex flex-col min-h-[calc(100vh-100px)]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Users</h2>
          <p className="text-sm text-gray-500">Create, edit and search users.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 rounded-sm p-5">
            Bulk Upload
          </Button>
          <Button className="bg-[#101828] gap-2 rounded-sm p-5">
            Create New User
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3">
        <div className="relative w-64">
          <Input placeholder="Search User" className="pl-3 bg-white rounded-sm" />
        </div>
        <Button variant="outline" className="rounded-sm border-dashed gap-2">
          <Plus size={14} className="rounded-full border border-black" /> Status
        </Button>
        <Button variant="outline" className="rounded-sm border-dashed gap-2">
          <Plus size={14} className="rounded-full border border-black"/> Roles
        </Button>
        <Button variant="outline" className="rounded-sm border-dashed gap-2">
          <Plus size={14} className="rounded-full border border-black"/> Designation
        </Button>
      </div>

      {/* Table Section  */}
      <div className="border rounded-lg bg-white overflow-hidden flex-1 flex flex-col">
        <Table className="flex-1">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  className="rounded-sm" 
                  checked={selectedUsers.length === mockUsers.length && mockUsers.length > 0}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead className="text-xs text-gray-600">User ID <ChevronDown className="inline ml-1" size={12} /></TableHead>
              <TableHead className="text-xs text-gray-600">Name <ChevronDown className="inline ml-1" size={12} /></TableHead>
              <TableHead className="text-xs text-gray-600">Designation</TableHead>
              <TableHead className="text-xs text-gray-600">Role(s)</TableHead>
              <TableHead className="text-xs text-gray-600">Mobile No</TableHead>
              <TableHead className="text-xs text-gray-600">Status <ChevronDown className="inline ml-1" size={12} /></TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id} className={selectedUsers.includes(user.id) ? "bg-blue-50/30" : ""}>
                <TableCell>
                  <Checkbox 
                    className="rounded-sm" 
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => toggleUser(user.id)}
                  />
                </TableCell>
                <TableCell className="text-sm">{user.id}</TableCell>
                <TableCell className="text-sm font-semibold text-gray-900">{user.name}</TableCell>
                <TableCell className="text-sm">{user.designation}</TableCell>
                <TableCell className="text-sm">{user.roles.join(", ")}</TableCell>
                <TableCell className="text-sm">{user.mobile}</TableCell>
                <TableCell>
                  <Badge className="rounded-sm px-3 bg-white border border-gray-200 text-black">
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm"><MoreHorizontal size={16} /></Button>
                    </DropdownMenuTrigger>
                    {/* Dropdown content remains same */}
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Manage Role</DropdownMenuItem>
                      <div className="border-t my-1" />
                      <div className="flex items-center justify-between px-2 py-1.5 text-sm">
                        Status <div className="w-8 h-4 bg-slate-900 rounded-full relative"><div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" /></div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="flex-1 hover:bg-transparent border-none">
              <TableCell colSpan={8} className="h-full" />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}