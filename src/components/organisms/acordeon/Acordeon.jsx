//Dependencies
import { useState } from "react";
//Styles
import './acordeon.css'
//Assets
import { Icons } from "../../../../assets/icons/IconProvider";

const { ListItemImg } = Icons; // Iconos

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="absolute top-[278px] left-[761px] rounded-3xs bg-white w-[536px] h-[76px] text-left text-base text-darkgray font-sora hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray active:box-border active:border-[1px] active:border-solid active:border-darkslategray"
        id="ListItem"
      >
        <p className="m-0 absolute top-[calc(50%_-_10px)] left-[76px] tracking-[0.08px]">
          Vehículos
        </p>
        <div className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[8px] w-[60px]" />
        <img
          className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[8px] max-h-full w-[60px]"
          alt=""
          src={ListItemImg}
        />
        <input
          className="cursor-pointer absolute top-[calc(50%_-_11px)] right-[20px] rounded-10xs bg-whitesmoke-300 box-border w-[22px] h-[22px] border-[1.5px] border-solid border-lightgray-200"
          type="checkbox"
          {...register("1", {})}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default Accordion;
