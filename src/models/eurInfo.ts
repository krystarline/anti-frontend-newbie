import { IEurInfo } from "../types";

let loading = true;
let eurInfo: IEurInfo = {
  basePrice: 0,
  openingPrice: 0,
  changePrice: 0,
  cashBuyingPrice: 0,
  cashSellingPrice: 0,
  ttSellingPrice: 0,
  ttBuyingPrice: 0,
};

const setEurInfo = (data: IEurInfo) => {
  eurInfo = data;
};

const getEurInfo = async () => {
  if(loading) {
    await fetchEurInfo();
    loading = true;
  }

  return eurInfo;
};

const fetchEurInfo = async () => {
  const data = await fetch(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  )
    .then((response) => response.json())
    .then((array) => array[0]) as IEurInfo;

  eurInfo = data;
};

export { eurInfo, setEurInfo, getEurInfo, fetchEurInfo };