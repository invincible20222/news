import styles from "./styles.module.css";

const Search = ({ keyWords, setKeyWords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keyWords}
        className={styles.input}
        onChange={(e) => setKeyWords(e.target.value)}
        placeholder="Js"
      />
    </div>
  );
};

export default Search;
