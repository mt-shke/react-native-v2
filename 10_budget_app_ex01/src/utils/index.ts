export const randomArray = (number: number) => {
  let array: number[] = [];

  while (array.length < number) {
    const randomNumber = () => Math.ceil(Math.random() * 27);
    array = Array.from(new Set([...array, randomNumber()]));
  }

  return array;
};
