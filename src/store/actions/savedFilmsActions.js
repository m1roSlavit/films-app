export const SAVE_FILM = 'SAVE_FILM';
export const REMOVE_FILM = 'REMOVE_FILM';

export const saveFilm = (payload) => ({
  type: SAVE_FILM,
  payload,
});

export const removeFilm = (payload) => ({
  type: REMOVE_FILM,
  payload,
});