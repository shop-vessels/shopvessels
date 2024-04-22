"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashBoardData from "../../../../data/dashboard.json";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Roletable() {
  return (
    <div className="">
      <div className="flex justify-between w-full\">
        <div className="flex gap-3 w-full">
          <p className="w-full self-center text-2xl font-semibold text-foreground/65">
            User Management
          </p>
          <div className="flex w-full">
            <Label htmlFor="search" className="self-center">
              Search
            </Label>
            <Input type="search" placeholder="Search" id="search" />
          </div>
        </div>
      </div>
      <Table className="mt-9">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User Role</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DashBoardData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <Select defaultValue={data.userRole}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Admin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin"> Admin</SelectItem>
                    <SelectItem value="User"> User</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{data.fullName}</TableCell>
              <TableCell>{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem className="w-full">
            <PaginationPrevious href="#" />
          </PaginationItem>

          <PaginationItem className="w-full">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
