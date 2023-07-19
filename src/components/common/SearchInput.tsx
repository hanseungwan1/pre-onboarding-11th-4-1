import { FaSearch } from "react-icons/fa";
import style from "../../styles/SearchInput.module.css";
import { useState } from "react";
import RelatedSearch from "./RelatedSearch";

export default function SearchInput({
  searchData,
}: {
  searchData: { sickCd: string; sickNm: string }[] | undefined;
}) {
  const [searchResultData, setSearchResultData] = useState<
    { sickCd: string; sickNm: string }[]
  >([]);
  const [isFocus, setIsFocus] = useState(false);
  const [counter, setCounter] = useState(0);

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setCounter(0);
    if (searchData !== undefined) {
      const filteredData = searchData
        .filter((el) => {
          if (inputValue === "") return;
          return el.sickNm.startsWith(inputValue);
        })
        .slice(0, 8);
      setSearchResultData(filteredData);
    }
  }

  function keyDwonHandelr(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      if (counter < searchResultData.length - 1) setCounter(counter + 1);
    } else if (e.key === "ArrowUp") {
      if (counter > 0) setCounter(counter - 1);
    }
  }

  return (
    <div className={style.containner}>
      <FaSearch className={style.icon} />
      <input
        className={style.search_input}
        onChange={searchHandler}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onKeyDown={keyDwonHandelr}
      />
      <button className={style.search_btn}>검색</button>
      {isFocus ? (
        <RelatedSearch searchResultData={searchResultData} counter={counter} />
      ) : null}
    </div>
  );
}
