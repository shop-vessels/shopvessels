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
    <div>
      <div className="float-end flex gap-3">
        <Label htmlFor="search" className="self-center">
          Search
        </Label>
        <Input type="search" placeholder="Search" id="search" />
      </div>
      <Table className="mt-5">
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
