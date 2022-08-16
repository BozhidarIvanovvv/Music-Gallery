import * as fetcher from "../Utils/fetcher";
import { constants } from "../Constants/urlConstants";

export const getAll = () => fetcher.get(constants.baseUrlAlbums);

export const create = (album) => fetcher.post(constants.baseUrlAlbums, album);

export const getOne = (albumId) =>
  fetcher.get(`${constants.baseUrlAlbums}/${albumId}`);

export const delOne = (albumId) =>
  fetcher.remove(`${constants.baseUrlAlbums}/${albumId}`);

export const edit = (albumId, albumData) =>
  fetcher.put(`${constants.baseUrlAlbums}/${albumId}`, albumData);
