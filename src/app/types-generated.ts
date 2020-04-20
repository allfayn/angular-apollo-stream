import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Decimal: any;
  examples__JSON: any;
}



export interface Card {
   __typename?: 'Card';
  id?: Maybe<Scalars['ID']>;
  poducts?: Maybe<Array<Maybe<Product>>>;
}

export interface Company {
   __typename?: 'Company';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  employees?: Maybe<Array<Employee>>;
}


export interface Employee {
   __typename?: 'Employee';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  subordinates?: Maybe<Array<Employee>>;
  company?: Maybe<Company>;
}


export interface Fake__Color {
  red255?: Maybe<Scalars['Int']>;
  green255?: Maybe<Scalars['Int']>;
  blue255?: Maybe<Scalars['Int']>;
}

export enum Fake__ImageCategory {
  Abstract = 'abstract',
  Animals = 'animals',
  Business = 'business',
  Cats = 'cats',
  City = 'city',
  Food = 'food',
  Nightlife = 'nightlife',
  Fashion = 'fashion',
  People = 'people',
  Nature = 'nature',
  Sports = 'sports',
  Technics = 'technics',
  Transport = 'transport'
}

export enum Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW'
}

export enum Fake__LoremSize {
  Word = 'word',
  Words = 'words',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs'
}

export interface Fake__Options {
  /** Only for type `streetAddress` */
  useFullAddress?: Maybe<Scalars['Boolean']>;
  /** Only for type `money` */
  minMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  maxMoney?: Maybe<Scalars['Float']>;
  /** Only for type `money` */
  decimalPlaces?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageWidth?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageHeight?: Maybe<Scalars['Int']>;
  /** Only for type `imageUrl` */
  imageCategory?: Maybe<Fake__ImageCategory>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: Maybe<Scalars['Boolean']>;
  /** Only for type `email` */
  emailProvider?: Maybe<Scalars['String']>;
  /** Only for type `password` */
  passwordLength?: Maybe<Scalars['Int']>;
  /** Only for type `lorem` */
  loremSize?: Maybe<Fake__LoremSize>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: Maybe<Scalars['String']>;
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: Maybe<Fake__Color>;
  /** Only for type `number` */
  minNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: Maybe<Scalars['Float']>;
  /** Only for type `number` */
  precisionNumber?: Maybe<Scalars['Float']>;
}

export enum Fake__Types {
  ZipCode = 'zipCode',
  City = 'city',
  StreetName = 'streetName',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  SecondaryAddress = 'secondaryAddress',
  County = 'county',
  Country = 'country',
  CountryCode = 'countryCode',
  State = 'state',
  StateAbbr = 'stateAbbr',
  Latitude = 'latitude',
  Longitude = 'longitude',
  ColorName = 'colorName',
  ProductCategory = 'productCategory',
  ProductName = 'productName',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  ProductMaterial = 'productMaterial',
  Product = 'product',
  CompanyName = 'companyName',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyBs = 'companyBS',
  DbColumn = 'dbColumn',
  DbType = 'dbType',
  DbCollation = 'dbCollation',
  DbEngine = 'dbEngine',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  BitcoinAddress = 'bitcoinAddress',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  BankIdentifierCode = 'bankIdentifierCode',
  HackerAbbr = 'hackerAbbr',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  Url = 'url',
  DomainName = 'domainName',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  UserAgent = 'userAgent',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  MacAddress = 'macAddress',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  FirstName = 'firstName',
  LastName = 'lastName',
  FullName = 'fullName',
  JobTitle = 'jobTitle',
  PhoneNumber = 'phoneNumber',
  Number = 'number',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  Locale = 'locale',
  Filename = 'filename',
  MimeType = 'mimeType',
  FileExtension = 'fileExtension',
  Semver = 'semver'
}

export interface Product {
   __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Decimal']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
}

export interface ProductTagInput {
  tagId?: Maybe<Scalars['ID']>;
}

export interface Query {
   __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  user?: Maybe<User>;
  tags?: Maybe<Array<Maybe<Tag>>>;
}


export interface QueryProductsArgs {
  tagId?: Maybe<Scalars['ID']>;
}


export interface QueryUserArgs {
  id?: Maybe<Scalars['ID']>;
}

