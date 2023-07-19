import axios from "axios";

export default function getData(): Promise<
  { sickCd: string; sickNm: string }[]
> {
  console.info("calling api");
  return axios
    .get("http://localhost:4000/sick")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
