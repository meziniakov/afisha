import { events } from "../../../public/moscow2";

export default function eventHandler({ query: { id, price } }, res) {
  const filtered = events.filter(
    (event) => event.id.toString() == id || event.price == price
    // event.price == price;
  );
  // .filter((event) => event.price == price);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(400).json({ message: `Eventss with id: ${id} not found.` });
  }
}