export interface Tag {
   __typename?: 'Tag';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface User {
   __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  card?: Maybe<Card>;
}

export type GetAllQueryVariables = {};


export type GetAllQuery = (
  { __typename?: 'Query' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id'>
  )>>>, products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'image' | 'price'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'name'>
    )>>> }
  )>>> }
);

export type ProductItemFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'image' | 'price'>
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'name'>
  )>>> }
);

export type ProductsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'description'>
  & ProductItemFragment
);

export type ProductsTagFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'id' | 'name'>
);

export type GetProductsQueryVariables = {};


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductsFragment
  )>>>, tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & ProductsTagFragment
  )>>> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Product: ResolverTypeWrapper<Product>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Decimal: ResolverTypeWrapper<Scalars['Decimal']>,
  Tag: ResolverTypeWrapper<Tag>,
  User: ResolverTypeWrapper<User>,
  Card: ResolverTypeWrapper<Card>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Company: ResolverTypeWrapper<Company>,
  Employee: ResolverTypeWrapper<Employee>,
  ProductTagInput: ProductTagInput,
  fake__Locale: Fake__Locale,
  fake__Types: Fake__Types,
  fake__imageCategory: Fake__ImageCategory,
  fake__loremSize: Fake__LoremSize,
  fake__color: Fake__Color,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  fake__options: Fake__Options,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  examples__JSON: ResolverTypeWrapper<Scalars['examples__JSON']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  Product: Product,
  String: Scalars['String'],
  Decimal: Scalars['Decimal'],
  Tag: Tag,
  User: User,
  Card: Card,
  Boolean: Scalars['Boolean'],
  Company: Company,
  Employee: Employee,
  ProductTagInput: ProductTagInput,
  fake__Locale: Fake__Locale,
  fake__Types: Fake__Types,
  fake__imageCategory: Fake__ImageCategory,
  fake__loremSize: Fake__LoremSize,
  fake__color: Fake__Color,
  Int: Scalars['Int'],
  fake__options: Fake__Options,
  Float: Scalars['Float'],
  examples__JSON: Scalars['examples__JSON'],
};

export type NgModuleDirectiveArgs = {   module: Scalars['String']; };

export type NgModuleDirectiveResolver<Result, Parent, ContextType = any, Args = NgModuleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NamedClientDirectiveArgs = {   name: Scalars['String']; };

export type NamedClientDirectiveResolver<Result, Parent, ContextType = any, Args = NamedClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  poducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  employees?: Resolver<Maybe<Array<ResolversTypes['Employee']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal'
}

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  subordinates?: Resolver<Maybe<Array<ResolversTypes['Employee']>>, ParentType, ContextType>,
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface Examples__JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['examples__JSON'], any> {
  name: 'examples__JSON'
}

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  price?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryProductsArgs, never>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>,
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  card?: Resolver<Maybe<ResolversTypes['Card']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Card?: CardResolvers<ContextType>,
  Company?: CompanyResolvers<ContextType>,
  Decimal?: GraphQLScalarType,
  Employee?: EmployeeResolvers<ContextType>,
  examples__JSON?: GraphQLScalarType,
  Product?: ProductResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Tag?: TagResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  NgModule?: NgModuleDirectiveResolver<any, any, ContextType>,
  namedClient?: NamedClientDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
export const ProductItemFragmentDoc = gql`
    fragment ProductItem on Product {
  id
  name
  image
  price
  tags {
    name
  }
}
    `;
export const ProductsFragmentDoc = gql`
    fragment Products on Product {
  ...ProductItem
  description
}
    ${ProductItemFragmentDoc}`;
export const ProductsTagFragmentDoc = gql`
    fragment ProductsTag on Tag {
  id
  name
}
    `;
export const GetAllDocument = gql`
    query GetAll {
  tags {
    id
  }
  products {
    id
    name
    description
    image
    price
    tags {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllGQL extends Apollo.Query<GetAllQuery, GetAllQueryVariables> {
    document = GetAllDocument;
    
  }
export const GetProductsDocument = gql`
    query GetProducts {
  products {
    ...Products
  }
  tags {
    ...ProductsTag
  }
}
    ${ProductsFragmentDoc}
${ProductsTagFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProductsGQL extends Apollo.Query<GetProductsQuery, GetProductsQueryVariables> {
    document = GetProductsDocument;
    
  }