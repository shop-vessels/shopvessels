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
import DashBoardData from "@/data/dashboard.json";
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
import { Separator } from "@/components/ui/separator";
export default function UserTable() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between w-full\">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <h1 className="w-full self-center text-2xl lg:text-3xl font-bold text-foreground/80">
            User Management
          </h1>
          <div className="flex w-full flex-col gap-2 ">
            <Label htmlFor="search">Search</Label>
            <Input type="search" placeholder="Search" id="search" />
          </div>
        </div>
      </div>
      <Separator className="mt-5" />
      <Table className="mt-5 w-full text-sm rounded-md ">
        <TableHeader>
          <TableRow className="relative">
            <TableHead>Email</TableHead>
            <TableHead className="flex items-center justify-start min-w-52">Full Name</TableHead>
            <TableHead >User Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" mx-auto w-full overflow-x-auto overflow-y-auto">
          {DashBoardData.slice(0, 10).map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.email}</TableCell>
              <TableCell className=" break-keep">
                <span className="w-44">

                {data.fullName}
                </span>
                </TableCell>

              <TableCell className="font-medium ">
                <Select defaultValue={data.userRole} className="">
                  <SelectTrigger className="md:w-28 lg:w-[180px] text-xs">
                    <SelectValue placeholder="Admin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin"> Admin</SelectItem>
                    <SelectItem value="User"> User</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
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
