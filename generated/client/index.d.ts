
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
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
 * Model DarazLogs
 * 
 */
export type DarazLogs = $Result.DefaultSelection<Prisma.$DarazLogsPayload>

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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

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

  /**
   * `prisma.darazLogs`: Exposes CRUD operations for the **DarazLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazLogs
    * const darazLogs = await prisma.darazLogs.findMany()
    * ```
    */
  get darazLogs(): Prisma.DarazLogsDelegate<ExtArgs>;
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
    Customer: 'Customer',
    DarazStoreTransactions: 'DarazStoreTransactions',
    ShopifyOrders: 'ShopifyOrders',
    Courier: 'Courier',
    TemporaryData: 'TemporaryData',
    DarazLogs: 'DarazLogs'
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
      modelProps: 'user' | 'store' | 'darazOrders' | 'customer' | 'darazStoreTransactions' | 'shopifyOrders' | 'courier' | 'temporaryData' | 'darazLogs'
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
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
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
      DarazLogs: {
        payload: Prisma.$DarazLogsPayload<ExtArgs>
        fields: Prisma.DarazLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazLogsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazLogsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          findFirst: {
            args: Prisma.DarazLogsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazLogsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          findMany: {
            args: Prisma.DarazLogsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>[]
          }
          create: {
            args: Prisma.DarazLogsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          createMany: {
            args: Prisma.DarazLogsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazLogsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          update: {
            args: Prisma.DarazLogsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          deleteMany: {
            args: Prisma.DarazLogsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazLogsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazLogsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazLogsPayload>
          }
          aggregate: {
            args: Prisma.DarazLogsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazLogs>
          }
          groupBy: {
            args: Prisma.DarazLogsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazLogsCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazLogsCountAggregateOutputType> | number
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
    Store: number
    Courier: number
    DarazOrder: number
    ShopifyOrder: number
    TemporaryData: number
    DarazUnpaidTransaction: number
    Customer: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | UserCountOutputTypeCountStoreArgs
    Courier?: boolean | UserCountOutputTypeCountCourierArgs
    DarazOrder?: boolean | UserCountOutputTypeCountDarazOrderArgs
    ShopifyOrder?: boolean | UserCountOutputTypeCountShopifyOrderArgs
    TemporaryData?: boolean | UserCountOutputTypeCountTemporaryDataArgs
    DarazUnpaidTransaction?: boolean | UserCountOutputTypeCountDarazUnpaidTransactionArgs
    Customer?: boolean | UserCountOutputTypeCountCustomerArgs
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
  export type UserCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCountOutputTypeCountDarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrdersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCountOutputTypeCountDarazUnpaidTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazStoreTransactionsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    DarazOrders: number
    ShopifyOrders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DarazOrders?: boolean | CustomerCountOutputTypeCountDarazOrdersArgs
    ShopifyOrders?: boolean | CustomerCountOutputTypeCountShopifyOrdersArgs
  }

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDarazOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrdersWhereInput
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountShopifyOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrdersWhereInput
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
    Store?: boolean | User$StoreArgs<ExtArgs>
    Courier?: boolean | User$CourierArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    ShopifyOrder?: boolean | User$ShopifyOrderArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazUnpaidTransaction?: boolean | User$DarazUnpaidTransactionArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
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
    Store?: boolean | User$StoreArgs<ExtArgs>
    Courier?: boolean | User$CourierArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    ShopifyOrder?: boolean | User$ShopifyOrderArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazUnpaidTransaction?: boolean | User$DarazUnpaidTransactionArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs>[]
      Courier: Prisma.$CourierPayload<ExtArgs>[]
      DarazOrder: Prisma.$DarazOrdersPayload<ExtArgs>[]
      ShopifyOrder: Prisma.$ShopifyOrdersPayload<ExtArgs>[]
      TemporaryData: Prisma.$TemporaryDataPayload<ExtArgs>[]
      DarazUnpaidTransaction: Prisma.$DarazStoreTransactionsPayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
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

    Store<T extends User$StoreArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'> | Null>;

    Courier<T extends User$CourierArgs<ExtArgs> = {}>(args?: Subset<T, User$CourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazOrder<T extends User$DarazOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShopifyOrder<T extends User$ShopifyOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$ShopifyOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    TemporaryData<T extends User$TemporaryDataArgs<ExtArgs> = {}>(args?: Subset<T, User$TemporaryDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazUnpaidTransaction<T extends User$DarazUnpaidTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazUnpaidTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazStoreTransactionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Customer<T extends User$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * User.Store
   */
  export type User$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.DarazOrder
   */
  export type User$DarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.ShopifyOrder
   */
  export type User$ShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.DarazUnpaidTransaction
   */
  export type User$DarazUnpaidTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.Customer
   */
  export type User$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
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
    user_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    user_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    seller_id: string | null
    name: string | null
    platform: string | null
    image_url: string | null
    image_public_id: string | null
    user_id: number | null
  }

  export type StoreMaxAggregateOutputType = {
    seller_id: string | null
    name: string | null
    platform: string | null
    image_url: string | null
    image_public_id: string | null
    user_id: number | null
  }

  export type StoreCountAggregateOutputType = {
    seller_id: number
    name: number
    platform: number
    image_url: number
    image_public_id: number
    store_info: number
    user_id: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    user_id?: true
  }

  export type StoreSumAggregateInputType = {
    user_id?: true
  }

  export type StoreMinAggregateInputType = {
    seller_id?: true
    name?: true
    platform?: true
    image_url?: true
    image_public_id?: true
    user_id?: true
  }

  export type StoreMaxAggregateInputType = {
    seller_id?: true
    name?: true
    platform?: true
    image_url?: true
    image_public_id?: true
    user_id?: true
  }

  export type StoreCountAggregateInputType = {
    seller_id?: true
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
    seller_id: string
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
    seller_id?: boolean
    name?: boolean
    platform?: boolean
    image_url?: boolean
    image_public_id?: boolean
    store_info?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    seller_id?: boolean
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
      seller_id: string
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
     * // Only select the `seller_id`
     * const storeWithSeller_idOnly = await prisma.store.findMany({ select: { seller_id: true } })
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
    readonly seller_id: FieldRef<"Store", 'String'>
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
    price: Decimal | null
    user_id: number | null
  }

  export type DarazOrdersSumAggregateOutputType = {
    price: Decimal | null
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
    promised_shipping_times: string | null
    updated_at: Date | null
    price: Decimal | null
    shipping_fee_original: string | null
    payment_method: string | null
    shipping_fee_discount_seller: string | null
    shipping_fee: string | null
    items_count: string | null
    payment_status: boolean | null
    is_received: boolean | null
    gift_message: string | null
    remarks: string | null
    shop_logo: string | null
    user_id: number | null
    customer_id: string | null
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
    promised_shipping_times: string | null
    updated_at: Date | null
    price: Decimal | null
    shipping_fee_original: string | null
    payment_method: string | null
    shipping_fee_discount_seller: string | null
    shipping_fee: string | null
    items_count: string | null
    payment_status: boolean | null
    is_received: boolean | null
    gift_message: string | null
    remarks: string | null
    shop_logo: string | null
    user_id: number | null
    customer_id: string | null
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
    promised_shipping_times: number
    updated_at: number
    price: number
    shipping_fee_original: number
    payment_method: number
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: number
    statuses: number
    is_received: number
    address_billing: number
    gift_message: number
    remarks: number
    address_shipping: number
    order_items: number
    transactions: number
    shop_logo: number
    user_id: number
    customer_id: number
    _all: number
  }


  export type DarazOrdersAvgAggregateInputType = {
    price?: true
    user_id?: true
  }

  export type DarazOrdersSumAggregateInputType = {
    price?: true
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
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    payment_status?: true
    is_received?: true
    gift_message?: true
    remarks?: true
    shop_logo?: true
    user_id?: true
    customer_id?: true
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
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    payment_status?: true
    is_received?: true
    gift_message?: true
    remarks?: true
    shop_logo?: true
    user_id?: true
    customer_id?: true
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
    promised_shipping_times?: true
    updated_at?: true
    price?: true
    shipping_fee_original?: true
    payment_method?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    payment_status?: true
    statuses?: true
    is_received?: true
    address_billing?: true
    gift_message?: true
    remarks?: true
    address_shipping?: true
    order_items?: true
    transactions?: true
    shop_logo?: true
    user_id?: true
    customer_id?: true
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
    promised_shipping_times: string | null
    updated_at: Date
    price: Decimal
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses: string[]
    is_received: boolean
    address_billing: JsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonValue
    order_items: JsonValue
    transactions: JsonValue
    shop_logo: string
    user_id: number
    customer_id: string
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
    promised_shipping_times?: boolean
    updated_at?: boolean
    price?: boolean
    shipping_fee_original?: boolean
    payment_method?: boolean
    shipping_fee_discount_seller?: boolean
    shipping_fee?: boolean
    items_count?: boolean
    payment_status?: boolean
    statuses?: boolean
    is_received?: boolean
    address_billing?: boolean
    gift_message?: boolean
    remarks?: boolean
    address_shipping?: boolean
    order_items?: boolean
    transactions?: boolean
    shop_logo?: boolean
    user_id?: boolean
    customer_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
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
    promised_shipping_times?: boolean
    updated_at?: boolean
    price?: boolean
    shipping_fee_original?: boolean
    payment_method?: boolean
    shipping_fee_discount_seller?: boolean
    shipping_fee?: boolean
    items_count?: boolean
    payment_status?: boolean
    statuses?: boolean
    is_received?: boolean
    address_billing?: boolean
    gift_message?: boolean
    remarks?: boolean
    address_shipping?: boolean
    order_items?: boolean
    transactions?: boolean
    shop_logo?: boolean
    user_id?: boolean
    customer_id?: boolean
  }

  export type DarazOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }


  export type $DarazOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazOrders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
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
      promised_shipping_times: string | null
      updated_at: Date
      price: Prisma.Decimal
      shipping_fee_original: string
      payment_method: string
      shipping_fee_discount_seller: string
      shipping_fee: string
      items_count: string
      payment_status: boolean
      statuses: string[]
      is_received: boolean
      address_billing: Prisma.JsonValue
      gift_message: string
      remarks: string
      address_shipping: Prisma.JsonValue
      order_items: Prisma.JsonValue
      transactions: Prisma.JsonValue
      shop_logo: string
      user_id: number
      customer_id: string
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

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly promised_shipping_times: FieldRef<"DarazOrders", 'String'>
    readonly updated_at: FieldRef<"DarazOrders", 'DateTime'>
    readonly price: FieldRef<"DarazOrders", 'Decimal'>
    readonly shipping_fee_original: FieldRef<"DarazOrders", 'String'>
    readonly payment_method: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee_discount_seller: FieldRef<"DarazOrders", 'String'>
    readonly shipping_fee: FieldRef<"DarazOrders", 'String'>
    readonly items_count: FieldRef<"DarazOrders", 'String'>
    readonly payment_status: FieldRef<"DarazOrders", 'Boolean'>
    readonly statuses: FieldRef<"DarazOrders", 'String[]'>
    readonly is_received: FieldRef<"DarazOrders", 'Boolean'>
    readonly address_billing: FieldRef<"DarazOrders", 'Json'>
    readonly gift_message: FieldRef<"DarazOrders", 'String'>
    readonly remarks: FieldRef<"DarazOrders", 'String'>
    readonly address_shipping: FieldRef<"DarazOrders", 'Json'>
    readonly order_items: FieldRef<"DarazOrders", 'Json'>
    readonly transactions: FieldRef<"DarazOrders", 'Json'>
    readonly shop_logo: FieldRef<"DarazOrders", 'String'>
    readonly user_id: FieldRef<"DarazOrders", 'Int'>
    readonly customer_id: FieldRef<"DarazOrders", 'String'>
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
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    user_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    user_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    shopify_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    city: string | null
    province: string | null
    country: string | null
    user_id: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    shopify_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    city: string | null
    province: string | null
    country: string | null
    user_id: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    shopify_id: number
    first_name: number
    last_name: number
    email: number
    city: number
    province: number
    country: number
    user_id: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    user_id?: true
  }

  export type CustomerSumAggregateInputType = {
    user_id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    shopify_id?: true
    first_name?: true
    last_name?: true
    email?: true
    city?: true
    province?: true
    country?: true
    user_id?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    shopify_id?: true
    first_name?: true
    last_name?: true
    email?: true
    city?: true
    province?: true
    country?: true
    user_id?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    shopify_id?: true
    first_name?: true
    last_name?: true
    email?: true
    city?: true
    province?: true
    country?: true
    user_id?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    shopify_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    city: string | null
    province: string | null
    country: string | null
    user_id: number
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    DarazOrders?: boolean | Customer$DarazOrdersArgs<ExtArgs>
    ShopifyOrders?: boolean | Customer$ShopifyOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    shopify_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    user_id?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    DarazOrders?: boolean | Customer$DarazOrdersArgs<ExtArgs>
    ShopifyOrders?: boolean | Customer$ShopifyOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      DarazOrders: Prisma.$DarazOrdersPayload<ExtArgs>[]
      ShopifyOrders: Prisma.$ShopifyOrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopify_id: string | null
      first_name: string | null
      last_name: string | null
      email: string | null
      city: string | null
      province: string | null
      country: string | null
      user_id: number
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DarazOrders<T extends Customer$DarazOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$DarazOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShopifyOrders<T extends Customer$ShopifyOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ShopifyOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly shopify_id: FieldRef<"Customer", 'String'>
    readonly first_name: FieldRef<"Customer", 'String'>
    readonly last_name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly province: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly user_id: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.DarazOrders
   */
  export type Customer$DarazOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Customer.ShopifyOrders
   */
  export type Customer$ShopifyOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude<ExtArgs> | null
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
    user_id: number | null
  }

  export type DarazStoreTransactionsSumAggregateOutputType = {
    user_id: number | null
  }

  export type DarazStoreTransactionsMinAggregateOutputType = {
    seller_id: string | null
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
    seller_id: string | null
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
    seller_id: number
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
    user_id?: true
  }

  export type DarazStoreTransactionsSumAggregateInputType = {
    user_id?: true
  }

  export type DarazStoreTransactionsMinAggregateInputType = {
    seller_id?: true
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
    seller_id?: true
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
    seller_id?: true
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
    seller_id: string
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
    seller_id?: boolean
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
    seller_id?: boolean
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
      seller_id: string
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
     * // Only select the `seller_id`
     * const darazStoreTransactionsWithSeller_idOnly = await prisma.darazStoreTransactions.findMany({ select: { seller_id: true } })
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
    readonly seller_id: FieldRef<"DarazStoreTransactions", 'String'>
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
    customer_id: string | null
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
    customer_id: string | null
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
    customer_id: number
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
    customer_id?: true
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
    customer_id?: true
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
    customer_id?: true
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
    customer_id: string
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
    customer_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
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
    customer_id?: boolean
  }

  export type ShopifyOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }


  export type $ShopifyOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopifyOrders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
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
      customer_id: string
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

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly customer_id: FieldRef<"ShopifyOrders", 'String'>
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
   * Model DarazLogs
   */

  export type AggregateDarazLogs = {
    _count: DarazLogsCountAggregateOutputType | null
    _avg: DarazLogsAvgAggregateOutputType | null
    _sum: DarazLogsSumAggregateOutputType | null
    _min: DarazLogsMinAggregateOutputType | null
    _max: DarazLogsMaxAggregateOutputType | null
  }

  export type DarazLogsAvgAggregateOutputType = {
    id: number | null
  }

  export type DarazLogsSumAggregateOutputType = {
    id: number | null
  }

  export type DarazLogsMinAggregateOutputType = {
    id: number | null
    seller_id: string | null
    fetched_from_api: string | null
    orders_appended_single_request: string | null
    orders_appended: string | null
    total_store_orders: string | null
    daraz_url: string | null
  }

  export type DarazLogsMaxAggregateOutputType = {
    id: number | null
    seller_id: string | null
    fetched_from_api: string | null
    orders_appended_single_request: string | null
    orders_appended: string | null
    total_store_orders: string | null
    daraz_url: string | null
  }

  export type DarazLogsCountAggregateOutputType = {
    id: number
    seller_id: number
    fetched_from_api: number
    orders_appended_single_request: number
    orders_appended: number
    total_store_orders: number
    daraz_url: number
    _all: number
  }


  export type DarazLogsAvgAggregateInputType = {
    id?: true
  }

  export type DarazLogsSumAggregateInputType = {
    id?: true
  }

  export type DarazLogsMinAggregateInputType = {
    id?: true
    seller_id?: true
    fetched_from_api?: true
    orders_appended_single_request?: true
    orders_appended?: true
    total_store_orders?: true
    daraz_url?: true
  }

  export type DarazLogsMaxAggregateInputType = {
    id?: true
    seller_id?: true
    fetched_from_api?: true
    orders_appended_single_request?: true
    orders_appended?: true
    total_store_orders?: true
    daraz_url?: true
  }

  export type DarazLogsCountAggregateInputType = {
    id?: true
    seller_id?: true
    fetched_from_api?: true
    orders_appended_single_request?: true
    orders_appended?: true
    total_store_orders?: true
    daraz_url?: true
    _all?: true
  }

  export type DarazLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazLogs to aggregate.
     */
    where?: DarazLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazLogs to fetch.
     */
    orderBy?: DarazLogsOrderByWithRelationInput | DarazLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DarazLogs
    **/
    _count?: true | DarazLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazLogsMaxAggregateInputType
  }

  export type GetDarazLogsAggregateType<T extends DarazLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazLogs[P]>
      : GetScalarType<T[P], AggregateDarazLogs[P]>
  }




  export type DarazLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazLogsWhereInput
    orderBy?: DarazLogsOrderByWithAggregationInput | DarazLogsOrderByWithAggregationInput[]
    by: DarazLogsScalarFieldEnum[] | DarazLogsScalarFieldEnum
    having?: DarazLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazLogsCountAggregateInputType | true
    _avg?: DarazLogsAvgAggregateInputType
    _sum?: DarazLogsSumAggregateInputType
    _min?: DarazLogsMinAggregateInputType
    _max?: DarazLogsMaxAggregateInputType
  }

  export type DarazLogsGroupByOutputType = {
    id: number
    seller_id: string
    fetched_from_api: string
    orders_appended_single_request: string
    orders_appended: string
    total_store_orders: string
    daraz_url: string
    _count: DarazLogsCountAggregateOutputType | null
    _avg: DarazLogsAvgAggregateOutputType | null
    _sum: DarazLogsSumAggregateOutputType | null
    _min: DarazLogsMinAggregateOutputType | null
    _max: DarazLogsMaxAggregateOutputType | null
  }

  type GetDarazLogsGroupByPayload<T extends DarazLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazLogsGroupByOutputType[P]>
            : GetScalarType<T[P], DarazLogsGroupByOutputType[P]>
        }
      >
    >


  export type DarazLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seller_id?: boolean
    fetched_from_api?: boolean
    orders_appended_single_request?: boolean
    orders_appended?: boolean
    total_store_orders?: boolean
    daraz_url?: boolean
  }, ExtArgs["result"]["darazLogs"]>

  export type DarazLogsSelectScalar = {
    id?: boolean
    seller_id?: boolean
    fetched_from_api?: boolean
    orders_appended_single_request?: boolean
    orders_appended?: boolean
    total_store_orders?: boolean
    daraz_url?: boolean
  }


  export type $DarazLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazLogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seller_id: string
      fetched_from_api: string
      orders_appended_single_request: string
      orders_appended: string
      total_store_orders: string
      daraz_url: string
    }, ExtArgs["result"]["darazLogs"]>
    composites: {}
  }


  type DarazLogsGetPayload<S extends boolean | null | undefined | DarazLogsDefaultArgs> = $Result.GetResult<Prisma.$DarazLogsPayload, S>

  type DarazLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazLogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazLogsCountAggregateInputType | true
    }

  export interface DarazLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazLogs'], meta: { name: 'DarazLogs' } }
    /**
     * Find zero or one DarazLogs that matches the filter.
     * @param {DarazLogsFindUniqueArgs} args - Arguments to find a DarazLogs
     * @example
     * // Get one DarazLogs
     * const darazLogs = await prisma.darazLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazLogsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazLogs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazLogsFindUniqueOrThrowArgs} args - Arguments to find a DarazLogs
     * @example
     * // Get one DarazLogs
     * const darazLogs = await prisma.darazLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazLogsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsFindFirstArgs} args - Arguments to find a DarazLogs
     * @example
     * // Get one DarazLogs
     * const darazLogs = await prisma.darazLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazLogsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsFindFirstArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsFindFirstOrThrowArgs} args - Arguments to find a DarazLogs
     * @example
     * // Get one DarazLogs
     * const darazLogs = await prisma.darazLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazLogsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazLogs
     * const darazLogs = await prisma.darazLogs.findMany()
     * 
     * // Get first 10 DarazLogs
     * const darazLogs = await prisma.darazLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const darazLogsWithIdOnly = await prisma.darazLogs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DarazLogsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazLogs.
     * @param {DarazLogsCreateArgs} args - Arguments to create a DarazLogs.
     * @example
     * // Create one DarazLogs
     * const DarazLogs = await prisma.darazLogs.create({
     *   data: {
     *     // ... data to create a DarazLogs
     *   }
     * })
     * 
    **/
    create<T extends DarazLogsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsCreateArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazLogs.
     *     @param {DarazLogsCreateManyArgs} args - Arguments to create many DarazLogs.
     *     @example
     *     // Create many DarazLogs
     *     const darazLogs = await prisma.darazLogs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazLogsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazLogs.
     * @param {DarazLogsDeleteArgs} args - Arguments to delete one DarazLogs.
     * @example
     * // Delete one DarazLogs
     * const DarazLogs = await prisma.darazLogs.delete({
     *   where: {
     *     // ... filter to delete one DarazLogs
     *   }
     * })
     * 
    **/
    delete<T extends DarazLogsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsDeleteArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazLogs.
     * @param {DarazLogsUpdateArgs} args - Arguments to update one DarazLogs.
     * @example
     * // Update one DarazLogs
     * const darazLogs = await prisma.darazLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazLogsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsUpdateArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazLogs.
     * @param {DarazLogsDeleteManyArgs} args - Arguments to filter DarazLogs to delete.
     * @example
     * // Delete a few DarazLogs
     * const { count } = await prisma.darazLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazLogsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazLogsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazLogs
     * const darazLogs = await prisma.darazLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazLogsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazLogs.
     * @param {DarazLogsUpsertArgs} args - Arguments to update or create a DarazLogs.
     * @example
     * // Update or create a DarazLogs
     * const darazLogs = await prisma.darazLogs.upsert({
     *   create: {
     *     // ... data to create a DarazLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazLogs we want to update
     *   }
     * })
    **/
    upsert<T extends DarazLogsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazLogsUpsertArgs<ExtArgs>>
    ): Prisma__DarazLogsClient<$Result.GetResult<Prisma.$DarazLogsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsCountArgs} args - Arguments to filter DarazLogs to count.
     * @example
     * // Count the number of DarazLogs
     * const count = await prisma.darazLogs.count({
     *   where: {
     *     // ... the filter for the DarazLogs we want to count
     *   }
     * })
    **/
    count<T extends DarazLogsCountArgs>(
      args?: Subset<T, DarazLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DarazLogsAggregateArgs>(args: Subset<T, DarazLogsAggregateArgs>): Prisma.PrismaPromise<GetDarazLogsAggregateType<T>>

    /**
     * Group by DarazLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazLogsGroupByArgs} args - Group by arguments.
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
      T extends DarazLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazLogsGroupByArgs['orderBy'] }
        : { orderBy?: DarazLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DarazLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazLogs model
   */
  readonly fields: DarazLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the DarazLogs model
   */ 
  interface DarazLogsFieldRefs {
    readonly id: FieldRef<"DarazLogs", 'Int'>
    readonly seller_id: FieldRef<"DarazLogs", 'String'>
    readonly fetched_from_api: FieldRef<"DarazLogs", 'String'>
    readonly orders_appended_single_request: FieldRef<"DarazLogs", 'String'>
    readonly orders_appended: FieldRef<"DarazLogs", 'String'>
    readonly total_store_orders: FieldRef<"DarazLogs", 'String'>
    readonly daraz_url: FieldRef<"DarazLogs", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DarazLogs findUnique
   */
  export type DarazLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter, which DarazLogs to fetch.
     */
    where: DarazLogsWhereUniqueInput
  }


  /**
   * DarazLogs findUniqueOrThrow
   */
  export type DarazLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter, which DarazLogs to fetch.
     */
    where: DarazLogsWhereUniqueInput
  }


  /**
   * DarazLogs findFirst
   */
  export type DarazLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter, which DarazLogs to fetch.
     */
    where?: DarazLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazLogs to fetch.
     */
    orderBy?: DarazLogsOrderByWithRelationInput | DarazLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazLogs.
     */
    cursor?: DarazLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazLogs.
     */
    distinct?: DarazLogsScalarFieldEnum | DarazLogsScalarFieldEnum[]
  }


  /**
   * DarazLogs findFirstOrThrow
   */
  export type DarazLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter, which DarazLogs to fetch.
     */
    where?: DarazLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazLogs to fetch.
     */
    orderBy?: DarazLogsOrderByWithRelationInput | DarazLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazLogs.
     */
    cursor?: DarazLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazLogs.
     */
    distinct?: DarazLogsScalarFieldEnum | DarazLogsScalarFieldEnum[]
  }


  /**
   * DarazLogs findMany
   */
  export type DarazLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter, which DarazLogs to fetch.
     */
    where?: DarazLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazLogs to fetch.
     */
    orderBy?: DarazLogsOrderByWithRelationInput | DarazLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazLogs.
     */
    cursor?: DarazLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazLogs.
     */
    skip?: number
    distinct?: DarazLogsScalarFieldEnum | DarazLogsScalarFieldEnum[]
  }


  /**
   * DarazLogs create
   */
  export type DarazLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * The data needed to create a DarazLogs.
     */
    data: XOR<DarazLogsCreateInput, DarazLogsUncheckedCreateInput>
  }


  /**
   * DarazLogs createMany
   */
  export type DarazLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazLogs.
     */
    data: DarazLogsCreateManyInput | DarazLogsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazLogs update
   */
  export type DarazLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * The data needed to update a DarazLogs.
     */
    data: XOR<DarazLogsUpdateInput, DarazLogsUncheckedUpdateInput>
    /**
     * Choose, which DarazLogs to update.
     */
    where: DarazLogsWhereUniqueInput
  }


  /**
   * DarazLogs updateMany
   */
  export type DarazLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazLogs.
     */
    data: XOR<DarazLogsUpdateManyMutationInput, DarazLogsUncheckedUpdateManyInput>
    /**
     * Filter which DarazLogs to update
     */
    where?: DarazLogsWhereInput
  }


  /**
   * DarazLogs upsert
   */
  export type DarazLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * The filter to search for the DarazLogs to update in case it exists.
     */
    where: DarazLogsWhereUniqueInput
    /**
     * In case the DarazLogs found by the `where` argument doesn't exist, create a new DarazLogs with this data.
     */
    create: XOR<DarazLogsCreateInput, DarazLogsUncheckedCreateInput>
    /**
     * In case the DarazLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazLogsUpdateInput, DarazLogsUncheckedUpdateInput>
  }


  /**
   * DarazLogs delete
   */
  export type DarazLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
    /**
     * Filter which DarazLogs to delete.
     */
    where: DarazLogsWhereUniqueInput
  }


  /**
   * DarazLogs deleteMany
   */
  export type DarazLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazLogs to delete
     */
    where?: DarazLogsWhereInput
  }


  /**
   * DarazLogs without action
   */
  export type DarazLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazLogs
     */
    select?: DarazLogsSelect<ExtArgs> | null
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
    seller_id: 'seller_id',
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
    promised_shipping_times: 'promised_shipping_times',
    updated_at: 'updated_at',
    price: 'price',
    shipping_fee_original: 'shipping_fee_original',
    payment_method: 'payment_method',
    shipping_fee_discount_seller: 'shipping_fee_discount_seller',
    shipping_fee: 'shipping_fee',
    items_count: 'items_count',
    payment_status: 'payment_status',
    statuses: 'statuses',
    is_received: 'is_received',
    address_billing: 'address_billing',
    gift_message: 'gift_message',
    remarks: 'remarks',
    address_shipping: 'address_shipping',
    order_items: 'order_items',
    transactions: 'transactions',
    shop_logo: 'shop_logo',
    user_id: 'user_id',
    customer_id: 'customer_id'
  };

  export type DarazOrdersScalarFieldEnum = (typeof DarazOrdersScalarFieldEnum)[keyof typeof DarazOrdersScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    shopify_id: 'shopify_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    city: 'city',
    province: 'province',
    country: 'country',
    user_id: 'user_id'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DarazStoreTransactionsScalarFieldEnum: {
    seller_id: 'seller_id',
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
    user_id: 'user_id',
    customer_id: 'customer_id'
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


  export const DarazLogsScalarFieldEnum: {
    id: 'id',
    seller_id: 'seller_id',
    fetched_from_api: 'fetched_from_api',
    orders_appended_single_request: 'orders_appended_single_request',
    orders_appended: 'orders_appended',
    total_store_orders: 'total_store_orders',
    daraz_url: 'daraz_url'
  };

  export type DarazLogsScalarFieldEnum = (typeof DarazLogsScalarFieldEnum)[keyof typeof DarazLogsScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    Store?: StoreListRelationFilter
    Courier?: CourierListRelationFilter
    DarazOrder?: DarazOrdersListRelationFilter
    ShopifyOrder?: ShopifyOrdersListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazUnpaidTransaction?: DarazStoreTransactionsListRelationFilter
    Customer?: CustomerListRelationFilter
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
    Store?: StoreOrderByRelationAggregateInput
    Courier?: CourierOrderByRelationAggregateInput
    DarazOrder?: DarazOrdersOrderByRelationAggregateInput
    ShopifyOrder?: ShopifyOrdersOrderByRelationAggregateInput
    TemporaryData?: TemporaryDataOrderByRelationAggregateInput
    DarazUnpaidTransaction?: DarazStoreTransactionsOrderByRelationAggregateInput
    Customer?: CustomerOrderByRelationAggregateInput
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
    Store?: StoreListRelationFilter
    Courier?: CourierListRelationFilter
    DarazOrder?: DarazOrdersListRelationFilter
    ShopifyOrder?: ShopifyOrdersListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazUnpaidTransaction?: DarazStoreTransactionsListRelationFilter
    Customer?: CustomerListRelationFilter
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
    seller_id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    platform?: StringFilter<"Store"> | string
    image_url?: StringFilter<"Store"> | string
    image_public_id?: StringFilter<"Store"> | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StoreOrderByWithRelationInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    store_info?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    seller_id?: string
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
  }, "seller_id" | "seller_id">

  export type StoreOrderByWithAggregationInput = {
    seller_id?: SortOrder
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
    seller_id?: StringWithAggregatesFilter<"Store"> | string
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
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: DecimalFilter<"DarazOrders"> | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    payment_status?: BoolFilter<"DarazOrders"> | boolean
    statuses?: StringNullableListFilter<"DarazOrders">
    is_received?: BoolFilter<"DarazOrders"> | boolean
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
    customer_id?: StringFilter<"DarazOrders"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
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
    promised_shipping_times?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    payment_status?: SortOrder
    statuses?: SortOrder
    is_received?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
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
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: DecimalFilter<"DarazOrders"> | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    payment_status?: BoolFilter<"DarazOrders"> | boolean
    statuses?: StringNullableListFilter<"DarazOrders">
    is_received?: BoolFilter<"DarazOrders"> | boolean
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
    customer_id?: StringFilter<"DarazOrders"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
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
    promised_shipping_times?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    payment_status?: SortOrder
    statuses?: SortOrder
    is_received?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
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
    promised_shipping_times?: StringNullableWithAggregatesFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"DarazOrders"> | Date | string
    price?: DecimalWithAggregatesFilter<"DarazOrders"> | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringWithAggregatesFilter<"DarazOrders"> | string
    payment_method?: StringWithAggregatesFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringWithAggregatesFilter<"DarazOrders"> | string
    shipping_fee?: StringWithAggregatesFilter<"DarazOrders"> | string
    items_count?: StringWithAggregatesFilter<"DarazOrders"> | string
    payment_status?: BoolWithAggregatesFilter<"DarazOrders"> | boolean
    statuses?: StringNullableListFilter<"DarazOrders">
    is_received?: BoolWithAggregatesFilter<"DarazOrders"> | boolean
    address_billing?: JsonWithAggregatesFilter<"DarazOrders">
    gift_message?: StringWithAggregatesFilter<"DarazOrders"> | string
    remarks?: StringWithAggregatesFilter<"DarazOrders"> | string
    address_shipping?: JsonWithAggregatesFilter<"DarazOrders">
    order_items?: JsonWithAggregatesFilter<"DarazOrders">
    transactions?: JsonWithAggregatesFilter<"DarazOrders">
    shop_logo?: StringWithAggregatesFilter<"DarazOrders"> | string
    user_id?: IntWithAggregatesFilter<"DarazOrders"> | number
    customer_id?: StringWithAggregatesFilter<"DarazOrders"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopify_id?: StringNullableFilter<"Customer"> | string | null
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    province?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrders?: DarazOrdersListRelationFilter
    ShopifyOrders?: ShopifyOrdersListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopify_id?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    DarazOrders?: DarazOrdersOrderByRelationAggregateInput
    ShopifyOrders?: ShopifyOrdersOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    shopify_id?: StringNullableFilter<"Customer"> | string | null
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    province?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrders?: DarazOrdersListRelationFilter
    ShopifyOrders?: ShopifyOrdersListRelationFilter
  }, "id" | "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopify_id?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    shopify_id?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    province?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    country?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    user_id?: IntWithAggregatesFilter<"Customer"> | number
  }

  export type DarazStoreTransactionsWhereInput = {
    AND?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    OR?: DarazStoreTransactionsWhereInput[]
    NOT?: DarazStoreTransactionsWhereInput | DarazStoreTransactionsWhereInput[]
    seller_id?: StringFilter<"DarazStoreTransactions"> | string
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
    seller_id?: SortOrder
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
    seller_id?: string
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
  }, "seller_id" | "seller_id">

  export type DarazStoreTransactionsOrderByWithAggregationInput = {
    seller_id?: SortOrder
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
    seller_id?: StringWithAggregatesFilter<"DarazStoreTransactions"> | string
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
    customer_id?: StringFilter<"ShopifyOrders"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
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
    customer_id?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
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
    customer_id?: StringFilter<"ShopifyOrders"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
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
    customer_id?: SortOrder
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
    customer_id?: StringWithAggregatesFilter<"ShopifyOrders"> | string
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

  export type DarazLogsWhereInput = {
    AND?: DarazLogsWhereInput | DarazLogsWhereInput[]
    OR?: DarazLogsWhereInput[]
    NOT?: DarazLogsWhereInput | DarazLogsWhereInput[]
    id?: IntFilter<"DarazLogs"> | number
    seller_id?: StringFilter<"DarazLogs"> | string
    fetched_from_api?: StringFilter<"DarazLogs"> | string
    orders_appended_single_request?: StringFilter<"DarazLogs"> | string
    orders_appended?: StringFilter<"DarazLogs"> | string
    total_store_orders?: StringFilter<"DarazLogs"> | string
    daraz_url?: StringFilter<"DarazLogs"> | string
  }

  export type DarazLogsOrderByWithRelationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    fetched_from_api?: SortOrder
    orders_appended_single_request?: SortOrder
    orders_appended?: SortOrder
    total_store_orders?: SortOrder
    daraz_url?: SortOrder
  }

  export type DarazLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DarazLogsWhereInput | DarazLogsWhereInput[]
    OR?: DarazLogsWhereInput[]
    NOT?: DarazLogsWhereInput | DarazLogsWhereInput[]
    seller_id?: StringFilter<"DarazLogs"> | string
    fetched_from_api?: StringFilter<"DarazLogs"> | string
    orders_appended_single_request?: StringFilter<"DarazLogs"> | string
    orders_appended?: StringFilter<"DarazLogs"> | string
    total_store_orders?: StringFilter<"DarazLogs"> | string
    daraz_url?: StringFilter<"DarazLogs"> | string
  }, "id" | "id">

  export type DarazLogsOrderByWithAggregationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    fetched_from_api?: SortOrder
    orders_appended_single_request?: SortOrder
    orders_appended?: SortOrder
    total_store_orders?: SortOrder
    daraz_url?: SortOrder
    _count?: DarazLogsCountOrderByAggregateInput
    _avg?: DarazLogsAvgOrderByAggregateInput
    _max?: DarazLogsMaxOrderByAggregateInput
    _min?: DarazLogsMinOrderByAggregateInput
    _sum?: DarazLogsSumOrderByAggregateInput
  }

  export type DarazLogsScalarWhereWithAggregatesInput = {
    AND?: DarazLogsScalarWhereWithAggregatesInput | DarazLogsScalarWhereWithAggregatesInput[]
    OR?: DarazLogsScalarWhereWithAggregatesInput[]
    NOT?: DarazLogsScalarWhereWithAggregatesInput | DarazLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DarazLogs"> | number
    seller_id?: StringWithAggregatesFilter<"DarazLogs"> | string
    fetched_from_api?: StringWithAggregatesFilter<"DarazLogs"> | string
    orders_appended_single_request?: StringWithAggregatesFilter<"DarazLogs"> | string
    orders_appended?: StringWithAggregatesFilter<"DarazLogs"> | string
    total_store_orders?: StringWithAggregatesFilter<"DarazLogs"> | string
    daraz_url?: StringWithAggregatesFilter<"DarazLogs"> | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
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
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
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
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
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
    seller_id: string
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateManyMutationInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user: UserCreateNestedOneWithoutDarazOrderInput
    customer: CustomerCreateNestedOneWithoutDarazOrdersInput
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
    customer_id: string
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDarazOrdersNestedInput
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
    customer_id: string
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutCustomerInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user_id: number
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutCustomerInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutCustomerNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutCustomerNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user_id: number
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazStoreTransactionsCreateInput = {
    seller_id: string
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
    user: UserCreateNestedOneWithoutDarazUnpaidTransactionInput
  }

  export type DarazStoreTransactionsUncheckedCreateInput = {
    seller_id: string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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
    user?: UserUpdateOneRequiredWithoutDarazUnpaidTransactionNestedInput
  }

  export type DarazStoreTransactionsUncheckedUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
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
    seller_id: string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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
    user: UserCreateNestedOneWithoutShopifyOrderInput
    customer: CustomerCreateNestedOneWithoutShopifyOrdersInput
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
    customer_id: string
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
    user?: UserUpdateOneRequiredWithoutShopifyOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutShopifyOrdersNestedInput
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
    customer_id?: StringFieldUpdateOperationsInput | string
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
    customer_id: string
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
    customer_id?: StringFieldUpdateOperationsInput | string
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

  export type DarazLogsCreateInput = {
    seller_id: string
    fetched_from_api: string
    orders_appended_single_request: string
    orders_appended: string
    total_store_orders: string
    daraz_url: string
  }

  export type DarazLogsUncheckedCreateInput = {
    id?: number
    seller_id: string
    fetched_from_api: string
    orders_appended_single_request: string
    orders_appended: string
    total_store_orders: string
    daraz_url: string
  }

  export type DarazLogsUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    fetched_from_api?: StringFieldUpdateOperationsInput | string
    orders_appended_single_request?: StringFieldUpdateOperationsInput | string
    orders_appended?: StringFieldUpdateOperationsInput | string
    total_store_orders?: StringFieldUpdateOperationsInput | string
    daraz_url?: StringFieldUpdateOperationsInput | string
  }

  export type DarazLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
    fetched_from_api?: StringFieldUpdateOperationsInput | string
    orders_appended_single_request?: StringFieldUpdateOperationsInput | string
    orders_appended?: StringFieldUpdateOperationsInput | string
    total_store_orders?: StringFieldUpdateOperationsInput | string
    daraz_url?: StringFieldUpdateOperationsInput | string
  }

  export type DarazLogsCreateManyInput = {
    id?: number
    seller_id: string
    fetched_from_api: string
    orders_appended_single_request: string
    orders_appended: string
    total_store_orders: string
    daraz_url: string
  }

  export type DarazLogsUpdateManyMutationInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    fetched_from_api?: StringFieldUpdateOperationsInput | string
    orders_appended_single_request?: StringFieldUpdateOperationsInput | string
    orders_appended?: StringFieldUpdateOperationsInput | string
    total_store_orders?: StringFieldUpdateOperationsInput | string
    daraz_url?: StringFieldUpdateOperationsInput | string
  }

  export type DarazLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
    fetched_from_api?: StringFieldUpdateOperationsInput | string
    orders_appended_single_request?: StringFieldUpdateOperationsInput | string
    orders_appended?: StringFieldUpdateOperationsInput | string
    total_store_orders?: StringFieldUpdateOperationsInput | string
    daraz_url?: StringFieldUpdateOperationsInput | string
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

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
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

  export type CustomerOrderByRelationAggregateInput = {
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
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    store_info?: SortOrder
    user_id?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    user_id?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    image_public_id?: SortOrder
    user_id?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
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
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    payment_status?: SortOrder
    statuses?: SortOrder
    is_received?: SortOrder
    address_billing?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    address_shipping?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrdersAvgOrderByAggregateInput = {
    price?: SortOrder
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
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    payment_status?: SortOrder
    is_received?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
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
    promised_shipping_times?: SortOrder
    updated_at?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    payment_method?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    payment_status?: SortOrder
    is_received?: SortOrder
    gift_message?: SortOrder
    remarks?: SortOrder
    shop_logo?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrdersSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsCountOrderByAggregateInput = {
    seller_id?: SortOrder
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
    user_id?: SortOrder
  }

  export type DarazStoreTransactionsMaxOrderByAggregateInput = {
    seller_id?: SortOrder
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
    seller_id?: SortOrder
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
    customer_id?: SortOrder
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
    customer_id?: SortOrder
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
    customer_id?: SortOrder
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

  export type DarazLogsCountOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    fetched_from_api?: SortOrder
    orders_appended_single_request?: SortOrder
    orders_appended?: SortOrder
    total_store_orders?: SortOrder
    daraz_url?: SortOrder
  }

  export type DarazLogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DarazLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    fetched_from_api?: SortOrder
    orders_appended_single_request?: SortOrder
    orders_appended?: SortOrder
    total_store_orders?: SortOrder
    daraz_url?: SortOrder
  }

  export type DarazLogsMinOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    fetched_from_api?: SortOrder
    orders_appended_single_request?: SortOrder
    orders_appended?: SortOrder
    total_store_orders?: SortOrder
    daraz_url?: SortOrder
  }

  export type DarazLogsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
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

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
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

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
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

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoreInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    upsert?: UserUpsertWithoutStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreInput, UserUpdateWithoutStoreInput>, UserUncheckedUpdateWithoutStoreInput>
  }

  export type DarazOrdersCreatestatusesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDarazOrderInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDarazOrdersInput = {
    create?: XOR<CustomerCreateWithoutDarazOrdersInput, CustomerUncheckedCreateWithoutDarazOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DarazOrdersUpdatestatusesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDarazOrderNestedInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    upsert?: UserUpsertWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazOrderInput, UserUpdateWithoutDarazOrderInput>, UserUncheckedUpdateWithoutDarazOrderInput>
  }

  export type CustomerUpdateOneRequiredWithoutDarazOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutDarazOrdersInput, CustomerUncheckedCreateWithoutDarazOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrdersInput
    upsert?: CustomerUpsertWithoutDarazOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDarazOrdersInput, CustomerUpdateWithoutDarazOrdersInput>, CustomerUncheckedUpdateWithoutDarazOrdersInput>
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type DarazOrdersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput> | DarazOrdersCreateWithoutCustomerInput[] | DarazOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutCustomerInput | DarazOrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: DarazOrdersCreateManyCustomerInputEnvelope
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
  }

  export type ShopifyOrdersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput> | ShopifyOrdersCreateWithoutCustomerInput[] | ShopifyOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutCustomerInput | ShopifyOrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: ShopifyOrdersCreateManyCustomerInputEnvelope
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
  }

  export type DarazOrdersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput> | DarazOrdersCreateWithoutCustomerInput[] | DarazOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutCustomerInput | DarazOrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: DarazOrdersCreateManyCustomerInputEnvelope
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
  }

  export type ShopifyOrdersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput> | ShopifyOrdersCreateWithoutCustomerInput[] | ShopifyOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutCustomerInput | ShopifyOrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: ShopifyOrdersCreateManyCustomerInputEnvelope
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type DarazOrdersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput> | DarazOrdersCreateWithoutCustomerInput[] | DarazOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutCustomerInput | DarazOrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: DarazOrdersUpsertWithWhereUniqueWithoutCustomerInput | DarazOrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DarazOrdersCreateManyCustomerInputEnvelope
    set?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    disconnect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    delete?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    update?: DarazOrdersUpdateWithWhereUniqueWithoutCustomerInput | DarazOrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DarazOrdersUpdateManyWithWhereWithoutCustomerInput | DarazOrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
  }

  export type ShopifyOrdersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput> | ShopifyOrdersCreateWithoutCustomerInput[] | ShopifyOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutCustomerInput | ShopifyOrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: ShopifyOrdersUpsertWithWhereUniqueWithoutCustomerInput | ShopifyOrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShopifyOrdersCreateManyCustomerInputEnvelope
    set?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    disconnect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    delete?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    update?: ShopifyOrdersUpdateWithWhereUniqueWithoutCustomerInput | ShopifyOrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShopifyOrdersUpdateManyWithWhereWithoutCustomerInput | ShopifyOrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
  }

  export type DarazOrdersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput> | DarazOrdersCreateWithoutCustomerInput[] | DarazOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrdersCreateOrConnectWithoutCustomerInput | DarazOrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: DarazOrdersUpsertWithWhereUniqueWithoutCustomerInput | DarazOrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DarazOrdersCreateManyCustomerInputEnvelope
    set?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    disconnect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    delete?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    connect?: DarazOrdersWhereUniqueInput | DarazOrdersWhereUniqueInput[]
    update?: DarazOrdersUpdateWithWhereUniqueWithoutCustomerInput | DarazOrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DarazOrdersUpdateManyWithWhereWithoutCustomerInput | DarazOrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DarazOrdersScalarWhereInput | DarazOrdersScalarWhereInput[]
  }

  export type ShopifyOrdersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput> | ShopifyOrdersCreateWithoutCustomerInput[] | ShopifyOrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrdersCreateOrConnectWithoutCustomerInput | ShopifyOrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: ShopifyOrdersUpsertWithWhereUniqueWithoutCustomerInput | ShopifyOrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShopifyOrdersCreateManyCustomerInputEnvelope
    set?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    disconnect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    delete?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    connect?: ShopifyOrdersWhereUniqueInput | ShopifyOrdersWhereUniqueInput[]
    update?: ShopifyOrdersUpdateWithWhereUniqueWithoutCustomerInput | ShopifyOrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShopifyOrdersUpdateManyWithWhereWithoutCustomerInput | ShopifyOrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShopifyOrdersScalarWhereInput | ShopifyOrdersScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDarazUnpaidTransactionInput = {
    create?: XOR<UserCreateWithoutDarazUnpaidTransactionInput, UserUncheckedCreateWithoutDarazUnpaidTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazUnpaidTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDarazUnpaidTransactionNestedInput = {
    create?: XOR<UserCreateWithoutDarazUnpaidTransactionInput, UserUncheckedCreateWithoutDarazUnpaidTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazUnpaidTransactionInput
    upsert?: UserUpsertWithoutDarazUnpaidTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazUnpaidTransactionInput, UserUpdateWithoutDarazUnpaidTransactionInput>, UserUncheckedUpdateWithoutDarazUnpaidTransactionInput>
  }

  export type UserCreateNestedOneWithoutShopifyOrderInput = {
    create?: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrderInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutShopifyOrdersInput = {
    create?: XOR<CustomerCreateWithoutShopifyOrdersInput, CustomerUncheckedCreateWithoutShopifyOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShopifyOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShopifyOrderNestedInput = {
    create?: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrderInput
    upsert?: UserUpsertWithoutShopifyOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopifyOrderInput, UserUpdateWithoutShopifyOrderInput>, UserUncheckedUpdateWithoutShopifyOrderInput>
  }

  export type CustomerUpdateOneRequiredWithoutShopifyOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutShopifyOrdersInput, CustomerUncheckedCreateWithoutShopifyOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShopifyOrdersInput
    upsert?: CustomerUpsertWithoutShopifyOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutShopifyOrdersInput, CustomerUpdateWithoutShopifyOrdersInput>, CustomerUncheckedUpdateWithoutShopifyOrdersInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    seller_id: string
    name: string
    platform: string
    image_url: string
    image_public_id: string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    seller_id: string
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    customer: CustomerCreateNestedOneWithoutDarazOrdersInput
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    customer_id: string
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
    customer: CustomerCreateNestedOneWithoutShopifyOrdersInput
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
    customer_id: string
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
    seller_id: string
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
    seller_id: string
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

  export type CustomerCreateWithoutUserInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    DarazOrders?: DarazOrdersCreateNestedManyWithoutCustomerInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutCustomerInput
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
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
    seller_id?: StringFilter<"Store"> | string
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
    promised_shipping_times?: StringNullableFilter<"DarazOrders"> | string | null
    updated_at?: DateTimeFilter<"DarazOrders"> | Date | string
    price?: DecimalFilter<"DarazOrders"> | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFilter<"DarazOrders"> | string
    payment_method?: StringFilter<"DarazOrders"> | string
    shipping_fee_discount_seller?: StringFilter<"DarazOrders"> | string
    shipping_fee?: StringFilter<"DarazOrders"> | string
    items_count?: StringFilter<"DarazOrders"> | string
    payment_status?: BoolFilter<"DarazOrders"> | boolean
    statuses?: StringNullableListFilter<"DarazOrders">
    is_received?: BoolFilter<"DarazOrders"> | boolean
    address_billing?: JsonFilter<"DarazOrders">
    gift_message?: StringFilter<"DarazOrders"> | string
    remarks?: StringFilter<"DarazOrders"> | string
    address_shipping?: JsonFilter<"DarazOrders">
    order_items?: JsonFilter<"DarazOrders">
    transactions?: JsonFilter<"DarazOrders">
    shop_logo?: StringFilter<"DarazOrders"> | string
    user_id?: IntFilter<"DarazOrders"> | number
    customer_id?: StringFilter<"DarazOrders"> | string
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
    customer_id?: StringFilter<"ShopifyOrders"> | string
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
    seller_id?: StringFilter<"DarazStoreTransactions"> | string
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

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopify_id?: StringNullableFilter<"Customer"> | string | null
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    province?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    user_id?: IntFilter<"Customer"> | number
  }

  export type UserCreateWithoutStoreInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoreInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
  }

  export type UserUpsertWithoutStoreInput = {
    update: XOR<UserUpdateWithoutStoreInput, UserUncheckedUpdateWithoutStoreInput>
    create: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoreInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoreInput, UserUncheckedUpdateWithoutStoreInput>
  }

  export type UserUpdateWithoutStoreInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDarazOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazOrderInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
  }

  export type CustomerCreateWithoutDarazOrdersInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    ShopifyOrders?: ShopifyOrdersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDarazOrdersInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user_id: number
    ShopifyOrders?: ShopifyOrdersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDarazOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDarazOrdersInput, CustomerUncheckedCreateWithoutDarazOrdersInput>
  }

  export type UserUpsertWithoutDarazOrderInput = {
    update: XOR<UserUpdateWithoutDarazOrderInput, UserUncheckedUpdateWithoutDarazOrderInput>
    create: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazOrderInput, UserUncheckedUpdateWithoutDarazOrderInput>
  }

  export type UserUpdateWithoutDarazOrderInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutDarazOrdersInput = {
    update: XOR<CustomerUpdateWithoutDarazOrdersInput, CustomerUncheckedUpdateWithoutDarazOrdersInput>
    create: XOR<CustomerCreateWithoutDarazOrdersInput, CustomerUncheckedCreateWithoutDarazOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDarazOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDarazOrdersInput, CustomerUncheckedUpdateWithoutDarazOrdersInput>
  }

  export type CustomerUpdateWithoutDarazOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDarazOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutCustomerInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrdersCreateWithoutCustomerInput = {
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user: UserCreateNestedOneWithoutDarazOrderInput
  }

  export type DarazOrdersUncheckedCreateWithoutCustomerInput = {
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
  }

  export type DarazOrdersCreateOrConnectWithoutCustomerInput = {
    where: DarazOrdersWhereUniqueInput
    create: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrdersCreateManyCustomerInputEnvelope = {
    data: DarazOrdersCreateManyCustomerInput | DarazOrdersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShopifyOrdersCreateWithoutCustomerInput = {
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
    user: UserCreateNestedOneWithoutShopifyOrderInput
  }

  export type ShopifyOrdersUncheckedCreateWithoutCustomerInput = {
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

  export type ShopifyOrdersCreateOrConnectWithoutCustomerInput = {
    where: ShopifyOrdersWhereUniqueInput
    create: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput>
  }

  export type ShopifyOrdersCreateManyCustomerInputEnvelope = {
    data: ShopifyOrdersCreateManyCustomerInput | ShopifyOrdersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DarazOrdersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DarazOrdersWhereUniqueInput
    update: XOR<DarazOrdersUpdateWithoutCustomerInput, DarazOrdersUncheckedUpdateWithoutCustomerInput>
    create: XOR<DarazOrdersCreateWithoutCustomerInput, DarazOrdersUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrdersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DarazOrdersWhereUniqueInput
    data: XOR<DarazOrdersUpdateWithoutCustomerInput, DarazOrdersUncheckedUpdateWithoutCustomerInput>
  }

  export type DarazOrdersUpdateManyWithWhereWithoutCustomerInput = {
    where: DarazOrdersScalarWhereInput
    data: XOR<DarazOrdersUpdateManyMutationInput, DarazOrdersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShopifyOrdersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShopifyOrdersWhereUniqueInput
    update: XOR<ShopifyOrdersUpdateWithoutCustomerInput, ShopifyOrdersUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShopifyOrdersCreateWithoutCustomerInput, ShopifyOrdersUncheckedCreateWithoutCustomerInput>
  }

  export type ShopifyOrdersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShopifyOrdersWhereUniqueInput
    data: XOR<ShopifyOrdersUpdateWithoutCustomerInput, ShopifyOrdersUncheckedUpdateWithoutCustomerInput>
  }

  export type ShopifyOrdersUpdateManyWithWhereWithoutCustomerInput = {
    where: ShopifyOrdersScalarWhereInput
    data: XOR<ShopifyOrdersUpdateManyMutationInput, ShopifyOrdersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UserCreateWithoutDarazUnpaidTransactionInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazUnpaidTransactionInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazUnpaidTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazUnpaidTransactionInput, UserUncheckedCreateWithoutDarazUnpaidTransactionInput>
  }

  export type UserUpsertWithoutDarazUnpaidTransactionInput = {
    update: XOR<UserUpdateWithoutDarazUnpaidTransactionInput, UserUncheckedUpdateWithoutDarazUnpaidTransactionInput>
    create: XOR<UserCreateWithoutDarazUnpaidTransactionInput, UserUncheckedCreateWithoutDarazUnpaidTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazUnpaidTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazUnpaidTransactionInput, UserUncheckedUpdateWithoutDarazUnpaidTransactionInput>
  }

  export type UserUpdateWithoutDarazUnpaidTransactionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazUnpaidTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShopifyOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopifyOrderInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopifyOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
  }

  export type CustomerCreateWithoutShopifyOrdersInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    DarazOrders?: DarazOrdersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutShopifyOrdersInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    user_id: number
    DarazOrders?: DarazOrdersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutShopifyOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShopifyOrdersInput, CustomerUncheckedCreateWithoutShopifyOrdersInput>
  }

  export type UserUpsertWithoutShopifyOrderInput = {
    update: XOR<UserUpdateWithoutShopifyOrderInput, UserUncheckedUpdateWithoutShopifyOrderInput>
    create: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopifyOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopifyOrderInput, UserUncheckedUpdateWithoutShopifyOrderInput>
  }

  export type UserUpdateWithoutShopifyOrderInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopifyOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinedat?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutShopifyOrdersInput = {
    update: XOR<CustomerUpdateWithoutShopifyOrdersInput, CustomerUncheckedUpdateWithoutShopifyOrdersInput>
    create: XOR<CustomerCreateWithoutShopifyOrdersInput, CustomerUncheckedCreateWithoutShopifyOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutShopifyOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutShopifyOrdersInput, CustomerUncheckedUpdateWithoutShopifyOrdersInput>
  }

  export type CustomerUpdateWithoutShopifyOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    DarazOrders?: DarazOrdersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutShopifyOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutCourierInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
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
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
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
    Store?: StoreUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
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
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTemporaryDataInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joinedat?: Date | string
    Store?: StoreCreateNestedManyWithoutUserInput
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
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
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrdersUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrdersUncheckedCreateNestedManyWithoutUserInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
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
    Store?: StoreUpdateManyWithoutUserNestedInput
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
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
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrdersUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrdersUncheckedUpdateManyWithoutUserNestedInput
    DarazUnpaidTransaction?: DarazStoreTransactionsUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreCreateManyUserInput = {
    seller_id: string
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    customer_id: string
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
    customer_id: string
  }

  export type TemporaryDataCreateManyUserInput = {
    id?: number
    email: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DarazStoreTransactionsCreateManyUserInput = {
    seller_id: string
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

  export type CustomerCreateManyUserInput = {
    id: string
    shopify_id?: string | null
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
  }

  export type StoreUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    image_public_id?: StringFieldUpdateOperationsInput | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutDarazOrdersNestedInput
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
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
    customer?: CustomerUpdateOneRequiredWithoutShopifyOrdersNestedInput
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
    customer_id?: StringFieldUpdateOperationsInput | string
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
    customer_id?: StringFieldUpdateOperationsInput | string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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
    seller_id?: StringFieldUpdateOperationsInput | string
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

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    DarazOrders?: DarazOrdersUpdateManyWithoutCustomerNestedInput
    ShopifyOrders?: ShopifyOrdersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    DarazOrders?: DarazOrdersUncheckedUpdateManyWithoutCustomerNestedInput
    ShopifyOrders?: ShopifyOrdersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DarazOrdersCreateManyCustomerInput = {
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
    promised_shipping_times?: string | null
    updated_at: Date | string
    price: Decimal | DecimalJsLike | number | string
    shipping_fee_original: string
    payment_method: string
    shipping_fee_discount_seller: string
    shipping_fee: string
    items_count: string
    payment_status: boolean
    statuses?: DarazOrdersCreatestatusesInput | string[]
    is_received: boolean
    address_billing: JsonNullValueInput | InputJsonValue
    gift_message: string
    remarks: string
    address_shipping: JsonNullValueInput | InputJsonValue
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shop_logo: string
    user_id: number
  }

  export type ShopifyOrdersCreateManyCustomerInput = {
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

  export type DarazOrdersUpdateWithoutCustomerInput = {
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
  }

  export type DarazOrdersUncheckedUpdateWithoutCustomerInput = {
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrdersUncheckedUpdateManyWithoutCustomerInput = {
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
    promised_shipping_times?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_fee_original?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: StringFieldUpdateOperationsInput | string
    shipping_fee?: StringFieldUpdateOperationsInput | string
    items_count?: StringFieldUpdateOperationsInput | string
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: DarazOrdersUpdatestatusesInput | string[]
    is_received?: BoolFieldUpdateOperationsInput | boolean
    address_billing?: JsonNullValueInput | InputJsonValue
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    address_shipping?: JsonNullValueInput | InputJsonValue
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shop_logo?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopifyOrdersUpdateWithoutCustomerInput = {
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
    user?: UserUpdateOneRequiredWithoutShopifyOrderNestedInput
  }

  export type ShopifyOrdersUncheckedUpdateWithoutCustomerInput = {
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

  export type ShopifyOrdersUncheckedUpdateManyWithoutCustomerInput = {
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
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
     * @deprecated Use DarazLogsDefaultArgs instead
     */
    export type DarazLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazLogsDefaultArgs<ExtArgs>

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