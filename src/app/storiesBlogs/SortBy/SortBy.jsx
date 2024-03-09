import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import sortData from "../../../data/sort.json";

const SortBy = () => {
  return (
    <div className="bg-white py-14 max-w-[700px] m-auto px-2">
      <p className="text-2xl text-center mb-8">The Wakeful Travel Blog</p>
      <Select className="outline-none w-full ">
        <SelectTrigger>
          <SelectValue placeholder="EVERYTHING" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="everything">EVERYTHING</SelectItem>
            <SelectItem value="low waste living">LOW WASTE LIVING</SelectItem>
            <SelectItem value="mindfulness">MINDFULNESS</SelectItem>
            <SelectItem value="psychedelicing">PSYCHEDELIC</SelectItem>
            <SelectItem value="self growt">SELF GROWTH</SelectItem>
            <SelectItem value="sustainable travel">
              SUSTAINABLE TRAVEL
            </SelectItem>
            <SelectItem value="travel journal">TRAVEL JOURNAL</SelectItem>
            <SelectItem value="travel stories">TRAVEL STORIES</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBy;
