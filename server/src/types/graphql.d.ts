import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GenreEnum: GenreEnum;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  SeasonEnum: SeasonEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  animeDetails: ResolverTypeWrapper<AnimeDetails>;
  animeMovies: ResolverTypeWrapper<AnimeMovies>;
  data: ResolverTypeWrapper<Data>;
  episode: ResolverTypeWrapper<Episode>;
  genre: ResolverTypeWrapper<Genre>;
  newSeasons: ResolverTypeWrapper<NewSeasons>;
  popular: ResolverTypeWrapper<Popular>;
  query: ResolverTypeWrapper<{}>;
  recentReleases: ResolverTypeWrapper<RecentReleases>;
  search: ResolverTypeWrapper<Search>;
  season: ResolverTypeWrapper<Season>;
  sources: ResolverTypeWrapper<Sources>;
  topAiring: ResolverTypeWrapper<TopAiring>;
  watch: ResolverTypeWrapper<Watch>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  animeDetails: AnimeDetails;
  animeMovies: AnimeMovies;
  data: Data;
  episode: Episode;
  genre: Genre;
  newSeasons: NewSeasons;
  popular: Popular;
  query: {};
  recentReleases: RecentReleases;
  search: Search;
  season: Season;
  sources: Sources;
  topAiring: TopAiring;
  watch: Watch;
};

export type AnimeDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['animeDetails'] = ResolversParentTypes['animeDetails']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodesList?: Resolver<Maybe<Array<Maybe<ResolversTypes['episode']>>>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  otherNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releasedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  synopsis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalEpisodes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnimeMoviesResolvers<ContextType = any, ParentType extends ResolversParentTypes['animeMovies'] = ResolversParentTypes['animeMovies']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['data'] = ResolversParentTypes['data']> = {
  referer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['sources']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['episode'] = ResolversParentTypes['episode']> = {
  episodeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeNum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['genre'] = ResolversParentTypes['genre']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewSeasonsResolvers<ContextType = any, ParentType extends ResolversParentTypes['newSeasons'] = ResolversParentTypes['newSeasons']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  latestEp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PopularResolvers<ContextType = any, ParentType extends ResolversParentTypes['popular'] = ResolversParentTypes['popular']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['query'] = ResolversParentTypes['query']> = {
  animeDetails?: Resolver<Maybe<ResolversTypes['animeDetails']>, ParentType, ContextType, Partial<QueryAnimeDetailsArgs>>;
  animeMovies?: Resolver<Maybe<Array<Maybe<ResolversTypes['animeMovies']>>>, ParentType, ContextType, RequireFields<QueryAnimeMoviesArgs, 'keyword' | 'page'>>;
  genre?: Resolver<Maybe<Array<Maybe<ResolversTypes['genre']>>>, ParentType, ContextType, RequireFields<QueryGenreArgs, 'genre' | 'page'>>;
  newSeasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['newSeasons']>>>, ParentType, ContextType, RequireFields<QueryNewSeasonsArgs, 'page'>>;
  popular?: Resolver<Maybe<Array<Maybe<ResolversTypes['popular']>>>, ParentType, ContextType, RequireFields<QueryPopularArgs, 'page'>>;
  recentReleases?: Resolver<Maybe<Array<Maybe<ResolversTypes['recentReleases']>>>, ParentType, ContextType, RequireFields<QueryRecentReleasesArgs, 'genre' | 'page'>>;
  search?: Resolver<Maybe<Array<Maybe<ResolversTypes['search']>>>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'keyword' | 'page'>>;
  season?: Resolver<Maybe<Array<Maybe<ResolversTypes['season']>>>, ParentType, ContextType, RequireFields<QuerySeasonArgs, 'page' | 'season'>>;
  topAiring?: Resolver<Maybe<Array<Maybe<ResolversTypes['topAiring']>>>, ParentType, ContextType, RequireFields<QueryTopAiringArgs, 'page'>>;
  watch?: Resolver<Maybe<ResolversTypes['watch']>, ParentType, ContextType, Partial<QueryWatchArgs>>;
};

export type RecentReleasesResolvers<ContextType = any, ParentType extends ResolversParentTypes['recentReleases'] = ResolversParentTypes['recentReleases']> = {
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  episodeNum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subOrDub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResolvers<ContextType = any, ParentType extends ResolversParentTypes['search'] = ResolversParentTypes['search']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeasonResolvers<ContextType = any, ParentType extends ResolversParentTypes['season'] = ResolversParentTypes['season']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['sources'] = ResolversParentTypes['sources']> = {
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopAiringResolvers<ContextType = any, ParentType extends ResolversParentTypes['topAiring'] = ResolversParentTypes['topAiring']> = {
  animeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  animeImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  animeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  latestEp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['watch'] = ResolversParentTypes['watch']> = {
  data?: Resolver<Maybe<ResolversTypes['data']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  animeDetails?: AnimeDetailsResolvers<ContextType>;
  animeMovies?: AnimeMoviesResolvers<ContextType>;
  data?: DataResolvers<ContextType>;
  episode?: EpisodeResolvers<ContextType>;
  genre?: GenreResolvers<ContextType>;
  newSeasons?: NewSeasonsResolvers<ContextType>;
  popular?: PopularResolvers<ContextType>;
  query?: QueryResolvers<ContextType>;
  recentReleases?: RecentReleasesResolvers<ContextType>;
  search?: SearchResolvers<ContextType>;
  season?: SeasonResolvers<ContextType>;
  sources?: SourcesResolvers<ContextType>;
  topAiring?: TopAiringResolvers<ContextType>;
  watch?: WatchResolvers<ContextType>;
};

