type RoundedAProps = {
  text?: string;
  className?: string;
  href?: string;
  disabled?: boolean;
  onclick?: Function;
  ifP?: boolean;
};

const ARoundedPurple = (props: RoundedAProps) => {
  const { onclick = (f: any) => f } = props;
  return (
    <a
      className={`${props.className} border-primary hover:text-body-color active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 inline-flex items-center justify-center rounded-full border bg-purple px-4 text-center font-plexsans text-base text-primary-200 hover:bg-purpleblur`}
      data-testid="sign-in"
      onClick={() => onclick()}
      href={props.href || '#'}
    >
      <span className="flex items-center justify-center">
        {props.ifP ? (
          <p className="my-px">{props.text || 'NoName'}</p>
        ) : (
          <span className="my-px">{props.text || 'NoName'}</span>
        )}
      </span>
    </a>
  );
};

export { ARoundedPurple };
