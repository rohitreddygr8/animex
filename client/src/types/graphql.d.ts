export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum GenreEnum {
  Action = 'action',
  Adventure = 'adventure',
  Cars = 'cars',
  Comedy = 'comedy',
  Crime = 'crime',
  Dementia = 'dementia',
  Demons = 'demons',
  Drama = 'drama',
  Dub = 'dub',
  Ecchi = 'ecchi',
  Family = 'family',
  Fantasy = 'fantasy',
  Game = 'game',
  Gourmet = 'gourmet',
  Harem = 'harem',
  Hentai = 'hentai',
  Historical = 'historical',
  Horror = 'horror',
  Josei = 'josei',
  Kids = 'kids',
  Magic = 'magic',
  MartialArts = 'martialArts',
  Mecha = 'mecha',
  Military = 'military',
  Music = 'music',
  Mystery = 'mystery',
  Parody = 'parody',
  Police = 'police',
  Psychological = 'psychological',
  Romance = 'romance',
  Samurai = 'samurai',
  School = 'school',
  SciFi = 'sciFi',
  Seinen = 'seinen',
  Shoujo = 'shoujo',
  ShoujoAi = 'shoujoAi',
  Shounen = 'shounen',
  ShounenAi = 'shounenAi',
  SliceOfLife = 'sliceOfLife',
  Space = 'space',
  Sports = 'sports',
  SuperPower = 'superPower',
  Supernatural = 'supernatural',
  Suspense = 'suspense',
  Thriller = 'thriller',
  Vampire = 'vampire',
  Yaoi = 'yaoi',
  Yuri = 'yuri'
}

export enum SeasonEnum {
  Fall = 'fall',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter'
}

export type AnimeDetails = {
  __typename?: 'animeDetails';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  episodesList?: Maybe<Array<Maybe<Episode>>>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  otherNames?: Maybe<Scalars['String']>;
  releasedDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
  totalEpisodes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AnimeMovies = {
  __typename?: 'animeMovies';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
};

export type Data = {
  __typename?: 'data';
  referer?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Maybe<Sources>>>;
};

export type Episode = {
  __typename?: 'episode';
  episodeId?: Maybe<Scalars['String']>;
  episodeNum?: Maybe<Scalars['String']>;
  episodeUrl?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'genre';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
};

export type NewSeasons = {
  __typename?: 'newSeasons';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  latestEp?: Maybe<Scalars['String']>;
};

export type Popular = {
  __typename?: 'popular';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'query';
  /** Gets details of the given anime ID. */
  animeDetails?: Maybe<AnimeDetails>;
  /** Gets a list of anime movies whose titles match the given keyword. */
  animeMovies?: Maybe<Array<Maybe<AnimeMovies>>>;
  /** Gets a list of anime belonging to the given genre. */
  genre?: Maybe<Array<Maybe<Genre>>>;
  /** Gets a list of new seasons of anime. */
  newSeasons?: Maybe<Array<Maybe<NewSeasons>>>;
  /** Gets a list of popular anime. */
  popular?: Maybe<Array<Maybe<Popular>>>;
  /** Gets a list of recently released anime. */
  recentReleases?: Maybe<Array<Maybe<RecentReleases>>>;
  /** Gets a list of anime whose titles match the given keyword. */
  search?: Maybe<Array<Maybe<Search>>>;
  /** Gets a list of anime which were released in the given season and year. */
  season?: Maybe<Array<Maybe<Season>>>;
  /** Gets a list of current top airing anime. */
  topAiring?: Maybe<Array<Maybe<TopAiring>>>;
  /** Gets streaming URLs for the given episode ID. */
  watch?: Maybe<Watch>;
};


export type QueryAnimeDetailsArgs = {
  animeId?: InputMaybe<Scalars['ID']>;
};


export type QueryAnimeMoviesArgs = {
  keyword: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGenreArgs = {
  genre: GenreEnum;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryNewSeasonsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPopularArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRecentReleasesArgs = {
  genre: GenreEnum;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchArgs = {
  keyword: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeasonArgs = {
  page?: InputMaybe<Scalars['Int']>;
  season: SeasonEnum;
};


export type QueryTopAiringArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryWatchArgs = {
  episodeId?: InputMaybe<Scalars['ID']>;
};

export type RecentReleases = {
  __typename?: 'recentReleases';
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  episodeId?: Maybe<Scalars['ID']>;
  episodeNum?: Maybe<Scalars['String']>;
  episodeUrl?: Maybe<Scalars['String']>;
  subOrDub?: Maybe<Scalars['String']>;
};

export type Search = {
  __typename?: 'search';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Season = {
  __typename?: 'season';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  episodeUrl?: Maybe<Scalars['String']>;
};

export type Sources = {
  __typename?: 'sources';
  file?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type TopAiring = {
  __typename?: 'topAiring';
  animeId?: Maybe<Scalars['ID']>;
  animeImg?: Maybe<Scalars['String']>;
  animeTitle?: Maybe<Scalars['String']>;
  animeUrl?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  latestEp?: Maybe<Scalars['String']>;
};

export type Watch = {
  __typename?: 'watch';
  data?: Maybe<Data>;
};
