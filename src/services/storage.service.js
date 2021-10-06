
import "../../node_modules/ipfs-core/index.min.js";
export const IPFS = window.IpfsCore;

export const Database = OrbitDB;

console.log(Database)

export const ipfsConfig = {
  Addresses: {
    Swarm: [
      "/dns4/star.thedisco.zone/tcp/9090/wss/p2p-webrtc-star",
      "/dns6/star.thedisco.zone/tcp/9090/wss/p2p-webrtc-star",
    ],
    Bootstrap: [
      "/dns6/ipfs.thedisco.zone/tcp/4430/wss/p2p/12D3KooWChhhfGdB9GJy1GbhghAAKCUR99oCymMEVS4eUcEy67nt",
      "/dns4/ipfs.thedisco.zone/tcp/4430/wss/p2p/12D3KooWChhhfGdB9GJy1GbhghAAKCUR99oCymMEVS4eUcEy67nt",
    ],
  },
}

export const dbConfig = {
  // If database doesn't exist, create it
  create: true,
  // Don't wait to load from the network
  sync: false,
  // Load only the local version of the database
  // localOnly: true,
  // Allow anyone to write to the database,
  // otherwise only the creator of the database can write
  accessController: {
    write: ['*'],
  }
}