import convert from "convert-seconds-to-human";

// List Of animes Types
const types = ["TV", "MOVIE", "TV_SHORT", "ONA", "OVA", "MUSIC", "SPECIAL"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const animeDate = date => {
  const day = date.day ? date.day : "";
  return `${months[date.month - 1]} ${day}, ${date.year}`;
};

const animeEpisode = (nextAiringEpisode, episodes) => {
  // check if Next episode exists or not
  const checkEp = nextAiringEpisode ? nextAiringEpisode.episode : "??";
  // check Total Episodes
  const totalEp = episodes !== null ? episodes : "??";
  return `Episode ${checkEp} of ${totalEp} in`;
};

// get remainingTime for next epiosde
const remainingTime = sec => {
  // convert seconds to date
  const { days, hours, minutes } = convert(sec, "cal");

  // check Text content;
  const day = days > 1 ? "days" : "day";
  const hour = hours > 1 ? "hours" : "hour";
  const min = minutes > 1 ? "mins" : "min";

  let timeCount = "";
  if (days > 0 && hours > 0) {
    // 10 Days, 10 hours
    timeCount = `${days} ${day}, ${hours} ${hour}`;
  } else if (days > 0 && hours === 0) {
    // 13 Days, 14 minutes
    timeCount = `${days} ${day}, ${minutes} ${min}`;
  } else if (days === 0 && hours > 0) {
    // 24 hours, 10 minutes
    timeCount = `${hours} ${hour}, ${minutes} ${min}`;
  } else {
    // 14 minutes
    timeCount = `${minutes} ${min}`;
  }
  return timeCount;
};

const formatAnime = anime => {
  let newAnime = { ...anime };
  const { startDate, nextAiringEpisode, episodes, status,rankings } = anime;
   
  const rank = rankings.length > 0 ? rankings[rankings.length - 1].rank :'';

  switch (status) {
    case "FINISHED":
      newAnime.formatTime = animeDate(startDate);
      newAnime.formatEpiosde = `${episodes} Ep aired on`;
      break;
    case "RELEASING":
      // Check if  NextAiringEpisode not null
      const checkAiring = nextAiringEpisode
        ? remainingTime(nextAiringEpisode.timeUntilAiring)
        : animeDate(startDate);
      newAnime.formatTime = checkAiring;
      newAnime.formatEpiosde = animeEpisode(nextAiringEpisode, episodes);
      break;
    case "NOT_YET_RELEASED":
      newAnime.formatEpiosde = 'NOT YET RELEASED'
      newAnime.formatTime = animeDate(startDate);
      break;
    default:
      newAnime.formatTime = '??'
      newAnime.formatEpiosde = '??'
      break;
  }
  const isStudio = anime.studios ? anime.studios.nodes[0] : {};
  newAnime.formatRank = rank;
  newAnime.formatStudio = isStudio;
  return newAnime;
};

export const animesByType = animes => {
  // create new list of each anime type
  let newAnimeList = {};

  for (let type of types) {
    newAnimeList[type] = [];
  }
  for (let anime of animes) {
    const type = anime.format;
    // add anime to arr based on type
    newAnimeList[type].push(formatAnime(anime));
  }
  return newAnimeList;
};



// Get Curr Season 

export const getSeason  = () =>{
  const date = new Date();
  const month = date.getMonth();
  if(month < 3){
    return 'WINTER'
  }else if(month < 6){
    return 'SPRING'
  }else if(month <9){
    return 'SUMMER'
  } else{
    return 'FALL'
  };
}