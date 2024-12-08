import { milisecondToDay } from "../contants/helper";

export const relativeFormat = (
  value: number,
  unit: Intl.RelativeTimeFormatUnit
) => {
  const formater = new Intl.RelativeTimeFormat("en", { style: "long" });

  return formater.format(value, unit);
};

export const singleDateFormat = (inputDate: number): string => {
  return new Date(inputDate).toISOString()
}

export const dateFormat = (inputDate: number): string => {
  const relativeDays = (inputDate - new Date().valueOf()) / milisecondToDay

  if (relativeDays <= 5) {
    return relativeFormat(relativeDays, relativeDays < 2 ? "day" : "days");
  } else {
    return singleDateFormat(inputDate)
  }
};
