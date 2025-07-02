const MIN_NUMBER_LIKE = 15;
const MAX_NUMBER_LIKE = 200;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_NUMBER_COMMENT = 0;
const MAX_NUMBER_COMMENT = 30;
const MIN_NUMBER_ID = 1;
const MAX_NUMBER_ID = 9999;
const MIN_NUMBER_URL = 1;
const MAX_NUMBER_URL = 25;
const MIN_NUMBER_MESSAGE = 0;
const MAX_NUMBER_MESSAGE = 1;
const MIN_RANGE_MESSAGE = 0;
const MAX_RANGE_MESSAGE = 5;
const MIN_NUMBER_NAME = 1;
const MAX_NUMBER_NAME = 25;


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

const getRandomIdFromRange = uniqueRandomNumberGenerator(MIN_NUMBER_ID, MAX_NUMBER_ID);
const getRandomUrlFromRange = uniqueRandomNumberGenerator(MIN_NUMBER_URL, MAX_NUMBER_URL);
const getRandomMessageFromRange = uniqueRandomNumberGenerator(MIN_NUMBER_COMMENT, MAX_NUMBER_COMMENT);

const NAMES = [
  'Алексей',
  'Мария',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Екатерина',
  'Игорь',
  'Ольга',
  'Николай',
  'Татьяна',
  'Андрей',
  'Светлана',
  'Владимир',
  'Юлия',
  'Артем',
  'Наталья',
  'Павел',
  'Дарья',
  'Максим',
  'Ксения',
  'Денис',
  'Анастасия',
  'Роман',
  'Елена',
  'Василий',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION =
  'Эта фотография передает искреннюю улыбку молодого человека, который наслаждается моментом. Его глаза светятся радостью, а фон, размытый и теплый, подчеркивает атмосферу счастья и легкости.';

const getRandomUniqueMessages = (count = MIN_NUMBER_MESSAGE) => {
  const previousValues = [];

  let currentValue = MESSAGES[getRandomNumber(MIN_RANGE_MESSAGE, MAX_RANGE_MESSAGE)];

  while (previousValues.length <= count) {
    while (previousValues.includes(currentValue)) {
      currentValue = MESSAGES[getRandomNumber(MIN_RANGE_MESSAGE, MAX_RANGE_MESSAGE)];
    }
    previousValues.push(currentValue);
  }
  return previousValues.join(' ');
};


const getCommentData = () => ({
  id: getRandomIdFromRange(),
  avatar: `img/avatar-${getRandomNumber(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomUniqueMessages(getRandomNumber(MIN_NUMBER_MESSAGE, MAX_NUMBER_MESSAGE)),
  name: NAMES[getRandomNumber(MIN_NUMBER_NAME, MAX_NUMBER_NAME)]
});


const getPhotoData = () => ({
  url: `photos/${getRandomUrlFromRange()}.jpg`,
  description: DESCRIPTION,
  likes: getRandomNumber(MIN_NUMBER_LIKE, MAX_NUMBER_LIKE),
  comments: Array.from({ length: getRandomMessageFromRange() }, getCommentData),
});

const dataGenerate = (arrayCount, data) => Array.from({ length: arrayCount }, data);

dataGenerate(MAX_NUMBER_URL, getPhotoData);
