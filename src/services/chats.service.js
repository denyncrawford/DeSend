
import { generate } from 'shortid';

export const chatModel = (peers, id, address) => {
  return {
    _id: id,
    name: '',
    peers,
    address,
    started: false,
    latsUpdate: Date.now(),
    snapshot: ''
  };
}

export const createMessage = (content, sender) => {
  return {
    _id: generate(),
    content,
    sender,
    timestamp: Date.now(),
    read: false,
    updated: false
  };
}