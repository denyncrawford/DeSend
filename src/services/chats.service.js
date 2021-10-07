
import { generate } from 'shortid';

export const chatModel = (peers, address) => {
  return {
    id: generate(),
    name: '',
    peers,
    address
  };
}