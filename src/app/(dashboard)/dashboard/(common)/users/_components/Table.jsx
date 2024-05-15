import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Separator } from "@/components/ui/separator";
import UserModel from "@/database/models/UserModel";
import SearchBox from "./SearchBox";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function UserTable({ searchParams }) {
  const { q, page } = searchParams;

  const query = {
    $or: [
      { fullname: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
    ],
  };

  const usersPerPage = 10; // Number of users to display per page
  const skip = (page - 1) * usersPerPage; // Calculate the number of documents to skip

  const users = await UserModel.find(query)
    .select("-password")
    .skip(skip)
    .limit(usersPerPage)
    .lean()
    .exec();

  const count = await UserModel.countDocuments(query);

  console.log(count);

  const hasNextPage = skip + usersPerPage < count;


  console.log(hasNextPage);

  const cunstructedSerachParams = new URLSearchParams({
    q,
    page: (parseInt(page) || 0) + 1,
  });

  console.log(cunstructedSerachParams.toString());

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between w-full\">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <h1 className="w-full self-center text-2xl lg:text-3xl font-bold text-foreground/80">
            User Management
          </h1>
          <SearchBox defaultValue={q} />
        </div>
      </div>
      <Separator className="mt-5" />
      <Table className="mt-5 w-full text-sm rounded-md ">
        <TableHeader>
          <TableRow className="relative">
            <TableHead>Email</TableHead>
            <TableHead className="flex items-center justify-start min-w-52">
              Full Name
            </TableHead>
            <TableHead>User Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="mx-auto w-full overflow-x-auto overflow-y-auto">
          {users.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.email}</TableCell>
              <TableCell className=" break-keep">
                <span className="w-44">{data.fullname}</span>
              </TableCell>

              <TableCell className="font-medium ">
                <Select defaultValue={data.role} className="">
                  <SelectTrigger className="md:w-28 lg:w-[180px] text-xs">
                    <SelectValue placeholder="Admin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN"> ADMIN</SelectItem>
                    <SelectItem value="USER"> USER</SelectItem>
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
            <Button asChild className="w-full" variant="outline">
              <Link href={`?${cunstructedSerachParams.toString()}`}>
                Previous
              </Link>
            </Button>
          </PaginationItem>

          <PaginationItem className="w-full" disabled={!hasNextPage}>
            <Button
              asChild
              className="w-full"
              disabled={!hasNextPage}
              variant="outline"
            >
              <Link href={`?${cunstructedSerachParams.toString()}`}>Next</Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
