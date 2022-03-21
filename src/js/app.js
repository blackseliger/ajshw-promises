import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

/* eslint-disable no-underscore-dangle */
export default class GameSavingLoader {
  constructor() {
    this.jsonData = null;
  }

  // eslint-disable-next-line class-methods-use-this
  static load() {
    return new Promise((resolve) => {
      read().then((value) => json(value).then((jsonData) => {
        this.jsonData = jsonData;
        resolve(new GameSaving(jsonData));
      }));
    });
  }
}

// GameSavingLoader.load().then((res) => console.log(res));
