const formatMinute = min => {
  let hour = Math.floor(min / 60);
  let minutes = min < 60 ? min : min % 60;

  hour = hour < 1 ? "00" : hour < 10 ? `0${hour}` : `${hour}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hour}:${minutes}`;
};

export default {
  formatMinute
};
