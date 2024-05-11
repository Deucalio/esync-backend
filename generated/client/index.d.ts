
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model DarazOrders
 * 
 */
export type DarazOrders = $Result.DefaultSelection<Prisma.$DarazOrdersPayload>
/**
 * Model DarazStoreTransactions
 * 
 */
export type DarazStoreTransactions = $Result.DefaultSelection<Prisma.$DarazStoreTransactionsPayload>
/**
 * Model ShopifyOrders
 * 
 */
export type ShopifyOrders = $Result.DefaultSelection<Prisma.$ShopifyOrdersPayload>
/**
 * Model Courier
 * 
 */
export type Courier = $Result.DefaultSelection<Prisma.$CourierPayload>
/**
 * Model TemporaryData
 * 
 */
export type TemporaryData = $Result.DefaultSelection<Prisma.$TemporaryDataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.darazOrders`: Exposes CRUD operations for the **DarazOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazOrders
    * const darazOrders = await prisma.darazOrders.findMany()
    * ```
    */
  get darazOrders(): Prisma.DarazOrdersDelegate<ExtArgs>;

  /**
   * `prisma.darazStoreTransactions`: Exposes CRUD operations for the **DarazStoreTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazStoreTransactions
    * const darazStoreTransactions = await prisma.darazStoreTransactions.findMany()
    * ```
    */
  get darazStoreTransactions(): Prisma.DarazStoreTransactionsDelegate<ExtArgs>;

  /**
   * `prisma.shopifyOrders`: Exposes CRUD operations for the **ShopifyOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopifyOrders
    * const shopifyOrders = await prisma.shopifyOrders.findMany()
    * ```
    */
  get shopifyOrders(): Prisma.ShopifyOrdersDelegate<ExtArgs>;

  /**
   * `prisma.courier`: Exposes CRUD operations for the **Courier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couriers
    * const couriers = await prisma.courier.findMany()
    * ```
    */
  get courier(): Prisma.CourierDelegate<ExtArgs>;

  /**
   * `prisma.temporaryData`: Exposes CRUD operations for the **TemporaryData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryData
    * const temporaryData = await prisma.temporaryData.findMany()
    * ```
    */
  get temporaryData(): Prisma.TemporaryDataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    DarazOrders: 'DarazOrders',
    DarazStoreTransactions: 'DarazStoreTransactions',
    ShopifyOrders: 'ShopifyOrders',
    Courier: 'Courier',
    TemporaryData: 'TemporaryData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'store' | 'darazOrders' | 'darazStoreTransactions' | 'shopifyOrders' | 'courier' | 'temporaryData'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      DarazOrders: {
        payload: Prisma.$DarazOrdersPayload<ExtArgs>
        fields: Prisma.DarazOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazOrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazOrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          findFirst: {
            args: Prisma.DarazOrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazOrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          findMany: {
            args: Prisma.DarazOrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>[]
          }
          create: {
            args: Prisma.DarazOrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          createMany: {
            args: Prisma.DarazOrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazOrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          update: {
            args: Prisma.DarazOrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          deleteMany: {
            args: Prisma.DarazOrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazOrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazOrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrdersPayload>
          }
          aggregate: {
            args: Prisma.DarazOrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazOrders>
          }
          groupBy: {
            args: Prisma.DarazOrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazOrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazOrdersCountAggregateOutputType> | number
          }
        }
      }
      DarazStoreTransactions: {
        payload: Prisma.$DarazStoreTransactionsPayload<ExtArgs>
        fields: Prisma.DarazStoreTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazStoreTransactionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazStoreTransactionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          findFirst: {
            args: Prisma.DarazStoreTransactionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazStoreTransactionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          findMany: {
            args: Prisma.DarazStoreTransactionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>[]
          }
          create: {
            args: Prisma.DarazStoreTransactionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          createMany: {
            args: Prisma.DarazStoreTransactionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazStoreTransactionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          update: {
            args: Prisma.DarazStoreTransactionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.DarazStoreTransactionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazStoreTransactionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazStoreTransactionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionsPayload>
          }
          aggregate: {
            args: Prisma.DarazStoreTransactionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazStoreTransactions>
          }
          groupBy: {
            args: Prisma.DarazStoreTransactionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazStoreTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazStoreTransactionsCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazStoreTransactionsCountAggregateOutputType> | number
          }
        }
      }
      ShopifyOrders: {
        payload: Prisma.$ShopifyOrdersPayload<ExtArgs>
        fields: Prisma.ShopifyOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopifyOrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopifyOrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          findFirst: {
            args: Prisma.ShopifyOrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopifyOrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          findMany: {
            args: Prisma.ShopifyOrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>[]
          }
          create: {
            args: Prisma.ShopifyOrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          createMany: {
            args: Prisma.ShopifyOrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShopifyOrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          update: {
            args: Prisma.ShopifyOrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          deleteMany: {
            args: Prisma.ShopifyOrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopifyOrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopifyOrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrdersPayload>
          }
          aggregate: {
            args: Prisma.ShopifyOrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShopifyOrders>
          }
          groupBy: {
            args: Prisma.ShopifyOrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopifyOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopifyOrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopifyOrdersCountAggregateOutputType> | number
          }
        }
      }
      Courier: {
        payload: Prisma.$CourierPayload<ExtArgs>
        fields: Prisma.CourierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findFirst: {
            args: Prisma.CourierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findMany: {
            args: Prisma.CourierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          create: {
            args: Prisma.CourierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          createMany: {
            args: Prisma.CourierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          update: {
            args: Prisma.CourierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          deleteMany: {
            args: Prisma.CourierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          aggregate: {
            args: Prisma.CourierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourier>
          }
          groupBy: {
            args: Prisma.CourierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourierCountArgs<ExtArgs>,
            result: $Utils.Optional<CourierCountAggregateOutputType> | number
          }
        }
      }
      TemporaryData: {
        payload: Prisma.$TemporaryDataPayload<ExtArgs>
        fields: Prisma.TemporaryDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporaryDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporaryDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          findFirst: {
            args: Prisma.TemporaryDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporaryDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          findMany: {
            args: Prisma.TemporaryDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>[]
          }
          create: {
            args: Prisma.TemporaryDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          createMany: {
            args: Prisma.TemporaryDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TemporaryDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          update: {
            args: Prisma.TemporaryDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          deleteMany: {
            args: Prisma.TemporaryDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemporaryDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemporaryDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemporaryDataPayload>
          }
          aggregate: {
            args: Prisma.TemporaryDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemporaryData>
          }
          groupBy: {
            args: Prisma.TemporaryDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemporaryDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporaryDataCountArgs<ExtArgs>,
            result: $Utils.Optional<TemporaryDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Stores: number
    Courier: number
    DarazOrders: number
    ShopifyOrders: number
    TemporaryData: number
    DarazUnpaidTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stores?: boolean | UserCountOutputTypeCountStoresArgs
    Courier?: boolean | UserCountOutputTypeCountCourierArgs
    DarazOrders?: boolean | UserCountOutputTypeCountDarazOrdersArgs
    ShopifyOrders?: boolean | UserCountOutputTypeCountShopifyOrdersArgs
    TemporaryData?: boolean | UserCountOutputTypeCountTemporaryDataArgs
    DarazUnpaidTransactions?: boolean | UserCountOutputTypeCountDarazUnpaidTransactionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDarazOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrdersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopifyOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrdersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryDataWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDarazUnpaidTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazStoreTransactionsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    joinedat: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    joinedat: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    address: number
    joinedat: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    joinedat?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    joinedat?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    joinedat?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    joinedat?: boolean
    Stores?: boolean | User$StoresArgs<ExtArgs>
    Courier?: boolean | User$CourierArgs<ExtArgs>
    DarazOrders?: boolean | User$DarazOrdersArgs<ExtArgs>
    ShopifyOrders?: boolean | User$ShopifyOrdersArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazUnpaidTransactions?: boolean | User$DarazUnpaidTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    joinedat?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stores?: boolean | User$StoresArgs<ExtArgs>
    Courier?: boolean | User$CourierArgs<ExtArgs>
    DarazOrders?: boolean | User$DarazOrdersArgs<ExtArgs>
    ShopifyOrders?: boolean | User$ShopifyOrdersArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazUnpaidTransactions?: boolean | User$DarazUnpaidTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Stores: Prisma.$StorePayload<ExtArgs>[]
      Courier: Prisma.$CourierPayload<ExtArgs>[]
      DarazOrders: Prisma.$DarazOrdersPayload<ExtArgs>[]
      ShopifyOrders: Prisma.$ShopifyOrdersPayload<ExtArgs>[]
      TemporaryData: Prisma.$TemporaryDataPayload<ExtArgs>[]
      DarazUnpaidTransactions: Prisma.$DarazStoreTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string
      address: string
      joinedat: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Stores<T extends User$StoresArgs<ExtArgs> = {}>(args?: Subset<T, User$StoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'> | Null>;

    Courier<T extends User$CourierArgs<ExtArgs> = {}>(args?: Subset<T, User$CourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazOrders<T extends User$DarazOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShopifyOrders<T extends User$ShopifyOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$ShopifyOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    TemporaryData<T extends User$TemporaryDataArgs<ExtArgs> = {}>(args?: Subset<T, User$TemporaryDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazUnpaidTransactions<T extends User$DarazUnpaidTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazUnpaidTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly joinedat: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Stores
   */
  export type User$StoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * User.Courier
   */
  export type User$CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    cursor?: CourierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * User.DarazOrders
   */
  export type User$DarazOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    where?: DarazOrdersWhereInput
    orderBy?: DarazOrdersOrderByWithRelationInput | DarazOrdersOrderByWithRelationInput[]
    cursor?: DarazOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazOrdersScalarFieldEnum | DarazOrdersScalarFieldEnum[]
  }


  /**
   * User.ShopifyOrders
   */
  export type User$ShopifyOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    where?: ShopifyOrdersWhereInput
    orderBy?: ShopifyOrdersOrderByWithRelationInput | ShopifyOrdersOrderByWithRelationInput[]
    cursor?: ShopifyOrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopifyOrdersScalarFieldEnum | ShopifyOrdersScalarFieldEnum[]
  }


  /**
   * User.TemporaryData
   */
  export type User$TemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    where?: TemporaryDataWhereInput
    orderBy?: TemporaryDataOrderByWithRelationInput | TemporaryDataOrderByWithRelationInput[]
    cursor?: TemporaryDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemporaryDataScalarFieldEnum | TemporaryDataScalarFieldEnum[]
  }


  /**
   * User.DarazUnpaidTransactions
   */
  export type User$DarazUnpaidTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    where?: DarazStoreTransactionsWhereInput
    orderBy?: DarazStoreTransactionsOrderByWithRelationInput | DarazStoreTransactionsOrderByWithRelationInput[]
    cursor?: DarazStoreTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazStoreTransactionsScalarFieldEnum | DarazStoreTransactionsScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    platform: string | null
    image_url: string | null
    image_public_id: string | null
    user_id: number | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    platform: string | null
    image_url: string | null
    image_public_id: string | null
    user_id: number | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    platform: number
    image_url: number
    image_public_id: number
    store_info: number
    user_id: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    image_url?: true
    image_public_id?: true
    user_id?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    image_url?: true
    image_public_id?: true
    user_id?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    image_url?: true
    image_public_id?: true
    store_info?: true
    user_id?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonValue
    user_id: number
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    image_url?: boolean
    image_public_id?: boolean
    store_info?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    platform?: boolean
    image_url?: boolean
    image_public_id?: boolean
    store_info?: boolean
    user_id?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      platform: string
      image_url: string
      image_public_id: string
      store_info: Prisma.JsonValue
      user_id: number
    }, ExtArgs["result"]["store"]>
    composites: {}
  }


  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreCreateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
    readonly platform: FieldRef<"Store", 'String'>
    readonly image_url: FieldRef<"Store", 'String'>
    readonly image_public_id: FieldRef<"Store", 'String'>
    readonly store_info: FieldRef<"Store", 'Json'>
    readonly user_id: FieldRef<"Store", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
  }



  /**
   * Model DarazOrders
   */

  export type AggregateDarazOrders = {
    _count: DarazOrdersCountAggregateOutputType | null
    _avg: DarazOrdersAvgAggregateOutputType | null
    _sum: DarazOrdersSumAggregateOutputType | null
    _min: DarazOrdersMinAggregateOutputType | null
    _max: DarazOrdersMaxAggregateOutputType | null
  }

  export type DarazOrdersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type DarazOrdersSumAggregateOutputType = {
    user_id: number | null
  }

  export type DarazOrdersMinAggregateOutputType = {
    order_id: string | null
    seller_id: string | null
    voucher_platform: string | null
    voucher: string | null
    voucher_seller: string | null
    order_number: string | null
    created_at: Date | null
    voucher_code: string | null
    gift_option: string | null
    shipping_fee_discount_platform: string | null
    customer_name: string | null
    promised_shipping_times: string | null
    updated_at: Date | null
    price: string | null
    shipping_fee_original: string | null
    payment_method: string | null
    shipping_fee_discount_seller: string | null
    shipping_fee: string | null
    items_count: string | null
    statuses: string | null
    gift_message: string | null
    remarks: string | null
    shop_logo: string | null
    user_id: number | null
  }

  export type DarazOrdersMaxAggregateOutputType = {
    order_id: string | null
    seller_id: string | null
    voucher_platform: string | null
    voucher: string | null
    voucher_seller: string | null
    order_number: string | null
    created_at: Date | null
    voucher_code: string | null
    gift_option: string | null
    shipping_fee_discount_platform: string | null
    customer_name: string | null
    promised_shipping_times: string | null
    updated_at: Date | null
    price: string | null
    shipping_fee_original: string | null
    payment_method: string | null
    shipping_fee_discount_seller: string | null
    shipping_fee: string | null
    items_count: string | null
    statuses: string | null
    gift_message: string | null
    remarks: string | null
    shop_logo: string | null
    user_id: number | null
  }

  export type DarazOrdersCountAggregateOutputType = {
    order_id: number
    seller_id: number
    voucher_platform: number
    voucher: number
    voucher_seller: number
    order_number: number
    created_at: number
    voucher_code: number
    gift_option: number
    shipping_fee_discount_platform: number
    customer_name: number
    promised_shipping_times: number
    updated_at: number
    price: number
    shipping_fee_original: number
    payment_method: number
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    statuses: number
    address_billing: number
    gift_message: number
    remarks: number
    address_shipping: number
    order_items: number
    transactions: number
    shop_logo: number
    user_id: number
    _all: number
  }


  export type DarazOrdersAvgAggregateInputType = {
    user_id?: true
  }

  export type DarazOrdersSumAggregateInputType = {
    user_id?: true
  }

  export type DarazOrdersMinAggregateInputType = {
    order_id?: true
    seller_id?: true
    voucher_platform?: true
    voucher?: true
    voucher_seller?: true
    order_number?: true
    created_at?: true
    voucher_code?: true
    gift_option?: true
    shipping_fee_discount_platform?: true
    customer_name?: true
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    statuses?: true
    gift_message?: true
    remarks?: true
    shop_logo?: true
    user_id?: true
  }

  export type DarazOrdersMaxAggregateInputType = {
    order_id?: true
    seller_id?: true
    voucher_platform?: true
    voucher?: true
    voucher_seller?: true
    order_number?: true
    created_at?: true
    voucher_code?: true
    gift_option?: true
    shipping_fee_discount_platform?: true
    customer_name?: true
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    statuses?: true
    gift_message?: true
    remarks?: true
    shop_logo?: true
    user_id?: true
  }

  export type DarazOrdersCountAggregateInputType = {
    order_id?: true
    seller_id?: true
    voucher_platform?: true
    voucher?: true
    voucher_seller?: true
    order_number?: true
    created_at?: true
    voucher_code?: true
    gift_option?: true
    shipping_fee_discount_platform?: true
    customer_name?: true
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    statuses?: true
    address_billing?: true
    gift_message?: true
    remarks?: true
    address_shipping?: true
    order_items?: true
    transactions?: true
    shop_logo?: true
    user_id?: true
    _all?: true
  }

  export type DarazOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazOrders to aggregate.
     */
    where?: DarazOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrdersOrderByWithRelationInput | DarazOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DarazOrders
    **/
    _count?: true | DarazOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazOrdersMaxAggregateInputType
  }

  export type GetDarazOrdersAggregateType<T extends DarazOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazOrders[P]>
      : GetScalarType<T[P], AggregateDarazOrders[P]>
  }




  export type DarazOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrdersWhereInput
    orderBy?: DarazOrdersOrderByWithAggregationInput | DarazOrdersOrderByWithAggregationInput[]
    by: DarazOrdersScalarFieldEnum[] | DarazOrdersScalarFieldEnum
    having?: DarazOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazOrdersCountAggregateInputType | true
    _avg?: DarazOrdersAvgAggregateInputType
    _sum?: DarazOrdersSumAggregateInputType
    _min?: DarazOrdersMinAggregateInputType
    _max?: DarazOrdersMaxAggregateInputType
  }

  export type DarazOrdersGroupByOutputType = {
    order_id: string
    seller_id: string | null
    voucher_platform: string | null
    voucher: string | null
    voucher_seller: string | null
    order_number: string | null
    created_at: Date | null
    voucher_code: string | null
    gift_option: string | null
    shipping_fee_discount_platform: string | null
    customer_name: string | null
    promised_shipping_times: string | null
    updated_at: Date
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonValue
    order_items: JsonValue
    transactions: JsonValue
    shop_logo: string
    user_id: number
    _count: DarazOrdersCountAggregateOutputType | null
    _avg: DarazOrdersAvgAggregateOutputType | null
    _sum: DarazOrdersSumAggregateOutputType | null
    _min: DarazOrdersMinAggregateOutputType | null
    _max: DarazOrdersMaxAggregateOutputType | null
  }

  type GetDarazOrdersGroupByPayload<T extends DarazOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], DarazOrdersGroupByOutputType[P]>
        }
      >
    >


  export type DarazOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    seller_id?: boolean
    voucher_platform?: boolean
    voucher?: boolean
    voucher_seller?: boolean
    order_number?: boolean
    created_at?: boolean
    voucher_code?: boolean
    gift_option?: boolean
    shipping_fee_discount_platform?: boolean
    customer_name?: boolean
    promised_shipping_times?: boolean
    updated_at?: boolean
    price?: boolean
    shipping_fee_original?: boolean
    payment_method?: boolean
    shipping_fee_discount_seller?: boolean
    shipping_fee?: boolean
    items_count?: boolean
    statuses?: boolean
    address_billing?: boolean
    gift_message?: boolean
    remarks?: boolean
    address_shipping?: boolean
    order_items?: boolean
    transactions?: boolean
    shop_logo?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["darazOrders"]>

  export type DarazOrdersSelectScalar = {
    order_id?: boolean
    seller_id?: boolean
    voucher_platform?: boolean
    voucher?: boolean
    voucher_seller?: boolean
    order_number?: boolean
    created_at?: boolean
    voucher_code?: boolean
    gift_option?: boolean
    shipping_fee_discount_platform?: boolean
    customer_name?: boolean
    promised_shipping_times?: boolean
    updated_at?: boolean
    price?: boolean
    shipping_fee_original?: boolean
    payment_method?: boolean
    shipping_fee_discount_seller?: boolean
    shipping_fee?: boolean
    items_count?: boolean
    statuses?: boolean
    address_billing?: boolean
    gift_message?: boolean
    remarks?: boolean
    address_shipping?: boolean
    order_items?: boolean
    transactions?: boolean
    shop_logo?: boolean
    user_id?: boolean
  }

  export type DarazOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DarazOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazOrders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      seller_id: string | null
      voucher_platform: string | null
      voucher: string | null
      voucher_seller: string | null
      order_number: string | null
      created_at: Date | null
      voucher_code: string | null
      gift_option: string | null
      shipping_fee_discount_platform: string | null
      customer_name: string | null
      promised_shipping_times: string | null
      updated_at: Date
      price: string
      shipping_fee_original: string
      payment_method: string
      shipping_fee_discount_seller: string
      shipping_fee: string
      items_count: string
      statuses: string
      address_billing: Prisma.JsonValue
      gift_message: string
      remarks: string
      address_shipping: Prisma.JsonValue
      order_items: Prisma.JsonValue
      transactions: Prisma.JsonValue
      shop_logo: string
      user_id: number
    }, ExtArgs["result"]["darazOrders"]>
    composites: {}
  }


  type DarazOrdersGetPayload<S extends boolean | null | undefined | DarazOrdersDefaultArgs> = $Result.GetResult<Prisma.$DarazOrdersPayload, S>

  type DarazOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazOrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazOrdersCountAggregateInputType | true
    }

  export interface DarazOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazOrders'], meta: { name: 'DarazOrders' } }
    /**
     * Find zero or one DarazOrders that matches the filter.
     * @param {DarazOrdersFindUniqueArgs} args - Arguments to find a DarazOrders
     * @example
     * // Get one DarazOrders
     * const darazOrders = await prisma.darazOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazOrdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazOrders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazOrdersFindUniqueOrThrowArgs} args - Arguments to find a DarazOrders
     * @example
     * // Get one DarazOrders
     * const darazOrders = await prisma.darazOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazOrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersFindFirstArgs} args - Arguments to find a DarazOrders
     * @example
     * // Get one DarazOrders
     * const darazOrders = await prisma.darazOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazOrdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersFindFirstArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersFindFirstOrThrowArgs} args - Arguments to find a DarazOrders
     * @example
     * // Get one DarazOrders
     * const darazOrders = await prisma.darazOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazOrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazOrders
     * const darazOrders = await prisma.darazOrders.findMany()
     * 
     * // Get first 10 DarazOrders
     * const darazOrders = await prisma.darazOrders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const darazOrdersWithOrder_idOnly = await prisma.darazOrders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends DarazOrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazOrders.
     * @param {DarazOrdersCreateArgs} args - Arguments to create a DarazOrders.
     * @example
     * // Create one DarazOrders
     * const DarazOrders = await prisma.darazOrders.create({
     *   data: {
     *     // ... data to create a DarazOrders
     *   }
     * })
     * 
    **/
    create<T extends DarazOrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersCreateArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazOrders.
     *     @param {DarazOrdersCreateManyArgs} args - Arguments to create many DarazOrders.
     *     @example
     *     // Create many DarazOrders
     *     const darazOrders = await prisma.darazOrders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazOrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazOrders.
     * @param {DarazOrdersDeleteArgs} args - Arguments to delete one DarazOrders.
     * @example
     * // Delete one DarazOrders
     * const DarazOrders = await prisma.darazOrders.delete({
     *   where: {
     *     // ... filter to delete one DarazOrders
     *   }
     * })
     * 
    **/
    delete<T extends DarazOrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersDeleteArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazOrders.
     * @param {DarazOrdersUpdateArgs} args - Arguments to update one DarazOrders.
     * @example
     * // Update one DarazOrders
     * const darazOrders = await prisma.darazOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazOrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersUpdateArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazOrders.
     * @param {DarazOrdersDeleteManyArgs} args - Arguments to filter DarazOrders to delete.
     * @example
     * // Delete a few DarazOrders
     * const { count } = await prisma.darazOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazOrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazOrders
     * const darazOrders = await prisma.darazOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazOrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazOrders.
     * @param {DarazOrdersUpsertArgs} args - Arguments to update or create a DarazOrders.
     * @example
     * // Update or create a DarazOrders
     * const darazOrders = await prisma.darazOrders.upsert({
     *   create: {
     *     // ... data to create a DarazOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazOrders we want to update
     *   }
     * })
    **/
    upsert<T extends DarazOrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrdersUpsertArgs<ExtArgs>>
    ): Prisma__DarazOrdersClient<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersCountArgs} args - Arguments to filter DarazOrders to count.
     * @example
     * // Count the number of DarazOrders
     * const count = await prisma.darazOrders.count({
     *   where: {
     *     // ... the filter for the DarazOrders we want to count
     *   }
     * })
    **/
    count<T extends DarazOrdersCountArgs>(
      args?: Subset<T, DarazOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DarazOrdersAggregateArgs>(args: Subset<T, DarazOrdersAggregateArgs>): Prisma.PrismaPromise<GetDarazOrdersAggregateType<T>>

    /**
     * Group by DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DarazOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazOrdersGroupByArgs['orderBy'] }
        : { orderBy?: DarazOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DarazOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazOrders model
   */
  readonly fields: DarazOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DarazOrders model
   */ 
  interface DarazOrdersFieldRefs {
    readonly order_id: FieldRef<"DarazOrders", 'String'>
    readonly seller_id: FieldRef<"DarazOrders", 'String'>
    readonly voucher_platform: FieldRef<"DarazOrders", 'String'>
    readonly voucher: FieldRef<"DarazOrders", 'String'>
    readonly voucher_seller: FieldRef<"DarazOrders", 'String'>
    readonly order_number: FieldRef<"DarazOrders", 'String'>
    readonly created_at: FieldRef<"DarazOrders", 'DateTime'>
    readonly voucher_code: FieldRef<"DarazOrders", 'String'>
    readonly gift_option: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee_discount_platform: FieldRef<"DarazOrders", 'String'>
    readonly customer_name: FieldRef<"DarazOrders", 'String'>
    readonly promised_shipping_times: FieldRef<"DarazOrders", 'String'>
    readonly updated_at: FieldRef<"DarazOrders", 'DateTime'>
    readonly price: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee_original: FieldRef<"DarazOrders", 'String'>
    readonly payment_method: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee_discount_seller: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee: FieldRef<"DarazOrders", 'String'>
    readonly items_count: FieldRef<"DarazOrders", 'String'>
    readonly statuses: FieldRef<"DarazOrders", 'String'>
    readonly address_billing: FieldRef<"DarazOrders", 'Json'>
    readonly gift_message: FieldRef<"DarazOrders", 'String'>
    readonly remarks: FieldRef<"DarazOrders", 'String'>
    readonly address_shipping: FieldRef<"DarazOrders", 'Json'>
    readonly order_items: FieldRef<"DarazOrders", 'Json'>
    readonly transactions: FieldRef<"DarazOrders", 'Json'>
    readonly shop_logo: FieldRef<"DarazOrders", 'String'>
    readonly user_id: FieldRef<"DarazOrders", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DarazOrders findUnique
   */
  export type DarazOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where: DarazOrdersWhereUniqueInput
  }


  /**
   * DarazOrders findUniqueOrThrow
   */
  export type DarazOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where: DarazOrdersWhereUniqueInput
  }


  /**
   * DarazOrders findFirst
   */
  export type DarazOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where?: DarazOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrdersOrderByWithRelationInput | DarazOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazOrders.
     */
    cursor?: DarazOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazOrders.
     */
    distinct?: DarazOrdersScalarFieldEnum | DarazOrdersScalarFieldEnum[]
  }


  /**
   * DarazOrders findFirstOrThrow
   */
  export type DarazOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where?: DarazOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrdersOrderByWithRelationInput | DarazOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazOrders.
     */
    cursor?: DarazOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazOrders.
     */
    distinct?: DarazOrdersScalarFieldEnum | DarazOrdersScalarFieldEnum[]
  }


  /**
   * DarazOrders findMany
   */
  export type DarazOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where?: DarazOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrdersOrderByWithRelationInput | DarazOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazOrders.
     */
    cursor?: DarazOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazOrders.
     */
    skip?: number
    distinct?: DarazOrdersScalarFieldEnum | DarazOrdersScalarFieldEnum[]
  }


  /**
   * DarazOrders create
   */
  export type DarazOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a DarazOrders.
     */
    data: XOR<DarazOrdersCreateInput, DarazOrdersUncheckedCreateInput>
  }


  /**
   * DarazOrders createMany
   */
  export type DarazOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazOrders.
     */
    data: DarazOrdersCreateManyInput | DarazOrdersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazOrders update
   */
  export type DarazOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a DarazOrders.
     */
    data: XOR<DarazOrdersUpdateInput, DarazOrdersUncheckedUpdateInput>
    /**
     * Choose, which DarazOrders to update.
     */
    where: DarazOrdersWhereUniqueInput
  }


  /**
   * DarazOrders updateMany
   */
  export type DarazOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazOrders.
     */
    data: XOR<DarazOrdersUpdateManyMutationInput, DarazOrdersUncheckedUpdateManyInput>
    /**
     * Filter which DarazOrders to update
     */
    where?: DarazOrdersWhereInput
  }


  /**
   * DarazOrders upsert
   */
  export type DarazOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the DarazOrders to update in case it exists.
     */
    where: DarazOrdersWhereUniqueInput
    /**
     * In case the DarazOrders found by the `where` argument doesn't exist, create a new DarazOrders with this data.
     */
    create: XOR<DarazOrdersCreateInput, DarazOrdersUncheckedCreateInput>
    /**
     * In case the DarazOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazOrdersUpdateInput, DarazOrdersUncheckedUpdateInput>
  }


  /**
   * DarazOrders delete
   */
  export type DarazOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
    /**
     * Filter which DarazOrders to delete.
     */
    where: DarazOrdersWhereUniqueInput
  }


  /**
   * DarazOrders deleteMany
   */
  export type DarazOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazOrders to delete
     */
    where?: DarazOrdersWhereInput
  }


  /**
   * DarazOrders without action
   */
  export type DarazOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrders
     */
    select?: DarazOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrdersInclude<ExtArgs> | null
  }



  /**
   * Model DarazStoreTransactions
   */

  export type AggregateDarazStoreTransactions = {
    _count: DarazStoreTransactionsCountAggregateOutputType | null
    _avg: DarazStoreTransactionsAvgAggregateOutputType | null
    _sum: DarazStoreTransactionsSumAggregateOutputType | null
    _min: DarazStoreTransactionsMinAggregateOutputType | null
    _max: DarazStoreTransactionsMaxAggregateOutputType | null
  }

  export type DarazStoreTransactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DarazStoreTransactionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DarazStoreTransactionsMinAggregateOutputType = {
    id: number | null
    amount: string | null
    transaction_date: Date | null
    transaction_type: string | null
    statement: string | null
    payment_ref_id: string | null
    fee_name: string | null
    paid_status: string | null
    WHT_amount: string | null
    VAT_in_amount: string | null
    transaction_number: string | null
    comment: string | null
    user_id: number | null
  }

  export type DarazStoreTransactionsMaxAggregateOutputType = {
    id: number | null
    amount: string | null
    transaction_date: Date | null
    transaction_type: string | null
    statement: string | null
    payment_ref_id: string | null
    fee_name: string | null
    paid_status: string | null
    WHT_amount: string | null
    VAT_in_amount: string | null
    transaction_number: string | null
    comment: string | null
    user_id: number | null
  }

  export type DarazStoreTransactionsCountAggregateOutputType = {
    id: number
    amount: number
    transaction_date: number
    transaction_type: number
    statement: number
    payment_ref_id: number
    fee_name: number
    paid_status: number
    WHT_amount: number
    VAT_in_amount: number
    transaction_number: number
    comment: number
    user_id: number
    _all: number
  }


  export type DarazStoreTransactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DarazStoreTransactionsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DarazStoreTransactionsMinAggregateInputType = {
    id?: true
    amount?: true
    transaction_date?: true
    transaction_type?: true
    statement?: true
    payment_ref_id?: true
    fee_name?: true
    paid_status?: true
    WHT_amount?: true
    VAT_in_amount?: true
    transaction_number?: true
    comment?: true
    user_id?: true
  }

  export type DarazStoreTransactionsMaxAggregateInputType = {
    id?: true
    amount?: true
    transaction_date?: true
    transaction_type?: true
    statement?: true
    payment_ref_id?: true
    fee_name?: true
    paid_status?: true
    WHT_amount?: true
    VAT_in_amount?: true
    transaction_number?: true
    comment?: true
    user_id?: true
  }

  export type DarazStoreTransactionsCountAggregateInputType = {
    id?: true
    amount?: true
    transaction_date?: true
    transaction_type?: true
    statement?: true
    payment_ref_id?: true
    fee_name?: true
    paid_status?: true
    WHT_amount?: true
    VAT_in_amount?: true
    transaction_number?: true
    comment?: true
    user_id?: true
    _all?: true
  }

  export type DarazStoreTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazStoreTransactions to aggregate.
     */
    where?: DarazStoreTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionsOrderByWithRelationInput | DarazStoreTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazStoreTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazStoreTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazStoreTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DarazStoreTransactions
    **/
    _count?: true | DarazStoreTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazStoreTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazStoreTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazStoreTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazStoreTransactionsMaxAggregateInputType
  }

  export type GetDarazStoreTransactionsAggregateType<T extends DarazStoreTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazStoreTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazStoreTransactions[P]>
      : GetScalarType<T[P], AggregateDarazStoreTransactions[P]>
  }




  export type DarazStoreTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazStoreTransactionsWhereInput
    orderBy?: DarazStoreTransactionsOrderByWithAggregationInput | DarazStoreTransactionsOrderByWithAggregationInput[]
    by: DarazStoreTransactionsScalarFieldEnum[] | DarazStoreTransactionsScalarFieldEnum
    having?: DarazStoreTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazStoreTransactionsCountAggregateInputType | true
    _avg?: DarazStoreTransactionsAvgAggregateInputType
    _sum?: DarazStoreTransactionsSumAggregateInputType
    _min?: DarazStoreTransactionsMinAggregateInputType
    _max?: DarazStoreTransactionsMaxAggregateInputType
  }

  export type DarazStoreTransactionsGroupByOutputType = {
    id: number
    amount: string | null
    transaction_date: Date | null
    transaction_type: string | null
    statement: string | null
    payment_ref_id: string | null
    fee_name: string | null
    paid_status: string | null
    WHT_amount: string | null
    VAT_in_amount: string | null
    transaction_number: string | null
    comment: string | null
    user_id: number
    _count: DarazStoreTransactionsCountAggregateOutputType | null
    _avg: DarazStoreTransactionsAvgAggregateOutputType | null
    _sum: DarazStoreTransactionsSumAggregateOutputType | null
    _min: DarazStoreTransactionsMinAggregateOutputType | null
    _max: DarazStoreTransactionsMaxAggregateOutputType | null
  }

  type GetDarazStoreTransactionsGroupByPayload<T extends DarazStoreTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazStoreTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazStoreTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazStoreTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], DarazStoreTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type DarazStoreTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transaction_date?: boolean
    transaction_type?: boolean
    statement?: boolean
    payment_ref_id?: boolean
    fee_name?: boolean
    paid_status?: boolean
    WHT_amount?: boolean
    VAT_in_amount?: boolean
    transaction_number?: boolean
    comment?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["darazStoreTransactions"]>

  export type DarazStoreTransactionsSelectScalar = {
    id?: boolean
    amount?: boolean
    transaction_date?: boolean
    transaction_type?: boolean
    statement?: boolean
    payment_ref_id?: boolean
    fee_name?: boolean
    paid_status?: boolean
    WHT_amount?: boolean
    VAT_in_amount?: boolean
    transaction_number?: boolean
    comment?: boolean
    user_id?: boolean
  }

  export type DarazStoreTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DarazStoreTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazStoreTransactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: string | null
      transaction_date: Date | null
      transaction_type: string | null
      statement: string | null
      payment_ref_id: string | null
      fee_name: string | null
      paid_status: string | null
      WHT_amount: string | null
      VAT_in_amount: string | null
      transaction_number: string | null
      comment: string | null
      user_id: number
    }, ExtArgs["result"]["darazStoreTransactions"]>
    composites: {}
  }


  type DarazStoreTransactionsGetPayload<S extends boolean | null | undefined | DarazStoreTransactionsDefaultArgs> = $Result.GetResult<Prisma.$DarazStoreTransactionsPayload, S>

  type DarazStoreTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazStoreTransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazStoreTransactionsCountAggregateInputType | true
    }

  export interface DarazStoreTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazStoreTransactions'], meta: { name: 'DarazStoreTransactions' } }
    /**
     * Find zero or one DarazStoreTransactions that matches the filter.
     * @param {DarazStoreTransactionsFindUniqueArgs} args - Arguments to find a DarazStoreTransactions
     * @example
     * // Get one DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazStoreTransactionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazStoreTransactions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazStoreTransactionsFindUniqueOrThrowArgs} args - Arguments to find a DarazStoreTransactions
     * @example
     * // Get one DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazStoreTransactionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazStoreTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsFindFirstArgs} args - Arguments to find a DarazStoreTransactions
     * @example
     * // Get one DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazStoreTransactionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsFindFirstArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazStoreTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsFindFirstOrThrowArgs} args - Arguments to find a DarazStoreTransactions
     * @example
     * // Get one DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazStoreTransactionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazStoreTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findMany()
     * 
     * // Get first 10 DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const darazStoreTransactionsWithIdOnly = await prisma.darazStoreTransactions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DarazStoreTransactionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazStoreTransactions.
     * @param {DarazStoreTransactionsCreateArgs} args - Arguments to create a DarazStoreTransactions.
     * @example
     * // Create one DarazStoreTransactions
     * const DarazStoreTransactions = await prisma.darazStoreTransactions.create({
     *   data: {
     *     // ... data to create a DarazStoreTransactions
     *   }
     * })
     * 
    **/
    create<T extends DarazStoreTransactionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsCreateArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazStoreTransactions.
     *     @param {DarazStoreTransactionsCreateManyArgs} args - Arguments to create many DarazStoreTransactions.
     *     @example
     *     // Create many DarazStoreTransactions
     *     const darazStoreTransactions = await prisma.darazStoreTransactions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazStoreTransactionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazStoreTransactions.
     * @param {DarazStoreTransactionsDeleteArgs} args - Arguments to delete one DarazStoreTransactions.
     * @example
     * // Delete one DarazStoreTransactions
     * const DarazStoreTransactions = await prisma.darazStoreTransactions.delete({
     *   where: {
     *     // ... filter to delete one DarazStoreTransactions
     *   }
     * })
     * 
    **/
    delete<T extends DarazStoreTransactionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsDeleteArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazStoreTransactions.
     * @param {DarazStoreTransactionsUpdateArgs} args - Arguments to update one DarazStoreTransactions.
     * @example
     * // Update one DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazStoreTransactionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsUpdateArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazStoreTransactions.
     * @param {DarazStoreTransactionsDeleteManyArgs} args - Arguments to filter DarazStoreTransactions to delete.
     * @example
     * // Delete a few DarazStoreTransactions
     * const { count } = await prisma.darazStoreTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazStoreTransactionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazStoreTransactionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazStoreTransactions.
     * @param {DarazStoreTransactionsUpsertArgs} args - Arguments to update or create a DarazStoreTransactions.
     * @example
     * // Update or create a DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransactions.upsert({
     *   create: {
     *     // ... data to create a DarazStoreTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazStoreTransactions we want to update
     *   }
     * })
    **/
    upsert<T extends DarazStoreTransactionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionsUpsertArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionsClient<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsCountArgs} args - Arguments to filter DarazStoreTransactions to count.
     * @example
     * // Count the number of DarazStoreTransactions
     * const count = await prisma.darazStoreTransactions.count({
     *   where: {
     *     // ... the filter for the DarazStoreTransactions we want to count
     *   }
     * })
    **/
    count<T extends DarazStoreTransactionsCountArgs>(
      args?: Subset<T, DarazStoreTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazStoreTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DarazStoreTransactionsAggregateArgs>(args: Subset<T, DarazStoreTransactionsAggregateArgs>): Prisma.PrismaPromise<GetDarazStoreTransactionsAggregateType<T>>

    /**
     * Group by DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DarazStoreTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazStoreTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: DarazStoreTransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DarazStoreTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazStoreTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazStoreTransactions model
   */
  readonly fields: DarazStoreTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazStoreTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazStoreTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DarazStoreTransactions model
   */ 
  interface DarazStoreTransactionsFieldRefs {
    readonly id: FieldRef<"DarazStoreTransactions", 'Int'>
    readonly amount: FieldRef<"DarazStoreTransactions", 'String'>
    readonly transaction_date: FieldRef<"DarazStoreTransactions", 'DateTime'>
    readonly transaction_type: FieldRef<"DarazStoreTransactions", 'String'>
    readonly statement: FieldRef<"DarazStoreTransactions", 'String'>
    readonly payment_ref_id: FieldRef<"DarazStoreTransactions", 'String'>
    readonly fee_name: FieldRef<"DarazStoreTransactions", 'String'>
    readonly paid_status: FieldRef<"DarazStoreTransactions", 'String'>
    readonly WHT_amount: FieldRef<"DarazStoreTransactions", 'String'>
    readonly VAT_in_amount: FieldRef<"DarazStoreTransactions", 'String'>
    readonly transaction_number: FieldRef<"DarazStoreTransactions", 'String'>
    readonly comment: FieldRef<"DarazStoreTransactions", 'String'>
    readonly user_id: FieldRef<"DarazStoreTransactions", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DarazStoreTransactions findUnique
   */
  export type DarazStoreTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where: DarazStoreTransactionsWhereUniqueInput
  }


  /**
   * DarazStoreTransactions findUniqueOrThrow
   */
  export type DarazStoreTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where: DarazStoreTransactionsWhereUniqueInput
  }


  /**
   * DarazStoreTransactions findFirst
   */
  export type DarazStoreTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where?: DarazStoreTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionsOrderByWithRelationInput | DarazStoreTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazStoreTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazStoreTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazStoreTransactions.
     */
    distinct?: DarazStoreTransactionsScalarFieldEnum | DarazStoreTransactionsScalarFieldEnum[]
  }


  /**
   * DarazStoreTransactions findFirstOrThrow
   */
  export type DarazStoreTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where?: DarazStoreTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionsOrderByWithRelationInput | DarazStoreTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazStoreTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazStoreTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazStoreTransactions.
     */
    distinct?: DarazStoreTransactionsScalarFieldEnum | DarazStoreTransactionsScalarFieldEnum[]
  }


  /**
   * DarazStoreTransactions findMany
   */
  export type DarazStoreTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where?: DarazStoreTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionsOrderByWithRelationInput | DarazStoreTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazStoreTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazStoreTransactions.
     */
    skip?: number
    distinct?: DarazStoreTransactionsScalarFieldEnum | DarazStoreTransactionsScalarFieldEnum[]
  }


  /**
   * DarazStoreTransactions create
   */
  export type DarazStoreTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a DarazStoreTransactions.
     */
    data: XOR<DarazStoreTransactionsCreateInput, DarazStoreTransactionsUncheckedCreateInput>
  }


  /**
   * DarazStoreTransactions createMany
   */
  export type DarazStoreTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazStoreTransactions.
     */
    data: DarazStoreTransactionsCreateManyInput | DarazStoreTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazStoreTransactions update
   */
  export type DarazStoreTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a DarazStoreTransactions.
     */
    data: XOR<DarazStoreTransactionsUpdateInput, DarazStoreTransactionsUncheckedUpdateInput>
    /**
     * Choose, which DarazStoreTransactions to update.
     */
    where: DarazStoreTransactionsWhereUniqueInput
  }


  /**
   * DarazStoreTransactions updateMany
   */
  export type DarazStoreTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazStoreTransactions.
     */
    data: XOR<DarazStoreTransactionsUpdateManyMutationInput, DarazStoreTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which DarazStoreTransactions to update
     */
    where?: DarazStoreTransactionsWhereInput
  }


  /**
   * DarazStoreTransactions upsert
   */
  export type DarazStoreTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the DarazStoreTransactions to update in case it exists.
     */
    where: DarazStoreTransactionsWhereUniqueInput
    /**
     * In case the DarazStoreTransactions found by the `where` argument doesn't exist, create a new DarazStoreTransactions with this data.
     */
    create: XOR<DarazStoreTransactionsCreateInput, DarazStoreTransactionsUncheckedCreateInput>
    /**
     * In case the DarazStoreTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazStoreTransactionsUpdateInput, DarazStoreTransactionsUncheckedUpdateInput>
  }


  /**
   * DarazStoreTransactions delete
   */
  export type DarazStoreTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
    /**
     * Filter which DarazStoreTransactions to delete.
     */
    where: DarazStoreTransactionsWhereUniqueInput
  }


  /**
   * DarazStoreTransactions deleteMany
   */
  export type DarazStoreTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazStoreTransactions to delete
     */
    where?: DarazStoreTransactionsWhereInput
  }


  /**
   * DarazStoreTransactions without action
   */
  export type DarazStoreTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransactions
     */
    select?: DarazStoreTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionsInclude<ExtArgs> | null
  }



  /**
   * Model ShopifyOrders
   */

  export type AggregateShopifyOrders = {
    _count: ShopifyOrdersCountAggregateOutputType | null
    _avg: ShopifyOrdersAvgAggregateOutputType | null
    _sum: ShopifyOrdersSumAggregateOutputType | null
    _min: ShopifyOrdersMinAggregateOutputType | null
    _max: ShopifyOrdersMaxAggregateOutputType | null
  }

  export type ShopifyOrdersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type ShopifyOrdersSumAggregateOutputType = {
    user_id: number | null
  }

  export type ShopifyOrdersMinAggregateOutputType = {
    order_id: string | null
    domain: string | null
    order_name: string | null
    contact_email: string | null
    created_at: Date | null
    current_total_additional_fees_set: string | null
    current_total_discounts: string | null
    current_total_duties_set: string | null
    current_total_price: string | null
    current_total_tax: string | null
    email: string | null
    financial_status: string | null
    note: string | null
    phone: string | null
    processed_at: Date | null
    referring_site: string | null
    source_name: string | null
    subtotal_price: string | null
    tags: string | null
    total_discounts: string | null
    total_line_items_price: string | null
    total_outstanding: string | null
    total_price: string | null
    updated_at: Date | null
    user_id: number | null
  }

  export type ShopifyOrdersMaxAggregateOutputType = {
    order_id: string | null
    domain: string | null
    order_name: string | null
    contact_email: string | null
    created_at: Date | null
    current_total_additional_fees_set: string | null
    current_total_discounts: string | null
    current_total_duties_set: string | null
    current_total_price: string | null
    current_total_tax: string | null
    email: string | null
    financial_status: string | null
    note: string | null
    phone: string | null
    processed_at: Date | null
    referring_site: string | null
    source_name: string | null
    subtotal_price: string | null
    tags: string | null
    total_discounts: string | null
    total_line_items_price: string | null
    total_outstanding: string | null
    total_price: string | null
    updated_at: Date | null
    user_id: number | null
  }

  export type ShopifyOrdersCountAggregateOutputType = {
    order_id: number
    domain: number
    order_name: number
    contact_email: number
    created_at: number
    current_total_additional_fees_set: number
    current_total_discounts: number
    current_total_duties_set: number
    current_total_price: number
    current_total_tax: number
    email: number
    financial_status: number
    fulfillment_status: number
    line_items: number
    note: number
    phone: number
    processed_at: number
    referring_site: number
    source_name: number
    subtotal_price: number
    tags: number
    total_discounts: number
    total_line_items_price: number
    total_outstanding: number
    total_price: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ShopifyOrdersAvgAggregateInputType = {
    user_id?: true
  }

  export type ShopifyOrdersSumAggregateInputType = {
    user_id?: true
  }

  export type ShopifyOrdersMinAggregateInputType = {
    order_id?: true
    domain?: true
    order_name?: true
    contact_email?: true
    created_at?: true
    current_total_additional_fees_set?: true
    current_total_discounts?: true
    current_total_duties_set?: true
    current_total_price?: true
    current_total_tax?: true
    email?: true
    financial_status?: true
    note?: true
    phone?: true
    processed_at?: true
    referring_site?: true
    source_name?: true
    subtotal_price?: true
    tags?: true
    total_discounts?: true
    total_line_items_price?: true
    total_outstanding?: true
    total_price?: true
    updated_at?: true
    user_id?: true
  }

  export type ShopifyOrdersMaxAggregateInputType = {
    order_id?: true
    domain?: true
    order_name?: true
    contact_email?: true
    created_at?: true
    current_total_additional_fees_set?: true
    current_total_discounts?: true
    current_total_duties_set?: true
    current_total_price?: true
    current_total_tax?: true
    email?: true
    financial_status?: true
    note?: true
    phone?: true
    processed_at?: true
    referring_site?: true
    source_name?: true
    subtotal_price?: true
    tags?: true
    total_discounts?: true
    total_line_items_price?: true
    total_outstanding?: true
    total_price?: true
    updated_at?: true
    user_id?: true
  }

  export type ShopifyOrdersCountAggregateInputType = {
    order_id?: true
    domain?: true
    order_name?: true
    contact_email?: true
    created_at?: true
    current_total_additional_fees_set?: true
    current_total_discounts?: true
    current_total_duties_set?: true
    current_total_price?: true
    current_total_tax?: true
    email?: true
    financial_status?: true
    fulfillment_status?: true
    line_items?: true
    note?: true
    phone?: true
    processed_at?: true
    referring_site?: true
    source_name?: true
    subtotal_price?: true
    tags?: true
    total_discounts?: true
    total_line_items_price?: true
    total_outstanding?: true
    total_price?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ShopifyOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyOrders to aggregate.
     */
    where?: ShopifyOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrdersOrderByWithRelationInput | ShopifyOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopifyOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopifyOrders
    **/
    _count?: true | ShopifyOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopifyOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopifyOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopifyOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopifyOrdersMaxAggregateInputType
  }

  export type GetShopifyOrdersAggregateType<T extends ShopifyOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateShopifyOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopifyOrders[P]>
      : GetScalarType<T[P], AggregateShopifyOrders[P]>
  }




  export type ShopifyOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrdersWhereInput
    orderBy?: ShopifyOrdersOrderByWithAggregationInput | ShopifyOrdersOrderByWithAggregationInput[]
    by: ShopifyOrdersScalarFieldEnum[] | ShopifyOrdersScalarFieldEnum
    having?: ShopifyOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopifyOrdersCountAggregateInputType | true
    _avg?: ShopifyOrdersAvgAggregateInputType
    _sum?: ShopifyOrdersSumAggregateInputType
    _min?: ShopifyOrdersMinAggregateInputType
    _max?: ShopifyOrdersMaxAggregateInputType
  }

  export type ShopifyOrdersGroupByOutputType = {
    order_id: string
    domain: string
    order_name: string | null
    contact_email: string | null
    created_at: Date
    current_total_additional_fees_set: string | null
    current_total_discounts: string | null
    current_total_duties_set: string | null
    current_total_price: string | null
    current_total_tax: string | null
    email: string | null
    financial_status: string | null
    fulfillment_status: JsonValue
    line_items: JsonValue
    note: string | null
    phone: string
    processed_at: Date
    referring_site: string | null
    source_name: string | null
    subtotal_price: string | null
    tags: string | null
    total_discounts: string | null
    total_line_items_price: string | null
    total_outstanding: string | null
    total_price: string | null
    updated_at: Date
    user_id: number
    _count: ShopifyOrdersCountAggregateOutputType | null
    _avg: ShopifyOrdersAvgAggregateOutputType | null
    _sum: ShopifyOrdersSumAggregateOutputType | null
    _min: ShopifyOrdersMinAggregateOutputType | null
    _max: ShopifyOrdersMaxAggregateOutputType | null
  }

  type GetShopifyOrdersGroupByPayload<T extends ShopifyOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopifyOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopifyOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopifyOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], ShopifyOrdersGroupByOutputType[P]>
        }
      >
    >


  export type ShopifyOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    domain?: boolean
    order_name?: boolean
    contact_email?: boolean
    created_at?: boolean
    current_total_additional_fees_set?: boolean
    current_total_discounts?: boolean
    current_total_duties_set?: boolean
    current_total_price?: boolean
    current_total_tax?: boolean
    email?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    line_items?: boolean
    note?: boolean
    phone?: boolean
    processed_at?: boolean
    referring_site?: boolean
    source_name?: boolean
    subtotal_price?: boolean
    tags?: boolean
    total_discounts?: boolean
    total_line_items_price?: boolean
    total_outstanding?: boolean
    total_price?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopifyOrders"]>

  export type ShopifyOrdersSelectScalar = {
    order_id?: boolean
    domain?: boolean
    order_name?: boolean
    contact_email?: boolean
    created_at?: boolean
    current_total_additional_fees_set?: boolean
    current_total_discounts?: boolean
    current_total_duties_set?: boolean
    current_total_price?: boolean
    current_total_tax?: boolean
    email?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    line_items?: boolean
    note?: boolean
    phone?: boolean
    processed_at?: boolean
    referring_site?: boolean
    source_name?: boolean
    subtotal_price?: boolean
    tags?: boolean
    total_discounts?: boolean
    total_line_items_price?: boolean
    total_outstanding?: boolean
    total_price?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type ShopifyOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ShopifyOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopifyOrders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      domain: string
      order_name: string | null
      contact_email: string | null
      created_at: Date
      current_total_additional_fees_set: string | null
      current_total_discounts: string | null
      current_total_duties_set: string | null
      current_total_price: string | null
      current_total_tax: string | null
      email: string | null
      financial_status: string | null
      fulfillment_status: Prisma.JsonValue
      line_items: Prisma.JsonValue
      note: string | null
      phone: string
      processed_at: Date
      referring_site: string | null
      source_name: string | null
      subtotal_price: string | null
      tags: string | null
      total_discounts: string | null
      total_line_items_price: string | null
      total_outstanding: string | null
      total_price: string | null
      updated_at: Date
      user_id: number
    }, ExtArgs["result"]["shopifyOrders"]>
    composites: {}
  }


  type ShopifyOrdersGetPayload<S extends boolean | null | undefined | ShopifyOrdersDefaultArgs> = $Result.GetResult<Prisma.$ShopifyOrdersPayload, S>

  type ShopifyOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopifyOrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopifyOrdersCountAggregateInputType | true
    }

  export interface ShopifyOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopifyOrders'], meta: { name: 'ShopifyOrders' } }
    /**
     * Find zero or one ShopifyOrders that matches the filter.
     * @param {ShopifyOrdersFindUniqueArgs} args - Arguments to find a ShopifyOrders
     * @example
     * // Get one ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopifyOrdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShopifyOrders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopifyOrdersFindUniqueOrThrowArgs} args - Arguments to find a ShopifyOrders
     * @example
     * // Get one ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopifyOrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShopifyOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersFindFirstArgs} args - Arguments to find a ShopifyOrders
     * @example
     * // Get one ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopifyOrdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersFindFirstArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShopifyOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersFindFirstOrThrowArgs} args - Arguments to find a ShopifyOrders
     * @example
     * // Get one ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopifyOrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShopifyOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findMany()
     * 
     * // Get first 10 ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const shopifyOrdersWithOrder_idOnly = await prisma.shopifyOrders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends ShopifyOrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShopifyOrders.
     * @param {ShopifyOrdersCreateArgs} args - Arguments to create a ShopifyOrders.
     * @example
     * // Create one ShopifyOrders
     * const ShopifyOrders = await prisma.shopifyOrders.create({
     *   data: {
     *     // ... data to create a ShopifyOrders
     *   }
     * })
     * 
    **/
    create<T extends ShopifyOrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersCreateArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShopifyOrders.
     *     @param {ShopifyOrdersCreateManyArgs} args - Arguments to create many ShopifyOrders.
     *     @example
     *     // Create many ShopifyOrders
     *     const shopifyOrders = await prisma.shopifyOrders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShopifyOrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopifyOrders.
     * @param {ShopifyOrdersDeleteArgs} args - Arguments to delete one ShopifyOrders.
     * @example
     * // Delete one ShopifyOrders
     * const ShopifyOrders = await prisma.shopifyOrders.delete({
     *   where: {
     *     // ... filter to delete one ShopifyOrders
     *   }
     * })
     * 
    **/
    delete<T extends ShopifyOrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersDeleteArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShopifyOrders.
     * @param {ShopifyOrdersUpdateArgs} args - Arguments to update one ShopifyOrders.
     * @example
     * // Update one ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopifyOrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersUpdateArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShopifyOrders.
     * @param {ShopifyOrdersDeleteManyArgs} args - Arguments to filter ShopifyOrders to delete.
     * @example
     * // Delete a few ShopifyOrders
     * const { count } = await prisma.shopifyOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopifyOrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopifyOrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopifyOrders.
     * @param {ShopifyOrdersUpsertArgs} args - Arguments to update or create a ShopifyOrders.
     * @example
     * // Update or create a ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrders.upsert({
     *   create: {
     *     // ... data to create a ShopifyOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopifyOrders we want to update
     *   }
     * })
    **/
    upsert<T extends ShopifyOrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrdersUpsertArgs<ExtArgs>>
    ): Prisma__ShopifyOrdersClient<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersCountArgs} args - Arguments to filter ShopifyOrders to count.
     * @example
     * // Count the number of ShopifyOrders
     * const count = await prisma.shopifyOrders.count({
     *   where: {
     *     // ... the filter for the ShopifyOrders we want to count
     *   }
     * })
    **/
    count<T extends ShopifyOrdersCountArgs>(
      args?: Subset<T, ShopifyOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopifyOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopifyOrdersAggregateArgs>(args: Subset<T, ShopifyOrdersAggregateArgs>): Prisma.PrismaPromise<GetShopifyOrdersAggregateType<T>>

    /**
     * Group by ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopifyOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopifyOrdersGroupByArgs['orderBy'] }
        : { orderBy?: ShopifyOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopifyOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopifyOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopifyOrders model
   */
  readonly fields: ShopifyOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopifyOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopifyOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShopifyOrders model
   */ 
  interface ShopifyOrdersFieldRefs {
    readonly order_id: FieldRef<"ShopifyOrders", 'String'>
    readonly domain: FieldRef<"ShopifyOrders", 'String'>
    readonly order_name: FieldRef<"ShopifyOrders", 'String'>
    readonly contact_email: FieldRef<"ShopifyOrders", 'String'>
    readonly created_at: FieldRef<"ShopifyOrders", 'DateTime'>
    readonly current_total_additional_fees_set: FieldRef<"ShopifyOrders", 'String'>
    readonly current_total_discounts: FieldRef<"ShopifyOrders", 'String'>
    readonly current_total_duties_set: FieldRef<"ShopifyOrders", 'String'>
    readonly current_total_price: FieldRef<"ShopifyOrders", 'String'>
    readonly current_total_tax: FieldRef<"ShopifyOrders", 'String'>
    readonly email: FieldRef<"ShopifyOrders", 'String'>
    readonly financial_status: FieldRef<"ShopifyOrders", 'String'>
    readonly fulfillment_status: FieldRef<"ShopifyOrders", 'Json'>
    readonly line_items: FieldRef<"ShopifyOrders", 'Json'>
    readonly note: FieldRef<"ShopifyOrders", 'String'>
    readonly phone: FieldRef<"ShopifyOrders", 'String'>
    readonly processed_at: FieldRef<"ShopifyOrders", 'DateTime'>
    readonly referring_site: FieldRef<"ShopifyOrders", 'String'>
    readonly source_name: FieldRef<"ShopifyOrders", 'String'>
    readonly subtotal_price: FieldRef<"ShopifyOrders", 'String'>
    readonly tags: FieldRef<"ShopifyOrders", 'String'>
    readonly total_discounts: FieldRef<"ShopifyOrders", 'String'>
    readonly total_line_items_price: FieldRef<"ShopifyOrders", 'String'>
    readonly total_outstanding: FieldRef<"ShopifyOrders", 'String'>
    readonly total_price: FieldRef<"ShopifyOrders", 'String'>
    readonly updated_at: FieldRef<"ShopifyOrders", 'DateTime'>
    readonly user_id: FieldRef<"ShopifyOrders", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ShopifyOrders findUnique
   */
  export type ShopifyOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where: ShopifyOrdersWhereUniqueInput
  }


  /**
   * ShopifyOrders findUniqueOrThrow
   */
  export type ShopifyOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where: ShopifyOrdersWhereUniqueInput
  }


  /**
   * ShopifyOrders findFirst
   */
  export type ShopifyOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where?: ShopifyOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrdersOrderByWithRelationInput | ShopifyOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyOrders.
     */
    cursor?: ShopifyOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyOrders.
     */
    distinct?: ShopifyOrdersScalarFieldEnum | ShopifyOrdersScalarFieldEnum[]
  }


  /**
   * ShopifyOrders findFirstOrThrow
   */
  export type ShopifyOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where?: ShopifyOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrdersOrderByWithRelationInput | ShopifyOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyOrders.
     */
    cursor?: ShopifyOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyOrders.
     */
    distinct?: ShopifyOrdersScalarFieldEnum | ShopifyOrdersScalarFieldEnum[]
  }


  /**
   * ShopifyOrders findMany
   */
  export type ShopifyOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where?: ShopifyOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrdersOrderByWithRelationInput | ShopifyOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopifyOrders.
     */
    cursor?: ShopifyOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyOrders.
     */
    skip?: number
    distinct?: ShopifyOrdersScalarFieldEnum | ShopifyOrdersScalarFieldEnum[]
  }


  /**
   * ShopifyOrders create
   */
  export type ShopifyOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopifyOrders.
     */
    data: XOR<ShopifyOrdersCreateInput, ShopifyOrdersUncheckedCreateInput>
  }


  /**
   * ShopifyOrders createMany
   */
  export type ShopifyOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopifyOrders.
     */
    data: ShopifyOrdersCreateManyInput | ShopifyOrdersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShopifyOrders update
   */
  export type ShopifyOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopifyOrders.
     */
    data: XOR<ShopifyOrdersUpdateInput, ShopifyOrdersUncheckedUpdateInput>
    /**
     * Choose, which ShopifyOrders to update.
     */
    where: ShopifyOrdersWhereUniqueInput
  }


  /**
   * ShopifyOrders updateMany
   */
  export type ShopifyOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopifyOrders.
     */
    data: XOR<ShopifyOrdersUpdateManyMutationInput, ShopifyOrdersUncheckedUpdateManyInput>
    /**
     * Filter which ShopifyOrders to update
     */
    where?: ShopifyOrdersWhereInput
  }


  /**
   * ShopifyOrders upsert
   */
  export type ShopifyOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopifyOrders to update in case it exists.
     */
    where: ShopifyOrdersWhereUniqueInput
    /**
     * In case the ShopifyOrders found by the `where` argument doesn't exist, create a new ShopifyOrders with this data.
     */
    create: XOR<ShopifyOrdersCreateInput, ShopifyOrdersUncheckedCreateInput>
    /**
     * In case the ShopifyOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopifyOrdersUpdateInput, ShopifyOrdersUncheckedUpdateInput>
  }


  /**
   * ShopifyOrders delete
   */
  export type ShopifyOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
    /**
     * Filter which ShopifyOrders to delete.
     */
    where: ShopifyOrdersWhereUniqueInput
  }


  /**
   * ShopifyOrders deleteMany
   */
  export type ShopifyOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyOrders to delete
     */
    where?: ShopifyOrdersWhereInput
  }


  /**
   * ShopifyOrders without action
   */
  export type ShopifyOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrders
     */
    select?: ShopifyOrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrdersInclude<ExtArgs> | null
  }



  /**
   * Model Courier
   */

  export type AggregateCourier = {
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  export type CourierAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CourierSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CourierMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type CourierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type CourierCountAggregateOutputType = {
    id: number
    name: number
    data: number
    shippers: number
    user_id: number
    _all: number
  }


  export type CourierAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CourierSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CourierMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type CourierMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type CourierCountAggregateInputType = {
    id?: true
    name?: true
    data?: true
    shippers?: true
    user_id?: true
    _all?: true
  }

  export type CourierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courier to aggregate.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couriers
    **/
    _count?: true | CourierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourierMaxAggregateInputType
  }

  export type GetCourierAggregateType<T extends CourierAggregateArgs> = {
        [P in keyof T & keyof AggregateCourier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourier[P]>
      : GetScalarType<T[P], AggregateCourier[P]>
  }




  export type CourierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithAggregationInput | CourierOrderByWithAggregationInput[]
    by: CourierScalarFieldEnum[] | CourierScalarFieldEnum
    having?: CourierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourierCountAggregateInputType | true
    _avg?: CourierAvgAggregateInputType
    _sum?: CourierSumAggregateInputType
    _min?: CourierMinAggregateInputType
    _max?: CourierMaxAggregateInputType
  }

  export type CourierGroupByOutputType = {
    id: number
    name: string
    data: JsonValue
    shippers: JsonValue
    user_id: number
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  type GetCourierGroupByPayload<T extends CourierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourierGroupByOutputType[P]>
            : GetScalarType<T[P], CourierGroupByOutputType[P]>
        }
      >
    >


  export type CourierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    shippers?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectScalar = {
    id?: boolean
    name?: boolean
    data?: boolean
    shippers?: boolean
    user_id?: boolean
  }

  export type CourierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CourierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courier"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      data: Prisma.JsonValue
      shippers: Prisma.JsonValue
      user_id: number
    }, ExtArgs["result"]["courier"]>
    composites: {}
  }


  type CourierGetPayload<S extends boolean | null | undefined | CourierDefaultArgs> = $Result.GetResult<Prisma.$CourierPayload, S>

  type CourierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourierCountAggregateInputType | true
    }

  export interface CourierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courier'], meta: { name: 'Courier' } }
    /**
     * Find zero or one Courier that matches the filter.
     * @param {CourierFindUniqueArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourierFindUniqueArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Courier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourierFindUniqueOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Courier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindFirstArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Courier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Couriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couriers
     * const couriers = await prisma.courier.findMany()
     * 
     * // Get first 10 Couriers
     * const couriers = await prisma.courier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courierWithIdOnly = await prisma.courier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Courier.
     * @param {CourierCreateArgs} args - Arguments to create a Courier.
     * @example
     * // Create one Courier
     * const Courier = await prisma.courier.create({
     *   data: {
     *     // ... data to create a Courier
     *   }
     * })
     * 
    **/
    create<T extends CourierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourierCreateArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Couriers.
     *     @param {CourierCreateManyArgs} args - Arguments to create many Couriers.
     *     @example
     *     // Create many Couriers
     *     const courier = await prisma.courier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courier.
     * @param {CourierDeleteArgs} args - Arguments to delete one Courier.
     * @example
     * // Delete one Courier
     * const Courier = await prisma.courier.delete({
     *   where: {
     *     // ... filter to delete one Courier
     *   }
     * })
     * 
    **/
    delete<T extends CourierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourierDeleteArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Courier.
     * @param {CourierUpdateArgs} args - Arguments to update one Courier.
     * @example
     * // Update one Courier
     * const courier = await prisma.courier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpdateArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Couriers.
     * @param {CourierDeleteManyArgs} args - Arguments to filter Couriers to delete.
     * @example
     * // Delete a few Couriers
     * const { count } = await prisma.courier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couriers
     * const courier = await prisma.courier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courier.
     * @param {CourierUpsertArgs} args - Arguments to update or create a Courier.
     * @example
     * // Update or create a Courier
     * const courier = await prisma.courier.upsert({
     *   create: {
     *     // ... data to create a Courier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courier we want to update
     *   }
     * })
    **/
    upsert<T extends CourierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpsertArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierCountArgs} args - Arguments to filter Couriers to count.
     * @example
     * // Count the number of Couriers
     * const count = await prisma.courier.count({
     *   where: {
     *     // ... the filter for the Couriers we want to count
     *   }
     * })
    **/
    count<T extends CourierCountArgs>(
      args?: Subset<T, CourierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourierAggregateArgs>(args: Subset<T, CourierAggregateArgs>): Prisma.PrismaPromise<GetCourierAggregateType<T>>

    /**
     * Group by Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourierGroupByArgs['orderBy'] }
        : { orderBy?: CourierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courier model
   */
  readonly fields: CourierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Courier model
   */ 
  interface CourierFieldRefs {
    readonly id: FieldRef<"Courier", 'Int'>
    readonly name: FieldRef<"Courier", 'String'>
    readonly data: FieldRef<"Courier", 'Json'>
    readonly shippers: FieldRef<"Courier", 'Json'>
    readonly user_id: FieldRef<"Courier", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Courier findUnique
   */
  export type CourierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier findUniqueOrThrow
   */
  export type CourierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier findFirst
   */
  export type CourierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier findFirstOrThrow
   */
  export type CourierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier findMany
   */
  export type CourierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Couriers to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier create
   */
  export type CourierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to create a Courier.
     */
    data: XOR<CourierCreateInput, CourierUncheckedCreateInput>
  }


  /**
   * Courier createMany
   */
  export type CourierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Courier update
   */
  export type CourierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to update a Courier.
     */
    data: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
    /**
     * Choose, which Courier to update.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier updateMany
   */
  export type CourierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couriers.
     */
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyInput>
    /**
     * Filter which Couriers to update
     */
    where?: CourierWhereInput
  }


  /**
   * Courier upsert
   */
  export type CourierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The filter to search for the Courier to update in case it exists.
     */
    where: CourierWhereUniqueInput
    /**
     * In case the Courier found by the `where` argument doesn't exist, create a new Courier with this data.
     */
    create: XOR<CourierCreateInput, CourierUncheckedCreateInput>
    /**
     * In case the Courier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
  }


  /**
   * Courier delete
   */
  export type CourierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter which Courier to delete.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier deleteMany
   */
  export type CourierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couriers to delete
     */
    where?: CourierWhereInput
  }


  /**
   * Courier without action
   */
  export type CourierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
  }



  /**
   * Model TemporaryData
   */

  export type AggregateTemporaryData = {
    _count: TemporaryDataCountAggregateOutputType | null
    _avg: TemporaryDataAvgAggregateOutputType | null
    _sum: TemporaryDataSumAggregateOutputType | null
    _min: TemporaryDataMinAggregateOutputType | null
    _max: TemporaryDataMaxAggregateOutputType | null
  }

  export type TemporaryDataAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TemporaryDataSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TemporaryDataMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type TemporaryDataMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type TemporaryDataCountAggregateOutputType = {
    id: number
    email: number
    data: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TemporaryDataAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TemporaryDataSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TemporaryDataMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    userId?: true
  }

  export type TemporaryDataMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    userId?: true
  }

  export type TemporaryDataCountAggregateInputType = {
    id?: true
    email?: true
    data?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TemporaryDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryData to aggregate.
     */
    where?: TemporaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryData to fetch.
     */
    orderBy?: TemporaryDataOrderByWithRelationInput | TemporaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemporaryData
    **/
    _count?: true | TemporaryDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemporaryDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemporaryDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporaryDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporaryDataMaxAggregateInputType
  }

  export type GetTemporaryDataAggregateType<T extends TemporaryDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporaryData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporaryData[P]>
      : GetScalarType<T[P], AggregateTemporaryData[P]>
  }




  export type TemporaryDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryDataWhereInput
    orderBy?: TemporaryDataOrderByWithAggregationInput | TemporaryDataOrderByWithAggregationInput[]
    by: TemporaryDataScalarFieldEnum[] | TemporaryDataScalarFieldEnum
    having?: TemporaryDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporaryDataCountAggregateInputType | true
    _avg?: TemporaryDataAvgAggregateInputType
    _sum?: TemporaryDataSumAggregateInputType
    _min?: TemporaryDataMinAggregateInputType
    _max?: TemporaryDataMaxAggregateInputType
  }

  export type TemporaryDataGroupByOutputType = {
    id: number
    email: string
    data: JsonValue
    createdAt: Date
    userId: number | null
    _count: TemporaryDataCountAggregateOutputType | null
    _avg: TemporaryDataAvgAggregateOutputType | null
    _sum: TemporaryDataSumAggregateOutputType | null
    _min: TemporaryDataMinAggregateOutputType | null
    _max: TemporaryDataMaxAggregateOutputType | null
  }

  type GetTemporaryDataGroupByPayload<T extends TemporaryDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporaryDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporaryDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporaryDataGroupByOutputType[P]>
            : GetScalarType<T[P], TemporaryDataGroupByOutputType[P]>
        }
      >
    >


  export type TemporaryDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    data?: boolean
    createdAt?: boolean
    userId?: boolean
    User?: boolean | TemporaryData$UserArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryData"]>

  export type TemporaryDataSelectScalar = {
    id?: boolean
    email?: boolean
    data?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TemporaryDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TemporaryData$UserArgs<ExtArgs>
  }


  export type $TemporaryDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryData"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      data: Prisma.JsonValue
      createdAt: Date
      userId: number | null
    }, ExtArgs["result"]["temporaryData"]>
    composites: {}
  }


  type TemporaryDataGetPayload<S extends boolean | null | undefined | TemporaryDataDefaultArgs> = $Result.GetResult<Prisma.$TemporaryDataPayload, S>

  type TemporaryDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemporaryDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemporaryDataCountAggregateInputType | true
    }

  export interface TemporaryDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemporaryData'], meta: { name: 'TemporaryData' } }
    /**
     * Find zero or one TemporaryData that matches the filter.
     * @param {TemporaryDataFindUniqueArgs} args - Arguments to find a TemporaryData
     * @example
     * // Get one TemporaryData
     * const temporaryData = await prisma.temporaryData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemporaryDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataFindUniqueArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemporaryData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TemporaryDataFindUniqueOrThrowArgs} args - Arguments to find a TemporaryData
     * @example
     * // Get one TemporaryData
     * const temporaryData = await prisma.temporaryData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemporaryDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemporaryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataFindFirstArgs} args - Arguments to find a TemporaryData
     * @example
     * // Get one TemporaryData
     * const temporaryData = await prisma.temporaryData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemporaryDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataFindFirstArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemporaryData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataFindFirstOrThrowArgs} args - Arguments to find a TemporaryData
     * @example
     * // Get one TemporaryData
     * const temporaryData = await prisma.temporaryData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemporaryDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemporaryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemporaryData
     * const temporaryData = await prisma.temporaryData.findMany()
     * 
     * // Get first 10 TemporaryData
     * const temporaryData = await prisma.temporaryData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporaryDataWithIdOnly = await prisma.temporaryData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemporaryDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemporaryData.
     * @param {TemporaryDataCreateArgs} args - Arguments to create a TemporaryData.
     * @example
     * // Create one TemporaryData
     * const TemporaryData = await prisma.temporaryData.create({
     *   data: {
     *     // ... data to create a TemporaryData
     *   }
     * })
     * 
    **/
    create<T extends TemporaryDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataCreateArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemporaryData.
     *     @param {TemporaryDataCreateManyArgs} args - Arguments to create many TemporaryData.
     *     @example
     *     // Create many TemporaryData
     *     const temporaryData = await prisma.temporaryData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TemporaryDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TemporaryData.
     * @param {TemporaryDataDeleteArgs} args - Arguments to delete one TemporaryData.
     * @example
     * // Delete one TemporaryData
     * const TemporaryData = await prisma.temporaryData.delete({
     *   where: {
     *     // ... filter to delete one TemporaryData
     *   }
     * })
     * 
    **/
    delete<T extends TemporaryDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataDeleteArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemporaryData.
     * @param {TemporaryDataUpdateArgs} args - Arguments to update one TemporaryData.
     * @example
     * // Update one TemporaryData
     * const temporaryData = await prisma.temporaryData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemporaryDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataUpdateArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemporaryData.
     * @param {TemporaryDataDeleteManyArgs} args - Arguments to filter TemporaryData to delete.
     * @example
     * // Delete a few TemporaryData
     * const { count } = await prisma.temporaryData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemporaryDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemporaryDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemporaryData
     * const temporaryData = await prisma.temporaryData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemporaryDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemporaryData.
     * @param {TemporaryDataUpsertArgs} args - Arguments to update or create a TemporaryData.
     * @example
     * // Update or create a TemporaryData
     * const temporaryData = await prisma.temporaryData.upsert({
     *   create: {
     *     // ... data to create a TemporaryData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemporaryData we want to update
     *   }
     * })
    **/
    upsert<T extends TemporaryDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemporaryDataUpsertArgs<ExtArgs>>
    ): Prisma__TemporaryDataClient<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TemporaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataCountArgs} args - Arguments to filter TemporaryData to count.
     * @example
     * // Count the number of TemporaryData
     * const count = await prisma.temporaryData.count({
     *   where: {
     *     // ... the filter for the TemporaryData we want to count
     *   }
     * })
    **/
    count<T extends TemporaryDataCountArgs>(
      args?: Subset<T, TemporaryDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporaryDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemporaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemporaryDataAggregateArgs>(args: Subset<T, TemporaryDataAggregateArgs>): Prisma.PrismaPromise<GetTemporaryDataAggregateType<T>>

    /**
     * Group by TemporaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemporaryDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporaryDataGroupByArgs['orderBy'] }
        : { orderBy?: TemporaryDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemporaryDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporaryDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemporaryData model
   */
  readonly fields: TemporaryDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemporaryData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporaryDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends TemporaryData$UserArgs<ExtArgs> = {}>(args?: Subset<T, TemporaryData$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemporaryData model
   */ 
  interface TemporaryDataFieldRefs {
    readonly id: FieldRef<"TemporaryData", 'Int'>
    readonly email: FieldRef<"TemporaryData", 'String'>
    readonly data: FieldRef<"TemporaryData", 'Json'>
    readonly createdAt: FieldRef<"TemporaryData", 'DateTime'>
    readonly userId: FieldRef<"TemporaryData", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TemporaryData findUnique
   */
  export type TemporaryDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryData to fetch.
     */
    where: TemporaryDataWhereUniqueInput
  }


  /**
   * TemporaryData findUniqueOrThrow
   */
  export type TemporaryDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryData to fetch.
     */
    where: TemporaryDataWhereUniqueInput
  }


  /**
   * TemporaryData findFirst
   */
  export type TemporaryDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryData to fetch.
     */
    where?: TemporaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryData to fetch.
     */
    orderBy?: TemporaryDataOrderByWithRelationInput | TemporaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryData.
     */
    cursor?: TemporaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryData.
     */
    distinct?: TemporaryDataScalarFieldEnum | TemporaryDataScalarFieldEnum[]
  }


  /**
   * TemporaryData findFirstOrThrow
   */
  export type TemporaryDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryData to fetch.
     */
    where?: TemporaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryData to fetch.
     */
    orderBy?: TemporaryDataOrderByWithRelationInput | TemporaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryData.
     */
    cursor?: TemporaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryData.
     */
    distinct?: TemporaryDataScalarFieldEnum | TemporaryDataScalarFieldEnum[]
  }


  /**
   * TemporaryData findMany
   */
  export type TemporaryDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryData to fetch.
     */
    where?: TemporaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryData to fetch.
     */
    orderBy?: TemporaryDataOrderByWithRelationInput | TemporaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemporaryData.
     */
    cursor?: TemporaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryData.
     */
    skip?: number
    distinct?: TemporaryDataScalarFieldEnum | TemporaryDataScalarFieldEnum[]
  }


  /**
   * TemporaryData create
   */
  export type TemporaryDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TemporaryData.
     */
    data: XOR<TemporaryDataCreateInput, TemporaryDataUncheckedCreateInput>
  }


  /**
   * TemporaryData createMany
   */
  export type TemporaryDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemporaryData.
     */
    data: TemporaryDataCreateManyInput | TemporaryDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TemporaryData update
   */
  export type TemporaryDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TemporaryData.
     */
    data: XOR<TemporaryDataUpdateInput, TemporaryDataUncheckedUpdateInput>
    /**
     * Choose, which TemporaryData to update.
     */
    where: TemporaryDataWhereUniqueInput
  }


  /**
   * TemporaryData updateMany
   */
  export type TemporaryDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemporaryData.
     */
    data: XOR<TemporaryDataUpdateManyMutationInput, TemporaryDataUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryData to update
     */
    where?: TemporaryDataWhereInput
  }


  /**
   * TemporaryData upsert
   */
  export type TemporaryDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TemporaryData to update in case it exists.
     */
    where: TemporaryDataWhereUniqueInput
    /**
     * In case the TemporaryData found by the `where` argument doesn't exist, create a new TemporaryData with this data.
     */
    create: XOR<TemporaryDataCreateInput, TemporaryDataUncheckedCreateInput>
    /**
     * In case the TemporaryData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporaryDataUpdateInput, TemporaryDataUncheckedUpdateInput>
  }


  /**
   * TemporaryData delete
   */
  export type TemporaryDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
    /**
     * Filter which TemporaryData to delete.
     */
    where: TemporaryDataWhereUniqueInput
  }


  /**
   * TemporaryData deleteMany
   */
  export type TemporaryDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryData to delete
     */
    where?: TemporaryDataWhereInput
  }


  /**
   * TemporaryData.User
   */
  export type TemporaryData$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * TemporaryData without action
   */
  export type TemporaryDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryData
     */
    select?: TemporaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemporaryDataInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    joinedat: 'joinedat'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    platform: 'platform',
    image_url: 'image_url',
    image_public_id: 'image_public_id',
    store_info: 'store_info',
    user_id: 'user_id'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const DarazOrdersScalarFieldEnum: {
    order_id: 'order_id',
    seller_id: 'seller_id',
    voucher_platform: 'voucher_platform',
    voucher: 'voucher',
    voucher_seller: 'voucher_seller',
    order_number: 'order_number',
    created_at: 'created_at',
    voucher_code: 'voucher_code',
    gift_option: 'gift_option',
    shipping_fee_discount_platform: 'shipping_fee_discount_platform',
    customer_name: 'customer_name',
    promised_shipping_times: 'promised_shipping_times',
    updated_at: 'updated_at',
    price: 'price',
    shipping_fee_original: 'shipping_fee_original',
    payment_method: 'payment_method',
    shipping_fee_discount_seller: 'shipping_fee_discount_seller',
    shipping_fee: 'shipping_fee',
    items_count: 'items_count',
    statuses: 'statuses',
    address_billing: 'address_billing',
    gift_message: 'gift_message',
    remarks: 'remarks',
    address_shipping: 'address_shipping',
    order_items: 'order_items',
    transactions: 'transactions',
    shop_logo: 'shop_logo',
    user_id: 'user_id'
  };

  export type DarazOrdersScalarFieldEnum = (typeof DarazOrdersScalarFieldEnum)[keyof typeof DarazOrdersScalarFieldEnum]


  export const DarazStoreTransactionsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    transaction_date: 'transaction_date',
    transaction_type: 'transaction_type',
    statement: 'statement',
    payment_ref_id: 'payment_ref_id',
    fee_name: 'fee_name',
    paid_status: 'paid_status',
    WHT_amount: 'WHT_amount',
    VAT_in_amount: 'VAT_in_amount',
    transaction_number: 'transaction_number',
    comment: 'comment',
    user_id: 'user_id'
  };

  export type DarazStoreTransactionsScalarFieldEnum = (typeof DarazStoreTransactionsScalarFieldEnum)[keyof typeof DarazStoreTransactionsScalarFieldEnum]


  export const ShopifyOrdersScalarFieldEnum: {
    order_id: 'order_id',
    domain: 'domain',
    order_name: 'order_name',
    contact_email: 'contact_email',
    created_at: 'created_at',
    current_total_additional_fees_set: 'current_total_additional_fees_set',
    current_total_discounts: 'current_total_discounts',
    current_total_duties_set: 'current_total_duties_set',
    current_total_price: 'current_total_price',
    current_total_tax: 'current_total_tax',
    email: 'email',
    financial_status: 'financial_status',
    fulfillment_status: 'fulfillment_status',
    line_items: 'line_items',
    note: 'note',
    phone: 'phone',
    processed_at: 'processed_at',
    referring_site: 'referring_site',
    source_name: 'source_name',
    subtotal_price: 'subtotal_price',
    tags: 'tags',
    total_discounts: 'total_discounts',
    total_line_items_price: 'total_line_items_price',
    total_outstanding: 'total_outstanding',
    total_price: 'total_price',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ShopifyOrdersScalarFieldEnum = (typeof ShopifyOrdersScalarFieldEnum)[keyof typeof ShopifyOrdersScalarFieldEnum]


  export const CourierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    data: 'data',
    shippers: 'shippers',
    user_id: 'user_id'
  };

  export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum]


  export const TemporaryDataScalarFieldEnum: {
    id: 'id',
    email: 'email',
    data: 'data',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TemporaryDataScalarFieldEnum = (typeof TemporaryDataScalarFieldEnum)[keyof typeof TemporaryDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    joinedat?: DateTimeFilter<"User"> | Date | string
    Stores?: StoreListRelationFilter
    Courier?: CourierListRelationFilter
    DarazOrders?: DarazOrdersListRelationFilter
    ShopifyOrders?: ShopifyOrdersListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazUnpaidTransactions?: DarazStoreTransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinedat?: SortOrder
    Stores?: StoreOrderByRelationAggregateInput
    Courier?: CourierOrderByRelationAggregateInput
    DarazOrders?: DarazOrdersOrderByRelationAggregateInput
    ShopifyOrders?: ShopifyOrdersOrderByRelationAggregateInput
    TemporaryData?: TemporaryDataOrderByRelationAggregateInput
    DarazUnpaidTransactions?: DarazStoreTransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    joinedat?: DateTimeFilter<"User"> | Date | string
    Stores?: StoreListRelationFilter
    Courier?: CourierListRelationFilter
    DarazOrders?: DarazOrdersListRelationFilter
    ShopifyOrders?: ShopifyOrdersListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazUnpaidTransactions?: DarazStoreTransactionsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinedat?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    joinedat?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    platform?: StringFilter<"Store"> | string
    image_url?: StringFilter<"Store"> | string
    image_public_id?: StringFilter<"Store"> | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    store_info?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    platform?: StringFilter<"Store"> | string
    image_url?: StringFilter<"Store"> | string
    image_public_id?: StringFilter<"Store"> | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    store_info?: SortOrder
    user_id?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
    platform?: StringWithAggregatesFilter<"Store"> | string
    image_url?: StringWithAggregatesFilter<"Store"> | string
    image_public_id?: StringWithAggregatesFilter<"Store"> | string
    store_info?: JsonWithAggregatesFilter<"Store">
    user_id?: IntWithAggregatesFilter<"Store"> | number
  }

  export type DarazOrdersWhereInput = {
    AND?: DarazOrdersWhereInput | DarazOrdersWhereInput[]
    OR?: DarazOrdersWhereInput[]
    NOT?: DarazOrdersWhereInput | DarazOrdersWhereInput[]
    order_id?: StringFilter<"DarazOrders"> | string
    seller_id?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_platform?: StringNullableFilter<"DarazOrders"> | string | null
    voucher?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_seller?: StringNullableFilter<"DarazOrders"> | string | null
    order_number?: StringNullableFilter<"DarazOrders"> | string | null
    created_at?: DateTimeNullableFilter<"DarazOrders"> | Date | string | null
    voucher_code?: StringNullableFilter<"DarazOrders"> | string | null
    gift_option?: StringNullableFilter<"DarazOrders"> | string | null
    shipping_fee_discount_platform?: StringNullableFilter<"DarazOrders"> | string | null
    customer_name?: StringNullableFilter<"DarazOrders"> | string | null
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: StringFilter<"DarazOrders"> | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    statuses?: StringFilter<"DarazOrders"> | string
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DarazOrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    seller_id?: SortOrderInput | SortOrder
    voucher_platform?: SortOrderInput | SortOrder
    voucher?: SortOrderInput | SortOrder
    voucher_seller?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    voucher_code?: SortOrderInput | SortOrder
    gift_option?: SortOrderInput | SortOrder
    shipping_fee_discount_platform?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    promised_shipping_times?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    statuses?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DarazOrdersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: DarazOrdersWhereInput | DarazOrdersWhereInput[]
    OR?: DarazOrdersWhereInput[]
    NOT?: DarazOrdersWhereInput | DarazOrdersWhereInput[]
    seller_id?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_platform?: StringNullableFilter<"DarazOrders"> | string | null
    voucher?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_seller?: StringNullableFilter<"DarazOrders"> | string | null
    order_number?: StringNullableFilter<"DarazOrders"> | string | null
    created_at?: DateTimeNullableFilter<"DarazOrders"> | Date | string | null
    voucher_code?: StringNullableFilter<"DarazOrders"> | string | null
    gift_option?: StringNullableFilter<"DarazOrders"> | string | null
    shipping_fee_discount_platform?: StringNullableFilter<"DarazOrders"> | string | null
    customer_name?: StringNullableFilter<"DarazOrders"> | string | null
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: StringFilter<"DarazOrders"> | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    statuses?: StringFilter<"DarazOrders"> | string
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "order_id" | "order_id">

  export type DarazOrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    seller_id?: SortOrderInput | SortOrder
    voucher_platform?: SortOrderInput | SortOrder
    voucher?: SortOrderInput | SortOrder
    voucher_seller?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    voucher_code?: SortOrderInput | SortOrder
    gift_option?: SortOrderInput | SortOrder
    shipping_fee_discount_platform?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    promised_shipping_times?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    statuses?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    _count?: DarazOrdersCountOrderByAggregateInput
    _avg?: DarazOrdersAvgOrderByAggregateInput
    _max?: DarazOrdersMaxOrderByAggregateInput
    _min?: DarazOrdersMinOrderByAggregateInput
    _sum?: DarazOrdersSumOrderByAggregateInput
  }

  export type DarazOrdersScalarWhereWithAggregatesInput = {
    AND?: DarazOrdersScalarWhereWithAggregatesInput | DarazOrdersScalarWhereWithAggregatesInput[]
    OR?: DarazOrdersScalarWhereWithAggregatesInput[]
    NOT?: DarazOrdersScalarWhereWithAggregatesInput | DarazOrdersScalarWhereWithAggregatesInput[]
    order_id?: StringWithAggregatesFilter<"DarazOrders"> | string
    seller_id?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    voucher_platform?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    voucher?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    voucher_seller?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    order_number?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"DarazOrders"> | Date | string | null
    voucher_code?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    gift_option?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    shipping_fee_discount_platform?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    customer_name?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    promised_shipping_times?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"DarazOrders"> | Date | string
    price?: StringWithAggregatesFilter<"DarazOrders"> | string
    shipping_fee_original?: StringWithAggregatesFilter<"DarazOrders"> | string
    payment_method?: StringWithAggregatesFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringWithAggregatesFilter<"DarazOrders"> | string
    shipping_fee?: StringWithAggregatesFilter<"DarazOrders"> | string
    items_count?: StringWithAggregatesFilter<"DarazOrders"> | string
    statuses?: StringWithAggregatesFilter<"DarazOrders"> | string
    address_billing?: JsonWithAggregatesFilter<"DarazOrders">
    gift_message?: StringWithAggregatesFilter<"DarazOrders"> | string
    remarks?: StringWithAggregatesFilter<"DarazOrders"> | string
    address_shipping?: JsonWithAggregatesFilter<"DarazOrders">
    order_items?: JsonWithAggregatesFilter<"DarazOrders">
    transactions?: JsonWithAggregatesFilter<"DarazOrders">
    shop_logo?: StringWithAggregatesFilter<"DarazOrders"> | string
    user_id?: IntWithAggregatesFilter<"DarazOrders"> | number
  }

  export type DarazStoreTransactionsWhereInput = {
    AND?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    OR?: DarazStoreTransactionsWhereInput[]
    NOT?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    id?: IntFilter<"DarazStoreTransactions"> | number
    amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"DarazStoreTransactions"> | Date | string | null
    transaction_type?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    statement?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    payment_ref_id?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    fee_name?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    paid_status?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    WHT_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    VAT_in_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_number?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    comment?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    user_id?: IntFilter<"DarazStoreTransactions"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DarazStoreTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    statement?: SortOrderInput | SortOrder
    payment_ref_id?: SortOrderInput | SortOrder
    fee_name?: SortOrderInput | SortOrder
    paid_status?: SortOrderInput | SortOrder
    WHT_amount?: SortOrderInput | SortOrder
    VAT_in_amount?: SortOrderInput | SortOrder
    transaction_number?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DarazStoreTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    OR?: DarazStoreTransactionsWhereInput[]
    NOT?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"DarazStoreTransactions"> | Date | string | null
    transaction_type?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    statement?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    payment_ref_id?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    fee_name?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    paid_status?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    WHT_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    VAT_in_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_number?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    comment?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    user_id?: IntFilter<"DarazStoreTransactions"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type DarazStoreTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    statement?: SortOrderInput | SortOrder
    payment_ref_id?: SortOrderInput | SortOrder
    fee_name?: SortOrderInput | SortOrder
    paid_status?: SortOrderInput | SortOrder
    WHT_amount?: SortOrderInput | SortOrder
    VAT_in_amount?: SortOrderInput | SortOrder
    transaction_number?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: DarazStoreTransactionsCountOrderByAggregateInput
    _avg?: DarazStoreTransactionsAvgOrderByAggregateInput
    _max?: DarazStoreTransactionsMaxOrderByAggregateInput
    _min?: DarazStoreTransactionsMinOrderByAggregateInput
    _sum?: DarazStoreTransactionsSumOrderByAggregateInput
  }

  export type DarazStoreTransactionsScalarWhereWithAggregatesInput = {
    AND?: DarazStoreTransactionsScalarWhereWithAggregatesInput | DarazStoreTransactionsScalarWhereWithAggregatesInput[]
    OR?: DarazStoreTransactionsScalarWhereWithAggregatesInput[]
    NOT?: DarazStoreTransactionsScalarWhereWithAggregatesInput | DarazStoreTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DarazStoreTransactions"> | number
    amount?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    transaction_date?: DateTimeNullableWithAggregatesFilter<"DarazStoreTransactions"> | Date | string | null
    transaction_type?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    statement?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    payment_ref_id?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    fee_name?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    paid_status?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    WHT_amount?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    VAT_in_amount?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    transaction_number?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    comment?: StringNullableWithAggregatesFilter<"DarazStoreTransactions"> | string | null
    user_id?: IntWithAggregatesFilter<"DarazStoreTransactions"> | number
  }

  export type ShopifyOrdersWhereInput = {
    AND?: ShopifyOrdersWhereInput | ShopifyOrdersWhereInput[]
    OR?: ShopifyOrdersWhereInput[]
    NOT?: ShopifyOrdersWhereInput | ShopifyOrdersWhereInput[]
    order_id?: StringFilter<"ShopifyOrders"> | string
    domain?: StringFilter<"ShopifyOrders"> | string
    order_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    contact_email?: StringNullableFilter<"ShopifyOrders"> | string | null
    created_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    current_total_additional_fees_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_duties_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_tax?: StringNullableFilter<"ShopifyOrders"> | string | null
    email?: StringNullableFilter<"ShopifyOrders"> | string | null
    financial_status?: StringNullableFilter<"ShopifyOrders"> | string | null
    fulfillment_status?: JsonFilter<"ShopifyOrders">
    line_items?: JsonFilter<"ShopifyOrders">
    note?: StringNullableFilter<"ShopifyOrders"> | string | null
    phone?: StringFilter<"ShopifyOrders"> | string
    processed_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    referring_site?: StringNullableFilter<"ShopifyOrders"> | string | null
    source_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    subtotal_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    tags?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_line_items_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_outstanding?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    updated_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    user_id?: IntFilter<"ShopifyOrders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ShopifyOrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    domain?: SortOrder
    order_name?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    current_total_additional_fees_set?: SortOrderInput | SortOrder
    current_total_discounts?: SortOrderInput | SortOrder
    current_total_duties_set?: SortOrderInput | SortOrder
    current_total_price?: SortOrderInput | SortOrder
    current_total_tax?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    financial_status?: SortOrderInput | SortOrder
    fulfillment_status?: SortOrder
    line_items?: SortOrder
    note?: SortOrderInput | SortOrder
    phone?: SortOrder
    processed_at?: SortOrder
    referring_site?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    subtotal_price?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    total_discounts?: SortOrderInput | SortOrder
    total_line_items_price?: SortOrderInput | SortOrder
    total_outstanding?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ShopifyOrdersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: ShopifyOrdersWhereInput | ShopifyOrdersWhereInput[]
    OR?: ShopifyOrdersWhereInput[]
    NOT?: ShopifyOrdersWhereInput | ShopifyOrdersWhereInput[]
    domain?: StringFilter<"ShopifyOrders"> | string
    order_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    contact_email?: StringNullableFilter<"ShopifyOrders"> | string | null
    created_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    current_total_additional_fees_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_duties_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_tax?: StringNullableFilter<"ShopifyOrders"> | string | null
    email?: StringNullableFilter<"ShopifyOrders"> | string | null
    financial_status?: StringNullableFilter<"ShopifyOrders"> | string | null
    fulfillment_status?: JsonFilter<"ShopifyOrders">
    line_items?: JsonFilter<"ShopifyOrders">
    note?: StringNullableFilter<"ShopifyOrders"> | string | null
    phone?: StringFilter<"ShopifyOrders"> | string
    processed_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    referring_site?: StringNullableFilter<"ShopifyOrders"> | string | null
    source_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    subtotal_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    tags?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_line_items_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_outstanding?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    updated_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    user_id?: IntFilter<"ShopifyOrders"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "order_id" | "order_id">

  export type ShopifyOrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    domain?: SortOrder
    order_name?: SortOrderInput | SortOrder
    contact_email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    current_total_additional_fees_set?: SortOrderInput | SortOrder
    current_total_discounts?: SortOrderInput | SortOrder
    current_total_duties_set?: SortOrderInput | SortOrder
    current_total_price?: SortOrderInput | SortOrder
    current_total_tax?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    financial_status?: SortOrderInput | SortOrder
    fulfillment_status?: SortOrder
    line_items?: SortOrder
    note?: SortOrderInput | SortOrder
    phone?: SortOrder
    processed_at?: SortOrder
    referring_site?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    subtotal_price?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    total_discounts?: SortOrderInput | SortOrder
    total_line_items_price?: SortOrderInput | SortOrder
    total_outstanding?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: ShopifyOrdersCountOrderByAggregateInput
    _avg?: ShopifyOrdersAvgOrderByAggregateInput
    _max?: ShopifyOrdersMaxOrderByAggregateInput
    _min?: ShopifyOrdersMinOrderByAggregateInput
    _sum?: ShopifyOrdersSumOrderByAggregateInput
  }

  export type ShopifyOrdersScalarWhereWithAggregatesInput = {
    AND?: ShopifyOrdersScalarWhereWithAggregatesInput | ShopifyOrdersScalarWhereWithAggregatesInput[]
    OR?: ShopifyOrdersScalarWhereWithAggregatesInput[]
    NOT?: ShopifyOrdersScalarWhereWithAggregatesInput | ShopifyOrdersScalarWhereWithAggregatesInput[]
    order_id?: StringWithAggregatesFilter<"ShopifyOrders"> | string
    domain?: StringWithAggregatesFilter<"ShopifyOrders"> | string
    order_name?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    contact_email?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ShopifyOrders"> | Date | string
    current_total_additional_fees_set?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    current_total_discounts?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    current_total_duties_set?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    current_total_price?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    current_total_tax?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    email?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    financial_status?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    fulfillment_status?: JsonWithAggregatesFilter<"ShopifyOrders">
    line_items?: JsonWithAggregatesFilter<"ShopifyOrders">
    note?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    phone?: StringWithAggregatesFilter<"ShopifyOrders"> | string
    processed_at?: DateTimeWithAggregatesFilter<"ShopifyOrders"> | Date | string
    referring_site?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    source_name?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    subtotal_price?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    tags?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    total_discounts?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    total_line_items_price?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    total_outstanding?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    total_price?: StringNullableWithAggregatesFilter<"ShopifyOrders"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"ShopifyOrders"> | Date | string
    user_id?: IntWithAggregatesFilter<"ShopifyOrders"> | number
  }

  export type CourierWhereInput = {
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    id?: IntFilter<"Courier"> | number
    name?: StringFilter<"Courier"> | string
    data?: JsonFilter<"Courier">
    shippers?: JsonFilter<"Courier">
    user_id?: IntFilter<"Courier"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CourierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    shippers?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CourierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    name?: StringFilter<"Courier"> | string
    data?: JsonFilter<"Courier">
    shippers?: JsonFilter<"Courier">
    user_id?: IntFilter<"Courier"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type CourierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    shippers?: SortOrder
    user_id?: SortOrder
    _count?: CourierCountOrderByAggregateInput
    _avg?: CourierAvgOrderByAggregateInput
    _max?: CourierMaxOrderByAggregateInput
    _min?: CourierMinOrderByAggregateInput
    _sum?: CourierSumOrderByAggregateInput
  }

  export type CourierScalarWhereWithAggregatesInput = {
    AND?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    OR?: CourierScalarWhereWithAggregatesInput[]
    NOT?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Courier"> | number
    name?: StringWithAggregatesFilter<"Courier"> | string
    data?: JsonWithAggregatesFilter<"Courier">
    shippers?: JsonWithAggregatesFilter<"Courier">
    user_id?: IntWithAggregatesFilter<"Courier"> | number
  }

  export type TemporaryDataWhereInput = {
    AND?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    OR?: TemporaryDataWhereInput[]
    NOT?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    id?: IntFilter<"TemporaryData"> | number
    email?: StringFilter<"TemporaryData"> | string
    data?: JsonFilter<"TemporaryData">
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    userId?: IntNullableFilter<"TemporaryData"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type TemporaryDataOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type TemporaryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    OR?: TemporaryDataWhereInput[]
    NOT?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    email?: StringFilter<"TemporaryData"> | string
    data?: JsonFilter<"TemporaryData">
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    userId?: IntNullableFilter<"TemporaryData"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type TemporaryDataOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TemporaryDataCountOrderByAggregateInput
    _avg?: TemporaryDataAvgOrderByAggregateInput
    _max?: TemporaryDataMaxOrderByAggregateInput
    _min?: TemporaryDataMinOrderByAggregateInput
    _sum?: TemporaryDataSumOrderByAggregateInput
  }

  export type TemporaryDataScalarWhereWithAggregatesInput = {
    AND?: TemporaryDataScalarWhereWithAggregatesInput | TemporaryDataScalarWhereWithAggregatesInput[]
    OR?: TemporaryDataScalarWhereWithAggregatesInput[]
    NOT?: TemporaryDataScalarWhereWithAggregatesInput | TemporaryDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemporaryData"> | number
    email?: StringWithAggregatesFilter<"TemporaryData"> | string
    data?: JsonWithAggregatesFilter<"TemporaryData">
    createdAt?: DateTimeWithAggregatesFilter<"TemporaryData"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"TemporaryData"> | number | null
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyInput = {
    id?: number
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrdersCreateInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user: UserCreateNestedOneWithoutDarazOrdersInput
  }

  export type DarazOrdersUncheckedCreateInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
  }

  export type DarazOrdersUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDarazOrdersNestedInput
  }

  export type DarazOrdersUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrdersCreateManyInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
  }

  export type DarazOrdersUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrdersUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazStoreTransactionsCreateInput = {
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
    user: UserCreateNestedOneWithoutDarazUnpaidTransactionsInput
  }

  export type DarazStoreTransactionsUncheckedCreateInput = {
    id?: number
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
    user_id: number
  }

  export type DarazStoreTransactionsUpdateInput = {
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDarazUnpaidTransactionsNestedInput
  }

  export type DarazStoreTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazStoreTransactionsCreateManyInput = {
    id?: number
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
    user_id: number
  }

  export type DarazStoreTransactionsUpdateManyMutationInput = {
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DarazStoreTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopifyOrdersCreateInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
    user: UserCreateNestedOneWithoutShopifyOrdersInput
  }

  export type ShopifyOrdersUncheckedCreateInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
    user_id: number
  }

  export type ShopifyOrdersUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopifyOrdersNestedInput
  }

  export type ShopifyOrdersUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopifyOrdersCreateManyInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
    user_id: number
  }

  export type ShopifyOrdersUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyOrdersUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CourierCreateInput = {
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutCourierInput
  }

  export type CourierUncheckedCreateInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type CourierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CourierCreateManyInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type CourierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
  }

  export type CourierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TemporaryDataCreateInput = {
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    User?: UserCreateNestedOneWithoutTemporaryDataInput
  }

  export type TemporaryDataUncheckedCreateInput = {
    id?: number
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId?: number | null
  }

  export type TemporaryDataUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutTemporaryDataNestedInput
  }

  export type TemporaryDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TemporaryDataCreateManyInput = {
    id?: number
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId?: number | null
  }

  export type TemporaryDataUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type CourierListRelationFilter = {
    every?: CourierWhereInput
    some?: CourierWhereInput
    none?: CourierWhereInput
  }

  export type DarazOrdersListRelationFilter = {
    every?: DarazOrdersWhereInput
    some?: DarazOrdersWhereInput
    none?: DarazOrdersWhereInput
  }

  export type ShopifyOrdersListRelationFilter = {
    every?: ShopifyOrdersWhereInput
    some?: ShopifyOrdersWhereInput
    none?: ShopifyOrdersWhereInput
  }

  export type TemporaryDataListRelationFilter = {
    every?: TemporaryDataWhereInput
    some?: TemporaryDataWhereInput
    none?: TemporaryDataWhereInput
  }

  export type DarazStoreTransactionsListRelationFilter = {
    every?: DarazStoreTransactionsWhereInput
    some?: DarazStoreTransactionsWhereInput
    none?: DarazStoreTransactionsWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopifyOrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporaryDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazStoreTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinedat?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinedat?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinedat?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    store_info?: SortOrder
    user_id?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    user_id?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    user_id?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DarazOrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    voucher_platform?: SortOrder
    voucher?: SortOrder
    voucher_seller?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    voucher_code?: SortOrder
    gift_option?: SortOrder
    shipping_fee_discount_platform?: SortOrder
    customer_name?: SortOrder
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    statuses?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
  }

  export type DarazOrdersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DarazOrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    voucher_platform?: SortOrder
    voucher?: SortOrder
    voucher_seller?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    voucher_code?: SortOrder
    gift_option?: SortOrder
    shipping_fee_discount_platform?: SortOrder
    customer_name?: SortOrder
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    statuses?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
  }

  export type DarazOrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    voucher_platform?: SortOrder
    voucher?: SortOrder
    voucher_seller?: SortOrder
    order_number?: SortOrder
    created_at?: SortOrder
    voucher_code?: SortOrder
    gift_option?: SortOrder
    shipping_fee_discount_platform?: SortOrder
    customer_name?: SortOrder
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    statuses?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
  }

  export type DarazOrdersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DarazStoreTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    statement?: SortOrder
    payment_ref_id?: SortOrder
    fee_name?: SortOrder
    paid_status?: SortOrder
    WHT_amount?: SortOrder
    VAT_in_amount?: SortOrder
    transaction_number?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    statement?: SortOrder
    payment_ref_id?: SortOrder
    fee_name?: SortOrder
    paid_status?: SortOrder
    WHT_amount?: SortOrder
    VAT_in_amount?: SortOrder
    transaction_number?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    statement?: SortOrder
    payment_ref_id?: SortOrder
    fee_name?: SortOrder
    paid_status?: SortOrder
    WHT_amount?: SortOrder
    VAT_in_amount?: SortOrder
    transaction_number?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ShopifyOrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    domain?: SortOrder
    order_name?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    current_total_additional_fees_set?: SortOrder
    current_total_discounts?: SortOrder
    current_total_duties_set?: SortOrder
    current_total_price?: SortOrder
    current_total_tax?: SortOrder
    email?: SortOrder
    financial_status?: SortOrder
    fulfillment_status?: SortOrder
    line_items?: SortOrder
    note?: SortOrder
    phone?: SortOrder
    processed_at?: SortOrder
    referring_site?: SortOrder
    source_name?: SortOrder
    subtotal_price?: SortOrder
    tags?: SortOrder
    total_discounts?: SortOrder
    total_line_items_price?: SortOrder
    total_outstanding?: SortOrder
    total_price?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ShopifyOrdersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type ShopifyOrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    domain?: SortOrder
    order_name?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    current_total_additional_fees_set?: SortOrder
    current_total_discounts?: SortOrder
    current_total_duties_set?: SortOrder
    current_total_price?: SortOrder
    current_total_tax?: SortOrder
    email?: SortOrder
    financial_status?: SortOrder
    note?: SortOrder
    phone?: SortOrder
    processed_at?: SortOrder
    referring_site?: SortOrder
    source_name?: SortOrder
    subtotal_price?: SortOrder
    tags?: SortOrder
    total_discounts?: SortOrder
    total_line_items_price?: SortOrder
    total_outstanding?: SortOrder
    total_price?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ShopifyOrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    domain?: SortOrder
    order_name?: SortOrder
    contact_email?: SortOrder
    created_at?: SortOrder
    current_total_additional_fees_set?: SortOrder
    current_total_discounts?: SortOrder
    current_total_duties_set?: SortOrder
    current_total_price?: SortOrder
    current_total_tax?: SortOrder
    email?: SortOrder
    financial_status?: SortOrder
    note?: SortOrder
    phone?: SortOrder
    processed_at?: SortOrder
    referring_site?: SortOrder
    source_name?: SortOrder
    subtotal_price?: SortOrder
    tags?: SortOrder
    total_discounts?: SortOrder
    total_line_items_price?: SortOrder
    total_outstanding?: SortOrder
    total_price?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ShopifyOrdersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CourierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    shippers?: SortOrder
    user_id?: SortOrder
  }

  export type CourierAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CourierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type CourierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type CourierSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TemporaryDataCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TemporaryDataAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TemporaryDataMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TemporaryDataMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TemporaryDataSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StoreCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type CourierCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type DarazOrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput> | DarazOrdersCreateWithoutUserInput[] | DarazOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutUserInput | DarazOrdersCreateOrConnectWithoutUserInput[]
    createMany?: DarazOrdersCreateManyUserInputEnvelope
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
  }

  export type ShopifyOrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput> | ShopifyOrdersCreateWithoutUserInput[] | ShopifyOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutUserInput | ShopifyOrdersCreateOrConnectWithoutUserInput[]
    createMany?: ShopifyOrdersCreateManyUserInputEnvelope
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
  }

  export type TemporaryDataCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type DarazStoreTransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput> | DarazStoreTransactionsCreateWithoutUserInput[] | DarazStoreTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionsCreateOrConnectWithoutUserInput | DarazStoreTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: DarazStoreTransactionsCreateManyUserInputEnvelope
    connect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type DarazOrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput> | DarazOrdersCreateWithoutUserInput[] | DarazOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutUserInput | DarazOrdersCreateOrConnectWithoutUserInput[]
    createMany?: DarazOrdersCreateManyUserInputEnvelope
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
  }

  export type ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput> | ShopifyOrdersCreateWithoutUserInput[] | ShopifyOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutUserInput | ShopifyOrdersCreateOrConnectWithoutUserInput[]
    createMany?: ShopifyOrdersCreateManyUserInputEnvelope
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
  }

  export type TemporaryDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput> | DarazStoreTransactionsCreateWithoutUserInput[] | DarazStoreTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionsCreateOrConnectWithoutUserInput | DarazStoreTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: DarazStoreTransactionsCreateManyUserInputEnvelope
    connect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type CourierUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutUserInput | CourierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutUserInput | CourierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutUserInput | CourierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type DarazOrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput> | DarazOrdersCreateWithoutUserInput[] | DarazOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutUserInput | DarazOrdersCreateOrConnectWithoutUserInput[]
    upsert?: DarazOrdersUpsertWithWhereUniqueWithoutUserInput | DarazOrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazOrdersCreateManyUserInputEnvelope
    set?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    disconnect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    delete?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    update?: DarazOrdersUpdateWithWhereUniqueWithoutUserInput | DarazOrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazOrdersUpdateManyWithWhereWithoutUserInput | DarazOrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
  }

  export type ShopifyOrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput> | ShopifyOrdersCreateWithoutUserInput[] | ShopifyOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutUserInput | ShopifyOrdersCreateOrConnectWithoutUserInput[]
    upsert?: ShopifyOrdersUpsertWithWhereUniqueWithoutUserInput | ShopifyOrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopifyOrdersCreateManyUserInputEnvelope
    set?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    disconnect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    delete?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    update?: ShopifyOrdersUpdateWithWhereUniqueWithoutUserInput | ShopifyOrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopifyOrdersUpdateManyWithWhereWithoutUserInput | ShopifyOrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
  }

  export type TemporaryDataUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    upsert?: TemporaryDataUpsertWithWhereUniqueWithoutUserInput | TemporaryDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    set?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    disconnect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    delete?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    update?: TemporaryDataUpdateWithWhereUniqueWithoutUserInput | TemporaryDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemporaryDataUpdateManyWithWhereWithoutUserInput | TemporaryDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemporaryDataScalarWhereInput | TemporaryDataScalarWhereInput[]
  }

  export type DarazStoreTransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput> | DarazStoreTransactionsCreateWithoutUserInput[] | DarazStoreTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionsCreateOrConnectWithoutUserInput | DarazStoreTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: DarazStoreTransactionsUpsertWithWhereUniqueWithoutUserInput | DarazStoreTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazStoreTransactionsCreateManyUserInputEnvelope
    set?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    disconnect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    delete?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    connect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    update?: DarazStoreTransactionsUpdateWithWhereUniqueWithoutUserInput | DarazStoreTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazStoreTransactionsUpdateManyWithWhereWithoutUserInput | DarazStoreTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazStoreTransactionsScalarWhereInput | DarazStoreTransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type CourierUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutUserInput | CourierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutUserInput | CourierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutUserInput | CourierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type DarazOrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput> | DarazOrdersCreateWithoutUserInput[] | DarazOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutUserInput | DarazOrdersCreateOrConnectWithoutUserInput[]
    upsert?: DarazOrdersUpsertWithWhereUniqueWithoutUserInput | DarazOrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazOrdersCreateManyUserInputEnvelope
    set?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    disconnect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    delete?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    update?: DarazOrdersUpdateWithWhereUniqueWithoutUserInput | DarazOrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazOrdersUpdateManyWithWhereWithoutUserInput | DarazOrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
  }

  export type ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput> | ShopifyOrdersCreateWithoutUserInput[] | ShopifyOrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutUserInput | ShopifyOrdersCreateOrConnectWithoutUserInput[]
    upsert?: ShopifyOrdersUpsertWithWhereUniqueWithoutUserInput | ShopifyOrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopifyOrdersCreateManyUserInputEnvelope
    set?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    disconnect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    delete?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    update?: ShopifyOrdersUpdateWithWhereUniqueWithoutUserInput | ShopifyOrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopifyOrdersUpdateManyWithWhereWithoutUserInput | ShopifyOrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
  }

  export type TemporaryDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    upsert?: TemporaryDataUpsertWithWhereUniqueWithoutUserInput | TemporaryDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    set?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    disconnect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    delete?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
    update?: TemporaryDataUpdateWithWhereUniqueWithoutUserInput | TemporaryDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TemporaryDataUpdateManyWithWhereWithoutUserInput | TemporaryDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TemporaryDataScalarWhereInput | TemporaryDataScalarWhereInput[]
  }

  export type DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput> | DarazStoreTransactionsCreateWithoutUserInput[] | DarazStoreTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionsCreateOrConnectWithoutUserInput | DarazStoreTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: DarazStoreTransactionsUpsertWithWhereUniqueWithoutUserInput | DarazStoreTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazStoreTransactionsCreateManyUserInputEnvelope
    set?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    disconnect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    delete?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    connect?: DarazStoreTransactionsWhereUniqueInput | DarazStoreTransactionsWhereUniqueInput[]
    update?: DarazStoreTransactionsUpdateWithWhereUniqueWithoutUserInput | DarazStoreTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazStoreTransactionsUpdateManyWithWhereWithoutUserInput | DarazStoreTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazStoreTransactionsScalarWhereInput | DarazStoreTransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserCreateNestedOneWithoutDarazOrdersInput = {
    create?: XOR<UserCreateWithoutDarazOrdersInput, UserUncheckedCreateWithoutDarazOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutDarazOrdersNestedInput = {
    create?: XOR<UserCreateWithoutDarazOrdersInput, UserUncheckedCreateWithoutDarazOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrdersInput
    upsert?: UserUpsertWithoutDarazOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazOrdersInput, UserUpdateWithoutDarazOrdersInput>, UserUncheckedUpdateWithoutDarazOrdersInput>
  }

  export type UserCreateNestedOneWithoutDarazUnpaidTransactionsInput = {
    create?: XOR<UserCreateWithoutDarazUnpaidTransactionsInput, UserUncheckedCreateWithoutDarazUnpaidTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazUnpaidTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDarazUnpaidTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutDarazUnpaidTransactionsInput, UserUncheckedCreateWithoutDarazUnpaidTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazUnpaidTransactionsInput
    upsert?: UserUpsertWithoutDarazUnpaidTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazUnpaidTransactionsInput, UserUpdateWithoutDarazUnpaidTransactionsInput>, UserUncheckedUpdateWithoutDarazUnpaidTransactionsInput>
  }

  export type UserCreateNestedOneWithoutShopifyOrdersInput = {
    create?: XOR<UserCreateWithoutShopifyOrdersInput, UserUncheckedCreateWithoutShopifyOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShopifyOrdersNestedInput = {
    create?: XOR<UserCreateWithoutShopifyOrdersInput, UserUncheckedCreateWithoutShopifyOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrdersInput
    upsert?: UserUpsertWithoutShopifyOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopifyOrdersInput, UserUpdateWithoutShopifyOrdersInput>, UserUncheckedUpdateWithoutShopifyOrdersInput>
  }

  export type UserCreateNestedOneWithoutCourierInput = {
    create?: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourierInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCourierNestedInput = {
    create?: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourierInput
    upsert?: UserUpsertWithoutCourierInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourierInput, UserUpdateWithoutCourierInput>, UserUncheckedUpdateWithoutCourierInput>
  }

  export type UserCreateNestedOneWithoutTemporaryDataInput = {
    create?: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemporaryDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutTemporaryDataNestedInput = {
    create?: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemporaryDataInput
    upsert?: UserUpsertWithoutTemporaryDataInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemporaryDataInput, UserUpdateWithoutTemporaryDataInput>, UserUncheckedUpdateWithoutTemporaryDataInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StoreCreateWithoutUserInput = {
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type StoreCreateOrConnectWithoutUserInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreCreateManyUserInputEnvelope = {
    data: StoreCreateManyUserInput | StoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourierCreateWithoutUserInput = {
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
  }

  export type CourierUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
  }

  export type CourierCreateOrConnectWithoutUserInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput>
  }

  export type CourierCreateManyUserInputEnvelope = {
    data: CourierCreateManyUserInput | CourierCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazOrdersCreateWithoutUserInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
  }

  export type DarazOrdersUncheckedCreateWithoutUserInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
  }

  export type DarazOrdersCreateOrConnectWithoutUserInput = {
    where: DarazOrdersWhereUniqueInput
    create: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput>
  }

  export type DarazOrdersCreateManyUserInputEnvelope = {
    data: DarazOrdersCreateManyUserInput | DarazOrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopifyOrdersCreateWithoutUserInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
  }

  export type ShopifyOrdersUncheckedCreateWithoutUserInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
  }

  export type ShopifyOrdersCreateOrConnectWithoutUserInput = {
    where: ShopifyOrdersWhereUniqueInput
    create: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput>
  }

  export type ShopifyOrdersCreateManyUserInputEnvelope = {
    data: ShopifyOrdersCreateManyUserInput | ShopifyOrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemporaryDataCreateWithoutUserInput = {
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TemporaryDataUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TemporaryDataCreateOrConnectWithoutUserInput = {
    where: TemporaryDataWhereUniqueInput
    create: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput>
  }

  export type TemporaryDataCreateManyUserInputEnvelope = {
    data: TemporaryDataCreateManyUserInput | TemporaryDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazStoreTransactionsCreateWithoutUserInput = {
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
  }

  export type DarazStoreTransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
  }

  export type DarazStoreTransactionsCreateOrConnectWithoutUserInput = {
    where: DarazStoreTransactionsWhereUniqueInput
    create: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput>
  }

  export type DarazStoreTransactionsCreateManyUserInputEnvelope = {
    data: DarazStoreTransactionsCreateManyUserInput | DarazStoreTransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
  }

  export type StoreUpdateManyWithWhereWithoutUserInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutUserInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    platform?: StringFilter<"Store"> | string
    image_url?: StringFilter<"Store"> | string
    image_public_id?: StringFilter<"Store"> | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
  }

  export type CourierUpsertWithWhereUniqueWithoutUserInput = {
    where: CourierWhereUniqueInput
    update: XOR<CourierUpdateWithoutUserInput, CourierUncheckedUpdateWithoutUserInput>
    create: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput>
  }

  export type CourierUpdateWithWhereUniqueWithoutUserInput = {
    where: CourierWhereUniqueInput
    data: XOR<CourierUpdateWithoutUserInput, CourierUncheckedUpdateWithoutUserInput>
  }

  export type CourierUpdateManyWithWhereWithoutUserInput = {
    where: CourierScalarWhereInput
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyWithoutUserInput>
  }

  export type CourierScalarWhereInput = {
    AND?: CourierScalarWhereInput | CourierScalarWhereInput[]
    OR?: CourierScalarWhereInput[]
    NOT?: CourierScalarWhereInput | CourierScalarWhereInput[]
    id?: IntFilter<"Courier"> | number
    name?: StringFilter<"Courier"> | string
    data?: JsonFilter<"Courier">
    shippers?: JsonFilter<"Courier">
    user_id?: IntFilter<"Courier"> | number
  }

  export type DarazOrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: DarazOrdersWhereUniqueInput
    update: XOR<DarazOrdersUpdateWithoutUserInput, DarazOrdersUncheckedUpdateWithoutUserInput>
    create: XOR<DarazOrdersCreateWithoutUserInput, DarazOrdersUncheckedCreateWithoutUserInput>
  }

  export type DarazOrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: DarazOrdersWhereUniqueInput
    data: XOR<DarazOrdersUpdateWithoutUserInput, DarazOrdersUncheckedUpdateWithoutUserInput>
  }

  export type DarazOrdersUpdateManyWithWhereWithoutUserInput = {
    where: DarazOrdersScalarWhereInput
    data: XOR<DarazOrdersUpdateManyMutationInput, DarazOrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type DarazOrdersScalarWhereInput = {
    AND?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
    OR?: DarazOrdersScalarWhereInput[]
    NOT?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
    order_id?: StringFilter<"DarazOrders"> | string
    seller_id?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_platform?: StringNullableFilter<"DarazOrders"> | string | null
    voucher?: StringNullableFilter<"DarazOrders"> | string | null
    voucher_seller?: StringNullableFilter<"DarazOrders"> | string | null
    order_number?: StringNullableFilter<"DarazOrders"> | string | null
    created_at?: DateTimeNullableFilter<"DarazOrders"> | Date | string | null
    voucher_code?: StringNullableFilter<"DarazOrders"> | string | null
    gift_option?: StringNullableFilter<"DarazOrders"> | string | null
    shipping_fee_discount_platform?: StringNullableFilter<"DarazOrders"> | string | null
    customer_name?: StringNullableFilter<"DarazOrders"> | string | null
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: StringFilter<"DarazOrders"> | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    statuses?: StringFilter<"DarazOrders"> | string
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
  }

  export type ShopifyOrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopifyOrdersWhereUniqueInput
    update: XOR<ShopifyOrdersUpdateWithoutUserInput, ShopifyOrdersUncheckedUpdateWithoutUserInput>
    create: XOR<ShopifyOrdersCreateWithoutUserInput, ShopifyOrdersUncheckedCreateWithoutUserInput>
  }

  export type ShopifyOrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopifyOrdersWhereUniqueInput
    data: XOR<ShopifyOrdersUpdateWithoutUserInput, ShopifyOrdersUncheckedUpdateWithoutUserInput>
  }

  export type ShopifyOrdersUpdateManyWithWhereWithoutUserInput = {
    where: ShopifyOrdersScalarWhereInput
    data: XOR<ShopifyOrdersUpdateManyMutationInput, ShopifyOrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopifyOrdersScalarWhereInput = {
    AND?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
    OR?: ShopifyOrdersScalarWhereInput[]
    NOT?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
    order_id?: StringFilter<"ShopifyOrders"> | string
    domain?: StringFilter<"ShopifyOrders"> | string
    order_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    contact_email?: StringNullableFilter<"ShopifyOrders"> | string | null
    created_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    current_total_additional_fees_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_duties_set?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    current_total_tax?: StringNullableFilter<"ShopifyOrders"> | string | null
    email?: StringNullableFilter<"ShopifyOrders"> | string | null
    financial_status?: StringNullableFilter<"ShopifyOrders"> | string | null
    fulfillment_status?: JsonFilter<"ShopifyOrders">
    line_items?: JsonFilter<"ShopifyOrders">
    note?: StringNullableFilter<"ShopifyOrders"> | string | null
    phone?: StringFilter<"ShopifyOrders"> | string
    processed_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    referring_site?: StringNullableFilter<"ShopifyOrders"> | string | null
    source_name?: StringNullableFilter<"ShopifyOrders"> | string | null
    subtotal_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    tags?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_discounts?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_line_items_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_outstanding?: StringNullableFilter<"ShopifyOrders"> | string | null
    total_price?: StringNullableFilter<"ShopifyOrders"> | string | null
    updated_at?: DateTimeFilter<"ShopifyOrders"> | Date | string
    user_id?: IntFilter<"ShopifyOrders"> | number
  }

  export type TemporaryDataUpsertWithWhereUniqueWithoutUserInput = {
    where: TemporaryDataWhereUniqueInput
    update: XOR<TemporaryDataUpdateWithoutUserInput, TemporaryDataUncheckedUpdateWithoutUserInput>
    create: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput>
  }

  export type TemporaryDataUpdateWithWhereUniqueWithoutUserInput = {
    where: TemporaryDataWhereUniqueInput
    data: XOR<TemporaryDataUpdateWithoutUserInput, TemporaryDataUncheckedUpdateWithoutUserInput>
  }

  export type TemporaryDataUpdateManyWithWhereWithoutUserInput = {
    where: TemporaryDataScalarWhereInput
    data: XOR<TemporaryDataUpdateManyMutationInput, TemporaryDataUncheckedUpdateManyWithoutUserInput>
  }

  export type TemporaryDataScalarWhereInput = {
    AND?: TemporaryDataScalarWhereInput | TemporaryDataScalarWhereInput[]
    OR?: TemporaryDataScalarWhereInput[]
    NOT?: TemporaryDataScalarWhereInput | TemporaryDataScalarWhereInput[]
    id?: IntFilter<"TemporaryData"> | number
    email?: StringFilter<"TemporaryData"> | string
    data?: JsonFilter<"TemporaryData">
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    userId?: IntNullableFilter<"TemporaryData"> | number | null
  }

  export type DarazStoreTransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: DarazStoreTransactionsWhereUniqueInput
    update: XOR<DarazStoreTransactionsUpdateWithoutUserInput, DarazStoreTransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<DarazStoreTransactionsCreateWithoutUserInput, DarazStoreTransactionsUncheckedCreateWithoutUserInput>
  }

  export type DarazStoreTransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: DarazStoreTransactionsWhereUniqueInput
    data: XOR<DarazStoreTransactionsUpdateWithoutUserInput, DarazStoreTransactionsUncheckedUpdateWithoutUserInput>
  }

  export type DarazStoreTransactionsUpdateManyWithWhereWithoutUserInput = {
    where: DarazStoreTransactionsScalarWhereInput
    data: XOR<DarazStoreTransactionsUpdateManyMutationInput, DarazStoreTransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type DarazStoreTransactionsScalarWhereInput = {
    AND?: DarazStoreTransactionsScalarWhereInput | DarazStoreTransactionsScalarWhereInput[]
    OR?: DarazStoreTransactionsScalarWhereInput[]
    NOT?: DarazStoreTransactionsScalarWhereInput | DarazStoreTransactionsScalarWhereInput[]
    id?: IntFilter<"DarazStoreTransactions"> | number
    amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_date?: DateTimeNullableFilter<"DarazStoreTransactions"> | Date | string | null
    transaction_type?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    statement?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    payment_ref_id?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    fee_name?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    paid_status?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    WHT_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    VAT_in_amount?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    transaction_number?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    comment?: StringNullableFilter<"DarazStoreTransactions"> | string | null
    user_id?: IntFilter<"DarazStoreTransactions"> | number
  }

  export type UserCreateWithoutStoresInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDarazOrdersInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazOrdersInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazOrdersInput, UserUncheckedCreateWithoutDarazOrdersInput>
  }

  export type UserUpsertWithoutDarazOrdersInput = {
    update: XOR<UserUpdateWithoutDarazOrdersInput, UserUncheckedUpdateWithoutDarazOrdersInput>
    create: XOR<UserCreateWithoutDarazOrdersInput, UserUncheckedCreateWithoutDarazOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazOrdersInput, UserUncheckedUpdateWithoutDarazOrdersInput>
  }

  export type UserUpdateWithoutDarazOrdersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDarazUnpaidTransactionsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazUnpaidTransactionsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazUnpaidTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazUnpaidTransactionsInput, UserUncheckedCreateWithoutDarazUnpaidTransactionsInput>
  }

  export type UserUpsertWithoutDarazUnpaidTransactionsInput = {
    update: XOR<UserUpdateWithoutDarazUnpaidTransactionsInput, UserUncheckedUpdateWithoutDarazUnpaidTransactionsInput>
    create: XOR<UserCreateWithoutDarazUnpaidTransactionsInput, UserUncheckedCreateWithoutDarazUnpaidTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazUnpaidTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazUnpaidTransactionsInput, UserUncheckedUpdateWithoutDarazUnpaidTransactionsInput>
  }

  export type UserUpdateWithoutDarazUnpaidTransactionsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazUnpaidTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShopifyOrdersInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopifyOrdersInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopifyOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopifyOrdersInput, UserUncheckedCreateWithoutShopifyOrdersInput>
  }

  export type UserUpsertWithoutShopifyOrdersInput = {
    update: XOR<UserUpdateWithoutShopifyOrdersInput, UserUncheckedUpdateWithoutShopifyOrdersInput>
    create: XOR<UserCreateWithoutShopifyOrdersInput, UserUncheckedCreateWithoutShopifyOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopifyOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopifyOrdersInput, UserUncheckedUpdateWithoutShopifyOrdersInput>
  }

  export type UserUpdateWithoutShopifyOrdersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopifyOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCourierInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourierInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
  }

  export type UserUpsertWithoutCourierInput = {
    update: XOR<UserUpdateWithoutCourierInput, UserUncheckedUpdateWithoutCourierInput>
    create: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourierInput, UserUncheckedUpdateWithoutCourierInput>
  }

  export type UserUpdateWithoutCourierInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourierInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTemporaryDataInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemporaryDataInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemporaryDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
  }

  export type UserUpsertWithoutTemporaryDataInput = {
    update: XOR<UserUpdateWithoutTemporaryDataInput, UserUncheckedUpdateWithoutTemporaryDataInput>
    create: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemporaryDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemporaryDataInput, UserUncheckedUpdateWithoutTemporaryDataInput>
  }

  export type UserUpdateWithoutTemporaryDataInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemporaryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransactions?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreCreateManyUserInput = {
    id?: number
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type CourierCreateManyUserInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
  }

  export type DarazOrdersCreateManyUserInput = {
    order_id?: string
    seller_id?: string | null
    voucher_platform?: string | null
    voucher?: string | null
    voucher_seller?: string | null
    order_number?: string | null
    created_at?: Date | string | null
    voucher_code?: string | null
    gift_option?: string | null
    shipping_fee_discount_platform?: string | null
    customer_name?: string | null
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    statuses: string
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
  }

  export type ShopifyOrdersCreateManyUserInput = {
    order_id?: string
    domain: string
    order_name?: string | null
    contact_email?: string | null
    created_at: Date | string
    current_total_additional_fees_set?: string | null
    current_total_discounts?: string | null
    current_total_duties_set?: string | null
    current_total_price?: string | null
    current_total_tax?: string | null
    email?: string | null
    financial_status?: string | null
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note?: string | null
    phone: string
    processed_at: Date | string
    referring_site?: string | null
    source_name?: string | null
    subtotal_price?: string | null
    tags?: string | null
    total_discounts?: string | null
    total_line_items_price?: string | null
    total_outstanding?: string | null
    total_price?: string | null
    updated_at: Date | string
  }

  export type TemporaryDataCreateManyUserInput = {
    id?: number
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DarazStoreTransactionsCreateManyUserInput = {
    id?: number
    amount?: string | null
    transaction_date?: Date | string | null
    transaction_type?: string | null
    statement?: string | null
    payment_ref_id?: string | null
    fee_name?: string | null
    paid_status?: string | null
    WHT_amount?: string | null
    VAT_in_amount?: string | null
    transaction_number?: string | null
    comment?: string | null
  }

  export type StoreUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type CourierUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
  }

  export type CourierUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
  }

  export type CourierUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    shippers?: JsonNullValueInput | InputJsonValue
  }

  export type DarazOrdersUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrdersUncheckedUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrdersUncheckedUpdateManyWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_platform?: NullableStringFieldUpdateOperationsInput | string | null
    voucher?: NullableStringFieldUpdateOperationsInput | string | null
    voucher_seller?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    gift_option?: NullableStringFieldUpdateOperationsInput | string | null
    shipping_fee_discount_platform?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    statuses?: StringFieldUpdateOperationsInput | string
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrdersUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyOrdersUncheckedUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyOrdersUncheckedUpdateManyWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    current_total_additional_fees_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_duties_set?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_price?: NullableStringFieldUpdateOperationsInput | string | null
    current_total_tax?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: NullableStringFieldUpdateOperationsInput | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal_price?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_discounts?: NullableStringFieldUpdateOperationsInput | string | null
    total_line_items_price?: NullableStringFieldUpdateOperationsInput | string | null
    total_outstanding?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryDataUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryDataUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DarazStoreTransactionsUpdateWithoutUserInput = {
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DarazStoreTransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DarazStoreTransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    statement?: NullableStringFieldUpdateOperationsInput | string | null
    payment_ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    fee_name?: NullableStringFieldUpdateOperationsInput | string | null
    paid_status?: NullableStringFieldUpdateOperationsInput | string | null
    WHT_amount?: NullableStringFieldUpdateOperationsInput | string | null
    VAT_in_amount?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_number?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazOrdersDefaultArgs instead
     */
    export type DarazOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazOrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazStoreTransactionsDefaultArgs instead
     */
    export type DarazStoreTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazStoreTransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopifyOrdersDefaultArgs instead
     */
    export type ShopifyOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopifyOrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierDefaultArgs instead
     */
    export type CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemporaryDataDefaultArgs instead
     */
    export type TemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemporaryDataDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}