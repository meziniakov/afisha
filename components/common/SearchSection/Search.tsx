import { FC, useState } from "react";
import styles from "./Search.module.scss";

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.search}>
      <span className="material-icons">search</span>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Поиск мероприятий"
      />
    </div>
  );
};

export default Search;
