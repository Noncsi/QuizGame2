import { Buffer } from "buffer";
import { generateRandomString } from "./DataFactory";

// request urls
export const ACCOUNTS_PREFIX = "https://accounts.spotify.com";
export const AUTHORIZATION_URL = `${ACCOUNTS_PREFIX}/authorize`;
export const TOKEN_URL = `${ACCOUNTS_PREFIX}/api/token`;

export const API_PREFIX = "https://api.spotify.com/v1";
export const GET_TRACKS_URL = `${API_PREFIX}/playlists/0D5YwPQJ3XZQOlr4IikPzv/tracks`;
export const PLAYER_URL = `${API_PREFIX}/me/player`;
export const ADD_TO_QUEUE_URL = `${PLAYER_URL}/queue`;

// client info
export const CLIENT_ID = "08fff13cd9cf41a6b877c71ffd33e914";
export const CLIENT_SECRET_ID = "d65439d38e974d66ace76d0968e1f516";

// authentication
export const REDIRECT_URI = "http://localhost:3000/";
export const RESPONSE_TYPE = "code";
export const SCOPE =
  "streaming user-read-email user-read-private user-modify-playback-state";
export const STATE = generateRandomString(16);
export const QUERY_PARAMS = `?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
export const REQUEST_AUTHORIZATION_URL = `${AUTHORIZATION_URL}${QUERY_PARAMS}`;

export const AUTHORIZATION_CONFIG_HEADER = Buffer.from(
  `${CLIENT_ID}:${CLIENT_SECRET_ID}`
).toString("base64");
export const AUTHORIZATION_CONFIG = {
  headers: {
    Authorization: `Basic ${AUTHORIZATION_CONFIG_HEADER}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
