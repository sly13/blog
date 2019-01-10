export function getFormatedDate(date) {
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентяюрь",
    "Окстябрь",
    "Ноябрь",
    "Декабрь"
  ];

  if (typeof date === "object") {
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  const newDate = new Date(date.toString().slice(0, 10));

  return `${
    monthNames[newDate.getMonth()]
  } ${newDate.getDate()}, ${newDate.getFullYear()}`;
}
