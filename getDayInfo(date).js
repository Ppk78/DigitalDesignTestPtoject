const monthNames = ["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь"];

const dayNames = ["Четверг","Пятница","Суббота","Воскресение","Понедельник","Вторник","Среда"];

console.log(getDateInfo("01.01.2022"))

//Суббота, 1 неделя Января 2022 года
function getDateInfo(date) {
  let dateArray = date.split(".")
  let dateObject = new Date(dateArray[2],dateArray[1],dateArray[0])

  let firstWeekday = new Date(dateObject.getFullYear(), dateObject.getMonth(), 1).getDay();
  let offsetDate = dateObject.getDate() + firstWeekday - 1;
  let weekOfTheMonth = Math.floor(offsetDate / 7) + 1;

  return dayNames[dateObject.getDay()]+ ", " + weekOfTheMonth + " неделя " + monthNames[dateObject.getMonth()] + " " + dateObject.getFullYear() + " года"
}
