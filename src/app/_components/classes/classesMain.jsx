import Classes from "./classes";
import classesData from "../../../data/classes.json";

const classesMain = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      {classesData.map((classes, index) => (
        <Classes
          key={index}
          durition={classes.durition}
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
  );
};

export default classesMain;
