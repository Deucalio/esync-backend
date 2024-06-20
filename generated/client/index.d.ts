
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model DarazOrder
 * 
 */
export type DarazOrder = $Result.DefaultSelection<Prisma.$DarazOrderPayload>
/**
 * Model DarazTransaction
 * 
 */
export type DarazTransaction = $Result.DefaultSelection<Prisma.$DarazTransactionPayload>
/**
 * Model DarazStoreTransaction
 * 
 */
export type DarazStoreTransaction = $Result.DefaultSelection<Prisma.$DarazStoreTransactionPayload>
/**
 * Model TemporaryData
 * 
 */
export type TemporaryData = $Result.DefaultSelection<Prisma.$TemporaryDataPayload>
/**
 * Model ShopifyOrder
 * 
 */
export type ShopifyOrder = $Result.DefaultSelection<Prisma.$ShopifyOrderPayload>
/**
 * Model Courier
 * 
 */
export type Courier = $Result.DefaultSelection<Prisma.$CourierPayload>
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.darazOrder`: Exposes CRUD operations for the **DarazOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazOrders
    * const darazOrders = await prisma.darazOrder.findMany()
    * ```
    */
  get darazOrder(): Prisma.DarazOrderDelegate<ExtArgs>;

  /**
   * `prisma.darazTransaction`: Exposes CRUD operations for the **DarazTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazTransactions
    * const darazTransactions = await prisma.darazTransaction.findMany()
    * ```
    */
  get darazTransaction(): Prisma.DarazTransactionDelegate<ExtArgs>;

  /**
   * `prisma.darazStoreTransaction`: Exposes CRUD operations for the **DarazStoreTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DarazStoreTransactions
    * const darazStoreTransactions = await prisma.darazStoreTransaction.findMany()
    * ```
    */
  get darazStoreTransaction(): Prisma.DarazStoreTransactionDelegate<ExtArgs>;

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
   * `prisma.shopifyOrder`: Exposes CRUD operations for the **ShopifyOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopifyOrders
    * const shopifyOrders = await prisma.shopifyOrder.findMany()
    * ```
    */
  get shopifyOrder(): Prisma.ShopifyOrderDelegate<ExtArgs>;

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
    Customer: 'Customer',
    DarazOrder: 'DarazOrder',
    DarazTransaction: 'DarazTransaction',
    DarazStoreTransaction: 'DarazStoreTransaction',
    TemporaryData: 'TemporaryData',
    ShopifyOrder: 'ShopifyOrder',
    Courier: 'Courier',
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
      modelProps: 'user' | 'store' | 'customer' | 'darazOrder' | 'darazTransaction' | 'darazStoreTransaction' | 'temporaryData' | 'shopifyOrder' | 'courier' | 'darazLogs'
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
      DarazOrder: {
        payload: Prisma.$DarazOrderPayload<ExtArgs>
        fields: Prisma.DarazOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazOrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazOrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          findFirst: {
            args: Prisma.DarazOrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazOrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          findMany: {
            args: Prisma.DarazOrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>[]
          }
          create: {
            args: Prisma.DarazOrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          createMany: {
            args: Prisma.DarazOrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazOrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          update: {
            args: Prisma.DarazOrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          deleteMany: {
            args: Prisma.DarazOrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazOrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazOrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazOrderPayload>
          }
          aggregate: {
            args: Prisma.DarazOrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazOrder>
          }
          groupBy: {
            args: Prisma.DarazOrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazOrderCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazOrderCountAggregateOutputType> | number
          }
        }
      }
      DarazTransaction: {
        payload: Prisma.$DarazTransactionPayload<ExtArgs>
        fields: Prisma.DarazTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          findFirst: {
            args: Prisma.DarazTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          findMany: {
            args: Prisma.DarazTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>[]
          }
          create: {
            args: Prisma.DarazTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          createMany: {
            args: Prisma.DarazTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          update: {
            args: Prisma.DarazTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          deleteMany: {
            args: Prisma.DarazTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazTransactionPayload>
          }
          aggregate: {
            args: Prisma.DarazTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazTransaction>
          }
          groupBy: {
            args: Prisma.DarazTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazTransactionCountAggregateOutputType> | number
          }
        }
      }
      DarazStoreTransaction: {
        payload: Prisma.$DarazStoreTransactionPayload<ExtArgs>
        fields: Prisma.DarazStoreTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DarazStoreTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DarazStoreTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          findFirst: {
            args: Prisma.DarazStoreTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DarazStoreTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          findMany: {
            args: Prisma.DarazStoreTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>[]
          }
          create: {
            args: Prisma.DarazStoreTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          createMany: {
            args: Prisma.DarazStoreTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DarazStoreTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          update: {
            args: Prisma.DarazStoreTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          deleteMany: {
            args: Prisma.DarazStoreTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DarazStoreTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DarazStoreTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DarazStoreTransactionPayload>
          }
          aggregate: {
            args: Prisma.DarazStoreTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDarazStoreTransaction>
          }
          groupBy: {
            args: Prisma.DarazStoreTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DarazStoreTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DarazStoreTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<DarazStoreTransactionCountAggregateOutputType> | number
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
      ShopifyOrder: {
        payload: Prisma.$ShopifyOrderPayload<ExtArgs>
        fields: Prisma.ShopifyOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopifyOrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopifyOrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          findFirst: {
            args: Prisma.ShopifyOrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopifyOrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          findMany: {
            args: Prisma.ShopifyOrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>[]
          }
          create: {
            args: Prisma.ShopifyOrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          createMany: {
            args: Prisma.ShopifyOrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShopifyOrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          update: {
            args: Prisma.ShopifyOrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          deleteMany: {
            args: Prisma.ShopifyOrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopifyOrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopifyOrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopifyOrderPayload>
          }
          aggregate: {
            args: Prisma.ShopifyOrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShopifyOrder>
          }
          groupBy: {
            args: Prisma.ShopifyOrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopifyOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopifyOrderCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopifyOrderCountAggregateOutputType> | number
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
    Courier: number
    Customer: number
    DarazOrder: number
    DarazStoreTransaction: number
    ShopifyOrder: number
    Store: number
    TemporaryData: number
    DarazTransaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | UserCountOutputTypeCountCourierArgs
    Customer?: boolean | UserCountOutputTypeCountCustomerArgs
    DarazOrder?: boolean | UserCountOutputTypeCountDarazOrderArgs
    DarazStoreTransaction?: boolean | UserCountOutputTypeCountDarazStoreTransactionArgs
    ShopifyOrder?: boolean | UserCountOutputTypeCountShopifyOrderArgs
    Store?: boolean | UserCountOutputTypeCountStoreArgs
    TemporaryData?: boolean | UserCountOutputTypeCountTemporaryDataArgs
    DarazTransaction?: boolean | UserCountOutputTypeCountDarazTransactionArgs
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
  export type UserCountOutputTypeCountCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrderWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDarazStoreTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazStoreTransactionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrderWhereInput
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
  export type UserCountOutputTypeCountTemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryDataWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazTransactionWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    DarazOrder: number
    ShopifyOrder: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DarazOrder?: boolean | CustomerCountOutputTypeCountDarazOrderArgs
    ShopifyOrder?: boolean | CustomerCountOutputTypeCountShopifyOrderArgs
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
  export type CustomerCountOutputTypeCountDarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrderWhereInput
  }


  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrderWhereInput
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
    joined_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    joined_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    address: number
    joined_at: number
    user_events: number
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
    joined_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    joined_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    joined_at?: true
    user_events?: true
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
    joined_at: Date
    user_events: JsonValue | null
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
    joined_at?: boolean
    user_events?: boolean
    Courier?: boolean | User$CourierArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    DarazStoreTransaction?: boolean | User$DarazStoreTransactionArgs<ExtArgs>
    ShopifyOrder?: boolean | User$ShopifyOrderArgs<ExtArgs>
    Store?: boolean | User$StoreArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazTransaction?: boolean | User$DarazTransactionArgs<ExtArgs>
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
    joined_at?: boolean
    user_events?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | User$CourierArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    DarazStoreTransaction?: boolean | User$DarazStoreTransactionArgs<ExtArgs>
    ShopifyOrder?: boolean | User$ShopifyOrderArgs<ExtArgs>
    Store?: boolean | User$StoreArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    DarazTransaction?: boolean | User$DarazTransactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Courier: Prisma.$CourierPayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      DarazOrder: Prisma.$DarazOrderPayload<ExtArgs>[]
      DarazStoreTransaction: Prisma.$DarazStoreTransactionPayload<ExtArgs>[]
      ShopifyOrder: Prisma.$ShopifyOrderPayload<ExtArgs>[]
      Store: Prisma.$StorePayload<ExtArgs>[]
      TemporaryData: Prisma.$TemporaryDataPayload<ExtArgs>[]
      DarazTransaction: Prisma.$DarazTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string
      address: string
      joined_at: Date
      user_events: Prisma.JsonValue | null
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

    Courier<T extends User$CourierArgs<ExtArgs> = {}>(args?: Subset<T, User$CourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'> | Null>;

    Customer<T extends User$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazOrder<T extends User$DarazOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazStoreTransaction<T extends User$DarazStoreTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazStoreTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShopifyOrder<T extends User$ShopifyOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$ShopifyOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    Store<T extends User$StoreArgs<ExtArgs> = {}>(args?: Subset<T, User$StoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'> | Null>;

    TemporaryData<T extends User$TemporaryDataArgs<ExtArgs> = {}>(args?: Subset<T, User$TemporaryDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazTransaction<T extends User$DarazTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly joined_at: FieldRef<"User", 'DateTime'>
    readonly user_events: FieldRef<"User", 'Json'>
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
   * User.DarazOrder
   */
  export type User$DarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    where?: DarazOrderWhereInput
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    cursor?: DarazOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazOrderScalarFieldEnum | DarazOrderScalarFieldEnum[]
  }


  /**
   * User.DarazStoreTransaction
   */
  export type User$DarazStoreTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    where?: DarazStoreTransactionWhereInput
    orderBy?: DarazStoreTransactionOrderByWithRelationInput | DarazStoreTransactionOrderByWithRelationInput[]
    cursor?: DarazStoreTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazStoreTransactionScalarFieldEnum | DarazStoreTransactionScalarFieldEnum[]
  }


  /**
   * User.ShopifyOrder
   */
  export type User$ShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    where?: ShopifyOrderWhereInput
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    cursor?: ShopifyOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopifyOrderScalarFieldEnum | ShopifyOrderScalarFieldEnum[]
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
   * User.DarazTransaction
   */
  export type User$DarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    where?: DarazTransactionWhereInput
    orderBy?: DarazTransactionOrderByWithRelationInput | DarazTransactionOrderByWithRelationInput[]
    cursor?: DarazTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazTransactionScalarFieldEnum | DarazTransactionScalarFieldEnum[]
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
    connected_at: Date | null
    user_id: number | null
  }

  export type StoreMaxAggregateOutputType = {
    seller_id: string | null
    name: string | null
    platform: string | null
    image_url: string | null
    connected_at: Date | null
    user_id: number | null
  }

  export type StoreCountAggregateOutputType = {
    seller_id: number
    name: number
    platform: number
    image_url: number
    connected_at: number
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
    connected_at?: true
    user_id?: true
  }

  export type StoreMaxAggregateInputType = {
    seller_id?: true
    name?: true
    platform?: true
    image_url?: true
    connected_at?: true
    user_id?: true
  }

  export type StoreCountAggregateInputType = {
    seller_id?: true
    name?: true
    platform?: true
    image_url?: true
    connected_at?: true
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
    connected_at: Date
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
    connected_at?: boolean
    store_info?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    seller_id?: boolean
    name?: boolean
    platform?: boolean
    image_url?: boolean
    connected_at?: boolean
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
      connected_at: Date
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
    readonly connected_at: FieldRef<"Store", 'DateTime'>
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
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
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
    DarazOrder?: boolean | Customer$DarazOrderArgs<ExtArgs>
    ShopifyOrder?: boolean | Customer$ShopifyOrderArgs<ExtArgs>
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
    DarazOrder?: boolean | Customer$DarazOrderArgs<ExtArgs>
    ShopifyOrder?: boolean | Customer$ShopifyOrderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      DarazOrder: Prisma.$DarazOrderPayload<ExtArgs>[]
      ShopifyOrder: Prisma.$ShopifyOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopify_id: string
      first_name: string
      last_name: string
      email: string
      city: string
      province: string
      country: string
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

    DarazOrder<T extends Customer$DarazOrderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$DarazOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShopifyOrder<T extends Customer$ShopifyOrderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ShopifyOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Customer.DarazOrder
   */
  export type Customer$DarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    where?: DarazOrderWhereInput
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    cursor?: DarazOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DarazOrderScalarFieldEnum | DarazOrderScalarFieldEnum[]
  }


  /**
   * Customer.ShopifyOrder
   */
  export type Customer$ShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    where?: ShopifyOrderWhereInput
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    cursor?: ShopifyOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopifyOrderScalarFieldEnum | ShopifyOrderScalarFieldEnum[]
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
   * Model DarazOrder
   */

  export type AggregateDarazOrder = {
    _count: DarazOrderCountAggregateOutputType | null
    _avg: DarazOrderAvgAggregateOutputType | null
    _sum: DarazOrderSumAggregateOutputType | null
    _min: DarazOrderMinAggregateOutputType | null
    _max: DarazOrderMaxAggregateOutputType | null
  }

  export type DarazOrderAvgAggregateOutputType = {
    price: number | null
    shipping_fee_original: number | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    user_id: number | null
  }

  export type DarazOrderSumAggregateOutputType = {
    price: number | null
    shipping_fee_original: number | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    user_id: number | null
  }

  export type DarazOrderMinAggregateOutputType = {
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
    price: number | null
    shipping_fee_original: number | null
    payment_method: string | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    payment_status: boolean | null
    statuses: string | null
    is_received: boolean | null
    gift_message: string | null
    remarks: string | null
    user_id: number | null
    customer_id: string | null
  }

  export type DarazOrderMaxAggregateOutputType = {
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
    price: number | null
    shipping_fee_original: number | null
    payment_method: string | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    payment_status: boolean | null
    statuses: string | null
    is_received: boolean | null
    gift_message: string | null
    remarks: string | null
    user_id: number | null
    customer_id: string | null
  }

  export type DarazOrderCountAggregateOutputType = {
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
    gift_message: number
    remarks: number
    order_items: number
    transactions: number
    shipping_address: number
    billing_address: number
    user_id: number
    customer_id: number
    _all: number
  }


  export type DarazOrderAvgAggregateInputType = {
    price?: true
    shipping_fee_original?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    user_id?: true
  }

  export type DarazOrderSumAggregateInputType = {
    price?: true
    shipping_fee_original?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    user_id?: true
  }

  export type DarazOrderMinAggregateInputType = {
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
    gift_message?: true
    remarks?: true
    user_id?: true
    customer_id?: true
  }

  export type DarazOrderMaxAggregateInputType = {
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
    gift_message?: true
    remarks?: true
    user_id?: true
    customer_id?: true
  }

  export type DarazOrderCountAggregateInputType = {
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
    gift_message?: true
    remarks?: true
    order_items?: true
    transactions?: true
    shipping_address?: true
    billing_address?: true
    user_id?: true
    customer_id?: true
    _all?: true
  }

  export type DarazOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazOrder to aggregate.
     */
    where?: DarazOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazOrderWhereUniqueInput
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
    _count?: true | DarazOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazOrderMaxAggregateInputType
  }

  export type GetDarazOrderAggregateType<T extends DarazOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazOrder[P]>
      : GetScalarType<T[P], AggregateDarazOrder[P]>
  }




  export type DarazOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazOrderWhereInput
    orderBy?: DarazOrderOrderByWithAggregationInput | DarazOrderOrderByWithAggregationInput[]
    by: DarazOrderScalarFieldEnum[] | DarazOrderScalarFieldEnum
    having?: DarazOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazOrderCountAggregateInputType | true
    _avg?: DarazOrderAvgAggregateInputType
    _sum?: DarazOrderSumAggregateInputType
    _min?: DarazOrderMinAggregateInputType
    _max?: DarazOrderMaxAggregateInputType
  }

  export type DarazOrderGroupByOutputType = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonValue
    transactions: JsonValue
    shipping_address: JsonValue
    billing_address: JsonValue
    user_id: number
    customer_id: string
    _count: DarazOrderCountAggregateOutputType | null
    _avg: DarazOrderAvgAggregateOutputType | null
    _sum: DarazOrderSumAggregateOutputType | null
    _min: DarazOrderMinAggregateOutputType | null
    _max: DarazOrderMaxAggregateOutputType | null
  }

  type GetDarazOrderGroupByPayload<T extends DarazOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazOrderGroupByOutputType[P]>
            : GetScalarType<T[P], DarazOrderGroupByOutputType[P]>
        }
      >
    >


  export type DarazOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    gift_message?: boolean
    remarks?: boolean
    order_items?: boolean
    transactions?: boolean
    shipping_address?: boolean
    billing_address?: boolean
    user_id?: boolean
    customer_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["darazOrder"]>

  export type DarazOrderSelectScalar = {
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
    gift_message?: boolean
    remarks?: boolean
    order_items?: boolean
    transactions?: boolean
    shipping_address?: boolean
    billing_address?: boolean
    user_id?: boolean
    customer_id?: boolean
  }

  export type DarazOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DarazOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      seller_id: string
      voucher_platform: string
      voucher: string
      voucher_seller: string
      order_number: string
      created_at: Date
      voucher_code: string
      gift_option: string
      shipping_fee_discount_platform: string
      promised_shipping_times: string
      updated_at: Date
      price: number
      shipping_fee_original: number
      payment_method: string
      shipping_fee_discount_seller: number
      shipping_fee: number
      items_count: number
      payment_status: boolean
      statuses: string
      is_received: boolean
      gift_message: string
      remarks: string
      order_items: Prisma.JsonValue
      transactions: Prisma.JsonValue
      shipping_address: Prisma.JsonValue
      billing_address: Prisma.JsonValue
      user_id: number
      customer_id: string
    }, ExtArgs["result"]["darazOrder"]>
    composites: {}
  }


  type DarazOrderGetPayload<S extends boolean | null | undefined | DarazOrderDefaultArgs> = $Result.GetResult<Prisma.$DarazOrderPayload, S>

  type DarazOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazOrderCountAggregateInputType | true
    }

  export interface DarazOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazOrder'], meta: { name: 'DarazOrder' } }
    /**
     * Find zero or one DarazOrder that matches the filter.
     * @param {DarazOrderFindUniqueArgs} args - Arguments to find a DarazOrder
     * @example
     * // Get one DarazOrder
     * const darazOrder = await prisma.darazOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazOrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazOrderFindUniqueOrThrowArgs} args - Arguments to find a DarazOrder
     * @example
     * // Get one DarazOrder
     * const darazOrder = await prisma.darazOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazOrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderFindFirstArgs} args - Arguments to find a DarazOrder
     * @example
     * // Get one DarazOrder
     * const darazOrder = await prisma.darazOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazOrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderFindFirstArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderFindFirstOrThrowArgs} args - Arguments to find a DarazOrder
     * @example
     * // Get one DarazOrder
     * const darazOrder = await prisma.darazOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazOrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazOrders
     * const darazOrders = await prisma.darazOrder.findMany()
     * 
     * // Get first 10 DarazOrders
     * const darazOrders = await prisma.darazOrder.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const darazOrderWithOrder_idOnly = await prisma.darazOrder.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends DarazOrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazOrder.
     * @param {DarazOrderCreateArgs} args - Arguments to create a DarazOrder.
     * @example
     * // Create one DarazOrder
     * const DarazOrder = await prisma.darazOrder.create({
     *   data: {
     *     // ... data to create a DarazOrder
     *   }
     * })
     * 
    **/
    create<T extends DarazOrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderCreateArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazOrders.
     *     @param {DarazOrderCreateManyArgs} args - Arguments to create many DarazOrders.
     *     @example
     *     // Create many DarazOrders
     *     const darazOrder = await prisma.darazOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazOrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazOrder.
     * @param {DarazOrderDeleteArgs} args - Arguments to delete one DarazOrder.
     * @example
     * // Delete one DarazOrder
     * const DarazOrder = await prisma.darazOrder.delete({
     *   where: {
     *     // ... filter to delete one DarazOrder
     *   }
     * })
     * 
    **/
    delete<T extends DarazOrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderDeleteArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazOrder.
     * @param {DarazOrderUpdateArgs} args - Arguments to update one DarazOrder.
     * @example
     * // Update one DarazOrder
     * const darazOrder = await prisma.darazOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazOrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderUpdateArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazOrders.
     * @param {DarazOrderDeleteManyArgs} args - Arguments to filter DarazOrders to delete.
     * @example
     * // Delete a few DarazOrders
     * const { count } = await prisma.darazOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazOrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazOrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazOrders
     * const darazOrder = await prisma.darazOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazOrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazOrder.
     * @param {DarazOrderUpsertArgs} args - Arguments to update or create a DarazOrder.
     * @example
     * // Update or create a DarazOrder
     * const darazOrder = await prisma.darazOrder.upsert({
     *   create: {
     *     // ... data to create a DarazOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazOrder we want to update
     *   }
     * })
    **/
    upsert<T extends DarazOrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazOrderUpsertArgs<ExtArgs>>
    ): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderCountArgs} args - Arguments to filter DarazOrders to count.
     * @example
     * // Count the number of DarazOrders
     * const count = await prisma.darazOrder.count({
     *   where: {
     *     // ... the filter for the DarazOrders we want to count
     *   }
     * })
    **/
    count<T extends DarazOrderCountArgs>(
      args?: Subset<T, DarazOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DarazOrderAggregateArgs>(args: Subset<T, DarazOrderAggregateArgs>): Prisma.PrismaPromise<GetDarazOrderAggregateType<T>>

    /**
     * Group by DarazOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazOrderGroupByArgs} args - Group by arguments.
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
      T extends DarazOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazOrderGroupByArgs['orderBy'] }
        : { orderBy?: DarazOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DarazOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazOrder model
   */
  readonly fields: DarazOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the DarazOrder model
   */ 
  interface DarazOrderFieldRefs {
    readonly order_id: FieldRef<"DarazOrder", 'String'>
    readonly seller_id: FieldRef<"DarazOrder", 'String'>
    readonly voucher_platform: FieldRef<"DarazOrder", 'String'>
    readonly voucher: FieldRef<"DarazOrder", 'String'>
    readonly voucher_seller: FieldRef<"DarazOrder", 'String'>
    readonly order_number: FieldRef<"DarazOrder", 'String'>
    readonly created_at: FieldRef<"DarazOrder", 'DateTime'>
    readonly voucher_code: FieldRef<"DarazOrder", 'String'>
    readonly gift_option: FieldRef<"DarazOrder", 'String'>
    readonly shipping_fee_discount_platform: FieldRef<"DarazOrder", 'String'>
    readonly promised_shipping_times: FieldRef<"DarazOrder", 'String'>
    readonly updated_at: FieldRef<"DarazOrder", 'DateTime'>
    readonly price: FieldRef<"DarazOrder", 'Float'>
    readonly shipping_fee_original: FieldRef<"DarazOrder", 'Float'>
    readonly payment_method: FieldRef<"DarazOrder", 'String'>
    readonly shipping_fee_discount_seller: FieldRef<"DarazOrder", 'Float'>
    readonly shipping_fee: FieldRef<"DarazOrder", 'Float'>
    readonly items_count: FieldRef<"DarazOrder", 'Int'>
    readonly payment_status: FieldRef<"DarazOrder", 'Boolean'>
    readonly statuses: FieldRef<"DarazOrder", 'String'>
    readonly is_received: FieldRef<"DarazOrder", 'Boolean'>
    readonly gift_message: FieldRef<"DarazOrder", 'String'>
    readonly remarks: FieldRef<"DarazOrder", 'String'>
    readonly order_items: FieldRef<"DarazOrder", 'Json'>
    readonly transactions: FieldRef<"DarazOrder", 'Json'>
    readonly shipping_address: FieldRef<"DarazOrder", 'Json'>
    readonly billing_address: FieldRef<"DarazOrder", 'Json'>
    readonly user_id: FieldRef<"DarazOrder", 'Int'>
    readonly customer_id: FieldRef<"DarazOrder", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DarazOrder findUnique
   */
  export type DarazOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrder to fetch.
     */
    where: DarazOrderWhereUniqueInput
  }


  /**
   * DarazOrder findUniqueOrThrow
   */
  export type DarazOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrder to fetch.
     */
    where: DarazOrderWhereUniqueInput
  }


  /**
   * DarazOrder findFirst
   */
  export type DarazOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrder to fetch.
     */
    where?: DarazOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazOrders.
     */
    cursor?: DarazOrderWhereUniqueInput
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
    distinct?: DarazOrderScalarFieldEnum | DarazOrderScalarFieldEnum[]
  }


  /**
   * DarazOrder findFirstOrThrow
   */
  export type DarazOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrder to fetch.
     */
    where?: DarazOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazOrders.
     */
    cursor?: DarazOrderWhereUniqueInput
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
    distinct?: DarazOrderScalarFieldEnum | DarazOrderScalarFieldEnum[]
  }


  /**
   * DarazOrder findMany
   */
  export type DarazOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter, which DarazOrders to fetch.
     */
    where?: DarazOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazOrders to fetch.
     */
    orderBy?: DarazOrderOrderByWithRelationInput | DarazOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazOrders.
     */
    cursor?: DarazOrderWhereUniqueInput
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
    distinct?: DarazOrderScalarFieldEnum | DarazOrderScalarFieldEnum[]
  }


  /**
   * DarazOrder create
   */
  export type DarazOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a DarazOrder.
     */
    data: XOR<DarazOrderCreateInput, DarazOrderUncheckedCreateInput>
  }


  /**
   * DarazOrder createMany
   */
  export type DarazOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazOrders.
     */
    data: DarazOrderCreateManyInput | DarazOrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazOrder update
   */
  export type DarazOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a DarazOrder.
     */
    data: XOR<DarazOrderUpdateInput, DarazOrderUncheckedUpdateInput>
    /**
     * Choose, which DarazOrder to update.
     */
    where: DarazOrderWhereUniqueInput
  }


  /**
   * DarazOrder updateMany
   */
  export type DarazOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazOrders.
     */
    data: XOR<DarazOrderUpdateManyMutationInput, DarazOrderUncheckedUpdateManyInput>
    /**
     * Filter which DarazOrders to update
     */
    where?: DarazOrderWhereInput
  }


  /**
   * DarazOrder upsert
   */
  export type DarazOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the DarazOrder to update in case it exists.
     */
    where: DarazOrderWhereUniqueInput
    /**
     * In case the DarazOrder found by the `where` argument doesn't exist, create a new DarazOrder with this data.
     */
    create: XOR<DarazOrderCreateInput, DarazOrderUncheckedCreateInput>
    /**
     * In case the DarazOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazOrderUpdateInput, DarazOrderUncheckedUpdateInput>
  }


  /**
   * DarazOrder delete
   */
  export type DarazOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
    /**
     * Filter which DarazOrder to delete.
     */
    where: DarazOrderWhereUniqueInput
  }


  /**
   * DarazOrder deleteMany
   */
  export type DarazOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazOrders to delete
     */
    where?: DarazOrderWhereInput
  }


  /**
   * DarazOrder without action
   */
  export type DarazOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrder
     */
    select?: DarazOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazOrderInclude<ExtArgs> | null
  }



  /**
   * Model DarazTransaction
   */

  export type AggregateDarazTransaction = {
    _count: DarazTransactionCountAggregateOutputType | null
    _avg: DarazTransactionAvgAggregateOutputType | null
    _sum: DarazTransactionSumAggregateOutputType | null
    _min: DarazTransactionMinAggregateOutputType | null
    _max: DarazTransactionMaxAggregateOutputType | null
  }

  export type DarazTransactionAvgAggregateOutputType = {
    user_id: number | null
  }

  export type DarazTransactionSumAggregateOutputType = {
    user_id: number | null
  }

  export type DarazTransactionMinAggregateOutputType = {
    id: string | null
    seller_id: string | null
    order_number: string | null
    order_item_status: string | null
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

  export type DarazTransactionMaxAggregateOutputType = {
    id: string | null
    seller_id: string | null
    order_number: string | null
    order_item_status: string | null
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

  export type DarazTransactionCountAggregateOutputType = {
    id: number
    seller_id: number
    order_number: number
    order_item_status: number
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


  export type DarazTransactionAvgAggregateInputType = {
    user_id?: true
  }

  export type DarazTransactionSumAggregateInputType = {
    user_id?: true
  }

  export type DarazTransactionMinAggregateInputType = {
    id?: true
    seller_id?: true
    order_number?: true
    order_item_status?: true
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

  export type DarazTransactionMaxAggregateInputType = {
    id?: true
    seller_id?: true
    order_number?: true
    order_item_status?: true
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

  export type DarazTransactionCountAggregateInputType = {
    id?: true
    seller_id?: true
    order_number?: true
    order_item_status?: true
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

  export type DarazTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazTransaction to aggregate.
     */
    where?: DarazTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazTransactions to fetch.
     */
    orderBy?: DarazTransactionOrderByWithRelationInput | DarazTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DarazTransactions
    **/
    _count?: true | DarazTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazTransactionMaxAggregateInputType
  }

  export type GetDarazTransactionAggregateType<T extends DarazTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazTransaction[P]>
      : GetScalarType<T[P], AggregateDarazTransaction[P]>
  }




  export type DarazTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazTransactionWhereInput
    orderBy?: DarazTransactionOrderByWithAggregationInput | DarazTransactionOrderByWithAggregationInput[]
    by: DarazTransactionScalarFieldEnum[] | DarazTransactionScalarFieldEnum
    having?: DarazTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazTransactionCountAggregateInputType | true
    _avg?: DarazTransactionAvgAggregateInputType
    _sum?: DarazTransactionSumAggregateInputType
    _min?: DarazTransactionMinAggregateInputType
    _max?: DarazTransactionMaxAggregateInputType
  }

  export type DarazTransactionGroupByOutputType = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
    _count: DarazTransactionCountAggregateOutputType | null
    _avg: DarazTransactionAvgAggregateOutputType | null
    _sum: DarazTransactionSumAggregateOutputType | null
    _min: DarazTransactionMinAggregateOutputType | null
    _max: DarazTransactionMaxAggregateOutputType | null
  }

  type GetDarazTransactionGroupByPayload<T extends DarazTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], DarazTransactionGroupByOutputType[P]>
        }
      >
    >


  export type DarazTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seller_id?: boolean
    order_number?: boolean
    order_item_status?: boolean
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
  }, ExtArgs["result"]["darazTransaction"]>

  export type DarazTransactionSelectScalar = {
    id?: boolean
    seller_id?: boolean
    order_number?: boolean
    order_item_status?: boolean
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

  export type DarazTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DarazTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seller_id: string
      order_number: string
      order_item_status: string
      amount: string
      transaction_date: Date
      transaction_type: string
      statement: string
      payment_ref_id: string
      fee_name: string
      paid_status: string
      WHT_amount: string
      VAT_in_amount: string
      transaction_number: string
      comment: string
      user_id: number
    }, ExtArgs["result"]["darazTransaction"]>
    composites: {}
  }


  type DarazTransactionGetPayload<S extends boolean | null | undefined | DarazTransactionDefaultArgs> = $Result.GetResult<Prisma.$DarazTransactionPayload, S>

  type DarazTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazTransactionCountAggregateInputType | true
    }

  export interface DarazTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazTransaction'], meta: { name: 'DarazTransaction' } }
    /**
     * Find zero or one DarazTransaction that matches the filter.
     * @param {DarazTransactionFindUniqueArgs} args - Arguments to find a DarazTransaction
     * @example
     * // Get one DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazTransactionFindUniqueOrThrowArgs} args - Arguments to find a DarazTransaction
     * @example
     * // Get one DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionFindFirstArgs} args - Arguments to find a DarazTransaction
     * @example
     * // Get one DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionFindFirstOrThrowArgs} args - Arguments to find a DarazTransaction
     * @example
     * // Get one DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazTransactions
     * const darazTransactions = await prisma.darazTransaction.findMany()
     * 
     * // Get first 10 DarazTransactions
     * const darazTransactions = await prisma.darazTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const darazTransactionWithIdOnly = await prisma.darazTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DarazTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazTransaction.
     * @param {DarazTransactionCreateArgs} args - Arguments to create a DarazTransaction.
     * @example
     * // Create one DarazTransaction
     * const DarazTransaction = await prisma.darazTransaction.create({
     *   data: {
     *     // ... data to create a DarazTransaction
     *   }
     * })
     * 
    **/
    create<T extends DarazTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionCreateArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazTransactions.
     *     @param {DarazTransactionCreateManyArgs} args - Arguments to create many DarazTransactions.
     *     @example
     *     // Create many DarazTransactions
     *     const darazTransaction = await prisma.darazTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazTransaction.
     * @param {DarazTransactionDeleteArgs} args - Arguments to delete one DarazTransaction.
     * @example
     * // Delete one DarazTransaction
     * const DarazTransaction = await prisma.darazTransaction.delete({
     *   where: {
     *     // ... filter to delete one DarazTransaction
     *   }
     * })
     * 
    **/
    delete<T extends DarazTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionDeleteArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazTransaction.
     * @param {DarazTransactionUpdateArgs} args - Arguments to update one DarazTransaction.
     * @example
     * // Update one DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionUpdateArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazTransactions.
     * @param {DarazTransactionDeleteManyArgs} args - Arguments to filter DarazTransactions to delete.
     * @example
     * // Delete a few DarazTransactions
     * const { count } = await prisma.darazTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazTransactions
     * const darazTransaction = await prisma.darazTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazTransaction.
     * @param {DarazTransactionUpsertArgs} args - Arguments to update or create a DarazTransaction.
     * @example
     * // Update or create a DarazTransaction
     * const darazTransaction = await prisma.darazTransaction.upsert({
     *   create: {
     *     // ... data to create a DarazTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends DarazTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazTransactionUpsertArgs<ExtArgs>>
    ): Prisma__DarazTransactionClient<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionCountArgs} args - Arguments to filter DarazTransactions to count.
     * @example
     * // Count the number of DarazTransactions
     * const count = await prisma.darazTransaction.count({
     *   where: {
     *     // ... the filter for the DarazTransactions we want to count
     *   }
     * })
    **/
    count<T extends DarazTransactionCountArgs>(
      args?: Subset<T, DarazTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DarazTransactionAggregateArgs>(args: Subset<T, DarazTransactionAggregateArgs>): Prisma.PrismaPromise<GetDarazTransactionAggregateType<T>>

    /**
     * Group by DarazTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazTransactionGroupByArgs} args - Group by arguments.
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
      T extends DarazTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazTransactionGroupByArgs['orderBy'] }
        : { orderBy?: DarazTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DarazTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazTransaction model
   */
  readonly fields: DarazTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DarazTransaction model
   */ 
  interface DarazTransactionFieldRefs {
    readonly id: FieldRef<"DarazTransaction", 'String'>
    readonly seller_id: FieldRef<"DarazTransaction", 'String'>
    readonly order_number: FieldRef<"DarazTransaction", 'String'>
    readonly order_item_status: FieldRef<"DarazTransaction", 'String'>
    readonly amount: FieldRef<"DarazTransaction", 'String'>
    readonly transaction_date: FieldRef<"DarazTransaction", 'DateTime'>
    readonly transaction_type: FieldRef<"DarazTransaction", 'String'>
    readonly statement: FieldRef<"DarazTransaction", 'String'>
    readonly payment_ref_id: FieldRef<"DarazTransaction", 'String'>
    readonly fee_name: FieldRef<"DarazTransaction", 'String'>
    readonly paid_status: FieldRef<"DarazTransaction", 'String'>
    readonly WHT_amount: FieldRef<"DarazTransaction", 'String'>
    readonly VAT_in_amount: FieldRef<"DarazTransaction", 'String'>
    readonly transaction_number: FieldRef<"DarazTransaction", 'String'>
    readonly comment: FieldRef<"DarazTransaction", 'String'>
    readonly user_id: FieldRef<"DarazTransaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DarazTransaction findUnique
   */
  export type DarazTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazTransaction to fetch.
     */
    where: DarazTransactionWhereUniqueInput
  }


  /**
   * DarazTransaction findUniqueOrThrow
   */
  export type DarazTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazTransaction to fetch.
     */
    where: DarazTransactionWhereUniqueInput
  }


  /**
   * DarazTransaction findFirst
   */
  export type DarazTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazTransaction to fetch.
     */
    where?: DarazTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazTransactions to fetch.
     */
    orderBy?: DarazTransactionOrderByWithRelationInput | DarazTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazTransactions.
     */
    cursor?: DarazTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazTransactions.
     */
    distinct?: DarazTransactionScalarFieldEnum | DarazTransactionScalarFieldEnum[]
  }


  /**
   * DarazTransaction findFirstOrThrow
   */
  export type DarazTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazTransaction to fetch.
     */
    where?: DarazTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazTransactions to fetch.
     */
    orderBy?: DarazTransactionOrderByWithRelationInput | DarazTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazTransactions.
     */
    cursor?: DarazTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DarazTransactions.
     */
    distinct?: DarazTransactionScalarFieldEnum | DarazTransactionScalarFieldEnum[]
  }


  /**
   * DarazTransaction findMany
   */
  export type DarazTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazTransactions to fetch.
     */
    where?: DarazTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazTransactions to fetch.
     */
    orderBy?: DarazTransactionOrderByWithRelationInput | DarazTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazTransactions.
     */
    cursor?: DarazTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DarazTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DarazTransactions.
     */
    skip?: number
    distinct?: DarazTransactionScalarFieldEnum | DarazTransactionScalarFieldEnum[]
  }


  /**
   * DarazTransaction create
   */
  export type DarazTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a DarazTransaction.
     */
    data: XOR<DarazTransactionCreateInput, DarazTransactionUncheckedCreateInput>
  }


  /**
   * DarazTransaction createMany
   */
  export type DarazTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazTransactions.
     */
    data: DarazTransactionCreateManyInput | DarazTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazTransaction update
   */
  export type DarazTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a DarazTransaction.
     */
    data: XOR<DarazTransactionUpdateInput, DarazTransactionUncheckedUpdateInput>
    /**
     * Choose, which DarazTransaction to update.
     */
    where: DarazTransactionWhereUniqueInput
  }


  /**
   * DarazTransaction updateMany
   */
  export type DarazTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazTransactions.
     */
    data: XOR<DarazTransactionUpdateManyMutationInput, DarazTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DarazTransactions to update
     */
    where?: DarazTransactionWhereInput
  }


  /**
   * DarazTransaction upsert
   */
  export type DarazTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the DarazTransaction to update in case it exists.
     */
    where: DarazTransactionWhereUniqueInput
    /**
     * In case the DarazTransaction found by the `where` argument doesn't exist, create a new DarazTransaction with this data.
     */
    create: XOR<DarazTransactionCreateInput, DarazTransactionUncheckedCreateInput>
    /**
     * In case the DarazTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazTransactionUpdateInput, DarazTransactionUncheckedUpdateInput>
  }


  /**
   * DarazTransaction delete
   */
  export type DarazTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
    /**
     * Filter which DarazTransaction to delete.
     */
    where: DarazTransactionWhereUniqueInput
  }


  /**
   * DarazTransaction deleteMany
   */
  export type DarazTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazTransactions to delete
     */
    where?: DarazTransactionWhereInput
  }


  /**
   * DarazTransaction without action
   */
  export type DarazTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazTransaction
     */
    select?: DarazTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazTransactionInclude<ExtArgs> | null
  }



  /**
   * Model DarazStoreTransaction
   */

  export type AggregateDarazStoreTransaction = {
    _count: DarazStoreTransactionCountAggregateOutputType | null
    _avg: DarazStoreTransactionAvgAggregateOutputType | null
    _sum: DarazStoreTransactionSumAggregateOutputType | null
    _min: DarazStoreTransactionMinAggregateOutputType | null
    _max: DarazStoreTransactionMaxAggregateOutputType | null
  }

  export type DarazStoreTransactionAvgAggregateOutputType = {
    user_id: number | null
  }

  export type DarazStoreTransactionSumAggregateOutputType = {
    user_id: number | null
  }

  export type DarazStoreTransactionMinAggregateOutputType = {
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

  export type DarazStoreTransactionMaxAggregateOutputType = {
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

  export type DarazStoreTransactionCountAggregateOutputType = {
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


  export type DarazStoreTransactionAvgAggregateInputType = {
    user_id?: true
  }

  export type DarazStoreTransactionSumAggregateInputType = {
    user_id?: true
  }

  export type DarazStoreTransactionMinAggregateInputType = {
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

  export type DarazStoreTransactionMaxAggregateInputType = {
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

  export type DarazStoreTransactionCountAggregateInputType = {
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

  export type DarazStoreTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazStoreTransaction to aggregate.
     */
    where?: DarazStoreTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionOrderByWithRelationInput | DarazStoreTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DarazStoreTransactionWhereUniqueInput
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
    _count?: true | DarazStoreTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DarazStoreTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DarazStoreTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DarazStoreTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DarazStoreTransactionMaxAggregateInputType
  }

  export type GetDarazStoreTransactionAggregateType<T extends DarazStoreTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateDarazStoreTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDarazStoreTransaction[P]>
      : GetScalarType<T[P], AggregateDarazStoreTransaction[P]>
  }




  export type DarazStoreTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazStoreTransactionWhereInput
    orderBy?: DarazStoreTransactionOrderByWithAggregationInput | DarazStoreTransactionOrderByWithAggregationInput[]
    by: DarazStoreTransactionScalarFieldEnum[] | DarazStoreTransactionScalarFieldEnum
    having?: DarazStoreTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DarazStoreTransactionCountAggregateInputType | true
    _avg?: DarazStoreTransactionAvgAggregateInputType
    _sum?: DarazStoreTransactionSumAggregateInputType
    _min?: DarazStoreTransactionMinAggregateInputType
    _max?: DarazStoreTransactionMaxAggregateInputType
  }

  export type DarazStoreTransactionGroupByOutputType = {
    seller_id: string
    amount: string
    transaction_date: Date
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
    _count: DarazStoreTransactionCountAggregateOutputType | null
    _avg: DarazStoreTransactionAvgAggregateOutputType | null
    _sum: DarazStoreTransactionSumAggregateOutputType | null
    _min: DarazStoreTransactionMinAggregateOutputType | null
    _max: DarazStoreTransactionMaxAggregateOutputType | null
  }

  type GetDarazStoreTransactionGroupByPayload<T extends DarazStoreTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DarazStoreTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DarazStoreTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DarazStoreTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], DarazStoreTransactionGroupByOutputType[P]>
        }
      >
    >


  export type DarazStoreTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["darazStoreTransaction"]>

  export type DarazStoreTransactionSelectScalar = {
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

  export type DarazStoreTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DarazStoreTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazStoreTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seller_id: string
      amount: string
      transaction_date: Date
      transaction_type: string
      statement: string
      payment_ref_id: string
      fee_name: string
      paid_status: string
      WHT_amount: string
      VAT_in_amount: string
      transaction_number: string
      comment: string
      user_id: number
    }, ExtArgs["result"]["darazStoreTransaction"]>
    composites: {}
  }


  type DarazStoreTransactionGetPayload<S extends boolean | null | undefined | DarazStoreTransactionDefaultArgs> = $Result.GetResult<Prisma.$DarazStoreTransactionPayload, S>

  type DarazStoreTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DarazStoreTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DarazStoreTransactionCountAggregateInputType | true
    }

  export interface DarazStoreTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DarazStoreTransaction'], meta: { name: 'DarazStoreTransaction' } }
    /**
     * Find zero or one DarazStoreTransaction that matches the filter.
     * @param {DarazStoreTransactionFindUniqueArgs} args - Arguments to find a DarazStoreTransaction
     * @example
     * // Get one DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DarazStoreTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DarazStoreTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DarazStoreTransactionFindUniqueOrThrowArgs} args - Arguments to find a DarazStoreTransaction
     * @example
     * // Get one DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DarazStoreTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DarazStoreTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionFindFirstArgs} args - Arguments to find a DarazStoreTransaction
     * @example
     * // Get one DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DarazStoreTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DarazStoreTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionFindFirstOrThrowArgs} args - Arguments to find a DarazStoreTransaction
     * @example
     * // Get one DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DarazStoreTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DarazStoreTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransaction.findMany()
     * 
     * // Get first 10 DarazStoreTransactions
     * const darazStoreTransactions = await prisma.darazStoreTransaction.findMany({ take: 10 })
     * 
     * // Only select the `seller_id`
     * const darazStoreTransactionWithSeller_idOnly = await prisma.darazStoreTransaction.findMany({ select: { seller_id: true } })
     * 
    **/
    findMany<T extends DarazStoreTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DarazStoreTransaction.
     * @param {DarazStoreTransactionCreateArgs} args - Arguments to create a DarazStoreTransaction.
     * @example
     * // Create one DarazStoreTransaction
     * const DarazStoreTransaction = await prisma.darazStoreTransaction.create({
     *   data: {
     *     // ... data to create a DarazStoreTransaction
     *   }
     * })
     * 
    **/
    create<T extends DarazStoreTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionCreateArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DarazStoreTransactions.
     *     @param {DarazStoreTransactionCreateManyArgs} args - Arguments to create many DarazStoreTransactions.
     *     @example
     *     // Create many DarazStoreTransactions
     *     const darazStoreTransaction = await prisma.darazStoreTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DarazStoreTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DarazStoreTransaction.
     * @param {DarazStoreTransactionDeleteArgs} args - Arguments to delete one DarazStoreTransaction.
     * @example
     * // Delete one DarazStoreTransaction
     * const DarazStoreTransaction = await prisma.darazStoreTransaction.delete({
     *   where: {
     *     // ... filter to delete one DarazStoreTransaction
     *   }
     * })
     * 
    **/
    delete<T extends DarazStoreTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionDeleteArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DarazStoreTransaction.
     * @param {DarazStoreTransactionUpdateArgs} args - Arguments to update one DarazStoreTransaction.
     * @example
     * // Update one DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DarazStoreTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionUpdateArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DarazStoreTransactions.
     * @param {DarazStoreTransactionDeleteManyArgs} args - Arguments to filter DarazStoreTransactions to delete.
     * @example
     * // Delete a few DarazStoreTransactions
     * const { count } = await prisma.darazStoreTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DarazStoreTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DarazStoreTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DarazStoreTransactions
     * const darazStoreTransaction = await prisma.darazStoreTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DarazStoreTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DarazStoreTransaction.
     * @param {DarazStoreTransactionUpsertArgs} args - Arguments to update or create a DarazStoreTransaction.
     * @example
     * // Update or create a DarazStoreTransaction
     * const darazStoreTransaction = await prisma.darazStoreTransaction.upsert({
     *   create: {
     *     // ... data to create a DarazStoreTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DarazStoreTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends DarazStoreTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DarazStoreTransactionUpsertArgs<ExtArgs>>
    ): Prisma__DarazStoreTransactionClient<$Result.GetResult<Prisma.$DarazStoreTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DarazStoreTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionCountArgs} args - Arguments to filter DarazStoreTransactions to count.
     * @example
     * // Count the number of DarazStoreTransactions
     * const count = await prisma.darazStoreTransaction.count({
     *   where: {
     *     // ... the filter for the DarazStoreTransactions we want to count
     *   }
     * })
    **/
    count<T extends DarazStoreTransactionCountArgs>(
      args?: Subset<T, DarazStoreTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DarazStoreTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DarazStoreTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DarazStoreTransactionAggregateArgs>(args: Subset<T, DarazStoreTransactionAggregateArgs>): Prisma.PrismaPromise<GetDarazStoreTransactionAggregateType<T>>

    /**
     * Group by DarazStoreTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DarazStoreTransactionGroupByArgs} args - Group by arguments.
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
      T extends DarazStoreTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DarazStoreTransactionGroupByArgs['orderBy'] }
        : { orderBy?: DarazStoreTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DarazStoreTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDarazStoreTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DarazStoreTransaction model
   */
  readonly fields: DarazStoreTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DarazStoreTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DarazStoreTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DarazStoreTransaction model
   */ 
  interface DarazStoreTransactionFieldRefs {
    readonly seller_id: FieldRef<"DarazStoreTransaction", 'String'>
    readonly amount: FieldRef<"DarazStoreTransaction", 'String'>
    readonly transaction_date: FieldRef<"DarazStoreTransaction", 'DateTime'>
    readonly transaction_type: FieldRef<"DarazStoreTransaction", 'String'>
    readonly statement: FieldRef<"DarazStoreTransaction", 'String'>
    readonly payment_ref_id: FieldRef<"DarazStoreTransaction", 'String'>
    readonly fee_name: FieldRef<"DarazStoreTransaction", 'String'>
    readonly paid_status: FieldRef<"DarazStoreTransaction", 'String'>
    readonly WHT_amount: FieldRef<"DarazStoreTransaction", 'String'>
    readonly VAT_in_amount: FieldRef<"DarazStoreTransaction", 'String'>
    readonly transaction_number: FieldRef<"DarazStoreTransaction", 'String'>
    readonly comment: FieldRef<"DarazStoreTransaction", 'String'>
    readonly user_id: FieldRef<"DarazStoreTransaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DarazStoreTransaction findUnique
   */
  export type DarazStoreTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransaction to fetch.
     */
    where: DarazStoreTransactionWhereUniqueInput
  }


  /**
   * DarazStoreTransaction findUniqueOrThrow
   */
  export type DarazStoreTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransaction to fetch.
     */
    where: DarazStoreTransactionWhereUniqueInput
  }


  /**
   * DarazStoreTransaction findFirst
   */
  export type DarazStoreTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransaction to fetch.
     */
    where?: DarazStoreTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionOrderByWithRelationInput | DarazStoreTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionWhereUniqueInput
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
    distinct?: DarazStoreTransactionScalarFieldEnum | DarazStoreTransactionScalarFieldEnum[]
  }


  /**
   * DarazStoreTransaction findFirstOrThrow
   */
  export type DarazStoreTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransaction to fetch.
     */
    where?: DarazStoreTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionOrderByWithRelationInput | DarazStoreTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionWhereUniqueInput
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
    distinct?: DarazStoreTransactionScalarFieldEnum | DarazStoreTransactionScalarFieldEnum[]
  }


  /**
   * DarazStoreTransaction findMany
   */
  export type DarazStoreTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter, which DarazStoreTransactions to fetch.
     */
    where?: DarazStoreTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DarazStoreTransactions to fetch.
     */
    orderBy?: DarazStoreTransactionOrderByWithRelationInput | DarazStoreTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DarazStoreTransactions.
     */
    cursor?: DarazStoreTransactionWhereUniqueInput
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
    distinct?: DarazStoreTransactionScalarFieldEnum | DarazStoreTransactionScalarFieldEnum[]
  }


  /**
   * DarazStoreTransaction create
   */
  export type DarazStoreTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a DarazStoreTransaction.
     */
    data: XOR<DarazStoreTransactionCreateInput, DarazStoreTransactionUncheckedCreateInput>
  }


  /**
   * DarazStoreTransaction createMany
   */
  export type DarazStoreTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DarazStoreTransactions.
     */
    data: DarazStoreTransactionCreateManyInput | DarazStoreTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DarazStoreTransaction update
   */
  export type DarazStoreTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a DarazStoreTransaction.
     */
    data: XOR<DarazStoreTransactionUpdateInput, DarazStoreTransactionUncheckedUpdateInput>
    /**
     * Choose, which DarazStoreTransaction to update.
     */
    where: DarazStoreTransactionWhereUniqueInput
  }


  /**
   * DarazStoreTransaction updateMany
   */
  export type DarazStoreTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DarazStoreTransactions.
     */
    data: XOR<DarazStoreTransactionUpdateManyMutationInput, DarazStoreTransactionUncheckedUpdateManyInput>
    /**
     * Filter which DarazStoreTransactions to update
     */
    where?: DarazStoreTransactionWhereInput
  }


  /**
   * DarazStoreTransaction upsert
   */
  export type DarazStoreTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the DarazStoreTransaction to update in case it exists.
     */
    where: DarazStoreTransactionWhereUniqueInput
    /**
     * In case the DarazStoreTransaction found by the `where` argument doesn't exist, create a new DarazStoreTransaction with this data.
     */
    create: XOR<DarazStoreTransactionCreateInput, DarazStoreTransactionUncheckedCreateInput>
    /**
     * In case the DarazStoreTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DarazStoreTransactionUpdateInput, DarazStoreTransactionUncheckedUpdateInput>
  }


  /**
   * DarazStoreTransaction delete
   */
  export type DarazStoreTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
    /**
     * Filter which DarazStoreTransaction to delete.
     */
    where: DarazStoreTransactionWhereUniqueInput
  }


  /**
   * DarazStoreTransaction deleteMany
   */
  export type DarazStoreTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DarazStoreTransactions to delete
     */
    where?: DarazStoreTransactionWhereInput
  }


  /**
   * DarazStoreTransaction without action
   */
  export type DarazStoreTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazStoreTransaction
     */
    select?: DarazStoreTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DarazStoreTransactionInclude<ExtArgs> | null
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
    user_id: number | null
  }

  export type TemporaryDataSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TemporaryDataMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    user_id: number | null
  }

  export type TemporaryDataMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    user_id: number | null
  }

  export type TemporaryDataCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    data: number
    user_id: number
    _all: number
  }


  export type TemporaryDataAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TemporaryDataSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TemporaryDataMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    user_id?: true
  }

  export type TemporaryDataMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    user_id?: true
  }

  export type TemporaryDataCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    data?: true
    user_id?: true
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
    createdAt: Date
    data: JsonValue
    user_id: number
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
    createdAt?: boolean
    data?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryData"]>

  export type TemporaryDataSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    data?: boolean
    user_id?: boolean
  }

  export type TemporaryDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TemporaryDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      data: Prisma.JsonValue
      user_id: number
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
   * Fields of the TemporaryData model
   */ 
  interface TemporaryDataFieldRefs {
    readonly id: FieldRef<"TemporaryData", 'Int'>
    readonly email: FieldRef<"TemporaryData", 'String'>
    readonly createdAt: FieldRef<"TemporaryData", 'DateTime'>
    readonly data: FieldRef<"TemporaryData", 'Json'>
    readonly user_id: FieldRef<"TemporaryData", 'Int'>
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
   * Model ShopifyOrder
   */

  export type AggregateShopifyOrder = {
    _count: ShopifyOrderCountAggregateOutputType | null
    _avg: ShopifyOrderAvgAggregateOutputType | null
    _sum: ShopifyOrderSumAggregateOutputType | null
    _min: ShopifyOrderMinAggregateOutputType | null
    _max: ShopifyOrderMaxAggregateOutputType | null
  }

  export type ShopifyOrderAvgAggregateOutputType = {
    user_id: number | null
  }

  export type ShopifyOrderSumAggregateOutputType = {
    user_id: number | null
  }

  export type ShopifyOrderMinAggregateOutputType = {
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
    id: string | null
  }

  export type ShopifyOrderMaxAggregateOutputType = {
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
    id: string | null
  }

  export type ShopifyOrderCountAggregateOutputType = {
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
    id: number
    _all: number
  }


  export type ShopifyOrderAvgAggregateInputType = {
    user_id?: true
  }

  export type ShopifyOrderSumAggregateInputType = {
    user_id?: true
  }

  export type ShopifyOrderMinAggregateInputType = {
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
    id?: true
  }

  export type ShopifyOrderMaxAggregateInputType = {
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
    id?: true
  }

  export type ShopifyOrderCountAggregateInputType = {
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
    id?: true
    _all?: true
  }

  export type ShopifyOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyOrder to aggregate.
     */
    where?: ShopifyOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopifyOrderWhereUniqueInput
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
    _count?: true | ShopifyOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopifyOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopifyOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopifyOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopifyOrderMaxAggregateInputType
  }

  export type GetShopifyOrderAggregateType<T extends ShopifyOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateShopifyOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopifyOrder[P]>
      : GetScalarType<T[P], AggregateShopifyOrder[P]>
  }




  export type ShopifyOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyOrderWhereInput
    orderBy?: ShopifyOrderOrderByWithAggregationInput | ShopifyOrderOrderByWithAggregationInput[]
    by: ShopifyOrderScalarFieldEnum[] | ShopifyOrderScalarFieldEnum
    having?: ShopifyOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopifyOrderCountAggregateInputType | true
    _avg?: ShopifyOrderAvgAggregateInputType
    _sum?: ShopifyOrderSumAggregateInputType
    _min?: ShopifyOrderMinAggregateInputType
    _max?: ShopifyOrderMaxAggregateInputType
  }

  export type ShopifyOrderGroupByOutputType = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonValue
    line_items: JsonValue
    note: string
    phone: string
    processed_at: Date
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date
    user_id: number
    customer_id: string
    id: string
    _count: ShopifyOrderCountAggregateOutputType | null
    _avg: ShopifyOrderAvgAggregateOutputType | null
    _sum: ShopifyOrderSumAggregateOutputType | null
    _min: ShopifyOrderMinAggregateOutputType | null
    _max: ShopifyOrderMaxAggregateOutputType | null
  }

  type GetShopifyOrderGroupByPayload<T extends ShopifyOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopifyOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopifyOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopifyOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ShopifyOrderGroupByOutputType[P]>
        }
      >
    >


  export type ShopifyOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopifyOrder"]>

  export type ShopifyOrderSelectScalar = {
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
    id?: boolean
  }

  export type ShopifyOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ShopifyOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopifyOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      current_total_additional_fees_set: string
      current_total_discounts: string
      current_total_duties_set: string
      current_total_price: string
      current_total_tax: string
      email: string
      financial_status: string
      fulfillment_status: Prisma.JsonValue
      line_items: Prisma.JsonValue
      note: string
      phone: string
      processed_at: Date
      referring_site: string
      source_name: string
      subtotal_price: string
      tags: string
      total_discounts: string
      total_line_items_price: string
      total_outstanding: string
      total_price: string
      updated_at: Date
      user_id: number
      customer_id: string
      id: string
    }, ExtArgs["result"]["shopifyOrder"]>
    composites: {}
  }


  type ShopifyOrderGetPayload<S extends boolean | null | undefined | ShopifyOrderDefaultArgs> = $Result.GetResult<Prisma.$ShopifyOrderPayload, S>

  type ShopifyOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopifyOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopifyOrderCountAggregateInputType | true
    }

  export interface ShopifyOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopifyOrder'], meta: { name: 'ShopifyOrder' } }
    /**
     * Find zero or one ShopifyOrder that matches the filter.
     * @param {ShopifyOrderFindUniqueArgs} args - Arguments to find a ShopifyOrder
     * @example
     * // Get one ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopifyOrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShopifyOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopifyOrderFindUniqueOrThrowArgs} args - Arguments to find a ShopifyOrder
     * @example
     * // Get one ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopifyOrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShopifyOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderFindFirstArgs} args - Arguments to find a ShopifyOrder
     * @example
     * // Get one ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopifyOrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderFindFirstArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShopifyOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderFindFirstOrThrowArgs} args - Arguments to find a ShopifyOrder
     * @example
     * // Get one ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopifyOrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShopifyOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrder.findMany()
     * 
     * // Get first 10 ShopifyOrders
     * const shopifyOrders = await prisma.shopifyOrder.findMany({ take: 10 })
     * 
     * // Only select the `current_total_additional_fees_set`
     * const shopifyOrderWithCurrent_total_additional_fees_setOnly = await prisma.shopifyOrder.findMany({ select: { current_total_additional_fees_set: true } })
     * 
    **/
    findMany<T extends ShopifyOrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShopifyOrder.
     * @param {ShopifyOrderCreateArgs} args - Arguments to create a ShopifyOrder.
     * @example
     * // Create one ShopifyOrder
     * const ShopifyOrder = await prisma.shopifyOrder.create({
     *   data: {
     *     // ... data to create a ShopifyOrder
     *   }
     * })
     * 
    **/
    create<T extends ShopifyOrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderCreateArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShopifyOrders.
     *     @param {ShopifyOrderCreateManyArgs} args - Arguments to create many ShopifyOrders.
     *     @example
     *     // Create many ShopifyOrders
     *     const shopifyOrder = await prisma.shopifyOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShopifyOrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopifyOrder.
     * @param {ShopifyOrderDeleteArgs} args - Arguments to delete one ShopifyOrder.
     * @example
     * // Delete one ShopifyOrder
     * const ShopifyOrder = await prisma.shopifyOrder.delete({
     *   where: {
     *     // ... filter to delete one ShopifyOrder
     *   }
     * })
     * 
    **/
    delete<T extends ShopifyOrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderDeleteArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShopifyOrder.
     * @param {ShopifyOrderUpdateArgs} args - Arguments to update one ShopifyOrder.
     * @example
     * // Update one ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopifyOrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderUpdateArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShopifyOrders.
     * @param {ShopifyOrderDeleteManyArgs} args - Arguments to filter ShopifyOrders to delete.
     * @example
     * // Delete a few ShopifyOrders
     * const { count } = await prisma.shopifyOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopifyOrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopifyOrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopifyOrders
     * const shopifyOrder = await prisma.shopifyOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopifyOrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopifyOrder.
     * @param {ShopifyOrderUpsertArgs} args - Arguments to update or create a ShopifyOrder.
     * @example
     * // Update or create a ShopifyOrder
     * const shopifyOrder = await prisma.shopifyOrder.upsert({
     *   create: {
     *     // ... data to create a ShopifyOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopifyOrder we want to update
     *   }
     * })
    **/
    upsert<T extends ShopifyOrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopifyOrderUpsertArgs<ExtArgs>>
    ): Prisma__ShopifyOrderClient<$Result.GetResult<Prisma.$ShopifyOrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShopifyOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderCountArgs} args - Arguments to filter ShopifyOrders to count.
     * @example
     * // Count the number of ShopifyOrders
     * const count = await prisma.shopifyOrder.count({
     *   where: {
     *     // ... the filter for the ShopifyOrders we want to count
     *   }
     * })
    **/
    count<T extends ShopifyOrderCountArgs>(
      args?: Subset<T, ShopifyOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopifyOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopifyOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopifyOrderAggregateArgs>(args: Subset<T, ShopifyOrderAggregateArgs>): Prisma.PrismaPromise<GetShopifyOrderAggregateType<T>>

    /**
     * Group by ShopifyOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyOrderGroupByArgs} args - Group by arguments.
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
      T extends ShopifyOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopifyOrderGroupByArgs['orderBy'] }
        : { orderBy?: ShopifyOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopifyOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopifyOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopifyOrder model
   */
  readonly fields: ShopifyOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopifyOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopifyOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ShopifyOrder model
   */ 
  interface ShopifyOrderFieldRefs {
    readonly current_total_additional_fees_set: FieldRef<"ShopifyOrder", 'String'>
    readonly current_total_discounts: FieldRef<"ShopifyOrder", 'String'>
    readonly current_total_duties_set: FieldRef<"ShopifyOrder", 'String'>
    readonly current_total_price: FieldRef<"ShopifyOrder", 'String'>
    readonly current_total_tax: FieldRef<"ShopifyOrder", 'String'>
    readonly email: FieldRef<"ShopifyOrder", 'String'>
    readonly financial_status: FieldRef<"ShopifyOrder", 'String'>
    readonly fulfillment_status: FieldRef<"ShopifyOrder", 'Json'>
    readonly line_items: FieldRef<"ShopifyOrder", 'Json'>
    readonly note: FieldRef<"ShopifyOrder", 'String'>
    readonly phone: FieldRef<"ShopifyOrder", 'String'>
    readonly processed_at: FieldRef<"ShopifyOrder", 'DateTime'>
    readonly referring_site: FieldRef<"ShopifyOrder", 'String'>
    readonly source_name: FieldRef<"ShopifyOrder", 'String'>
    readonly subtotal_price: FieldRef<"ShopifyOrder", 'String'>
    readonly tags: FieldRef<"ShopifyOrder", 'String'>
    readonly total_discounts: FieldRef<"ShopifyOrder", 'String'>
    readonly total_line_items_price: FieldRef<"ShopifyOrder", 'String'>
    readonly total_outstanding: FieldRef<"ShopifyOrder", 'String'>
    readonly total_price: FieldRef<"ShopifyOrder", 'String'>
    readonly updated_at: FieldRef<"ShopifyOrder", 'DateTime'>
    readonly user_id: FieldRef<"ShopifyOrder", 'Int'>
    readonly customer_id: FieldRef<"ShopifyOrder", 'String'>
    readonly id: FieldRef<"ShopifyOrder", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ShopifyOrder findUnique
   */
  export type ShopifyOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrder to fetch.
     */
    where: ShopifyOrderWhereUniqueInput
  }


  /**
   * ShopifyOrder findUniqueOrThrow
   */
  export type ShopifyOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrder to fetch.
     */
    where: ShopifyOrderWhereUniqueInput
  }


  /**
   * ShopifyOrder findFirst
   */
  export type ShopifyOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrder to fetch.
     */
    where?: ShopifyOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyOrders.
     */
    cursor?: ShopifyOrderWhereUniqueInput
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
    distinct?: ShopifyOrderScalarFieldEnum | ShopifyOrderScalarFieldEnum[]
  }


  /**
   * ShopifyOrder findFirstOrThrow
   */
  export type ShopifyOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrder to fetch.
     */
    where?: ShopifyOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyOrders.
     */
    cursor?: ShopifyOrderWhereUniqueInput
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
    distinct?: ShopifyOrderScalarFieldEnum | ShopifyOrderScalarFieldEnum[]
  }


  /**
   * ShopifyOrder findMany
   */
  export type ShopifyOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopifyOrders to fetch.
     */
    where?: ShopifyOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyOrders to fetch.
     */
    orderBy?: ShopifyOrderOrderByWithRelationInput | ShopifyOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopifyOrders.
     */
    cursor?: ShopifyOrderWhereUniqueInput
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
    distinct?: ShopifyOrderScalarFieldEnum | ShopifyOrderScalarFieldEnum[]
  }


  /**
   * ShopifyOrder create
   */
  export type ShopifyOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopifyOrder.
     */
    data: XOR<ShopifyOrderCreateInput, ShopifyOrderUncheckedCreateInput>
  }


  /**
   * ShopifyOrder createMany
   */
  export type ShopifyOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopifyOrders.
     */
    data: ShopifyOrderCreateManyInput | ShopifyOrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShopifyOrder update
   */
  export type ShopifyOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopifyOrder.
     */
    data: XOR<ShopifyOrderUpdateInput, ShopifyOrderUncheckedUpdateInput>
    /**
     * Choose, which ShopifyOrder to update.
     */
    where: ShopifyOrderWhereUniqueInput
  }


  /**
   * ShopifyOrder updateMany
   */
  export type ShopifyOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopifyOrders.
     */
    data: XOR<ShopifyOrderUpdateManyMutationInput, ShopifyOrderUncheckedUpdateManyInput>
    /**
     * Filter which ShopifyOrders to update
     */
    where?: ShopifyOrderWhereInput
  }


  /**
   * ShopifyOrder upsert
   */
  export type ShopifyOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopifyOrder to update in case it exists.
     */
    where: ShopifyOrderWhereUniqueInput
    /**
     * In case the ShopifyOrder found by the `where` argument doesn't exist, create a new ShopifyOrder with this data.
     */
    create: XOR<ShopifyOrderCreateInput, ShopifyOrderUncheckedCreateInput>
    /**
     * In case the ShopifyOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopifyOrderUpdateInput, ShopifyOrderUncheckedUpdateInput>
  }


  /**
   * ShopifyOrder delete
   */
  export type ShopifyOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
    /**
     * Filter which ShopifyOrder to delete.
     */
    where: ShopifyOrderWhereUniqueInput
  }


  /**
   * ShopifyOrder deleteMany
   */
  export type ShopifyOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyOrders to delete
     */
    where?: ShopifyOrderWhereInput
  }


  /**
   * ShopifyOrder without action
   */
  export type ShopifyOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyOrder
     */
    select?: ShopifyOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopifyOrderInclude<ExtArgs> | null
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
    joined_at: 'joined_at',
    user_events: 'user_events'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    seller_id: 'seller_id',
    name: 'name',
    platform: 'platform',
    image_url: 'image_url',
    connected_at: 'connected_at',
    store_info: 'store_info',
    user_id: 'user_id'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


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


  export const DarazOrderScalarFieldEnum: {
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
    gift_message: 'gift_message',
    remarks: 'remarks',
    order_items: 'order_items',
    transactions: 'transactions',
    shipping_address: 'shipping_address',
    billing_address: 'billing_address',
    user_id: 'user_id',
    customer_id: 'customer_id'
  };

  export type DarazOrderScalarFieldEnum = (typeof DarazOrderScalarFieldEnum)[keyof typeof DarazOrderScalarFieldEnum]


  export const DarazTransactionScalarFieldEnum: {
    id: 'id',
    seller_id: 'seller_id',
    order_number: 'order_number',
    order_item_status: 'order_item_status',
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

  export type DarazTransactionScalarFieldEnum = (typeof DarazTransactionScalarFieldEnum)[keyof typeof DarazTransactionScalarFieldEnum]


  export const DarazStoreTransactionScalarFieldEnum: {
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

  export type DarazStoreTransactionScalarFieldEnum = (typeof DarazStoreTransactionScalarFieldEnum)[keyof typeof DarazStoreTransactionScalarFieldEnum]


  export const TemporaryDataScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    data: 'data',
    user_id: 'user_id'
  };

  export type TemporaryDataScalarFieldEnum = (typeof TemporaryDataScalarFieldEnum)[keyof typeof TemporaryDataScalarFieldEnum]


  export const ShopifyOrderScalarFieldEnum: {
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
    customer_id: 'customer_id',
    id: 'id'
  };

  export type ShopifyOrderScalarFieldEnum = (typeof ShopifyOrderScalarFieldEnum)[keyof typeof ShopifyOrderScalarFieldEnum]


  export const CourierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    data: 'data',
    shippers: 'shippers',
    user_id: 'user_id'
  };

  export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum]


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


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
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
    joined_at?: DateTimeFilter<"User"> | Date | string
    user_events?: JsonNullableFilter<"User">
    Courier?: CourierListRelationFilter
    Customer?: CustomerListRelationFilter
    DarazOrder?: DarazOrderListRelationFilter
    DarazStoreTransaction?: DarazStoreTransactionListRelationFilter
    ShopifyOrder?: ShopifyOrderListRelationFilter
    Store?: StoreListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazTransaction?: DarazTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joined_at?: SortOrder
    user_events?: SortOrderInput | SortOrder
    Courier?: CourierOrderByRelationAggregateInput
    Customer?: CustomerOrderByRelationAggregateInput
    DarazOrder?: DarazOrderOrderByRelationAggregateInput
    DarazStoreTransaction?: DarazStoreTransactionOrderByRelationAggregateInput
    ShopifyOrder?: ShopifyOrderOrderByRelationAggregateInput
    Store?: StoreOrderByRelationAggregateInput
    TemporaryData?: TemporaryDataOrderByRelationAggregateInput
    DarazTransaction?: DarazTransactionOrderByRelationAggregateInput
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
    joined_at?: DateTimeFilter<"User"> | Date | string
    user_events?: JsonNullableFilter<"User">
    Courier?: CourierListRelationFilter
    Customer?: CustomerListRelationFilter
    DarazOrder?: DarazOrderListRelationFilter
    DarazStoreTransaction?: DarazStoreTransactionListRelationFilter
    ShopifyOrder?: ShopifyOrderListRelationFilter
    Store?: StoreListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    DarazTransaction?: DarazTransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joined_at?: SortOrder
    user_events?: SortOrderInput | SortOrder
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
    joined_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    user_events?: JsonNullableWithAggregatesFilter<"User">
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    seller_id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    platform?: StringFilter<"Store"> | string
    image_url?: StringFilter<"Store"> | string
    connected_at?: DateTimeFilter<"Store"> | Date | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StoreOrderByWithRelationInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    connected_at?: SortOrder
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
    connected_at?: DateTimeFilter<"Store"> | Date | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "seller_id">

  export type StoreOrderByWithAggregationInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    connected_at?: SortOrder
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
    connected_at?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    store_info?: JsonWithAggregatesFilter<"Store">
    user_id?: IntWithAggregatesFilter<"Store"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopify_id?: StringFilter<"Customer"> | string
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    province?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrder?: DarazOrderListRelationFilter
    ShopifyOrder?: ShopifyOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    DarazOrder?: DarazOrderOrderByRelationAggregateInput
    ShopifyOrder?: ShopifyOrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    shopify_id?: StringFilter<"Customer"> | string
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    province?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrder?: DarazOrderListRelationFilter
    ShopifyOrder?: ShopifyOrderListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
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
    shopify_id?: StringWithAggregatesFilter<"Customer"> | string
    first_name?: StringWithAggregatesFilter<"Customer"> | string
    last_name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    city?: StringWithAggregatesFilter<"Customer"> | string
    province?: StringWithAggregatesFilter<"Customer"> | string
    country?: StringWithAggregatesFilter<"Customer"> | string
    user_id?: IntWithAggregatesFilter<"Customer"> | number
  }

  export type DarazOrderWhereInput = {
    AND?: DarazOrderWhereInput | DarazOrderWhereInput[]
    OR?: DarazOrderWhereInput[]
    NOT?: DarazOrderWhereInput | DarazOrderWhereInput[]
    order_id?: StringFilter<"DarazOrder"> | string
    seller_id?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: StringFilter<"DarazOrder"> | string
    promised_shipping_times?: StringFilter<"DarazOrder"> | string
    updated_at?: DateTimeFilter<"DarazOrder"> | Date | string
    price?: FloatFilter<"DarazOrder"> | number
    shipping_fee_original?: FloatFilter<"DarazOrder"> | number
    payment_method?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_seller?: FloatFilter<"DarazOrder"> | number
    shipping_fee?: FloatFilter<"DarazOrder"> | number
    items_count?: IntFilter<"DarazOrder"> | number
    payment_status?: BoolFilter<"DarazOrder"> | boolean
    statuses?: StringFilter<"DarazOrder"> | string
    is_received?: BoolFilter<"DarazOrder"> | boolean
    gift_message?: StringFilter<"DarazOrder"> | string
    remarks?: StringFilter<"DarazOrder"> | string
    order_items?: JsonFilter<"DarazOrder">
    transactions?: JsonFilter<"DarazOrder">
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DarazOrderOrderByWithRelationInput = {
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
    gift_message?: SortOrder
    remarks?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shipping_address?: SortOrder
    billing_address?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DarazOrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: DarazOrderWhereInput | DarazOrderWhereInput[]
    OR?: DarazOrderWhereInput[]
    NOT?: DarazOrderWhereInput | DarazOrderWhereInput[]
    seller_id?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: StringFilter<"DarazOrder"> | string
    promised_shipping_times?: StringFilter<"DarazOrder"> | string
    updated_at?: DateTimeFilter<"DarazOrder"> | Date | string
    price?: FloatFilter<"DarazOrder"> | number
    shipping_fee_original?: FloatFilter<"DarazOrder"> | number
    payment_method?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_seller?: FloatFilter<"DarazOrder"> | number
    shipping_fee?: FloatFilter<"DarazOrder"> | number
    items_count?: IntFilter<"DarazOrder"> | number
    payment_status?: BoolFilter<"DarazOrder"> | boolean
    statuses?: StringFilter<"DarazOrder"> | string
    is_received?: BoolFilter<"DarazOrder"> | boolean
    gift_message?: StringFilter<"DarazOrder"> | string
    remarks?: StringFilter<"DarazOrder"> | string
    order_items?: JsonFilter<"DarazOrder">
    transactions?: JsonFilter<"DarazOrder">
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "order_id">

  export type DarazOrderOrderByWithAggregationInput = {
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
    gift_message?: SortOrder
    remarks?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shipping_address?: SortOrder
    billing_address?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    _count?: DarazOrderCountOrderByAggregateInput
    _avg?: DarazOrderAvgOrderByAggregateInput
    _max?: DarazOrderMaxOrderByAggregateInput
    _min?: DarazOrderMinOrderByAggregateInput
    _sum?: DarazOrderSumOrderByAggregateInput
  }

  export type DarazOrderScalarWhereWithAggregatesInput = {
    AND?: DarazOrderScalarWhereWithAggregatesInput | DarazOrderScalarWhereWithAggregatesInput[]
    OR?: DarazOrderScalarWhereWithAggregatesInput[]
    NOT?: DarazOrderScalarWhereWithAggregatesInput | DarazOrderScalarWhereWithAggregatesInput[]
    order_id?: StringWithAggregatesFilter<"DarazOrder"> | string
    seller_id?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher_platform?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher_seller?: StringWithAggregatesFilter<"DarazOrder"> | string
    order_number?: StringWithAggregatesFilter<"DarazOrder"> | string
    created_at?: DateTimeWithAggregatesFilter<"DarazOrder"> | Date | string
    voucher_code?: StringWithAggregatesFilter<"DarazOrder"> | string
    gift_option?: StringWithAggregatesFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: StringWithAggregatesFilter<"DarazOrder"> | string
    promised_shipping_times?: StringWithAggregatesFilter<"DarazOrder"> | string
    updated_at?: DateTimeWithAggregatesFilter<"DarazOrder"> | Date | string
    price?: FloatWithAggregatesFilter<"DarazOrder"> | number
    shipping_fee_original?: FloatWithAggregatesFilter<"DarazOrder"> | number
    payment_method?: StringWithAggregatesFilter<"DarazOrder"> | string
    shipping_fee_discount_seller?: FloatWithAggregatesFilter<"DarazOrder"> | number
    shipping_fee?: FloatWithAggregatesFilter<"DarazOrder"> | number
    items_count?: IntWithAggregatesFilter<"DarazOrder"> | number
    payment_status?: BoolWithAggregatesFilter<"DarazOrder"> | boolean
    statuses?: StringWithAggregatesFilter<"DarazOrder"> | string
    is_received?: BoolWithAggregatesFilter<"DarazOrder"> | boolean
    gift_message?: StringWithAggregatesFilter<"DarazOrder"> | string
    remarks?: StringWithAggregatesFilter<"DarazOrder"> | string
    order_items?: JsonWithAggregatesFilter<"DarazOrder">
    transactions?: JsonWithAggregatesFilter<"DarazOrder">
    shipping_address?: JsonWithAggregatesFilter<"DarazOrder">
    billing_address?: JsonWithAggregatesFilter<"DarazOrder">
    user_id?: IntWithAggregatesFilter<"DarazOrder"> | number
    customer_id?: StringWithAggregatesFilter<"DarazOrder"> | string
  }

  export type DarazTransactionWhereInput = {
    AND?: DarazTransactionWhereInput | DarazTransactionWhereInput[]
    OR?: DarazTransactionWhereInput[]
    NOT?: DarazTransactionWhereInput | DarazTransactionWhereInput[]
    id?: StringFilter<"DarazTransaction"> | string
    seller_id?: StringFilter<"DarazTransaction"> | string
    order_number?: StringFilter<"DarazTransaction"> | string
    order_item_status?: StringFilter<"DarazTransaction"> | string
    amount?: StringFilter<"DarazTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazTransaction"> | string
    statement?: StringFilter<"DarazTransaction"> | string
    payment_ref_id?: StringFilter<"DarazTransaction"> | string
    fee_name?: StringFilter<"DarazTransaction"> | string
    paid_status?: StringFilter<"DarazTransaction"> | string
    WHT_amount?: StringFilter<"DarazTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazTransaction"> | string
    transaction_number?: StringFilter<"DarazTransaction"> | string
    comment?: StringFilter<"DarazTransaction"> | string
    user_id?: IntFilter<"DarazTransaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DarazTransactionOrderByWithRelationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    order_number?: SortOrder
    order_item_status?: SortOrder
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
    user?: UserOrderByWithRelationInput
  }

  export type DarazTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DarazTransactionWhereInput | DarazTransactionWhereInput[]
    OR?: DarazTransactionWhereInput[]
    NOT?: DarazTransactionWhereInput | DarazTransactionWhereInput[]
    seller_id?: StringFilter<"DarazTransaction"> | string
    order_number?: StringFilter<"DarazTransaction"> | string
    order_item_status?: StringFilter<"DarazTransaction"> | string
    amount?: StringFilter<"DarazTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazTransaction"> | string
    statement?: StringFilter<"DarazTransaction"> | string
    payment_ref_id?: StringFilter<"DarazTransaction"> | string
    fee_name?: StringFilter<"DarazTransaction"> | string
    paid_status?: StringFilter<"DarazTransaction"> | string
    WHT_amount?: StringFilter<"DarazTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazTransaction"> | string
    transaction_number?: StringFilter<"DarazTransaction"> | string
    comment?: StringFilter<"DarazTransaction"> | string
    user_id?: IntFilter<"DarazTransaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DarazTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    order_number?: SortOrder
    order_item_status?: SortOrder
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
    _count?: DarazTransactionCountOrderByAggregateInput
    _avg?: DarazTransactionAvgOrderByAggregateInput
    _max?: DarazTransactionMaxOrderByAggregateInput
    _min?: DarazTransactionMinOrderByAggregateInput
    _sum?: DarazTransactionSumOrderByAggregateInput
  }

  export type DarazTransactionScalarWhereWithAggregatesInput = {
    AND?: DarazTransactionScalarWhereWithAggregatesInput | DarazTransactionScalarWhereWithAggregatesInput[]
    OR?: DarazTransactionScalarWhereWithAggregatesInput[]
    NOT?: DarazTransactionScalarWhereWithAggregatesInput | DarazTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DarazTransaction"> | string
    seller_id?: StringWithAggregatesFilter<"DarazTransaction"> | string
    order_number?: StringWithAggregatesFilter<"DarazTransaction"> | string
    order_item_status?: StringWithAggregatesFilter<"DarazTransaction"> | string
    amount?: StringWithAggregatesFilter<"DarazTransaction"> | string
    transaction_date?: DateTimeWithAggregatesFilter<"DarazTransaction"> | Date | string
    transaction_type?: StringWithAggregatesFilter<"DarazTransaction"> | string
    statement?: StringWithAggregatesFilter<"DarazTransaction"> | string
    payment_ref_id?: StringWithAggregatesFilter<"DarazTransaction"> | string
    fee_name?: StringWithAggregatesFilter<"DarazTransaction"> | string
    paid_status?: StringWithAggregatesFilter<"DarazTransaction"> | string
    WHT_amount?: StringWithAggregatesFilter<"DarazTransaction"> | string
    VAT_in_amount?: StringWithAggregatesFilter<"DarazTransaction"> | string
    transaction_number?: StringWithAggregatesFilter<"DarazTransaction"> | string
    comment?: StringWithAggregatesFilter<"DarazTransaction"> | string
    user_id?: IntWithAggregatesFilter<"DarazTransaction"> | number
  }

  export type DarazStoreTransactionWhereInput = {
    AND?: DarazStoreTransactionWhereInput | DarazStoreTransactionWhereInput[]
    OR?: DarazStoreTransactionWhereInput[]
    NOT?: DarazStoreTransactionWhereInput | DarazStoreTransactionWhereInput[]
    seller_id?: StringFilter<"DarazStoreTransaction"> | string
    amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazStoreTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazStoreTransaction"> | string
    statement?: StringFilter<"DarazStoreTransaction"> | string
    payment_ref_id?: StringFilter<"DarazStoreTransaction"> | string
    fee_name?: StringFilter<"DarazStoreTransaction"> | string
    paid_status?: StringFilter<"DarazStoreTransaction"> | string
    WHT_amount?: StringFilter<"DarazStoreTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_number?: StringFilter<"DarazStoreTransaction"> | string
    comment?: StringFilter<"DarazStoreTransaction"> | string
    user_id?: IntFilter<"DarazStoreTransaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DarazStoreTransactionOrderByWithRelationInput = {
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
    user?: UserOrderByWithRelationInput
  }

  export type DarazStoreTransactionWhereUniqueInput = Prisma.AtLeast<{
    seller_id?: string
    AND?: DarazStoreTransactionWhereInput | DarazStoreTransactionWhereInput[]
    OR?: DarazStoreTransactionWhereInput[]
    NOT?: DarazStoreTransactionWhereInput | DarazStoreTransactionWhereInput[]
    amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazStoreTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazStoreTransaction"> | string
    statement?: StringFilter<"DarazStoreTransaction"> | string
    payment_ref_id?: StringFilter<"DarazStoreTransaction"> | string
    fee_name?: StringFilter<"DarazStoreTransaction"> | string
    paid_status?: StringFilter<"DarazStoreTransaction"> | string
    WHT_amount?: StringFilter<"DarazStoreTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_number?: StringFilter<"DarazStoreTransaction"> | string
    comment?: StringFilter<"DarazStoreTransaction"> | string
    user_id?: IntFilter<"DarazStoreTransaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "seller_id">

  export type DarazStoreTransactionOrderByWithAggregationInput = {
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
    _count?: DarazStoreTransactionCountOrderByAggregateInput
    _avg?: DarazStoreTransactionAvgOrderByAggregateInput
    _max?: DarazStoreTransactionMaxOrderByAggregateInput
    _min?: DarazStoreTransactionMinOrderByAggregateInput
    _sum?: DarazStoreTransactionSumOrderByAggregateInput
  }

  export type DarazStoreTransactionScalarWhereWithAggregatesInput = {
    AND?: DarazStoreTransactionScalarWhereWithAggregatesInput | DarazStoreTransactionScalarWhereWithAggregatesInput[]
    OR?: DarazStoreTransactionScalarWhereWithAggregatesInput[]
    NOT?: DarazStoreTransactionScalarWhereWithAggregatesInput | DarazStoreTransactionScalarWhereWithAggregatesInput[]
    seller_id?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    amount?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    transaction_date?: DateTimeWithAggregatesFilter<"DarazStoreTransaction"> | Date | string
    transaction_type?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    statement?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    payment_ref_id?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    fee_name?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    paid_status?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    WHT_amount?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    VAT_in_amount?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    transaction_number?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    comment?: StringWithAggregatesFilter<"DarazStoreTransaction"> | string
    user_id?: IntWithAggregatesFilter<"DarazStoreTransaction"> | number
  }

  export type TemporaryDataWhereInput = {
    AND?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    OR?: TemporaryDataWhereInput[]
    NOT?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    id?: IntFilter<"TemporaryData"> | number
    email?: StringFilter<"TemporaryData"> | string
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    data?: JsonFilter<"TemporaryData">
    user_id?: IntFilter<"TemporaryData"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TemporaryDataOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    data?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TemporaryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    OR?: TemporaryDataWhereInput[]
    NOT?: TemporaryDataWhereInput | TemporaryDataWhereInput[]
    email?: StringFilter<"TemporaryData"> | string
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    data?: JsonFilter<"TemporaryData">
    user_id?: IntFilter<"TemporaryData"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TemporaryDataOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    data?: SortOrder
    user_id?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"TemporaryData"> | Date | string
    data?: JsonWithAggregatesFilter<"TemporaryData">
    user_id?: IntWithAggregatesFilter<"TemporaryData"> | number
  }

  export type ShopifyOrderWhereInput = {
    AND?: ShopifyOrderWhereInput | ShopifyOrderWhereInput[]
    OR?: ShopifyOrderWhereInput[]
    NOT?: ShopifyOrderWhereInput | ShopifyOrderWhereInput[]
    current_total_additional_fees_set?: StringFilter<"ShopifyOrder"> | string
    current_total_discounts?: StringFilter<"ShopifyOrder"> | string
    current_total_duties_set?: StringFilter<"ShopifyOrder"> | string
    current_total_price?: StringFilter<"ShopifyOrder"> | string
    current_total_tax?: StringFilter<"ShopifyOrder"> | string
    email?: StringFilter<"ShopifyOrder"> | string
    financial_status?: StringFilter<"ShopifyOrder"> | string
    fulfillment_status?: JsonFilter<"ShopifyOrder">
    line_items?: JsonFilter<"ShopifyOrder">
    note?: StringFilter<"ShopifyOrder"> | string
    phone?: StringFilter<"ShopifyOrder"> | string
    processed_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    referring_site?: StringFilter<"ShopifyOrder"> | string
    source_name?: StringFilter<"ShopifyOrder"> | string
    subtotal_price?: StringFilter<"ShopifyOrder"> | string
    tags?: StringFilter<"ShopifyOrder"> | string
    total_discounts?: StringFilter<"ShopifyOrder"> | string
    total_line_items_price?: StringFilter<"ShopifyOrder"> | string
    total_outstanding?: StringFilter<"ShopifyOrder"> | string
    total_price?: StringFilter<"ShopifyOrder"> | string
    updated_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    user_id?: IntFilter<"ShopifyOrder"> | number
    customer_id?: StringFilter<"ShopifyOrder"> | string
    id?: StringFilter<"ShopifyOrder"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ShopifyOrderOrderByWithRelationInput = {
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
    id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShopifyOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopifyOrderWhereInput | ShopifyOrderWhereInput[]
    OR?: ShopifyOrderWhereInput[]
    NOT?: ShopifyOrderWhereInput | ShopifyOrderWhereInput[]
    current_total_additional_fees_set?: StringFilter<"ShopifyOrder"> | string
    current_total_discounts?: StringFilter<"ShopifyOrder"> | string
    current_total_duties_set?: StringFilter<"ShopifyOrder"> | string
    current_total_price?: StringFilter<"ShopifyOrder"> | string
    current_total_tax?: StringFilter<"ShopifyOrder"> | string
    email?: StringFilter<"ShopifyOrder"> | string
    financial_status?: StringFilter<"ShopifyOrder"> | string
    fulfillment_status?: JsonFilter<"ShopifyOrder">
    line_items?: JsonFilter<"ShopifyOrder">
    note?: StringFilter<"ShopifyOrder"> | string
    phone?: StringFilter<"ShopifyOrder"> | string
    processed_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    referring_site?: StringFilter<"ShopifyOrder"> | string
    source_name?: StringFilter<"ShopifyOrder"> | string
    subtotal_price?: StringFilter<"ShopifyOrder"> | string
    tags?: StringFilter<"ShopifyOrder"> | string
    total_discounts?: StringFilter<"ShopifyOrder"> | string
    total_line_items_price?: StringFilter<"ShopifyOrder"> | string
    total_outstanding?: StringFilter<"ShopifyOrder"> | string
    total_price?: StringFilter<"ShopifyOrder"> | string
    updated_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    user_id?: IntFilter<"ShopifyOrder"> | number
    customer_id?: StringFilter<"ShopifyOrder"> | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ShopifyOrderOrderByWithAggregationInput = {
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
    id?: SortOrder
    _count?: ShopifyOrderCountOrderByAggregateInput
    _avg?: ShopifyOrderAvgOrderByAggregateInput
    _max?: ShopifyOrderMaxOrderByAggregateInput
    _min?: ShopifyOrderMinOrderByAggregateInput
    _sum?: ShopifyOrderSumOrderByAggregateInput
  }

  export type ShopifyOrderScalarWhereWithAggregatesInput = {
    AND?: ShopifyOrderScalarWhereWithAggregatesInput | ShopifyOrderScalarWhereWithAggregatesInput[]
    OR?: ShopifyOrderScalarWhereWithAggregatesInput[]
    NOT?: ShopifyOrderScalarWhereWithAggregatesInput | ShopifyOrderScalarWhereWithAggregatesInput[]
    current_total_additional_fees_set?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    current_total_discounts?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    current_total_duties_set?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    current_total_price?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    current_total_tax?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    email?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    financial_status?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    fulfillment_status?: JsonWithAggregatesFilter<"ShopifyOrder">
    line_items?: JsonWithAggregatesFilter<"ShopifyOrder">
    note?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    phone?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    processed_at?: DateTimeWithAggregatesFilter<"ShopifyOrder"> | Date | string
    referring_site?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    source_name?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    subtotal_price?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    tags?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    total_discounts?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    total_line_items_price?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    total_outstanding?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    total_price?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    updated_at?: DateTimeWithAggregatesFilter<"ShopifyOrder"> | Date | string
    user_id?: IntWithAggregatesFilter<"ShopifyOrder"> | number
    customer_id?: StringWithAggregatesFilter<"ShopifyOrder"> | string
    id?: StringWithAggregatesFilter<"ShopifyOrder"> | string
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
  }, "id">

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
  }, "id">

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
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoreCreateInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreUpdateManyMutationInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user: UserCreateNestedOneWithoutCustomerInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutCustomerInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutCustomerInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutCustomerNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrderCreateInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    customer: CustomerCreateNestedOneWithoutDarazOrderInput
    user: UserCreateNestedOneWithoutDarazOrderInput
  }

  export type DarazOrderUncheckedCreateInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    user_id: number
    customer_id: string
  }

  export type DarazOrderUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    customer?: CustomerUpdateOneRequiredWithoutDarazOrderNestedInput
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
  }

  export type DarazOrderUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrderCreateManyInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    user_id: number
    customer_id: string
  }

  export type DarazOrderUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
  }

  export type DarazOrderUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionCreateInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user: UserCreateNestedOneWithoutDarazTransactionInput
  }

  export type DarazTransactionUncheckedCreateInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
  }

  export type DarazTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDarazTransactionNestedInput
  }

  export type DarazTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazTransactionCreateManyInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
  }

  export type DarazTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazStoreTransactionCreateInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user: UserCreateNestedOneWithoutDarazStoreTransactionInput
  }

  export type DarazStoreTransactionUncheckedCreateInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
  }

  export type DarazStoreTransactionUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDarazStoreTransactionNestedInput
  }

  export type DarazStoreTransactionUncheckedUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazStoreTransactionCreateManyInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
    user_id: number
  }

  export type DarazStoreTransactionUpdateManyMutationInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazStoreTransactionUncheckedUpdateManyInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TemporaryDataCreateInput = {
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTemporaryDataInput
  }

  export type TemporaryDataUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type TemporaryDataUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTemporaryDataNestedInput
  }

  export type TemporaryDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TemporaryDataCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type TemporaryDataUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopifyOrderCreateInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    id: string
    customer: CustomerCreateNestedOneWithoutShopifyOrderInput
    user: UserCreateNestedOneWithoutShopifyOrderInput
  }

  export type ShopifyOrderUncheckedCreateInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    user_id: number
    customer_id: string
    id: string
  }

  export type ShopifyOrderUpdateInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutShopifyOrderNestedInput
    user?: UserUpdateOneRequiredWithoutShopifyOrderNestedInput
  }

  export type ShopifyOrderUncheckedUpdateInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrderCreateManyInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    user_id: number
    customer_id: string
    id: string
  }

  export type ShopifyOrderUpdateManyMutationInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrderUncheckedUpdateManyInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type CourierListRelationFilter = {
    every?: CourierWhereInput
    some?: CourierWhereInput
    none?: CourierWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type DarazOrderListRelationFilter = {
    every?: DarazOrderWhereInput
    some?: DarazOrderWhereInput
    none?: DarazOrderWhereInput
  }

  export type DarazStoreTransactionListRelationFilter = {
    every?: DarazStoreTransactionWhereInput
    some?: DarazStoreTransactionWhereInput
    none?: DarazStoreTransactionWhereInput
  }

  export type ShopifyOrderListRelationFilter = {
    every?: ShopifyOrderWhereInput
    some?: ShopifyOrderWhereInput
    none?: ShopifyOrderWhereInput
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type TemporaryDataListRelationFilter = {
    every?: TemporaryDataWhereInput
    some?: TemporaryDataWhereInput
    none?: TemporaryDataWhereInput
  }

  export type DarazTransactionListRelationFilter = {
    every?: DarazTransactionWhereInput
    some?: DarazTransactionWhereInput
    none?: DarazTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazStoreTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopifyOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporaryDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazTransactionOrderByRelationAggregateInput = {
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
    joined_at?: SortOrder
    user_events?: SortOrder
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
    joined_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joined_at?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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
    connected_at?: SortOrder
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
    connected_at?: SortOrder
    user_id?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    seller_id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    image_url?: SortOrder
    connected_at?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type DarazOrderCountOrderByAggregateInput = {
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
    gift_message?: SortOrder
    remarks?: SortOrder
    order_items?: SortOrder
    transactions?: SortOrder
    shipping_address?: SortOrder
    billing_address?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderAvgOrderByAggregateInput = {
    price?: SortOrder
    shipping_fee_original?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    user_id?: SortOrder
  }

  export type DarazOrderMaxOrderByAggregateInput = {
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
    gift_message?: SortOrder
    remarks?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderMinOrderByAggregateInput = {
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
    gift_message?: SortOrder
    remarks?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderSumOrderByAggregateInput = {
    price?: SortOrder
    shipping_fee_original?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    user_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DarazTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    order_number?: SortOrder
    order_item_status?: SortOrder
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

  export type DarazTransactionAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DarazTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    order_number?: SortOrder
    order_item_status?: SortOrder
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

  export type DarazTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    order_number?: SortOrder
    order_item_status?: SortOrder
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

  export type DarazTransactionSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DarazStoreTransactionCountOrderByAggregateInput = {
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

  export type DarazStoreTransactionAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DarazStoreTransactionMaxOrderByAggregateInput = {
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

  export type DarazStoreTransactionMinOrderByAggregateInput = {
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

  export type DarazStoreTransactionSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type TemporaryDataCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    data?: SortOrder
    user_id?: SortOrder
  }

  export type TemporaryDataAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TemporaryDataMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    user_id?: SortOrder
  }

  export type TemporaryDataMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    user_id?: SortOrder
  }

  export type TemporaryDataSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ShopifyOrderCountOrderByAggregateInput = {
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
    id?: SortOrder
  }

  export type ShopifyOrderAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type ShopifyOrderMaxOrderByAggregateInput = {
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
    id?: SortOrder
  }

  export type ShopifyOrderMinOrderByAggregateInput = {
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
    id?: SortOrder
  }

  export type ShopifyOrderSumOrderByAggregateInput = {
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

  export type CourierCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type DarazOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput> | DarazOrderCreateWithoutUserInput[] | DarazOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutUserInput | DarazOrderCreateOrConnectWithoutUserInput[]
    createMany?: DarazOrderCreateManyUserInputEnvelope
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
  }

  export type DarazStoreTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput> | DarazStoreTransactionCreateWithoutUserInput[] | DarazStoreTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionCreateOrConnectWithoutUserInput | DarazStoreTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazStoreTransactionCreateManyUserInputEnvelope
    connect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
  }

  export type ShopifyOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput> | ShopifyOrderCreateWithoutUserInput[] | ShopifyOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutUserInput | ShopifyOrderCreateOrConnectWithoutUserInput[]
    createMany?: ShopifyOrderCreateManyUserInputEnvelope
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
  }

  export type StoreCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type TemporaryDataCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type DarazTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type DarazOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput> | DarazOrderCreateWithoutUserInput[] | DarazOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutUserInput | DarazOrderCreateOrConnectWithoutUserInput[]
    createMany?: DarazOrderCreateManyUserInputEnvelope
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
  }

  export type DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput> | DarazStoreTransactionCreateWithoutUserInput[] | DarazStoreTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionCreateOrConnectWithoutUserInput | DarazStoreTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazStoreTransactionCreateManyUserInputEnvelope
    connect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
  }

  export type ShopifyOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput> | ShopifyOrderCreateWithoutUserInput[] | ShopifyOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutUserInput | ShopifyOrderCreateOrConnectWithoutUserInput[]
    createMany?: ShopifyOrderCreateManyUserInputEnvelope
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type TemporaryDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type DarazTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type DarazOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput> | DarazOrderCreateWithoutUserInput[] | DarazOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutUserInput | DarazOrderCreateOrConnectWithoutUserInput[]
    upsert?: DarazOrderUpsertWithWhereUniqueWithoutUserInput | DarazOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazOrderCreateManyUserInputEnvelope
    set?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    disconnect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    delete?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    update?: DarazOrderUpdateWithWhereUniqueWithoutUserInput | DarazOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazOrderUpdateManyWithWhereWithoutUserInput | DarazOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
  }

  export type DarazStoreTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput> | DarazStoreTransactionCreateWithoutUserInput[] | DarazStoreTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionCreateOrConnectWithoutUserInput | DarazStoreTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DarazStoreTransactionUpsertWithWhereUniqueWithoutUserInput | DarazStoreTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazStoreTransactionCreateManyUserInputEnvelope
    set?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    disconnect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    delete?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    connect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    update?: DarazStoreTransactionUpdateWithWhereUniqueWithoutUserInput | DarazStoreTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazStoreTransactionUpdateManyWithWhereWithoutUserInput | DarazStoreTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazStoreTransactionScalarWhereInput | DarazStoreTransactionScalarWhereInput[]
  }

  export type ShopifyOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput> | ShopifyOrderCreateWithoutUserInput[] | ShopifyOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutUserInput | ShopifyOrderCreateOrConnectWithoutUserInput[]
    upsert?: ShopifyOrderUpsertWithWhereUniqueWithoutUserInput | ShopifyOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopifyOrderCreateManyUserInputEnvelope
    set?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    disconnect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    delete?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    update?: ShopifyOrderUpdateWithWhereUniqueWithoutUserInput | ShopifyOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopifyOrderUpdateManyWithWhereWithoutUserInput | ShopifyOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
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

  export type DarazTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DarazTransactionUpsertWithWhereUniqueWithoutUserInput | DarazTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    set?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    disconnect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    delete?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    update?: DarazTransactionUpdateWithWhereUniqueWithoutUserInput | DarazTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazTransactionUpdateManyWithWhereWithoutUserInput | DarazTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DarazOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput> | DarazOrderCreateWithoutUserInput[] | DarazOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutUserInput | DarazOrderCreateOrConnectWithoutUserInput[]
    upsert?: DarazOrderUpsertWithWhereUniqueWithoutUserInput | DarazOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazOrderCreateManyUserInputEnvelope
    set?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    disconnect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    delete?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    update?: DarazOrderUpdateWithWhereUniqueWithoutUserInput | DarazOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazOrderUpdateManyWithWhereWithoutUserInput | DarazOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
  }

  export type DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput> | DarazStoreTransactionCreateWithoutUserInput[] | DarazStoreTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazStoreTransactionCreateOrConnectWithoutUserInput | DarazStoreTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DarazStoreTransactionUpsertWithWhereUniqueWithoutUserInput | DarazStoreTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazStoreTransactionCreateManyUserInputEnvelope
    set?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    disconnect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    delete?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    connect?: DarazStoreTransactionWhereUniqueInput | DarazStoreTransactionWhereUniqueInput[]
    update?: DarazStoreTransactionUpdateWithWhereUniqueWithoutUserInput | DarazStoreTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazStoreTransactionUpdateManyWithWhereWithoutUserInput | DarazStoreTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazStoreTransactionScalarWhereInput | DarazStoreTransactionScalarWhereInput[]
  }

  export type ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput> | ShopifyOrderCreateWithoutUserInput[] | ShopifyOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutUserInput | ShopifyOrderCreateOrConnectWithoutUserInput[]
    upsert?: ShopifyOrderUpsertWithWhereUniqueWithoutUserInput | ShopifyOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopifyOrderCreateManyUserInputEnvelope
    set?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    disconnect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    delete?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    update?: ShopifyOrderUpdateWithWhereUniqueWithoutUserInput | ShopifyOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopifyOrderUpdateManyWithWhereWithoutUserInput | ShopifyOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
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

  export type DarazTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    upsert?: DarazTransactionUpsertWithWhereUniqueWithoutUserInput | DarazTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    set?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    disconnect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    delete?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    update?: DarazTransactionUpdateWithWhereUniqueWithoutUserInput | DarazTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DarazTransactionUpdateManyWithWhereWithoutUserInput | DarazTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type DarazOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput> | DarazOrderCreateWithoutCustomerInput[] | DarazOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutCustomerInput | DarazOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: DarazOrderCreateManyCustomerInputEnvelope
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
  }

  export type ShopifyOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput> | ShopifyOrderCreateWithoutCustomerInput[] | ShopifyOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutCustomerInput | ShopifyOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: ShopifyOrderCreateManyCustomerInputEnvelope
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
  }

  export type DarazOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput> | DarazOrderCreateWithoutCustomerInput[] | DarazOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutCustomerInput | DarazOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: DarazOrderCreateManyCustomerInputEnvelope
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
  }

  export type ShopifyOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput> | ShopifyOrderCreateWithoutCustomerInput[] | ShopifyOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutCustomerInput | ShopifyOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: ShopifyOrderCreateManyCustomerInputEnvelope
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type DarazOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput> | DarazOrderCreateWithoutCustomerInput[] | DarazOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutCustomerInput | DarazOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: DarazOrderUpsertWithWhereUniqueWithoutCustomerInput | DarazOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DarazOrderCreateManyCustomerInputEnvelope
    set?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    disconnect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    delete?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    update?: DarazOrderUpdateWithWhereUniqueWithoutCustomerInput | DarazOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DarazOrderUpdateManyWithWhereWithoutCustomerInput | DarazOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
  }

  export type ShopifyOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput> | ShopifyOrderCreateWithoutCustomerInput[] | ShopifyOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutCustomerInput | ShopifyOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: ShopifyOrderUpsertWithWhereUniqueWithoutCustomerInput | ShopifyOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShopifyOrderCreateManyCustomerInputEnvelope
    set?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    disconnect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    delete?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    update?: ShopifyOrderUpdateWithWhereUniqueWithoutCustomerInput | ShopifyOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShopifyOrderUpdateManyWithWhereWithoutCustomerInput | ShopifyOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
  }

  export type DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput> | DarazOrderCreateWithoutCustomerInput[] | DarazOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutCustomerInput | DarazOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: DarazOrderUpsertWithWhereUniqueWithoutCustomerInput | DarazOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DarazOrderCreateManyCustomerInputEnvelope
    set?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    disconnect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    delete?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
    update?: DarazOrderUpdateWithWhereUniqueWithoutCustomerInput | DarazOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DarazOrderUpdateManyWithWhereWithoutCustomerInput | DarazOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
  }

  export type ShopifyOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput> | ShopifyOrderCreateWithoutCustomerInput[] | ShopifyOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShopifyOrderCreateOrConnectWithoutCustomerInput | ShopifyOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: ShopifyOrderUpsertWithWhereUniqueWithoutCustomerInput | ShopifyOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShopifyOrderCreateManyCustomerInputEnvelope
    set?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    disconnect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    delete?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    connect?: ShopifyOrderWhereUniqueInput | ShopifyOrderWhereUniqueInput[]
    update?: ShopifyOrderUpdateWithWhereUniqueWithoutCustomerInput | ShopifyOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShopifyOrderUpdateManyWithWhereWithoutCustomerInput | ShopifyOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutDarazOrderInput = {
    create?: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDarazOrderInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutDarazOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrderInput
    upsert?: CustomerUpsertWithoutDarazOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDarazOrderInput, CustomerUpdateWithoutDarazOrderInput>, CustomerUncheckedUpdateWithoutDarazOrderInput>
  }

  export type UserUpdateOneRequiredWithoutDarazOrderNestedInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    upsert?: UserUpsertWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazOrderInput, UserUpdateWithoutDarazOrderInput>, UserUncheckedUpdateWithoutDarazOrderInput>
  }

  export type UserCreateNestedOneWithoutDarazTransactionInput = {
    create?: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDarazTransactionNestedInput = {
    create?: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazTransactionInput
    upsert?: UserUpsertWithoutDarazTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazTransactionInput, UserUpdateWithoutDarazTransactionInput>, UserUncheckedUpdateWithoutDarazTransactionInput>
  }

  export type UserCreateNestedOneWithoutDarazStoreTransactionInput = {
    create?: XOR<UserCreateWithoutDarazStoreTransactionInput, UserUncheckedCreateWithoutDarazStoreTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazStoreTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDarazStoreTransactionNestedInput = {
    create?: XOR<UserCreateWithoutDarazStoreTransactionInput, UserUncheckedCreateWithoutDarazStoreTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazStoreTransactionInput
    upsert?: UserUpsertWithoutDarazStoreTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazStoreTransactionInput, UserUpdateWithoutDarazStoreTransactionInput>, UserUncheckedUpdateWithoutDarazStoreTransactionInput>
  }

  export type UserCreateNestedOneWithoutTemporaryDataInput = {
    create?: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemporaryDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTemporaryDataNestedInput = {
    create?: XOR<UserCreateWithoutTemporaryDataInput, UserUncheckedCreateWithoutTemporaryDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemporaryDataInput
    upsert?: UserUpsertWithoutTemporaryDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemporaryDataInput, UserUpdateWithoutTemporaryDataInput>, UserUncheckedUpdateWithoutTemporaryDataInput>
  }

  export type CustomerCreateNestedOneWithoutShopifyOrderInput = {
    create?: XOR<CustomerCreateWithoutShopifyOrderInput, CustomerUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShopifyOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShopifyOrderInput = {
    create?: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrderInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutShopifyOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutShopifyOrderInput, CustomerUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShopifyOrderInput
    upsert?: CustomerUpsertWithoutShopifyOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutShopifyOrderInput, CustomerUpdateWithoutShopifyOrderInput>, CustomerUncheckedUpdateWithoutShopifyOrderInput>
  }

  export type UserUpdateOneRequiredWithoutShopifyOrderNestedInput = {
    create?: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopifyOrderInput
    upsert?: UserUpsertWithoutShopifyOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopifyOrderInput, UserUpdateWithoutShopifyOrderInput>, UserUncheckedUpdateWithoutShopifyOrderInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CustomerCreateWithoutUserInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    DarazOrder?: DarazOrderCreateNestedManyWithoutCustomerInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutCustomerInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazOrderCreateWithoutUserInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    customer: CustomerCreateNestedOneWithoutDarazOrderInput
  }

  export type DarazOrderUncheckedCreateWithoutUserInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    customer_id: string
  }

  export type DarazOrderCreateOrConnectWithoutUserInput = {
    where: DarazOrderWhereUniqueInput
    create: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput>
  }

  export type DarazOrderCreateManyUserInputEnvelope = {
    data: DarazOrderCreateManyUserInput | DarazOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazStoreTransactionCreateWithoutUserInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
  }

  export type DarazStoreTransactionUncheckedCreateWithoutUserInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
  }

  export type DarazStoreTransactionCreateOrConnectWithoutUserInput = {
    where: DarazStoreTransactionWhereUniqueInput
    create: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput>
  }

  export type DarazStoreTransactionCreateManyUserInputEnvelope = {
    data: DarazStoreTransactionCreateManyUserInput | DarazStoreTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopifyOrderCreateWithoutUserInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    id: string
    customer: CustomerCreateNestedOneWithoutShopifyOrderInput
  }

  export type ShopifyOrderUncheckedCreateWithoutUserInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    customer_id: string
    id: string
  }

  export type ShopifyOrderCreateOrConnectWithoutUserInput = {
    where: ShopifyOrderWhereUniqueInput
    create: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput>
  }

  export type ShopifyOrderCreateManyUserInputEnvelope = {
    data: ShopifyOrderCreateManyUserInput | ShopifyOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
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

  export type TemporaryDataCreateWithoutUserInput = {
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataCreateOrConnectWithoutUserInput = {
    where: TemporaryDataWhereUniqueInput
    create: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput>
  }

  export type TemporaryDataCreateManyUserInputEnvelope = {
    data: TemporaryDataCreateManyUserInput | TemporaryDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazTransactionCreateWithoutUserInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
  }

  export type DarazTransactionUncheckedCreateWithoutUserInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
  }

  export type DarazTransactionCreateOrConnectWithoutUserInput = {
    where: DarazTransactionWhereUniqueInput
    create: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput>
  }

  export type DarazTransactionCreateManyUserInputEnvelope = {
    data: DarazTransactionCreateManyUserInput | DarazTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
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
    shopify_id?: StringFilter<"Customer"> | string
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    province?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    user_id?: IntFilter<"Customer"> | number
  }

  export type DarazOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: DarazOrderWhereUniqueInput
    update: XOR<DarazOrderUpdateWithoutUserInput, DarazOrderUncheckedUpdateWithoutUserInput>
    create: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput>
  }

  export type DarazOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: DarazOrderWhereUniqueInput
    data: XOR<DarazOrderUpdateWithoutUserInput, DarazOrderUncheckedUpdateWithoutUserInput>
  }

  export type DarazOrderUpdateManyWithWhereWithoutUserInput = {
    where: DarazOrderScalarWhereInput
    data: XOR<DarazOrderUpdateManyMutationInput, DarazOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type DarazOrderScalarWhereInput = {
    AND?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
    OR?: DarazOrderScalarWhereInput[]
    NOT?: DarazOrderScalarWhereInput | DarazOrderScalarWhereInput[]
    order_id?: StringFilter<"DarazOrder"> | string
    seller_id?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: StringFilter<"DarazOrder"> | string
    promised_shipping_times?: StringFilter<"DarazOrder"> | string
    updated_at?: DateTimeFilter<"DarazOrder"> | Date | string
    price?: FloatFilter<"DarazOrder"> | number
    shipping_fee_original?: FloatFilter<"DarazOrder"> | number
    payment_method?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_seller?: FloatFilter<"DarazOrder"> | number
    shipping_fee?: FloatFilter<"DarazOrder"> | number
    items_count?: IntFilter<"DarazOrder"> | number
    payment_status?: BoolFilter<"DarazOrder"> | boolean
    statuses?: StringFilter<"DarazOrder"> | string
    is_received?: BoolFilter<"DarazOrder"> | boolean
    gift_message?: StringFilter<"DarazOrder"> | string
    remarks?: StringFilter<"DarazOrder"> | string
    order_items?: JsonFilter<"DarazOrder">
    transactions?: JsonFilter<"DarazOrder">
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
  }

  export type DarazStoreTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: DarazStoreTransactionWhereUniqueInput
    update: XOR<DarazStoreTransactionUpdateWithoutUserInput, DarazStoreTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<DarazStoreTransactionCreateWithoutUserInput, DarazStoreTransactionUncheckedCreateWithoutUserInput>
  }

  export type DarazStoreTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: DarazStoreTransactionWhereUniqueInput
    data: XOR<DarazStoreTransactionUpdateWithoutUserInput, DarazStoreTransactionUncheckedUpdateWithoutUserInput>
  }

  export type DarazStoreTransactionUpdateManyWithWhereWithoutUserInput = {
    where: DarazStoreTransactionScalarWhereInput
    data: XOR<DarazStoreTransactionUpdateManyMutationInput, DarazStoreTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type DarazStoreTransactionScalarWhereInput = {
    AND?: DarazStoreTransactionScalarWhereInput | DarazStoreTransactionScalarWhereInput[]
    OR?: DarazStoreTransactionScalarWhereInput[]
    NOT?: DarazStoreTransactionScalarWhereInput | DarazStoreTransactionScalarWhereInput[]
    seller_id?: StringFilter<"DarazStoreTransaction"> | string
    amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazStoreTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazStoreTransaction"> | string
    statement?: StringFilter<"DarazStoreTransaction"> | string
    payment_ref_id?: StringFilter<"DarazStoreTransaction"> | string
    fee_name?: StringFilter<"DarazStoreTransaction"> | string
    paid_status?: StringFilter<"DarazStoreTransaction"> | string
    WHT_amount?: StringFilter<"DarazStoreTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazStoreTransaction"> | string
    transaction_number?: StringFilter<"DarazStoreTransaction"> | string
    comment?: StringFilter<"DarazStoreTransaction"> | string
    user_id?: IntFilter<"DarazStoreTransaction"> | number
  }

  export type ShopifyOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopifyOrderWhereUniqueInput
    update: XOR<ShopifyOrderUpdateWithoutUserInput, ShopifyOrderUncheckedUpdateWithoutUserInput>
    create: XOR<ShopifyOrderCreateWithoutUserInput, ShopifyOrderUncheckedCreateWithoutUserInput>
  }

  export type ShopifyOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopifyOrderWhereUniqueInput
    data: XOR<ShopifyOrderUpdateWithoutUserInput, ShopifyOrderUncheckedUpdateWithoutUserInput>
  }

  export type ShopifyOrderUpdateManyWithWhereWithoutUserInput = {
    where: ShopifyOrderScalarWhereInput
    data: XOR<ShopifyOrderUpdateManyMutationInput, ShopifyOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopifyOrderScalarWhereInput = {
    AND?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
    OR?: ShopifyOrderScalarWhereInput[]
    NOT?: ShopifyOrderScalarWhereInput | ShopifyOrderScalarWhereInput[]
    current_total_additional_fees_set?: StringFilter<"ShopifyOrder"> | string
    current_total_discounts?: StringFilter<"ShopifyOrder"> | string
    current_total_duties_set?: StringFilter<"ShopifyOrder"> | string
    current_total_price?: StringFilter<"ShopifyOrder"> | string
    current_total_tax?: StringFilter<"ShopifyOrder"> | string
    email?: StringFilter<"ShopifyOrder"> | string
    financial_status?: StringFilter<"ShopifyOrder"> | string
    fulfillment_status?: JsonFilter<"ShopifyOrder">
    line_items?: JsonFilter<"ShopifyOrder">
    note?: StringFilter<"ShopifyOrder"> | string
    phone?: StringFilter<"ShopifyOrder"> | string
    processed_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    referring_site?: StringFilter<"ShopifyOrder"> | string
    source_name?: StringFilter<"ShopifyOrder"> | string
    subtotal_price?: StringFilter<"ShopifyOrder"> | string
    tags?: StringFilter<"ShopifyOrder"> | string
    total_discounts?: StringFilter<"ShopifyOrder"> | string
    total_line_items_price?: StringFilter<"ShopifyOrder"> | string
    total_outstanding?: StringFilter<"ShopifyOrder"> | string
    total_price?: StringFilter<"ShopifyOrder"> | string
    updated_at?: DateTimeFilter<"ShopifyOrder"> | Date | string
    user_id?: IntFilter<"ShopifyOrder"> | number
    customer_id?: StringFilter<"ShopifyOrder"> | string
    id?: StringFilter<"ShopifyOrder"> | string
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
    connected_at?: DateTimeFilter<"Store"> | Date | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
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
    createdAt?: DateTimeFilter<"TemporaryData"> | Date | string
    data?: JsonFilter<"TemporaryData">
    user_id?: IntFilter<"TemporaryData"> | number
  }

  export type DarazTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: DarazTransactionWhereUniqueInput
    update: XOR<DarazTransactionUpdateWithoutUserInput, DarazTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput>
  }

  export type DarazTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: DarazTransactionWhereUniqueInput
    data: XOR<DarazTransactionUpdateWithoutUserInput, DarazTransactionUncheckedUpdateWithoutUserInput>
  }

  export type DarazTransactionUpdateManyWithWhereWithoutUserInput = {
    where: DarazTransactionScalarWhereInput
    data: XOR<DarazTransactionUpdateManyMutationInput, DarazTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type DarazTransactionScalarWhereInput = {
    AND?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
    OR?: DarazTransactionScalarWhereInput[]
    NOT?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
    id?: StringFilter<"DarazTransaction"> | string
    seller_id?: StringFilter<"DarazTransaction"> | string
    order_number?: StringFilter<"DarazTransaction"> | string
    order_item_status?: StringFilter<"DarazTransaction"> | string
    amount?: StringFilter<"DarazTransaction"> | string
    transaction_date?: DateTimeFilter<"DarazTransaction"> | Date | string
    transaction_type?: StringFilter<"DarazTransaction"> | string
    statement?: StringFilter<"DarazTransaction"> | string
    payment_ref_id?: StringFilter<"DarazTransaction"> | string
    fee_name?: StringFilter<"DarazTransaction"> | string
    paid_status?: StringFilter<"DarazTransaction"> | string
    WHT_amount?: StringFilter<"DarazTransaction"> | string
    VAT_in_amount?: StringFilter<"DarazTransaction"> | string
    transaction_number?: StringFilter<"DarazTransaction"> | string
    comment?: StringFilter<"DarazTransaction"> | string
    user_id?: IntFilter<"DarazTransaction"> | number
  }

  export type UserCreateWithoutStoreInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoreInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCustomerInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrderCreateWithoutCustomerInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDarazOrderInput
  }

  export type DarazOrderUncheckedCreateWithoutCustomerInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type DarazOrderCreateOrConnectWithoutCustomerInput = {
    where: DarazOrderWhereUniqueInput
    create: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrderCreateManyCustomerInputEnvelope = {
    data: DarazOrderCreateManyCustomerInput | DarazOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShopifyOrderCreateWithoutCustomerInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    id: string
    user: UserCreateNestedOneWithoutShopifyOrderInput
  }

  export type ShopifyOrderUncheckedCreateWithoutCustomerInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    user_id: number
    id: string
  }

  export type ShopifyOrderCreateOrConnectWithoutCustomerInput = {
    where: ShopifyOrderWhereUniqueInput
    create: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput>
  }

  export type ShopifyOrderCreateManyCustomerInputEnvelope = {
    data: ShopifyOrderCreateManyCustomerInput | ShopifyOrderCreateManyCustomerInput[]
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DarazOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DarazOrderWhereUniqueInput
    update: XOR<DarazOrderUpdateWithoutCustomerInput, DarazOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DarazOrderWhereUniqueInput
    data: XOR<DarazOrderUpdateWithoutCustomerInput, DarazOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type DarazOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: DarazOrderScalarWhereInput
    data: XOR<DarazOrderUpdateManyMutationInput, DarazOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShopifyOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShopifyOrderWhereUniqueInput
    update: XOR<ShopifyOrderUpdateWithoutCustomerInput, ShopifyOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShopifyOrderCreateWithoutCustomerInput, ShopifyOrderUncheckedCreateWithoutCustomerInput>
  }

  export type ShopifyOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShopifyOrderWhereUniqueInput
    data: XOR<ShopifyOrderUpdateWithoutCustomerInput, ShopifyOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type ShopifyOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: ShopifyOrderScalarWhereInput
    data: XOR<ShopifyOrderUpdateManyMutationInput, ShopifyOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutDarazOrderInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user: UserCreateNestedOneWithoutCustomerInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDarazOrderInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDarazOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
  }

  export type UserCreateWithoutDarazOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazOrderInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
  }

  export type CustomerUpsertWithoutDarazOrderInput = {
    update: XOR<CustomerUpdateWithoutDarazOrderInput, CustomerUncheckedUpdateWithoutDarazOrderInput>
    create: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDarazOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDarazOrderInput, CustomerUncheckedUpdateWithoutDarazOrderInput>
  }

  export type CustomerUpdateWithoutDarazOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDarazOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutCustomerNestedInput
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDarazTransactionInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazTransactionInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
  }

  export type UserUpsertWithoutDarazTransactionInput = {
    update: XOR<UserUpdateWithoutDarazTransactionInput, UserUncheckedUpdateWithoutDarazTransactionInput>
    create: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazTransactionInput, UserUncheckedUpdateWithoutDarazTransactionInput>
  }

  export type UserUpdateWithoutDarazTransactionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDarazStoreTransactionInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDarazStoreTransactionInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazStoreTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazStoreTransactionInput, UserUncheckedCreateWithoutDarazStoreTransactionInput>
  }

  export type UserUpsertWithoutDarazStoreTransactionInput = {
    update: XOR<UserUpdateWithoutDarazStoreTransactionInput, UserUncheckedUpdateWithoutDarazStoreTransactionInput>
    create: XOR<UserCreateWithoutDarazStoreTransactionInput, UserUncheckedCreateWithoutDarazStoreTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDarazStoreTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDarazStoreTransactionInput, UserUncheckedUpdateWithoutDarazStoreTransactionInput>
  }

  export type UserUpdateWithoutDarazStoreTransactionInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDarazStoreTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTemporaryDataInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemporaryDataInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemporaryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutShopifyOrderInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user: UserCreateNestedOneWithoutCustomerInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutShopifyOrderInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutShopifyOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShopifyOrderInput, CustomerUncheckedCreateWithoutShopifyOrderInput>
  }

  export type UserCreateWithoutShopifyOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopifyOrderInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopifyOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopifyOrderInput, UserUncheckedCreateWithoutShopifyOrderInput>
  }

  export type CustomerUpsertWithoutShopifyOrderInput = {
    update: XOR<CustomerUpdateWithoutShopifyOrderInput, CustomerUncheckedUpdateWithoutShopifyOrderInput>
    create: XOR<CustomerCreateWithoutShopifyOrderInput, CustomerUncheckedCreateWithoutShopifyOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutShopifyOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutShopifyOrderInput, CustomerUncheckedUpdateWithoutShopifyOrderInput>
  }

  export type CustomerUpdateWithoutShopifyOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutShopifyOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopifyOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCourierInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderCreateNestedManyWithoutUserInput
    Store?: StoreCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourierInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedCreateNestedManyWithoutUserInput
    ShopifyOrder?: ShopifyOrderUncheckedCreateNestedManyWithoutUserInput
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
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
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutUserNestedInput
    Store?: StoreUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourierInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: NullableJsonNullValueInput | InputJsonValue
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazStoreTransaction?: DarazStoreTransactionUncheckedUpdateManyWithoutUserNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutUserNestedInput
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourierCreateManyUserInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    shippers: JsonNullValueInput | InputJsonValue
  }

  export type CustomerCreateManyUserInput = {
    id: string
    shopify_id: string
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
  }

  export type DarazOrderCreateManyUserInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    customer_id: string
  }

  export type DarazStoreTransactionCreateManyUserInput = {
    seller_id: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
  }

  export type ShopifyOrderCreateManyUserInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    customer_id: string
    id: string
  }

  export type StoreCreateManyUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataCreateManyUserInput = {
    id?: number
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type DarazTransactionCreateManyUserInput = {
    id: string
    seller_id: string
    order_number: string
    order_item_status: string
    amount: string
    transaction_date: Date | string
    transaction_type: string
    statement: string
    payment_ref_id: string
    fee_name: string
    paid_status: string
    WHT_amount: string
    VAT_in_amount: string
    transaction_number: string
    comment: string
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

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    DarazOrder?: DarazOrderUpdateManyWithoutCustomerNestedInput
    ShopifyOrder?: ShopifyOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput
    ShopifyOrder?: ShopifyOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrderUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    customer?: CustomerUpdateOneRequiredWithoutDarazOrderNestedInput
  }

  export type DarazOrderUncheckedUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrderUncheckedUpdateManyWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazStoreTransactionUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazStoreTransactionUncheckedUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazStoreTransactionUncheckedUpdateManyWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrderUpdateWithoutUserInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutShopifyOrderNestedInput
  }

  export type ShopifyOrderUncheckedUpdateWithoutUserInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrderUncheckedUpdateManyWithoutUserInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryDataUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DarazTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    order_item_status?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    payment_ref_id?: StringFieldUpdateOperationsInput | string
    fee_name?: StringFieldUpdateOperationsInput | string
    paid_status?: StringFieldUpdateOperationsInput | string
    WHT_amount?: StringFieldUpdateOperationsInput | string
    VAT_in_amount?: StringFieldUpdateOperationsInput | string
    transaction_number?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DarazOrderCreateManyCustomerInput = {
    order_id: string
    seller_id: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: string
    promised_shipping_times: string
    updated_at: Date | string
    price: number
    shipping_fee_original: number
    payment_method: string
    shipping_fee_discount_seller: number
    shipping_fee: number
    items_count: number
    payment_status: boolean
    statuses: string
    is_received: boolean
    gift_message: string
    remarks: string
    order_items: JsonNullValueInput | InputJsonValue
    transactions: JsonNullValueInput | InputJsonValue
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type ShopifyOrderCreateManyCustomerInput = {
    current_total_additional_fees_set: string
    current_total_discounts: string
    current_total_duties_set: string
    current_total_price: string
    current_total_tax: string
    email: string
    financial_status: string
    fulfillment_status: JsonNullValueInput | InputJsonValue
    line_items: JsonNullValueInput | InputJsonValue
    note: string
    phone: string
    processed_at: Date | string
    referring_site: string
    source_name: string
    subtotal_price: string
    tags: string
    total_discounts: string
    total_line_items_price: string
    total_outstanding: string
    total_price: string
    updated_at: Date | string
    user_id: number
    id: string
  }

  export type DarazOrderUpdateWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
  }

  export type DarazOrderUncheckedUpdateWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrderUncheckedUpdateManyWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: StringFieldUpdateOperationsInput | string
    promised_shipping_times?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    shipping_fee_original?: FloatFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_seller?: FloatFieldUpdateOperationsInput | number
    shipping_fee?: FloatFieldUpdateOperationsInput | number
    items_count?: IntFieldUpdateOperationsInput | number
    payment_status?: BoolFieldUpdateOperationsInput | boolean
    statuses?: StringFieldUpdateOperationsInput | string
    is_received?: BoolFieldUpdateOperationsInput | boolean
    gift_message?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    order_items?: JsonNullValueInput | InputJsonValue
    transactions?: JsonNullValueInput | InputJsonValue
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopifyOrderUpdateWithoutCustomerInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutShopifyOrderNestedInput
  }

  export type ShopifyOrderUncheckedUpdateWithoutCustomerInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ShopifyOrderUncheckedUpdateManyWithoutCustomerInput = {
    current_total_additional_fees_set?: StringFieldUpdateOperationsInput | string
    current_total_discounts?: StringFieldUpdateOperationsInput | string
    current_total_duties_set?: StringFieldUpdateOperationsInput | string
    current_total_price?: StringFieldUpdateOperationsInput | string
    current_total_tax?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    financial_status?: StringFieldUpdateOperationsInput | string
    fulfillment_status?: JsonNullValueInput | InputJsonValue
    line_items?: JsonNullValueInput | InputJsonValue
    note?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    referring_site?: StringFieldUpdateOperationsInput | string
    source_name?: StringFieldUpdateOperationsInput | string
    subtotal_price?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    total_discounts?: StringFieldUpdateOperationsInput | string
    total_line_items_price?: StringFieldUpdateOperationsInput | string
    total_outstanding?: StringFieldUpdateOperationsInput | string
    total_price?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
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
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazOrderDefaultArgs instead
     */
    export type DarazOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazTransactionDefaultArgs instead
     */
    export type DarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazStoreTransactionDefaultArgs instead
     */
    export type DarazStoreTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazStoreTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemporaryDataDefaultArgs instead
     */
    export type TemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemporaryDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopifyOrderDefaultArgs instead
     */
    export type ShopifyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopifyOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierDefaultArgs instead
     */
    export type CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierDefaultArgs<ExtArgs>
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