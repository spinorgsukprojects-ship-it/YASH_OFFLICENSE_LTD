export function ProcessStep({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <article className="card relative p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy font-heading text-lg font-extrabold text-white">
        {number}
      </div>
      <h3 className="mt-5 font-heading text-xl font-extrabold">{title}</h3>
      <p className="mt-2 leading-7 text-slateText">{text}</p>
    </article>
  );
}
