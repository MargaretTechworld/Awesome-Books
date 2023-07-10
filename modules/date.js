// Add date to page
const dateInfo = document.querySelector('.date-info');
 const displayDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  let date = d.getDate();
  const month = d.getMonth();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  let ampm;

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else {
    date = `${date}th`;
  }

  if (hour < 12) {
    ampm = 'am';
  } else {
    ampm = 'pm';
  }
  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else {
    date = `${date}th`;
  }
  if (hour < 12) {
    ampm = 'am';
  } else {
    ampm = 'pm';
  }

  dateInfo.innerHTML = `${months[month]} ${date} ${year}, ${hour}:${minute}:${second}${ampm}`;
};
export default displayDate;