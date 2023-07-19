import style from "../../styles/RelatedSearch.module.css";

export default function RelatedSearch({
  searchResultData,
  counter,
}: {
  searchResultData: { sickCd?: string; sickNm?: string }[];
  counter: number;
}) {
  return (
    <div>
      <p className={style.text}>추천검색어</p>
      {searchResultData.length === 0 ? (
        <div className={style.result_text}>데이터가 없습니다.</div>
      ) : (
        searchResultData.map((el, i) => {
          if (i === counter) {
            return (
              <div className={style.result_section} key={i}>
                <div>💉</div>
                <p className={style.result_text}>{el.sickNm}</p>
              </div>
            );
          }
          return (
            <div className={style.result_containner} key={i}>
              <div>💉</div>
              <p className={style.result_text}>{el.sickNm}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
