/* eslint-disable @typescript-eslint/ban-types */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export enum CookingMethod {
  Bake = 'BAKE',
  Grill = 'GRILL',
  InstantPot = 'INSTANT_POT',
  None = 'NONE',
  Pan = 'PAN',
  Steam = 'STEAM',
}

export enum Freezability {
  Bad = 'BAD',
  Good = 'GOOD',
  Ok = 'OK',
}

export enum Macros {
  Carbohydrate = 'CARBOHYDRATE',
  Fat = 'FAT',
  Protein = 'PROTEIN',
}

export type Meal = {
  __typename?: 'Meal';
  cookingMethod: CookingMethod;
  freezability: Freezability;
  id: Scalars['ID']['output'];
  imageSrc?: Maybe<Scalars['String']['output']>;
  maxRefrigerationDays: Scalars['Int']['output'];
  maxServings?: Maybe<Scalars['Int']['output']>;
  minutes: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  primaryMacros?: Maybe<Array<Macros>>;
  recipes?: Maybe<Array<Recipe>>;
  taste?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  meals: Array<Meal>;
};

export type Recipe = {
  __typename?: 'Recipe';
  link?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CookingMethod: CookingMethod;
  Freezability: Freezability;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Macros: Macros;
  Meal: ResolverTypeWrapper<Meal>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Meal: Meal;
  Query: {};
  Recipe: Recipe;
  String: Scalars['String']['output'];
};

export type MealResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Meal'] = ResolversParentTypes['Meal']
> = {
  cookingMethod?: Resolver<
    ResolversTypes['CookingMethod'],
    ParentType,
    ContextType
  >;
  freezability?: Resolver<
    ResolversTypes['Freezability'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRefrigerationDays?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  maxServings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryMacros?: Resolver<
    Maybe<Array<ResolversTypes['Macros']>>,
    ParentType,
    ContextType
  >;
  recipes?: Resolver<
    Maybe<Array<ResolversTypes['Recipe']>>,
    ParentType,
    ContextType
  >;
  taste?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  meals?: Resolver<Array<ResolversTypes['Meal']>, ParentType, ContextType>;
};

export type RecipeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']
> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Meal?: MealResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
};
