import * as fetcher from "../Utils/fetcher";
import { constants } from "../Constants/urlConstants";

export const getAll = () => fetcher.get(constants.baseUrlAlbums);
