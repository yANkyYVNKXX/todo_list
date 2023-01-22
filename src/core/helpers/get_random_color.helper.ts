import {palette} from 'presentation/config/pallete';

//функция просто выдает рандомный цвет из набора palette
export const getRandomColor = (): string => {
  //если увеличиваете это значение, добавьте в palette тоже цвета
  const _colors_count = Object.values(palette.borderColors).length ?? 13;

  return palette.borderColors[Math.floor(Math.random() * (_colors_count - 1 + 1)) + 1];
};
