export default function About({
  data,
}: {
  data: { title: string; description: string[] };
}) {
  let description = data.description.map((value) => (
    <p className="mt-4 text-xs">{value}</p>
  ));

  return (
    <section>
      <h2 className="text-2xl pb-1 border-b font-semibold">{data.title}</h2>
      {description}
    </section>
  );
}
