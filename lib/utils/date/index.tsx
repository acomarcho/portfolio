export const convertISOStringToEnUS = (dateString: string) => {
  const dateObj = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);

  return formattedDate;
};
