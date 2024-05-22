import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-grow flex-col md:p-16 p-8">
      <h2 className="text-9xl text-primary ">404</h2>
      <p className="text-3xl font-bold mt-6 text-foreground/60">
        Course not found
      </p>
      <p className="text-xl mt-5 text-foreground/60">
        Oops! URL is invalid or the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/all-courses" className=" mt-5">
          Enroll Course
        </Link>
      </Button>
    </div>
  );
}
