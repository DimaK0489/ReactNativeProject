import {AuthStack} from '../AuthStack/AuthStack';
import {HomeStack} from '../HomeStack/HomeStack';

export enum STACK {
  HOME = 'HOME',
  AUTH = 'AUTH',
}

export const stacks = {
  [STACK.HOME]: HomeStack,
  [STACK.AUTH]: AuthStack,
};
