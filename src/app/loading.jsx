import { Loader } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center flex-col text-primary md:p-16 p-10">
      <Loader className="animate-spin" color="currentColor" size={40} />
    </div>
  );
}
