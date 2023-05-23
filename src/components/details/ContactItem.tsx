interface Contact {
  type: string;
  title: string;
  description: string;
}
export default function ContactItem({ data }: { data: Contact }) {
  return (
    <li className="px-2 mt-1">
      <strong className="mr-1">{data.title} </strong>

      {data.type == "phone" ? (
        <a href={`tel:${data.description}`} className="block">
          {data.description}
        </a>
      ) : (
        ""
      )}

      {data.type == "email" ? (
        <a href={`mailto:${data.description}`} className="block">
          {data.description}
        </a>
      ) : (
        ""
      )}

      {data.type == "address" ? (
        <span className="block">{data.description}</span>
      ) : (
        ""
      )}
    </li>
  );
}
