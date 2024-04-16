import Classes from "./classes";
import classesData from "../../../data/classes.json";

const classesMain = () => {
  return (
    <div className="lg:p-20 p-3">
      <p className="text-center sm:text-4xl text-2xl font-semibold text-foreground/65">
        UNLIMITED CLASSES ON DEMAND
      </p>
      <div className="flex lg:flex-row flex-col justify-evenly items-center gap-4 sm:mt-16 mt-9">
        {classesData.map((classes, index) => (
          <Classes
            key={index}
            durition={classes.duration}
            currency={classes.currency}
            price={classes.price}
            save={classes.save}
            offer1={classes.offer1}
            offer2={classes.offer2}
            offer3={classes.offer3}
            offer4={classes.offer4}
            offer5={classes.offer5}
          />
        ))}
      </div>
    </div>
  );
};

export default classesMain;
