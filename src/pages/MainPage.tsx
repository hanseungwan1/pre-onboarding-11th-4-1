import getData from "../api";
import SearchInput from "../components/common/SearchInput";
import style from "../styles/MainPage.module.css";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [searchData, setSearchData] =
    useState<{ sickCd: string; sickNm: string }[]>();

  useEffect(() => {
    getData()
      .then((data) => {
        setSearchData(
          data.sort((a, b) => {
            if (a.sickNm > b.sickNm) return 1;
            else if (b.sickNm > a.sickNm) return -1;
            else return 0;
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.containner}>
      <h2 className={style.main_title}>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </h2>
      <SearchInput searchData={searchData} />
    </div>
  );
}
