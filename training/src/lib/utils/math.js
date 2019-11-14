export const getRandomNumber = max => {
  return Math.random() * Math.floor(max);
};

export const getNextRoundRobin = (total, current) => {
  let counter = current;
  if (current < total) return counter + 1;
  return 0;
};
