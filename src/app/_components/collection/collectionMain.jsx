import Collection from "./collectionsSlider/collection";
import RestCollections from "./restCollections/restCollections";

const collectionMain = () => {
  return (
    <div className="py-20 px-16 relative">
      <Collection />
      <RestCollections />
    </div>
  );
};

export default collectionMain;
