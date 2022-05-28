const fs = require("fs");
import { events } from "../../../public/moscow2";

export default function handler(req, res) {
  // const filtered = events.filter((e) => e.price == req.);
  // console.log(req.query);
  res.status(200).json(events);
}
// if (events) {
//   res.status(200).json({ events });
// } else {
//   res.status(404).json({ message: `Events with not found` });
// }
// }
