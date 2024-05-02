interface Props {
  title: string;
  subTitle: string;
  description: JSX.Element;
}

export const DescriptionCard = ({
  title,
  subTitle,
  description,
}: Props): JSX.Element => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-9xl font-extrabold text-gray-700">{title}</h1>
      <div style={{ maxWidth: "38rem" }}>
        <p className="text-4xl font-light text-gray-400">{subTitle}</p>
        <div className="pt-16">{description}</div>
      </div>
    </section>
  );
};
