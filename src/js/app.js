import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}).catch((e) => {
  console.error(e.message);
});
