import { NextApiResponse } from "next";
import { events } from "../../public/moscow2";

export default function eventHandler({ query }, res: NextApiResponse) {
  // console.log(Object.keys(req.query).length);
  if (Object.keys(query).length === 0) return res.status(200).json(events);

  if (query) {
    const filtered = events.filter(
      (event) =>
        event.id.toString() == query.id ||
        event.price == query.price ||
        event.ageRestriction.toString() == query.ageRestriction
    );

    if (filtered.length > 0) {
      return res.status(200).json(filtered);
    } else {
      res
        .status(400)
        .json({ status: "error", message: `Мероприятия не найдены` });
    }
  }
}
