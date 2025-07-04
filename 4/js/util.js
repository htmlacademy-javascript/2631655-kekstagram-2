const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(Math.abs(min)), Math.abs(max));
  const maxNumber = Math.floor(Math.max(Math.abs(max)), Math.abs(min));
  const result = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(result);
};

const uniqueRandomNumberGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomNumber(min, max);

    if (previousValues.length >= max - min + 1) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

export {getRandomNumber, uniqueRandomNumberGenerator};
