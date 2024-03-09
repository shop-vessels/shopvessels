import { Mail } from "lucide-react";
import { Copy } from "lucide-react";

const sharingIsCaring = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-16 py-20">
      <p className="pb-4 text-xl ">
        Sharing is caring - support future editions by sharing with friends
      </p>
      <div className="w-56">
        <div className="flex gap-3 pb-4 border-b border-black mb-4">
          <Mail className="" />
          <p className="uppercase">send via email</p>
        </div>
        <div className="flex gap-3  pb-4 border-b border-black">
          <Copy />
          <p className="uppercase">copy url</p>
        </div>
      </div>
    </div>
  );
};

export default sharingIsCaring;
