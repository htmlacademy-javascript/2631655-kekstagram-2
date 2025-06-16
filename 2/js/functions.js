const checkLengthString = (string, number) => string.length <= number;

const isPalindrome = (string) => {
  const currentString = string.toLowerCase().replaceAll(' ', '');
  let result = '';
  for (let i = currentString.length - 1; i >= 0; i--) {
    result += currentString[i];
  }

  if (currentString === result) {
    return true;
  }
  return false;
};

checkLengthString();
isPalindrome();
