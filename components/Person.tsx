import Link from "next/link";

export default function Person({ person }) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
      <span className="material-icons">pie_chart</span>
    </li>
  );
}
