const date = new Date();

export const getLocalDatetime = () => {
  const localeString = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  });

  const [datePart, timePart] = localeString.split(", ");
  const [month, day, year] = datePart.split("/");
  const formattedDate = `${year}-${month}-${day} ${timePart}`;
  return formattedDate;
};
