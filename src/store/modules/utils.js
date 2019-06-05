export const randomNumber = (number) => Math.floor(Math.random() * number);

const randomMove = (moves) => moves[randomNumber(moves.length)].move;

export const changeIndex = (index) => (index + 1) % 2;

export const getMoves = async (pokemon) => {
  const moves = [];
  while (moves.length < 3) {
    const move = randomMove(pokemon.moves);
    const fullMove = await fetch(move.url).then(res => res.json());
    if (fullMove.power) {
      fullMove.power = fullMove.power > 20 ? Math.floor(fullMove.power / 2.5) : fullMove.power;
      moves.push(fullMove);
    }
  }
  return moves;
};

export const winner = (pokemons) => {
  const pokemon1 = pokemons[0];
  const pokemon2 = pokemons[1];
  if (pokemon2.hp === 0) {
    return pokemon1;
  } else if (pokemon1.hp === 0) {
    return pokemon2;
  }
  return null;
};

export const getHP = (pokemon) => pokemon.stats.filter(stat => stat.stat.name === 'hp')[0].base_stat;
export function sleep (time) { return new Promise((resolve) => setTimeout(resolve, time)); }
