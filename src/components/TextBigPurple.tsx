const TextBigPurple = (props: {
  text?: string;
  additionalClassName?: string;
}) => {
  return (
    <h2
      className={` ${props.additionalClassName} lg:text-[40px] text-center text-[34px] font-medium leading-[54px] text-purple`}
    >
      {props.text}
    </h2>
  );
};

export { TextBigPurple };
