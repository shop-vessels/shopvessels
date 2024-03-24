export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center flex-col md:p-16 p-10">
      <div
        className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-primary border-t-transparent mt-10"
      ></div>
    </div>
  );
}
