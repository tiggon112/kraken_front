const TextBigPurple = (props: { text?: string; className?: string }) => {
  return (
    <h2
      className={` ${props.className} text-center text-[34px] font-medium leading-[54px] text-purple lg:text-[40px]`}
    >
      {props.text}
    </h2>
  );
};

export { TextBigPurple };
