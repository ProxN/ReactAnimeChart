exports.Season = () => {
  const month = new Date().getMonth();
  let season = "";
  if (month < 3) {
    season = "WINTER";
  } else if (month < 6) {
    season = "SPRING";
  } else if (month < 9) {
    season = "SUMMER";
  } else {
    season = "FALL";
  }
  return season;
};
