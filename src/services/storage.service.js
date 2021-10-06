
import "../../node_modules/ipfs-core/index.min.js";
export const IPFS = window.IpfsCore;

export const Database = AvionDB;

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