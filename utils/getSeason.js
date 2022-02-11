exports.Season = () => {
  const month = new Date().getMonth();
  let season = '';
  if (month < 3) {
    season = 'winter';
  } else if (month < 6) {
    season = 'spring';
  } else if (month < 9) {
    season = 'summer';
  } else {
    season = 'fall';
  }
  return season;
};
