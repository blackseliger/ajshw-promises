import GameSavingLoader from '../js/app';
import GameSaving from '../js/GameSaving';

test('should load data GameSaving', async () => {
  const data = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const expected = new GameSaving(data);

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual(expected);
});
