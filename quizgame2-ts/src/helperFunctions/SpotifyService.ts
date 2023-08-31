import axios from "axios";
import { BehaviorSubject, Subject, catchError, from, take, tap } from "rxjs";
import {
  AUTHORIZATION_CONFIG,
  REQUEST_AUTHORIZATION_URL,
  REDIRECT_URI,
  TOKEN_URL,
  GET_TRACKS_URL,
  ADD_TO_QUEUE_URL,
} from "./SpotifyConstants";

export const spotifyAccessTokenObservable = new Subject<string>(); // needed for every API call

export let refreshToken = "";

export const getFirstAccessToken = () => {
  const accessCode = getAccessCode();
  if (accessCode) {
    getFirstTokens(accessCode).subscribe();
  }
};

export const getAccessCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code") ?? "";
  if (!code) {
    window.location.replace(REQUEST_AUTHORIZATION_URL);
    console.log("Authorization started...");
  }
  window.history.replaceState({}, document.title, "/");
  return code;
};

export const getFirstTokens = (code: string) => {
  console.log("Getting Access and Refresh tokens...");
  return from(
    axios.post(
      TOKEN_URL,
      {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      },
      AUTHORIZATION_CONFIG
    )
  ).pipe(
    catchError((res) => {
      console.log(res);
      return "iderakok valamit mert nem tudok mit returnöljek";
    }),
    tap((res) => {
      getRefreshTokenFromResponse(res);
      getAccessTokenFromResponse(res);
    })
  );
};

export const getNewAccessToken = (refreshToken: string) => {
  return from(
    axios.post(
      TOKEN_URL,
      {
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      },
      AUTHORIZATION_CONFIG
    )
  ).pipe(
    tap((res) => {
      getAccessTokenFromResponse(res);
    })
  );
};

const getAccessTokenFromResponse = (res: any) => {
  console.log("New Access Token has been received!");
  const accessToken = res.data.access_token as string;
  spotifyAccessTokenObservable.next(accessToken);
  window.localStorage.setItem("token", accessToken);
};

const getRefreshTokenFromResponse = (res: any) => {
  console.log("New Refresh Token has been received!");
  refreshToken = res.data.refresh_token as string;
};

export const getTracks = (token: string) => {
  console.log("Getting tracks...");
  return from(
    axios.get(GET_TRACKS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).pipe(catchError(() => getNewAccessToken(refreshToken)));
};

export const loadIntoQueue = (token: string, uri: string, deviceId: string) => {
  console.log("Loading song into queue...");
  return from(
    axios.post(
      `${ADD_TO_QUEUE_URL}?uri=${uri}`,
      { uri: uri, device_id: deviceId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).pipe(catchError(() => getNewAccessToken(refreshToken)));
};
