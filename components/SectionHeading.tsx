type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, text, align = "center", inverse = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-4 font-heading text-3xl font-extrabold tracking-normal md:text-5xl ${inverse ? "text-white" : "text-navy"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${inverse ? "text-slate-300" : "text-slateText"}`}>{text}</p> : null}
    </div>
  );
}
