import tpData from '../../tpData.json';
import {IUserData} from '../ts/interfaces/user';
export * from './userData';

const data: IUserData[] = tpData as IUserData[];
const users = tpData.map(member => member.user);

export const randomNumber = () => Math.floor(Math.random() * 9 + 1);
export const randomUsername = () => users[randomNumber()];

export const randomArray = (number: number) => {
  let array: number[] = [];
  while (array.length < number) {
    const randomNum = () => Math.ceil(Math.random() * 27);
    array = Array.from(new Set([...array, randomNum()]));
  }
  return array;
};

export const getRandomUserData = () => {
  return data[randomNumber()];
};

export const convertAmount = (amount: string) =>
  Number(amount.replace('€', '').replace(',', ''));
