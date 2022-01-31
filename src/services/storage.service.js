
//import "../../node_modules/ipfs-core/index.min.js";
//export * as IPFS from "../../node_modules/ipfs-core/esm/src/index.js";
export const IPFS = window.IpfsCore;

export const Database = OrbitDB;

export const ipfsConfig = {
  Addresses: {
    Swarm: [
      "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
      "/dns6/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"
    ],
    Bootstrap: [
      "/dns4/star.desend.ml/tcp/443/wss/p2p/12D3KooWRkt9teYUZTwSFVq11ZB55LWF1knJgnE15imVnxBDopAy",
      "/dns4/star.desend.ml/tcp/443/wss/p2p/12D3KooWRkt9teYUZTwSFVq11ZB55LWF1knJgnE15imVnxBDopAy",
      "/dns6/ipfs.thedisco.zone/tcp/4430/wss/p2p/12D3KooWChhhfGdB9GJy1GbhghAAKCUR99oCymMEVS4eUcEy67nt",
      "/dns4/ipfs.thedisco.zone/tcp/4430/wss/p2p/12D3KooWChhhfGdB9GJy1GbhghAAKCUR99oCymMEVS4eUcEy67nt"
    ],
  },
}

export const dbConfig = {
  // If database doesn't exist, create it
  create: true,
  // Don't wait to load from the network
  sync: true,
  // Load only the local version of the database
  // localOnly: true,
  // Allow anyone to write to the database,
  // otherwise only the creator of the database can write
  accessController: {
    write: ['*'],
  }
}
