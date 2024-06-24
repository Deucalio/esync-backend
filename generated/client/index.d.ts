
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
 * Model TemporaryData
 * 
 */
export type TemporaryData = $Result.DefaultSelection<Prisma.$TemporaryDataPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model VariantOnStores
 * 
 */
export type VariantOnStores = $Result.DefaultSelection<Prisma.$VariantOnStoresPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>

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
   * `prisma.temporaryData`: Exposes CRUD operations for the **TemporaryData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryData
    * const temporaryData = await prisma.temporaryData.findMany()
    * ```
    */
  get temporaryData(): Prisma.TemporaryDataDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs>;

  /**
   * `prisma.variantOnStores`: Exposes CRUD operations for the **VariantOnStores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantOnStores
    * const variantOnStores = await prisma.variantOnStores.findMany()
    * ```
    */
  get variantOnStores(): Prisma.VariantOnStoresDelegate<ExtArgs>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;
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
    TemporaryData: 'TemporaryData',
    Category: 'Category',
    Product: 'Product',
    Variant: 'Variant',
    VariantOnStores: 'VariantOnStores',
    Warehouse: 'Warehouse',
    Inventory: 'Inventory'
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
      modelProps: 'user' | 'store' | 'customer' | 'darazOrder' | 'darazTransaction' | 'temporaryData' | 'category' | 'product' | 'variant' | 'variantOnStores' | 'warehouse' | 'inventory'
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>,
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      VariantOnStores: {
        payload: Prisma.$VariantOnStoresPayload<ExtArgs>
        fields: Prisma.VariantOnStoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantOnStoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantOnStoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          findFirst: {
            args: Prisma.VariantOnStoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantOnStoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          findMany: {
            args: Prisma.VariantOnStoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>[]
          }
          create: {
            args: Prisma.VariantOnStoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          createMany: {
            args: Prisma.VariantOnStoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VariantOnStoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          update: {
            args: Prisma.VariantOnStoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          deleteMany: {
            args: Prisma.VariantOnStoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VariantOnStoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VariantOnStoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantOnStoresPayload>
          }
          aggregate: {
            args: Prisma.VariantOnStoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVariantOnStores>
          }
          groupBy: {
            args: Prisma.VariantOnStoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VariantOnStoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantOnStoresCountArgs<ExtArgs>,
            result: $Utils.Optional<VariantOnStoresCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>,
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>,
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
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
    Customer: number
    DarazOrder: number
    DarazTransaction: number
    TemporaryData: number
    Category: number
    Product: number
    Variant: number
    VariantOnStores: number
    Warehouse: number
    Inventory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | UserCountOutputTypeCountStoreArgs
    Customer?: boolean | UserCountOutputTypeCountCustomerArgs
    DarazOrder?: boolean | UserCountOutputTypeCountDarazOrderArgs
    DarazTransaction?: boolean | UserCountOutputTypeCountDarazTransactionArgs
    TemporaryData?: boolean | UserCountOutputTypeCountTemporaryDataArgs
    Category?: boolean | UserCountOutputTypeCountCategoryArgs
    Product?: boolean | UserCountOutputTypeCountProductArgs
    Variant?: boolean | UserCountOutputTypeCountVariantArgs
    VariantOnStores?: boolean | UserCountOutputTypeCountVariantOnStoresArgs
    Warehouse?: boolean | UserCountOutputTypeCountWarehouseArgs
    Inventory?: boolean | UserCountOutputTypeCountInventoryArgs
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
  export type UserCountOutputTypeCountDarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazTransactionWhereInput
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
  export type UserCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantOnStoresWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }



  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    VariantOnStores: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VariantOnStores?: boolean | StoreCountOutputTypeCountVariantOnStoresArgs
  }

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountVariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantOnStoresWhereInput
  }



  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    DarazOrder: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DarazOrder?: boolean | CustomerCountOutputTypeCountDarazOrderArgs
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
   * Count Type DarazOrderCountOutputType
   */

  export type DarazOrderCountOutputType = {
    DarazTransaction: number
  }

  export type DarazOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DarazTransaction?: boolean | DarazOrderCountOutputTypeCountDarazTransactionArgs
  }

  // Custom InputTypes

  /**
   * DarazOrderCountOutputType without action
   */
  export type DarazOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DarazOrderCountOutputType
     */
    select?: DarazOrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DarazOrderCountOutputType without action
   */
  export type DarazOrderCountOutputTypeCountDarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DarazTransactionWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Variant: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Variant?: boolean | ProductCountOutputTypeCountVariantArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }



  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    VariantOnStores: number
    Inventory: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VariantOnStores?: boolean | VariantCountOutputTypeCountVariantOnStoresArgs
    Inventory?: boolean | VariantCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountVariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantOnStoresWhereInput
  }


  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }



  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    Inventory: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Inventory?: boolean | WarehouseCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
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
    user_events: JsonValue
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
    Store?: boolean | User$StoreArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    DarazTransaction?: boolean | User$DarazTransactionArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    Category?: boolean | User$CategoryArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Variant?: boolean | User$VariantArgs<ExtArgs>
    VariantOnStores?: boolean | User$VariantOnStoresArgs<ExtArgs>
    Warehouse?: boolean | User$WarehouseArgs<ExtArgs>
    Inventory?: boolean | User$InventoryArgs<ExtArgs>
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
    Store?: boolean | User$StoreArgs<ExtArgs>
    Customer?: boolean | User$CustomerArgs<ExtArgs>
    DarazOrder?: boolean | User$DarazOrderArgs<ExtArgs>
    DarazTransaction?: boolean | User$DarazTransactionArgs<ExtArgs>
    TemporaryData?: boolean | User$TemporaryDataArgs<ExtArgs>
    Category?: boolean | User$CategoryArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    Variant?: boolean | User$VariantArgs<ExtArgs>
    VariantOnStores?: boolean | User$VariantOnStoresArgs<ExtArgs>
    Warehouse?: boolean | User$WarehouseArgs<ExtArgs>
    Inventory?: boolean | User$InventoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs>[]
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      DarazOrder: Prisma.$DarazOrderPayload<ExtArgs>[]
      DarazTransaction: Prisma.$DarazTransactionPayload<ExtArgs>[]
      TemporaryData: Prisma.$TemporaryDataPayload<ExtArgs>[]
      Category: Prisma.$CategoryPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>[]
      Variant: Prisma.$VariantPayload<ExtArgs>[]
      VariantOnStores: Prisma.$VariantOnStoresPayload<ExtArgs>[]
      Warehouse: Prisma.$WarehousePayload<ExtArgs>[]
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
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
      user_events: Prisma.JsonValue
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

    Customer<T extends User$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazOrder<T extends User$DarazOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    DarazTransaction<T extends User$DarazTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$DarazTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    TemporaryData<T extends User$TemporaryDataArgs<ExtArgs> = {}>(args?: Subset<T, User$TemporaryDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    Category<T extends User$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, User$CategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends User$ProductArgs<ExtArgs> = {}>(args?: Subset<T, User$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Variant<T extends User$VariantArgs<ExtArgs> = {}>(args?: Subset<T, User$VariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findMany'> | Null>;

    VariantOnStores<T extends User$VariantOnStoresArgs<ExtArgs> = {}>(args?: Subset<T, User$VariantOnStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findMany'> | Null>;

    Warehouse<T extends User$WarehouseArgs<ExtArgs> = {}>(args?: Subset<T, User$WarehouseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findMany'> | Null>;

    Inventory<T extends User$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, User$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * User.Category
   */
  export type User$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * User.Product
   */
  export type User$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * User.Variant
   */
  export type User$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * User.VariantOnStores
   */
  export type User$VariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    where?: VariantOnStoresWhereInput
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    cursor?: VariantOnStoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
  }


  /**
   * User.Warehouse
   */
  export type User$WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * User.Inventory
   */
  export type User$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
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
    VariantOnStores?: boolean | Store$VariantOnStoresArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
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
    VariantOnStores?: boolean | Store$VariantOnStoresArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      VariantOnStores: Prisma.$VariantOnStoresPayload<ExtArgs>[]
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

    VariantOnStores<T extends Store$VariantOnStoresArgs<ExtArgs> = {}>(args?: Subset<T, Store$VariantOnStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Store.VariantOnStores
   */
  export type Store$VariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    where?: VariantOnStoresWhereInput
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    cursor?: VariantOnStoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
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
    shopify_id: string | null
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
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      DarazOrder: Prisma.$DarazOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopify_id: string | null
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
    shipping_fee_discount_platform: number | null
    price: number | null
    shipping_fee_original: number | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    transactions_amount: number | null
    user_id: number | null
  }

  export type DarazOrderSumAggregateOutputType = {
    shipping_fee_discount_platform: number | null
    price: number | null
    shipping_fee_original: number | null
    shipping_fee_discount_seller: number | null
    shipping_fee: number | null
    items_count: number | null
    transactions_amount: number | null
    user_id: number | null
  }

  export type DarazOrderMinAggregateOutputType = {
    order_id: string | null
    seller_id: string | null
    shop_skus: string | null
    voucher_platform: string | null
    voucher: string | null
    voucher_seller: string | null
    order_number: string | null
    created_at: Date | null
    voucher_code: string | null
    gift_option: string | null
    shipping_fee_discount_platform: number | null
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
    transactions_amount: number | null
    user_id: number | null
    customer_id: string | null
  }

  export type DarazOrderMaxAggregateOutputType = {
    order_id: string | null
    seller_id: string | null
    shop_skus: string | null
    voucher_platform: string | null
    voucher: string | null
    voucher_seller: string | null
    order_number: string | null
    created_at: Date | null
    voucher_code: string | null
    gift_option: string | null
    shipping_fee_discount_platform: number | null
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
    transactions_amount: number | null
    user_id: number | null
    customer_id: string | null
  }

  export type DarazOrderCountAggregateOutputType = {
    order_id: number
    seller_id: number
    shop_skus: number
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
    shipping_address: number
    billing_address: number
    transactions_amount: number
    user_id: number
    customer_id: number
    _all: number
  }


  export type DarazOrderAvgAggregateInputType = {
    shipping_fee_discount_platform?: true
    price?: true
    shipping_fee_original?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    transactions_amount?: true
    user_id?: true
  }

  export type DarazOrderSumAggregateInputType = {
    shipping_fee_discount_platform?: true
    price?: true
    shipping_fee_original?: true
    shipping_fee_discount_seller?: true
    shipping_fee?: true
    items_count?: true
    transactions_amount?: true
    user_id?: true
  }

  export type DarazOrderMinAggregateInputType = {
    order_id?: true
    seller_id?: true
    shop_skus?: true
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
    transactions_amount?: true
    user_id?: true
    customer_id?: true
  }

  export type DarazOrderMaxAggregateInputType = {
    order_id?: true
    seller_id?: true
    shop_skus?: true
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
    transactions_amount?: true
    user_id?: true
    customer_id?: true
  }

  export type DarazOrderCountAggregateInputType = {
    order_id?: true
    seller_id?: true
    shop_skus?: true
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
    shipping_address?: true
    billing_address?: true
    transactions_amount?: true
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
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonValue
    billing_address: JsonValue
    transactions_amount: number
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
    shop_skus?: boolean
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
    shipping_address?: boolean
    billing_address?: boolean
    transactions_amount?: boolean
    user_id?: boolean
    customer_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    DarazTransaction?: boolean | DarazOrder$DarazTransactionArgs<ExtArgs>
    _count?: boolean | DarazOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["darazOrder"]>

  export type DarazOrderSelectScalar = {
    order_id?: boolean
    seller_id?: boolean
    shop_skus?: boolean
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
    shipping_address?: boolean
    billing_address?: boolean
    transactions_amount?: boolean
    user_id?: boolean
    customer_id?: boolean
  }

  export type DarazOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    DarazTransaction?: boolean | DarazOrder$DarazTransactionArgs<ExtArgs>
    _count?: boolean | DarazOrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DarazOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      DarazTransaction: Prisma.$DarazTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      seller_id: string
      shop_skus: string
      voucher_platform: string
      voucher: string
      voucher_seller: string
      order_number: string
      created_at: Date
      voucher_code: string
      gift_option: string
      shipping_fee_discount_platform: number
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
      shipping_address: Prisma.JsonValue
      billing_address: Prisma.JsonValue
      transactions_amount: number
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

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DarazTransaction<T extends DarazOrder$DarazTransactionArgs<ExtArgs> = {}>(args?: Subset<T, DarazOrder$DarazTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DarazTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly shop_skus: FieldRef<"DarazOrder", 'String'>
    readonly voucher_platform: FieldRef<"DarazOrder", 'String'>
    readonly voucher: FieldRef<"DarazOrder", 'String'>
    readonly voucher_seller: FieldRef<"DarazOrder", 'String'>
    readonly order_number: FieldRef<"DarazOrder", 'String'>
    readonly created_at: FieldRef<"DarazOrder", 'DateTime'>
    readonly voucher_code: FieldRef<"DarazOrder", 'String'>
    readonly gift_option: FieldRef<"DarazOrder", 'String'>
    readonly shipping_fee_discount_platform: FieldRef<"DarazOrder", 'Float'>
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
    readonly shipping_address: FieldRef<"DarazOrder", 'Json'>
    readonly billing_address: FieldRef<"DarazOrder", 'Json'>
    readonly transactions_amount: FieldRef<"DarazOrder", 'Float'>
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
   * DarazOrder.DarazTransaction
   */
  export type DarazOrder$DarazTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    daraz_order?: boolean | DarazOrderDefaultArgs<ExtArgs>
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
    daraz_order?: boolean | DarazOrderDefaultArgs<ExtArgs>
  }


  export type $DarazTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DarazTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      daraz_order: Prisma.$DarazOrderPayload<ExtArgs>
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

    daraz_order<T extends DarazOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DarazOrderDefaultArgs<ExtArgs>>): Prisma__DarazOrderClient<$Result.GetResult<Prisma.$DarazOrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    user_id: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      user_id: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly user_id: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    user_id: number | null
    packing_material_cost: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    user_id: number | null
    packing_material_cost: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
    user_id: number | null
    packing_material_cost: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    category_id: number | null
    user_id: number | null
    packing_material_cost: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    image_url: number
    description: number
    created_at: number
    updated_at: number
    category_id: number
    user_id: number
    packing_material_cost: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    category_id?: true
    user_id?: true
    packing_material_cost?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    category_id?: true
    user_id?: true
    packing_material_cost?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
    packing_material_cost?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
    packing_material_cost?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    category_id?: true
    user_id?: true
    packing_material_cost?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    image_url: string
    description: string
    created_at: Date
    updated_at: Date | null
    category_id: number
    user_id: number
    packing_material_cost: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
    packing_material_cost?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Variant?: boolean | Product$VariantArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    category_id?: boolean
    user_id?: boolean
    packing_material_cost?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Variant?: boolean | Product$VariantArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Variant: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image_url: string
      description: string
      created_at: Date
      updated_at: Date | null
      category_id: number
      user_id: number
      packing_material_cost: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Variant<T extends Product$VariantArgs<ExtArgs> = {}>(args?: Subset<T, Product$VariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly image_url: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly category_id: FieldRef<"Product", 'Int'>
    readonly user_id: FieldRef<"Product", 'Int'>
    readonly packing_material_cost: FieldRef<"Product", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.Variant
   */
  export type Product$VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    cost: number | null
    product_id: number | null
    user_id: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    cost: number | null
    product_id: number | null
    user_id: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    cost: number | null
    image_url: string | null
    product_id: number | null
    user_id: number | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    cost: number | null
    image_url: string | null
    product_id: number | null
    user_id: number | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    cost: number
    image_url: number
    product_id: number
    user_id: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    cost?: true
    product_id?: true
    user_id?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    cost?: true
    product_id?: true
    user_id?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    cost?: true
    image_url?: true
    product_id?: true
    user_id?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    cost?: true
    image_url?: true
    product_id?: true
    user_id?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    cost?: true
    image_url?: true
    product_id?: true
    user_id?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    user_id: number
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    cost?: boolean
    image_url?: boolean
    product_id?: boolean
    user_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    VariantOnStores?: boolean | Variant$VariantOnStoresArgs<ExtArgs>
    Inventory?: boolean | Variant$InventoryArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    cost?: boolean
    image_url?: boolean
    product_id?: boolean
    user_id?: boolean
  }

  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    VariantOnStores?: boolean | Variant$VariantOnStoresArgs<ExtArgs>
    Inventory?: boolean | Variant$InventoryArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      VariantOnStores: Prisma.$VariantOnStoresPayload<ExtArgs>[]
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sku: string
      cost: number
      image_url: string
      product_id: number
      user_id: number
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }


  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Variant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
    **/
    create<T extends VariantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantCreateArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Variants.
     *     @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     *     @example
     *     // Create many Variants
     *     const variant = await prisma.variant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
    **/
    delete<T extends VariantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
    **/
    upsert<T extends VariantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>
    ): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
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
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    VariantOnStores<T extends Variant$VariantOnStoresArgs<ExtArgs> = {}>(args?: Subset<T, Variant$VariantOnStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findMany'> | Null>;

    Inventory<T extends Variant$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, Variant$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Variant model
   */ 
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'Int'>
    readonly name: FieldRef<"Variant", 'String'>
    readonly sku: FieldRef<"Variant", 'String'>
    readonly cost: FieldRef<"Variant", 'Float'>
    readonly image_url: FieldRef<"Variant", 'String'>
    readonly product_id: FieldRef<"Variant", 'Int'>
    readonly user_id: FieldRef<"Variant", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }


  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }


  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
  }


  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }


  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
  }


  /**
   * Variant.VariantOnStores
   */
  export type Variant$VariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    where?: VariantOnStoresWhereInput
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    cursor?: VariantOnStoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
  }


  /**
   * Variant.Inventory
   */
  export type Variant$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }


  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude<ExtArgs> | null
  }



  /**
   * Model VariantOnStores
   */

  export type AggregateVariantOnStores = {
    _count: VariantOnStoresCountAggregateOutputType | null
    _avg: VariantOnStoresAvgAggregateOutputType | null
    _sum: VariantOnStoresSumAggregateOutputType | null
    _min: VariantOnStoresMinAggregateOutputType | null
    _max: VariantOnStoresMaxAggregateOutputType | null
  }

  export type VariantOnStoresAvgAggregateOutputType = {
    id: number | null
    variant_id: number | null
    price: number | null
    sale_price: number | null
    deduction_unit: number | null
    user_id: number | null
  }

  export type VariantOnStoresSumAggregateOutputType = {
    id: number | null
    variant_id: number | null
    price: number | null
    sale_price: number | null
    deduction_unit: number | null
    user_id: number | null
  }

  export type VariantOnStoresMinAggregateOutputType = {
    id: number | null
    variant_id: number | null
    status: string | null
    store_id: string | null
    daraz_shop_sku: string | null
    price: number | null
    sale_price: number | null
    deduction_unit: number | null
    created_at: Date | null
    updated_at: Date | null
    sku_id: string | null
    seller_sku: string | null
    user_id: number | null
  }

  export type VariantOnStoresMaxAggregateOutputType = {
    id: number | null
    variant_id: number | null
    status: string | null
    store_id: string | null
    daraz_shop_sku: string | null
    price: number | null
    sale_price: number | null
    deduction_unit: number | null
    created_at: Date | null
    updated_at: Date | null
    sku_id: string | null
    seller_sku: string | null
    user_id: number | null
  }

  export type VariantOnStoresCountAggregateOutputType = {
    id: number
    variant_id: number
    status: number
    store_id: number
    daraz_shop_sku: number
    price: number
    sale_price: number
    deduction_unit: number
    created_at: number
    updated_at: number
    platform_details: number
    sku_id: number
    seller_sku: number
    user_id: number
    _all: number
  }


  export type VariantOnStoresAvgAggregateInputType = {
    id?: true
    variant_id?: true
    price?: true
    sale_price?: true
    deduction_unit?: true
    user_id?: true
  }

  export type VariantOnStoresSumAggregateInputType = {
    id?: true
    variant_id?: true
    price?: true
    sale_price?: true
    deduction_unit?: true
    user_id?: true
  }

  export type VariantOnStoresMinAggregateInputType = {
    id?: true
    variant_id?: true
    status?: true
    store_id?: true
    daraz_shop_sku?: true
    price?: true
    sale_price?: true
    deduction_unit?: true
    created_at?: true
    updated_at?: true
    sku_id?: true
    seller_sku?: true
    user_id?: true
  }

  export type VariantOnStoresMaxAggregateInputType = {
    id?: true
    variant_id?: true
    status?: true
    store_id?: true
    daraz_shop_sku?: true
    price?: true
    sale_price?: true
    deduction_unit?: true
    created_at?: true
    updated_at?: true
    sku_id?: true
    seller_sku?: true
    user_id?: true
  }

  export type VariantOnStoresCountAggregateInputType = {
    id?: true
    variant_id?: true
    status?: true
    store_id?: true
    daraz_shop_sku?: true
    price?: true
    sale_price?: true
    deduction_unit?: true
    created_at?: true
    updated_at?: true
    platform_details?: true
    sku_id?: true
    seller_sku?: true
    user_id?: true
    _all?: true
  }

  export type VariantOnStoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantOnStores to aggregate.
     */
    where?: VariantOnStoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantOnStores to fetch.
     */
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantOnStoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantOnStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantOnStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantOnStores
    **/
    _count?: true | VariantOnStoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantOnStoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantOnStoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantOnStoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantOnStoresMaxAggregateInputType
  }

  export type GetVariantOnStoresAggregateType<T extends VariantOnStoresAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantOnStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantOnStores[P]>
      : GetScalarType<T[P], AggregateVariantOnStores[P]>
  }




  export type VariantOnStoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantOnStoresWhereInput
    orderBy?: VariantOnStoresOrderByWithAggregationInput | VariantOnStoresOrderByWithAggregationInput[]
    by: VariantOnStoresScalarFieldEnum[] | VariantOnStoresScalarFieldEnum
    having?: VariantOnStoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantOnStoresCountAggregateInputType | true
    _avg?: VariantOnStoresAvgAggregateInputType
    _sum?: VariantOnStoresSumAggregateInputType
    _min?: VariantOnStoresMinAggregateInputType
    _max?: VariantOnStoresMaxAggregateInputType
  }

  export type VariantOnStoresGroupByOutputType = {
    id: number
    variant_id: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at: Date
    updated_at: Date | null
    platform_details: JsonValue
    sku_id: string
    seller_sku: string
    user_id: number
    _count: VariantOnStoresCountAggregateOutputType | null
    _avg: VariantOnStoresAvgAggregateOutputType | null
    _sum: VariantOnStoresSumAggregateOutputType | null
    _min: VariantOnStoresMinAggregateOutputType | null
    _max: VariantOnStoresMaxAggregateOutputType | null
  }

  type GetVariantOnStoresGroupByPayload<T extends VariantOnStoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantOnStoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantOnStoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantOnStoresGroupByOutputType[P]>
            : GetScalarType<T[P], VariantOnStoresGroupByOutputType[P]>
        }
      >
    >


  export type VariantOnStoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant_id?: boolean
    status?: boolean
    store_id?: boolean
    daraz_shop_sku?: boolean
    price?: boolean
    sale_price?: boolean
    deduction_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    platform_details?: boolean
    sku_id?: boolean
    seller_sku?: boolean
    user_id?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantOnStores"]>

  export type VariantOnStoresSelectScalar = {
    id?: boolean
    variant_id?: boolean
    status?: boolean
    store_id?: boolean
    daraz_shop_sku?: boolean
    price?: boolean
    sale_price?: boolean
    deduction_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    platform_details?: boolean
    sku_id?: boolean
    seller_sku?: boolean
    user_id?: boolean
  }

  export type VariantOnStoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $VariantOnStoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantOnStores"
    objects: {
      variant: Prisma.$VariantPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variant_id: number
      status: string
      store_id: string
      daraz_shop_sku: string
      price: number
      sale_price: number
      deduction_unit: number
      created_at: Date
      updated_at: Date | null
      platform_details: Prisma.JsonValue
      sku_id: string
      seller_sku: string
      user_id: number
    }, ExtArgs["result"]["variantOnStores"]>
    composites: {}
  }


  type VariantOnStoresGetPayload<S extends boolean | null | undefined | VariantOnStoresDefaultArgs> = $Result.GetResult<Prisma.$VariantOnStoresPayload, S>

  type VariantOnStoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantOnStoresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariantOnStoresCountAggregateInputType | true
    }

  export interface VariantOnStoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantOnStores'], meta: { name: 'VariantOnStores' } }
    /**
     * Find zero or one VariantOnStores that matches the filter.
     * @param {VariantOnStoresFindUniqueArgs} args - Arguments to find a VariantOnStores
     * @example
     * // Get one VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariantOnStoresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresFindUniqueArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VariantOnStores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariantOnStoresFindUniqueOrThrowArgs} args - Arguments to find a VariantOnStores
     * @example
     * // Get one VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariantOnStoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VariantOnStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresFindFirstArgs} args - Arguments to find a VariantOnStores
     * @example
     * // Get one VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariantOnStoresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresFindFirstArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VariantOnStores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresFindFirstOrThrowArgs} args - Arguments to find a VariantOnStores
     * @example
     * // Get one VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariantOnStoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VariantOnStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findMany()
     * 
     * // Get first 10 VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantOnStoresWithIdOnly = await prisma.variantOnStores.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariantOnStoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VariantOnStores.
     * @param {VariantOnStoresCreateArgs} args - Arguments to create a VariantOnStores.
     * @example
     * // Create one VariantOnStores
     * const VariantOnStores = await prisma.variantOnStores.create({
     *   data: {
     *     // ... data to create a VariantOnStores
     *   }
     * })
     * 
    **/
    create<T extends VariantOnStoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresCreateArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VariantOnStores.
     *     @param {VariantOnStoresCreateManyArgs} args - Arguments to create many VariantOnStores.
     *     @example
     *     // Create many VariantOnStores
     *     const variantOnStores = await prisma.variantOnStores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariantOnStoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VariantOnStores.
     * @param {VariantOnStoresDeleteArgs} args - Arguments to delete one VariantOnStores.
     * @example
     * // Delete one VariantOnStores
     * const VariantOnStores = await prisma.variantOnStores.delete({
     *   where: {
     *     // ... filter to delete one VariantOnStores
     *   }
     * })
     * 
    **/
    delete<T extends VariantOnStoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresDeleteArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VariantOnStores.
     * @param {VariantOnStoresUpdateArgs} args - Arguments to update one VariantOnStores.
     * @example
     * // Update one VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariantOnStoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresUpdateArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VariantOnStores.
     * @param {VariantOnStoresDeleteManyArgs} args - Arguments to filter VariantOnStores to delete.
     * @example
     * // Delete a few VariantOnStores
     * const { count } = await prisma.variantOnStores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariantOnStoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantOnStoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantOnStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariantOnStoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VariantOnStores.
     * @param {VariantOnStoresUpsertArgs} args - Arguments to update or create a VariantOnStores.
     * @example
     * // Update or create a VariantOnStores
     * const variantOnStores = await prisma.variantOnStores.upsert({
     *   create: {
     *     // ... data to create a VariantOnStores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantOnStores we want to update
     *   }
     * })
    **/
    upsert<T extends VariantOnStoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VariantOnStoresUpsertArgs<ExtArgs>>
    ): Prisma__VariantOnStoresClient<$Result.GetResult<Prisma.$VariantOnStoresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VariantOnStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresCountArgs} args - Arguments to filter VariantOnStores to count.
     * @example
     * // Count the number of VariantOnStores
     * const count = await prisma.variantOnStores.count({
     *   where: {
     *     // ... the filter for the VariantOnStores we want to count
     *   }
     * })
    **/
    count<T extends VariantOnStoresCountArgs>(
      args?: Subset<T, VariantOnStoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantOnStoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantOnStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantOnStoresAggregateArgs>(args: Subset<T, VariantOnStoresAggregateArgs>): Prisma.PrismaPromise<GetVariantOnStoresAggregateType<T>>

    /**
     * Group by VariantOnStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantOnStoresGroupByArgs} args - Group by arguments.
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
      T extends VariantOnStoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantOnStoresGroupByArgs['orderBy'] }
        : { orderBy?: VariantOnStoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantOnStoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantOnStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantOnStores model
   */
  readonly fields: VariantOnStoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantOnStores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantOnStoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    variant<T extends VariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantDefaultArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the VariantOnStores model
   */ 
  interface VariantOnStoresFieldRefs {
    readonly id: FieldRef<"VariantOnStores", 'Int'>
    readonly variant_id: FieldRef<"VariantOnStores", 'Int'>
    readonly status: FieldRef<"VariantOnStores", 'String'>
    readonly store_id: FieldRef<"VariantOnStores", 'String'>
    readonly daraz_shop_sku: FieldRef<"VariantOnStores", 'String'>
    readonly price: FieldRef<"VariantOnStores", 'Float'>
    readonly sale_price: FieldRef<"VariantOnStores", 'Float'>
    readonly deduction_unit: FieldRef<"VariantOnStores", 'Float'>
    readonly created_at: FieldRef<"VariantOnStores", 'DateTime'>
    readonly updated_at: FieldRef<"VariantOnStores", 'DateTime'>
    readonly platform_details: FieldRef<"VariantOnStores", 'Json'>
    readonly sku_id: FieldRef<"VariantOnStores", 'String'>
    readonly seller_sku: FieldRef<"VariantOnStores", 'String'>
    readonly user_id: FieldRef<"VariantOnStores", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * VariantOnStores findUnique
   */
  export type VariantOnStoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter, which VariantOnStores to fetch.
     */
    where: VariantOnStoresWhereUniqueInput
  }


  /**
   * VariantOnStores findUniqueOrThrow
   */
  export type VariantOnStoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter, which VariantOnStores to fetch.
     */
    where: VariantOnStoresWhereUniqueInput
  }


  /**
   * VariantOnStores findFirst
   */
  export type VariantOnStoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter, which VariantOnStores to fetch.
     */
    where?: VariantOnStoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantOnStores to fetch.
     */
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantOnStores.
     */
    cursor?: VariantOnStoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantOnStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantOnStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantOnStores.
     */
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
  }


  /**
   * VariantOnStores findFirstOrThrow
   */
  export type VariantOnStoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter, which VariantOnStores to fetch.
     */
    where?: VariantOnStoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantOnStores to fetch.
     */
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantOnStores.
     */
    cursor?: VariantOnStoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantOnStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantOnStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantOnStores.
     */
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
  }


  /**
   * VariantOnStores findMany
   */
  export type VariantOnStoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter, which VariantOnStores to fetch.
     */
    where?: VariantOnStoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantOnStores to fetch.
     */
    orderBy?: VariantOnStoresOrderByWithRelationInput | VariantOnStoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantOnStores.
     */
    cursor?: VariantOnStoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantOnStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantOnStores.
     */
    skip?: number
    distinct?: VariantOnStoresScalarFieldEnum | VariantOnStoresScalarFieldEnum[]
  }


  /**
   * VariantOnStores create
   */
  export type VariantOnStoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantOnStores.
     */
    data: XOR<VariantOnStoresCreateInput, VariantOnStoresUncheckedCreateInput>
  }


  /**
   * VariantOnStores createMany
   */
  export type VariantOnStoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantOnStores.
     */
    data: VariantOnStoresCreateManyInput | VariantOnStoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VariantOnStores update
   */
  export type VariantOnStoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantOnStores.
     */
    data: XOR<VariantOnStoresUpdateInput, VariantOnStoresUncheckedUpdateInput>
    /**
     * Choose, which VariantOnStores to update.
     */
    where: VariantOnStoresWhereUniqueInput
  }


  /**
   * VariantOnStores updateMany
   */
  export type VariantOnStoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantOnStores.
     */
    data: XOR<VariantOnStoresUpdateManyMutationInput, VariantOnStoresUncheckedUpdateManyInput>
    /**
     * Filter which VariantOnStores to update
     */
    where?: VariantOnStoresWhereInput
  }


  /**
   * VariantOnStores upsert
   */
  export type VariantOnStoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantOnStores to update in case it exists.
     */
    where: VariantOnStoresWhereUniqueInput
    /**
     * In case the VariantOnStores found by the `where` argument doesn't exist, create a new VariantOnStores with this data.
     */
    create: XOR<VariantOnStoresCreateInput, VariantOnStoresUncheckedCreateInput>
    /**
     * In case the VariantOnStores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantOnStoresUpdateInput, VariantOnStoresUncheckedUpdateInput>
  }


  /**
   * VariantOnStores delete
   */
  export type VariantOnStoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
    /**
     * Filter which VariantOnStores to delete.
     */
    where: VariantOnStoresWhereUniqueInput
  }


  /**
   * VariantOnStores deleteMany
   */
  export type VariantOnStoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantOnStores to delete
     */
    where?: VariantOnStoresWhereInput
  }


  /**
   * VariantOnStores without action
   */
  export type VariantOnStoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantOnStores
     */
    select?: VariantOnStoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantOnStoresInclude<ExtArgs> | null
  }



  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    user_id: number
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Inventory?: boolean | Warehouse$InventoryArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
  }

  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Inventory?: boolean | Warehouse$InventoryArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Inventory: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      user_id: number
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }


  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WarehouseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Warehouse that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WarehouseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WarehouseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
    **/
    create<T extends WarehouseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Warehouses.
     *     @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     *     @example
     *     // Create many Warehouses
     *     const warehouse = await prisma.warehouse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WarehouseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
    **/
    delete<T extends WarehouseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WarehouseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WarehouseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WarehouseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
    **/
    upsert<T extends WarehouseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>
    ): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Inventory<T extends Warehouse$InventoryArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$InventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Warehouse model
   */ 
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly user_id: FieldRef<"Warehouse", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }


  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }


  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
  }


  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }


  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }


  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
  }


  /**
   * Warehouse.Inventory
   */
  export type Warehouse$InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }


  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarehouseInclude<ExtArgs> | null
  }



  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    variant_id: number | null
    quantity: number | null
    user_id: number | null
    warehouse_id: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    variant_id: number | null
    quantity: number | null
    user_id: number | null
    warehouse_id: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    variant_id: number | null
    quantity: number | null
    units: string | null
    user_id: number | null
    warehouse_id: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    variant_id: number | null
    quantity: number | null
    units: string | null
    user_id: number | null
    warehouse_id: number | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    variant_id: number
    quantity: number
    units: number
    user_id: number
    warehouse_id: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    variant_id?: true
    quantity?: true
    user_id?: true
    warehouse_id?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    variant_id?: true
    quantity?: true
    user_id?: true
    warehouse_id?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    variant_id?: true
    quantity?: true
    units?: true
    user_id?: true
    warehouse_id?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    variant_id?: true
    quantity?: true
    units?: true
    user_id?: true
    warehouse_id?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    variant_id?: true
    quantity?: true
    units?: true
    user_id?: true
    warehouse_id?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    variant_id: number
    quantity: number
    units: string
    user_id: number
    warehouse_id: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant_id?: boolean
    quantity?: boolean
    units?: boolean
    user_id?: boolean
    warehouse_id?: boolean
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    variant_id?: boolean
    quantity?: boolean
    units?: boolean
    user_id?: boolean
    warehouse_id?: boolean
  }

  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | VariantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }


  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      variant: Prisma.$VariantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variant_id: number
      quantity: number
      units: string
      user_id: number
      warehouse_id: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }


  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
    **/
    create<T extends InventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inventories.
     *     @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     *     @example
     *     // Create many Inventories
     *     const inventory = await prisma.inventory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
    **/
    delete<T extends InventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
    **/
    upsert<T extends InventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>
    ): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    variant<T extends VariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariantDefaultArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'Int'>
    readonly variant_id: FieldRef<"Inventory", 'Int'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly units: FieldRef<"Inventory", 'String'>
    readonly user_id: FieldRef<"Inventory", 'Int'>
    readonly warehouse_id: FieldRef<"Inventory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }


  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }


  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }


  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }


  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }


  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }


  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }


  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude<ExtArgs> | null
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
    shop_skus: 'shop_skus',
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
    shipping_address: 'shipping_address',
    billing_address: 'billing_address',
    transactions_amount: 'transactions_amount',
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


  export const TemporaryDataScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    data: 'data',
    user_id: 'user_id'
  };

  export type TemporaryDataScalarFieldEnum = (typeof TemporaryDataScalarFieldEnum)[keyof typeof TemporaryDataScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_url: 'image_url',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    category_id: 'category_id',
    user_id: 'user_id',
    packing_material_cost: 'packing_material_cost'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    cost: 'cost',
    image_url: 'image_url',
    product_id: 'product_id',
    user_id: 'user_id'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const VariantOnStoresScalarFieldEnum: {
    id: 'id',
    variant_id: 'variant_id',
    status: 'status',
    store_id: 'store_id',
    daraz_shop_sku: 'daraz_shop_sku',
    price: 'price',
    sale_price: 'sale_price',
    deduction_unit: 'deduction_unit',
    created_at: 'created_at',
    updated_at: 'updated_at',
    platform_details: 'platform_details',
    sku_id: 'sku_id',
    seller_sku: 'seller_sku',
    user_id: 'user_id'
  };

  export type VariantOnStoresScalarFieldEnum = (typeof VariantOnStoresScalarFieldEnum)[keyof typeof VariantOnStoresScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    units: 'units',
    user_id: 'user_id',
    warehouse_id: 'warehouse_id'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


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
    user_events?: JsonFilter<"User">
    Store?: StoreListRelationFilter
    Customer?: CustomerListRelationFilter
    DarazOrder?: DarazOrderListRelationFilter
    DarazTransaction?: DarazTransactionListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    Category?: CategoryListRelationFilter
    Product?: ProductListRelationFilter
    Variant?: VariantListRelationFilter
    VariantOnStores?: VariantOnStoresListRelationFilter
    Warehouse?: WarehouseListRelationFilter
    Inventory?: InventoryListRelationFilter
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
    user_events?: SortOrder
    Store?: StoreOrderByRelationAggregateInput
    Customer?: CustomerOrderByRelationAggregateInput
    DarazOrder?: DarazOrderOrderByRelationAggregateInput
    DarazTransaction?: DarazTransactionOrderByRelationAggregateInput
    TemporaryData?: TemporaryDataOrderByRelationAggregateInput
    Category?: CategoryOrderByRelationAggregateInput
    Product?: ProductOrderByRelationAggregateInput
    Variant?: VariantOrderByRelationAggregateInput
    VariantOnStores?: VariantOnStoresOrderByRelationAggregateInput
    Warehouse?: WarehouseOrderByRelationAggregateInput
    Inventory?: InventoryOrderByRelationAggregateInput
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
    user_events?: JsonFilter<"User">
    Store?: StoreListRelationFilter
    Customer?: CustomerListRelationFilter
    DarazOrder?: DarazOrderListRelationFilter
    DarazTransaction?: DarazTransactionListRelationFilter
    TemporaryData?: TemporaryDataListRelationFilter
    Category?: CategoryListRelationFilter
    Product?: ProductListRelationFilter
    Variant?: VariantListRelationFilter
    VariantOnStores?: VariantOnStoresListRelationFilter
    Warehouse?: WarehouseListRelationFilter
    Inventory?: InventoryListRelationFilter
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
    user_events?: SortOrder
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
    user_events?: JsonWithAggregatesFilter<"User">
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
    VariantOnStores?: VariantOnStoresListRelationFilter
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
    VariantOnStores?: VariantOnStoresOrderByRelationAggregateInput
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
    VariantOnStores?: VariantOnStoresListRelationFilter
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
    shopify_id?: StringNullableFilter<"Customer"> | string | null
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    province?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrder?: DarazOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopify_id?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    DarazOrder?: DarazOrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    shopify_id?: StringNullableFilter<"Customer"> | string | null
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    city?: StringFilter<"Customer"> | string
    province?: StringFilter<"Customer"> | string
    country?: StringFilter<"Customer"> | string
    user_id?: IntFilter<"Customer"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    DarazOrder?: DarazOrderListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopify_id?: SortOrderInput | SortOrder
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
    shopify_id?: StringNullableWithAggregatesFilter<"Customer"> | string | null
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
    shop_skus?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: FloatFilter<"DarazOrder"> | number
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
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    transactions_amount?: FloatFilter<"DarazOrder"> | number
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    DarazTransaction?: DarazTransactionListRelationFilter
  }

  export type DarazOrderOrderByWithRelationInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    shop_skus?: SortOrder
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
    shipping_address?: SortOrder
    billing_address?: SortOrder
    transactions_amount?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    user?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    DarazTransaction?: DarazTransactionOrderByRelationAggregateInput
  }

  export type DarazOrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: DarazOrderWhereInput | DarazOrderWhereInput[]
    OR?: DarazOrderWhereInput[]
    NOT?: DarazOrderWhereInput | DarazOrderWhereInput[]
    seller_id?: StringFilter<"DarazOrder"> | string
    shop_skus?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: FloatFilter<"DarazOrder"> | number
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
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    transactions_amount?: FloatFilter<"DarazOrder"> | number
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    DarazTransaction?: DarazTransactionListRelationFilter
  }, "order_id">

  export type DarazOrderOrderByWithAggregationInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    shop_skus?: SortOrder
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
    shipping_address?: SortOrder
    billing_address?: SortOrder
    transactions_amount?: SortOrder
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
    shop_skus?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher_platform?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher?: StringWithAggregatesFilter<"DarazOrder"> | string
    voucher_seller?: StringWithAggregatesFilter<"DarazOrder"> | string
    order_number?: StringWithAggregatesFilter<"DarazOrder"> | string
    created_at?: DateTimeWithAggregatesFilter<"DarazOrder"> | Date | string
    voucher_code?: StringWithAggregatesFilter<"DarazOrder"> | string
    gift_option?: StringWithAggregatesFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: FloatWithAggregatesFilter<"DarazOrder"> | number
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
    shipping_address?: JsonWithAggregatesFilter<"DarazOrder">
    billing_address?: JsonWithAggregatesFilter<"DarazOrder">
    transactions_amount?: FloatWithAggregatesFilter<"DarazOrder"> | number
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
    daraz_order?: XOR<DarazOrderRelationFilter, DarazOrderWhereInput>
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
    daraz_order?: DarazOrderOrderByWithRelationInput
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
    daraz_order?: XOR<DarazOrderRelationFilter, DarazOrderWhereInput>
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

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    user_id?: IntFilter<"Category"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    user_id?: IntFilter<"Category"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Product?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    user_id?: IntWithAggregatesFilter<"Category"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    image_url?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: IntFilter<"Product"> | number
    user_id?: IntFilter<"Product"> | number
    packing_material_cost?: FloatFilter<"Product"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    Variant?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Variant?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    image_url?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: IntFilter<"Product"> | number
    user_id?: IntFilter<"Product"> | number
    packing_material_cost?: FloatFilter<"Product"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    Variant?: VariantListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    image_url?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    category_id?: IntWithAggregatesFilter<"Product"> | number
    user_id?: IntWithAggregatesFilter<"Product"> | number
    packing_material_cost?: FloatWithAggregatesFilter<"Product"> | number
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: IntFilter<"Variant"> | number
    name?: StringFilter<"Variant"> | string
    sku?: StringFilter<"Variant"> | string
    cost?: FloatFilter<"Variant"> | number
    image_url?: StringFilter<"Variant"> | string
    product_id?: IntFilter<"Variant"> | number
    user_id?: IntFilter<"Variant"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    VariantOnStores?: VariantOnStoresListRelationFilter
    Inventory?: InventoryListRelationFilter
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    cost?: SortOrder
    image_url?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    VariantOnStores?: VariantOnStoresOrderByRelationAggregateInput
    Inventory?: InventoryOrderByRelationAggregateInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    name?: StringFilter<"Variant"> | string
    sku?: StringFilter<"Variant"> | string
    cost?: FloatFilter<"Variant"> | number
    image_url?: StringFilter<"Variant"> | string
    product_id?: IntFilter<"Variant"> | number
    user_id?: IntFilter<"Variant"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    VariantOnStores?: VariantOnStoresListRelationFilter
    Inventory?: InventoryListRelationFilter
  }, "id">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    cost?: SortOrder
    image_url?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variant"> | number
    name?: StringWithAggregatesFilter<"Variant"> | string
    sku?: StringWithAggregatesFilter<"Variant"> | string
    cost?: FloatWithAggregatesFilter<"Variant"> | number
    image_url?: StringWithAggregatesFilter<"Variant"> | string
    product_id?: IntWithAggregatesFilter<"Variant"> | number
    user_id?: IntWithAggregatesFilter<"Variant"> | number
  }

  export type VariantOnStoresWhereInput = {
    AND?: VariantOnStoresWhereInput | VariantOnStoresWhereInput[]
    OR?: VariantOnStoresWhereInput[]
    NOT?: VariantOnStoresWhereInput | VariantOnStoresWhereInput[]
    id?: IntFilter<"VariantOnStores"> | number
    variant_id?: IntFilter<"VariantOnStores"> | number
    status?: StringFilter<"VariantOnStores"> | string
    store_id?: StringFilter<"VariantOnStores"> | string
    daraz_shop_sku?: StringFilter<"VariantOnStores"> | string
    price?: FloatFilter<"VariantOnStores"> | number
    sale_price?: FloatFilter<"VariantOnStores"> | number
    deduction_unit?: FloatFilter<"VariantOnStores"> | number
    created_at?: DateTimeFilter<"VariantOnStores"> | Date | string
    updated_at?: DateTimeNullableFilter<"VariantOnStores"> | Date | string | null
    platform_details?: JsonFilter<"VariantOnStores">
    sku_id?: StringFilter<"VariantOnStores"> | string
    seller_sku?: StringFilter<"VariantOnStores"> | string
    user_id?: IntFilter<"VariantOnStores"> | number
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VariantOnStoresOrderByWithRelationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    status?: SortOrder
    store_id?: SortOrder
    daraz_shop_sku?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    platform_details?: SortOrder
    sku_id?: SortOrder
    seller_sku?: SortOrder
    user_id?: SortOrder
    variant?: VariantOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VariantOnStoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VariantOnStoresWhereInput | VariantOnStoresWhereInput[]
    OR?: VariantOnStoresWhereInput[]
    NOT?: VariantOnStoresWhereInput | VariantOnStoresWhereInput[]
    variant_id?: IntFilter<"VariantOnStores"> | number
    status?: StringFilter<"VariantOnStores"> | string
    store_id?: StringFilter<"VariantOnStores"> | string
    daraz_shop_sku?: StringFilter<"VariantOnStores"> | string
    price?: FloatFilter<"VariantOnStores"> | number
    sale_price?: FloatFilter<"VariantOnStores"> | number
    deduction_unit?: FloatFilter<"VariantOnStores"> | number
    created_at?: DateTimeFilter<"VariantOnStores"> | Date | string
    updated_at?: DateTimeNullableFilter<"VariantOnStores"> | Date | string | null
    platform_details?: JsonFilter<"VariantOnStores">
    sku_id?: StringFilter<"VariantOnStores"> | string
    seller_sku?: StringFilter<"VariantOnStores"> | string
    user_id?: IntFilter<"VariantOnStores"> | number
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type VariantOnStoresOrderByWithAggregationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    status?: SortOrder
    store_id?: SortOrder
    daraz_shop_sku?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    platform_details?: SortOrder
    sku_id?: SortOrder
    seller_sku?: SortOrder
    user_id?: SortOrder
    _count?: VariantOnStoresCountOrderByAggregateInput
    _avg?: VariantOnStoresAvgOrderByAggregateInput
    _max?: VariantOnStoresMaxOrderByAggregateInput
    _min?: VariantOnStoresMinOrderByAggregateInput
    _sum?: VariantOnStoresSumOrderByAggregateInput
  }

  export type VariantOnStoresScalarWhereWithAggregatesInput = {
    AND?: VariantOnStoresScalarWhereWithAggregatesInput | VariantOnStoresScalarWhereWithAggregatesInput[]
    OR?: VariantOnStoresScalarWhereWithAggregatesInput[]
    NOT?: VariantOnStoresScalarWhereWithAggregatesInput | VariantOnStoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VariantOnStores"> | number
    variant_id?: IntWithAggregatesFilter<"VariantOnStores"> | number
    status?: StringWithAggregatesFilter<"VariantOnStores"> | string
    store_id?: StringWithAggregatesFilter<"VariantOnStores"> | string
    daraz_shop_sku?: StringWithAggregatesFilter<"VariantOnStores"> | string
    price?: FloatWithAggregatesFilter<"VariantOnStores"> | number
    sale_price?: FloatWithAggregatesFilter<"VariantOnStores"> | number
    deduction_unit?: FloatWithAggregatesFilter<"VariantOnStores"> | number
    created_at?: DateTimeWithAggregatesFilter<"VariantOnStores"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"VariantOnStores"> | Date | string | null
    platform_details?: JsonWithAggregatesFilter<"VariantOnStores">
    sku_id?: StringWithAggregatesFilter<"VariantOnStores"> | string
    seller_sku?: StringWithAggregatesFilter<"VariantOnStores"> | string
    user_id?: IntWithAggregatesFilter<"VariantOnStores"> | number
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    user_id?: IntFilter<"Warehouse"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Inventory?: InventoryListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    Inventory?: InventoryOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    user_id?: IntFilter<"Warehouse"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    Inventory?: InventoryListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    user_id?: IntWithAggregatesFilter<"Warehouse"> | number
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: IntFilter<"Inventory"> | number
    variant_id?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    units?: StringFilter<"Inventory"> | string
    user_id?: IntFilter<"Inventory"> | number
    warehouse_id?: IntFilter<"Inventory"> | number
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    units?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
    variant?: VariantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    variant_id?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    units?: StringFilter<"Inventory"> | string
    user_id?: IntFilter<"Inventory"> | number
    warehouse_id?: IntFilter<"Inventory"> | number
    variant?: XOR<VariantRelationFilter, VariantWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    units?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventory"> | number
    variant_id?: IntWithAggregatesFilter<"Inventory"> | number
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    units?: StringWithAggregatesFilter<"Inventory"> | string
    user_id?: IntWithAggregatesFilter<"Inventory"> | number
    warehouse_id?: IntWithAggregatesFilter<"Inventory"> | number
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
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
    user_events: JsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
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
    user_events?: JsonNullValueInput | InputJsonValue
  }

  export type StoreCreateInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStoreInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStoreNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutStoreNestedInput
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
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user: UserCreateNestedOneWithoutCustomerInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id: string
    shopify_id?: string | null
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
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user: UserCreateNestedOneWithoutDarazOrderInput
    customer: CustomerCreateNestedOneWithoutDarazOrderInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderUncheckedCreateInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user_id: number
    customer_id: string
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDarazOrderNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderCreateManyInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user_id: number
    customer_id: string
  }

  export type DarazOrderUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DarazOrderUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionCreateInput = {
    id: string
    seller_id: string
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
    daraz_order: DarazOrderCreateNestedOneWithoutDarazTransactionInput
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
    daraz_order?: DarazOrderUpdateOneRequiredWithoutDarazTransactionNestedInput
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

  export type CategoryCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutCategoryInput
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    user_id: number
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoryNestedInput
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    user_id: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    packing_material_cost: number
    category: CategoryCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    category_id: number
    user_id: number
    packing_material_cost: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    category_id: number
    user_id: number
    packing_material_cost: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantCreateInput = {
    name: string
    sku: string
    cost: number
    image_url: string
    product: ProductCreateNestedOneWithoutVariantInput
    user: UserCreateNestedOneWithoutVariantInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    user_id: number
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutVariantNestedInput
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantCreateManyInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    user_id: number
  }

  export type VariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresCreateInput = {
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    variant: VariantCreateNestedOneWithoutVariantOnStoresInput
    store: StoreCreateNestedOneWithoutVariantOnStoresInput
    user: UserCreateNestedOneWithoutVariantOnStoresInput
  }

  export type VariantOnStoresUncheckedCreateInput = {
    id?: number
    variant_id: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type VariantOnStoresUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutVariantOnStoresNestedInput
    store?: StoreUpdateOneRequiredWithoutVariantOnStoresNestedInput
    user?: UserUpdateOneRequiredWithoutVariantOnStoresNestedInput
  }

  export type VariantOnStoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresCreateManyInput = {
    id?: number
    variant_id: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type VariantOnStoresUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
  }

  export type VariantOnStoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutWarehouseInput
    Inventory?: InventoryCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    user_id: number
    Inventory?: InventoryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarehouseNestedInput
    Inventory?: InventoryUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    Inventory?: InventoryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    user_id: number
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateInput = {
    quantity: number
    units: string
    variant: VariantCreateNestedOneWithoutInventoryInput
    user: UserCreateNestedOneWithoutInventoryInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    user_id: number
    warehouse_id: number
  }

  export type InventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutInventoryNestedInput
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateManyInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    user_id: number
    warehouse_id: number
  }

  export type InventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
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

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
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

  export type DarazTransactionListRelationFilter = {
    every?: DarazTransactionWhereInput
    some?: DarazTransactionWhereInput
    none?: DarazTransactionWhereInput
  }

  export type TemporaryDataListRelationFilter = {
    every?: TemporaryDataWhereInput
    some?: TemporaryDataWhereInput
    none?: TemporaryDataWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type VariantOnStoresListRelationFilter = {
    every?: VariantOnStoresWhereInput
    some?: VariantOnStoresWhereInput
    none?: VariantOnStoresWhereInput
  }

  export type WarehouseListRelationFilter = {
    every?: WarehouseWhereInput
    some?: WarehouseWhereInput
    none?: WarehouseWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DarazTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporaryDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantOnStoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    shop_skus?: SortOrder
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
    shipping_address?: SortOrder
    billing_address?: SortOrder
    transactions_amount?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderAvgOrderByAggregateInput = {
    shipping_fee_discount_platform?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    transactions_amount?: SortOrder
    user_id?: SortOrder
  }

  export type DarazOrderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    shop_skus?: SortOrder
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
    transactions_amount?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderMinOrderByAggregateInput = {
    order_id?: SortOrder
    seller_id?: SortOrder
    shop_skus?: SortOrder
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
    transactions_amount?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DarazOrderSumOrderByAggregateInput = {
    shipping_fee_discount_platform?: SortOrder
    price?: SortOrder
    shipping_fee_original?: SortOrder
    shipping_fee_discount_seller?: SortOrder
    shipping_fee?: SortOrder
    items_count?: SortOrder
    transactions_amount?: SortOrder
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

  export type DarazOrderRelationFilter = {
    is?: DarazOrderWhereInput
    isNot?: DarazOrderWhereInput
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    packing_material_cost?: SortOrder
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    cost?: SortOrder
    image_url?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    cost?: SortOrder
    image_url?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    cost?: SortOrder
    image_url?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
  }

  export type VariantRelationFilter = {
    is?: VariantWhereInput
    isNot?: VariantWhereInput
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type VariantOnStoresCountOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    status?: SortOrder
    store_id?: SortOrder
    daraz_shop_sku?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    platform_details?: SortOrder
    sku_id?: SortOrder
    seller_sku?: SortOrder
    user_id?: SortOrder
  }

  export type VariantOnStoresAvgOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    user_id?: SortOrder
  }

  export type VariantOnStoresMaxOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    status?: SortOrder
    store_id?: SortOrder
    daraz_shop_sku?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sku_id?: SortOrder
    seller_sku?: SortOrder
    user_id?: SortOrder
  }

  export type VariantOnStoresMinOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    status?: SortOrder
    store_id?: SortOrder
    daraz_shop_sku?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sku_id?: SortOrder
    seller_sku?: SortOrder
    user_id?: SortOrder
  }

  export type VariantOnStoresSumOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    price?: SortOrder
    sale_price?: SortOrder
    deduction_unit?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type WarehouseRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    units?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    units?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    units?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    user_id?: SortOrder
    warehouse_id?: SortOrder
  }

  export type StoreCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
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

  export type DarazTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
  }

  export type TemporaryDataCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type VariantCreateNestedManyWithoutUserInput = {
    create?: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput> | VariantCreateWithoutUserInput[] | VariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutUserInput | VariantCreateOrConnectWithoutUserInput[]
    createMany?: VariantCreateManyUserInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantOnStoresCreateNestedManyWithoutUserInput = {
    create?: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput> | VariantOnStoresCreateWithoutUserInput[] | VariantOnStoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutUserInput | VariantOnStoresCreateOrConnectWithoutUserInput[]
    createMany?: VariantOnStoresCreateManyUserInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type WarehouseCreateNestedManyWithoutUserInput = {
    create?: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput> | WarehouseCreateWithoutUserInput[] | WarehouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutUserInput | WarehouseCreateOrConnectWithoutUserInput[]
    createMany?: WarehouseCreateManyUserInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
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

  export type DarazTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DarazTransactionCreateWithoutUserInput, DarazTransactionUncheckedCreateWithoutUserInput> | DarazTransactionCreateWithoutUserInput[] | DarazTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutUserInput | DarazTransactionCreateOrConnectWithoutUserInput[]
    createMany?: DarazTransactionCreateManyUserInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
  }

  export type TemporaryDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TemporaryDataCreateWithoutUserInput, TemporaryDataUncheckedCreateWithoutUserInput> | TemporaryDataCreateWithoutUserInput[] | TemporaryDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TemporaryDataCreateOrConnectWithoutUserInput | TemporaryDataCreateOrConnectWithoutUserInput[]
    createMany?: TemporaryDataCreateManyUserInputEnvelope
    connect?: TemporaryDataWhereUniqueInput | TemporaryDataWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput> | VariantCreateWithoutUserInput[] | VariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutUserInput | VariantCreateOrConnectWithoutUserInput[]
    createMany?: VariantCreateManyUserInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantOnStoresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput> | VariantOnStoresCreateWithoutUserInput[] | VariantOnStoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutUserInput | VariantOnStoresCreateOrConnectWithoutUserInput[]
    createMany?: VariantOnStoresCreateManyUserInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput> | WarehouseCreateWithoutUserInput[] | WarehouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutUserInput | WarehouseCreateOrConnectWithoutUserInput[]
    createMany?: WarehouseCreateManyUserInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
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

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type VariantUpdateManyWithoutUserNestedInput = {
    create?: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput> | VariantCreateWithoutUserInput[] | VariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutUserInput | VariantCreateOrConnectWithoutUserInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutUserInput | VariantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VariantCreateManyUserInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutUserInput | VariantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutUserInput | VariantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantOnStoresUpdateManyWithoutUserNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput> | VariantOnStoresCreateWithoutUserInput[] | VariantOnStoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutUserInput | VariantOnStoresCreateOrConnectWithoutUserInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutUserInput | VariantOnStoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VariantOnStoresCreateManyUserInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutUserInput | VariantOnStoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutUserInput | VariantOnStoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
  }

  export type WarehouseUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput> | WarehouseCreateWithoutUserInput[] | WarehouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutUserInput | WarehouseCreateOrConnectWithoutUserInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutUserInput | WarehouseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarehouseCreateManyUserInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutUserInput | WarehouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutUserInput | WarehouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUserInput | InventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUserInput | InventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUserInput | InventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
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

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput> | VariantCreateWithoutUserInput[] | VariantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutUserInput | VariantCreateOrConnectWithoutUserInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutUserInput | VariantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VariantCreateManyUserInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutUserInput | VariantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutUserInput | VariantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput> | VariantOnStoresCreateWithoutUserInput[] | VariantOnStoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutUserInput | VariantOnStoresCreateOrConnectWithoutUserInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutUserInput | VariantOnStoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VariantOnStoresCreateManyUserInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutUserInput | VariantOnStoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutUserInput | VariantOnStoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput> | WarehouseCreateWithoutUserInput[] | WarehouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutUserInput | WarehouseCreateOrConnectWithoutUserInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutUserInput | WarehouseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarehouseCreateManyUserInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutUserInput | WarehouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutUserInput | WarehouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput> | InventoryCreateWithoutUserInput[] | InventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | InventoryCreateOrConnectWithoutUserInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUserInput | InventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InventoryCreateManyUserInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUserInput | InventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUserInput | InventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoreInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    connect?: UserWhereUniqueInput
  }

  export type VariantOnStoresCreateNestedManyWithoutStoreInput = {
    create?: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput> | VariantOnStoresCreateWithoutStoreInput[] | VariantOnStoresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutStoreInput | VariantOnStoresCreateOrConnectWithoutStoreInput[]
    createMany?: VariantOnStoresCreateManyStoreInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type VariantOnStoresUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput> | VariantOnStoresCreateWithoutStoreInput[] | VariantOnStoresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutStoreInput | VariantOnStoresCreateOrConnectWithoutStoreInput[]
    createMany?: VariantOnStoresCreateManyStoreInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoreInput
    upsert?: UserUpsertWithoutStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoreInput, UserUpdateWithoutStoreInput>, UserUncheckedUpdateWithoutStoreInput>
  }

  export type VariantOnStoresUpdateManyWithoutStoreNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput> | VariantOnStoresCreateWithoutStoreInput[] | VariantOnStoresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutStoreInput | VariantOnStoresCreateOrConnectWithoutStoreInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutStoreInput | VariantOnStoresUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: VariantOnStoresCreateManyStoreInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutStoreInput | VariantOnStoresUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutStoreInput | VariantOnStoresUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput> | VariantOnStoresCreateWithoutStoreInput[] | VariantOnStoresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutStoreInput | VariantOnStoresCreateOrConnectWithoutStoreInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutStoreInput | VariantOnStoresUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: VariantOnStoresCreateManyStoreInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutStoreInput | VariantOnStoresUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutStoreInput | VariantOnStoresUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
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

  export type DarazOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput> | DarazOrderCreateWithoutCustomerInput[] | DarazOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DarazOrderCreateOrConnectWithoutCustomerInput | DarazOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: DarazOrderCreateManyCustomerInputEnvelope
    connect?: DarazOrderWhereUniqueInput | DarazOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type UserCreateNestedOneWithoutDarazOrderInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDarazOrderInput = {
    create?: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type DarazTransactionCreateNestedManyWithoutDaraz_orderInput = {
    create?: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput> | DarazTransactionCreateWithoutDaraz_orderInput[] | DarazTransactionUncheckedCreateWithoutDaraz_orderInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutDaraz_orderInput | DarazTransactionCreateOrConnectWithoutDaraz_orderInput[]
    createMany?: DarazTransactionCreateManyDaraz_orderInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
  }

  export type DarazTransactionUncheckedCreateNestedManyWithoutDaraz_orderInput = {
    create?: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput> | DarazTransactionCreateWithoutDaraz_orderInput[] | DarazTransactionUncheckedCreateWithoutDaraz_orderInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutDaraz_orderInput | DarazTransactionCreateOrConnectWithoutDaraz_orderInput[]
    createMany?: DarazTransactionCreateManyDaraz_orderInputEnvelope
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
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

  export type UserUpdateOneRequiredWithoutDarazOrderNestedInput = {
    create?: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazOrderInput
    upsert?: UserUpsertWithoutDarazOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazOrderInput, UserUpdateWithoutDarazOrderInput>, UserUncheckedUpdateWithoutDarazOrderInput>
  }

  export type CustomerUpdateOneRequiredWithoutDarazOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDarazOrderInput
    upsert?: CustomerUpsertWithoutDarazOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDarazOrderInput, CustomerUpdateWithoutDarazOrderInput>, CustomerUncheckedUpdateWithoutDarazOrderInput>
  }

  export type DarazTransactionUpdateManyWithoutDaraz_orderNestedInput = {
    create?: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput> | DarazTransactionCreateWithoutDaraz_orderInput[] | DarazTransactionUncheckedCreateWithoutDaraz_orderInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutDaraz_orderInput | DarazTransactionCreateOrConnectWithoutDaraz_orderInput[]
    upsert?: DarazTransactionUpsertWithWhereUniqueWithoutDaraz_orderInput | DarazTransactionUpsertWithWhereUniqueWithoutDaraz_orderInput[]
    createMany?: DarazTransactionCreateManyDaraz_orderInputEnvelope
    set?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    disconnect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    delete?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    update?: DarazTransactionUpdateWithWhereUniqueWithoutDaraz_orderInput | DarazTransactionUpdateWithWhereUniqueWithoutDaraz_orderInput[]
    updateMany?: DarazTransactionUpdateManyWithWhereWithoutDaraz_orderInput | DarazTransactionUpdateManyWithWhereWithoutDaraz_orderInput[]
    deleteMany?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
  }

  export type DarazTransactionUncheckedUpdateManyWithoutDaraz_orderNestedInput = {
    create?: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput> | DarazTransactionCreateWithoutDaraz_orderInput[] | DarazTransactionUncheckedCreateWithoutDaraz_orderInput[]
    connectOrCreate?: DarazTransactionCreateOrConnectWithoutDaraz_orderInput | DarazTransactionCreateOrConnectWithoutDaraz_orderInput[]
    upsert?: DarazTransactionUpsertWithWhereUniqueWithoutDaraz_orderInput | DarazTransactionUpsertWithWhereUniqueWithoutDaraz_orderInput[]
    createMany?: DarazTransactionCreateManyDaraz_orderInputEnvelope
    set?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    disconnect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    delete?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    connect?: DarazTransactionWhereUniqueInput | DarazTransactionWhereUniqueInput[]
    update?: DarazTransactionUpdateWithWhereUniqueWithoutDaraz_orderInput | DarazTransactionUpdateWithWhereUniqueWithoutDaraz_orderInput[]
    updateMany?: DarazTransactionUpdateManyWithWhereWithoutDaraz_orderInput | DarazTransactionUpdateManyWithWhereWithoutDaraz_orderInput[]
    deleteMany?: DarazTransactionScalarWhereInput | DarazTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDarazTransactionInput = {
    create?: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type DarazOrderCreateNestedOneWithoutDarazTransactionInput = {
    create?: XOR<DarazOrderCreateWithoutDarazTransactionInput, DarazOrderUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: DarazOrderCreateOrConnectWithoutDarazTransactionInput
    connect?: DarazOrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDarazTransactionNestedInput = {
    create?: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutDarazTransactionInput
    upsert?: UserUpsertWithoutDarazTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDarazTransactionInput, UserUpdateWithoutDarazTransactionInput>, UserUncheckedUpdateWithoutDarazTransactionInput>
  }

  export type DarazOrderUpdateOneRequiredWithoutDarazTransactionNestedInput = {
    create?: XOR<DarazOrderCreateWithoutDarazTransactionInput, DarazOrderUncheckedCreateWithoutDarazTransactionInput>
    connectOrCreate?: DarazOrderCreateOrConnectWithoutDarazTransactionInput
    upsert?: DarazOrderUpsertWithoutDarazTransactionInput
    connect?: DarazOrderWhereUniqueInput
    update?: XOR<XOR<DarazOrderUpdateToOneWithWhereWithoutDarazTransactionInput, DarazOrderUpdateWithoutDarazTransactionInput>, DarazOrderUncheckedUpdateWithoutDarazTransactionInput>
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

  export type UserCreateNestedOneWithoutCategoryInput = {
    create?: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryInput
    upsert?: UserUpsertWithoutCategoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoryInput, UserUpdateWithoutCategoryInput>, UserUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    connect?: UserWhereUniqueInput
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    upsert?: UserUpsertWithoutProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductInput, UserUpdateWithoutProductInput>, UserUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVariantInput = {
    create?: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantInput
    connect?: UserWhereUniqueInput
  }

  export type VariantOnStoresCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput> | VariantOnStoresCreateWithoutVariantInput[] | VariantOnStoresUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutVariantInput | VariantOnStoresCreateOrConnectWithoutVariantInput[]
    createMany?: VariantOnStoresCreateManyVariantInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutVariantInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type VariantOnStoresUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput> | VariantOnStoresCreateWithoutVariantInput[] | VariantOnStoresUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutVariantInput | VariantOnStoresCreateOrConnectWithoutVariantInput[]
    createMany?: VariantOnStoresCreateManyVariantInputEnvelope
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantNestedInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    upsert?: ProductUpsertWithoutVariantInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantInput, ProductUpdateWithoutVariantInput>, ProductUncheckedUpdateWithoutVariantInput>
  }

  export type UserUpdateOneRequiredWithoutVariantNestedInput = {
    create?: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantInput
    upsert?: UserUpsertWithoutVariantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVariantInput, UserUpdateWithoutVariantInput>, UserUncheckedUpdateWithoutVariantInput>
  }

  export type VariantOnStoresUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput> | VariantOnStoresCreateWithoutVariantInput[] | VariantOnStoresUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutVariantInput | VariantOnStoresCreateOrConnectWithoutVariantInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutVariantInput | VariantOnStoresUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantOnStoresCreateManyVariantInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutVariantInput | VariantOnStoresUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutVariantInput | VariantOnStoresUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutVariantNestedInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutVariantInput | InventoryUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutVariantInput | InventoryUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutVariantInput | InventoryUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput> | VariantOnStoresCreateWithoutVariantInput[] | VariantOnStoresUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantOnStoresCreateOrConnectWithoutVariantInput | VariantOnStoresCreateOrConnectWithoutVariantInput[]
    upsert?: VariantOnStoresUpsertWithWhereUniqueWithoutVariantInput | VariantOnStoresUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantOnStoresCreateManyVariantInputEnvelope
    set?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    disconnect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    delete?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    connect?: VariantOnStoresWhereUniqueInput | VariantOnStoresWhereUniqueInput[]
    update?: VariantOnStoresUpdateWithWhereUniqueWithoutVariantInput | VariantOnStoresUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantOnStoresUpdateManyWithWhereWithoutVariantInput | VariantOnStoresUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput> | InventoryCreateWithoutVariantInput[] | InventoryUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutVariantInput | InventoryCreateOrConnectWithoutVariantInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutVariantInput | InventoryUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: InventoryCreateManyVariantInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutVariantInput | InventoryUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutVariantInput | InventoryUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type VariantCreateNestedOneWithoutVariantOnStoresInput = {
    create?: XOR<VariantCreateWithoutVariantOnStoresInput, VariantUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: VariantCreateOrConnectWithoutVariantOnStoresInput
    connect?: VariantWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutVariantOnStoresInput = {
    create?: XOR<StoreCreateWithoutVariantOnStoresInput, StoreUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: StoreCreateOrConnectWithoutVariantOnStoresInput
    connect?: StoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVariantOnStoresInput = {
    create?: XOR<UserCreateWithoutVariantOnStoresInput, UserUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantOnStoresInput
    connect?: UserWhereUniqueInput
  }

  export type VariantUpdateOneRequiredWithoutVariantOnStoresNestedInput = {
    create?: XOR<VariantCreateWithoutVariantOnStoresInput, VariantUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: VariantCreateOrConnectWithoutVariantOnStoresInput
    upsert?: VariantUpsertWithoutVariantOnStoresInput
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutVariantOnStoresInput, VariantUpdateWithoutVariantOnStoresInput>, VariantUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type StoreUpdateOneRequiredWithoutVariantOnStoresNestedInput = {
    create?: XOR<StoreCreateWithoutVariantOnStoresInput, StoreUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: StoreCreateOrConnectWithoutVariantOnStoresInput
    upsert?: StoreUpsertWithoutVariantOnStoresInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutVariantOnStoresInput, StoreUpdateWithoutVariantOnStoresInput>, StoreUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type UserUpdateOneRequiredWithoutVariantOnStoresNestedInput = {
    create?: XOR<UserCreateWithoutVariantOnStoresInput, UserUncheckedCreateWithoutVariantOnStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutVariantOnStoresInput
    upsert?: UserUpsertWithoutVariantOnStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVariantOnStoresInput, UserUpdateWithoutVariantOnStoresInput>, UserUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type UserCreateNestedOneWithoutWarehouseInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput
    connect?: UserWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput> | InventoryCreateWithoutWarehouseInput[] | InventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutWarehouseInput | InventoryCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryCreateManyWarehouseInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput> | InventoryCreateWithoutWarehouseInput[] | InventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutWarehouseInput | InventoryCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryCreateManyWarehouseInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWarehouseNestedInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput
    upsert?: UserUpsertWithoutWarehouseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarehouseInput, UserUpdateWithoutWarehouseInput>, UserUncheckedUpdateWithoutWarehouseInput>
  }

  export type InventoryUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput> | InventoryCreateWithoutWarehouseInput[] | InventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutWarehouseInput | InventoryCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutWarehouseInput | InventoryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryCreateManyWarehouseInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutWarehouseInput | InventoryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutWarehouseInput | InventoryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput> | InventoryCreateWithoutWarehouseInput[] | InventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutWarehouseInput | InventoryCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutWarehouseInput | InventoryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryCreateManyWarehouseInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutWarehouseInput | InventoryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutWarehouseInput | InventoryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type VariantCreateNestedOneWithoutInventoryInput = {
    create?: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: VariantCreateOrConnectWithoutInventoryInput
    connect?: VariantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutInventoryInput = {
    create?: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryInput
    connect?: WarehouseWhereUniqueInput
  }

  export type VariantUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: VariantCreateOrConnectWithoutInventoryInput
    upsert?: VariantUpsertWithoutInventoryInput
    connect?: VariantWhereUniqueInput
    update?: XOR<XOR<VariantUpdateToOneWithWhereWithoutInventoryInput, VariantUpdateWithoutInventoryInput>, VariantUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryInput, UserUpdateWithoutInventoryInput>, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type WarehouseUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryInput
    upsert?: WarehouseUpsertWithoutInventoryInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutInventoryInput, WarehouseUpdateWithoutInventoryInput>, WarehouseUncheckedUpdateWithoutInventoryInput>
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

  export type StoreCreateWithoutUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutUserInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreCreateManyUserInputEnvelope = {
    data: StoreCreateManyUserInput | StoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutUserInput = {
    id: string
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    DarazOrder?: DarazOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id: string
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutCustomerInput
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
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    customer: CustomerCreateNestedOneWithoutDarazOrderInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderUncheckedCreateWithoutUserInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    customer_id: string
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderCreateOrConnectWithoutUserInput = {
    where: DarazOrderWhereUniqueInput
    create: XOR<DarazOrderCreateWithoutUserInput, DarazOrderUncheckedCreateWithoutUserInput>
  }

  export type DarazOrderCreateManyUserInputEnvelope = {
    data: DarazOrderCreateManyUserInput | DarazOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DarazTransactionCreateWithoutUserInput = {
    id: string
    seller_id: string
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
    daraz_order: DarazOrderCreateNestedOneWithoutDarazTransactionInput
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

  export type CategoryCreateWithoutUserInput = {
    name: string
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    packing_material_cost: number
    category: CategoryCreateNestedOneWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    category_id: number
    packing_material_cost: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VariantCreateWithoutUserInput = {
    name: string
    sku: string
    cost: number
    image_url: string
    product: ProductCreateNestedOneWithoutVariantInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutUserInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput>
  }

  export type VariantCreateManyUserInputEnvelope = {
    data: VariantCreateManyUserInput | VariantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VariantOnStoresCreateWithoutUserInput = {
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    variant: VariantCreateNestedOneWithoutVariantOnStoresInput
    store: StoreCreateNestedOneWithoutVariantOnStoresInput
  }

  export type VariantOnStoresUncheckedCreateWithoutUserInput = {
    id?: number
    variant_id: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
  }

  export type VariantOnStoresCreateOrConnectWithoutUserInput = {
    where: VariantOnStoresWhereUniqueInput
    create: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput>
  }

  export type VariantOnStoresCreateManyUserInputEnvelope = {
    data: VariantOnStoresCreateManyUserInput | VariantOnStoresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseCreateWithoutUserInput = {
    name: string
    Inventory?: InventoryCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    Inventory?: InventoryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutUserInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput>
  }

  export type WarehouseCreateManyUserInputEnvelope = {
    data: WarehouseCreateManyUserInput | WarehouseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutUserInput = {
    quantity: number
    units: string
    variant: VariantCreateNestedOneWithoutInventoryInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutUserInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    warehouse_id: number
  }

  export type InventoryCreateOrConnectWithoutUserInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryCreateManyUserInputEnvelope = {
    data: InventoryCreateManyUserInput | InventoryCreateManyUserInput[]
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
    connected_at?: DateTimeFilter<"Store"> | Date | string
    store_info?: JsonFilter<"Store">
    user_id?: IntFilter<"Store"> | number
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
    shop_skus?: StringFilter<"DarazOrder"> | string
    voucher_platform?: StringFilter<"DarazOrder"> | string
    voucher?: StringFilter<"DarazOrder"> | string
    voucher_seller?: StringFilter<"DarazOrder"> | string
    order_number?: StringFilter<"DarazOrder"> | string
    created_at?: DateTimeFilter<"DarazOrder"> | Date | string
    voucher_code?: StringFilter<"DarazOrder"> | string
    gift_option?: StringFilter<"DarazOrder"> | string
    shipping_fee_discount_platform?: FloatFilter<"DarazOrder"> | number
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
    shipping_address?: JsonFilter<"DarazOrder">
    billing_address?: JsonFilter<"DarazOrder">
    transactions_amount?: FloatFilter<"DarazOrder"> | number
    user_id?: IntFilter<"DarazOrder"> | number
    customer_id?: StringFilter<"DarazOrder"> | string
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

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    user_id?: IntFilter<"Category"> | number
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    image_url?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    category_id?: IntFilter<"Product"> | number
    user_id?: IntFilter<"Product"> | number
    packing_material_cost?: FloatFilter<"Product"> | number
  }

  export type VariantUpsertWithWhereUniqueWithoutUserInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutUserInput, VariantUncheckedUpdateWithoutUserInput>
    create: XOR<VariantCreateWithoutUserInput, VariantUncheckedCreateWithoutUserInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutUserInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutUserInput, VariantUncheckedUpdateWithoutUserInput>
  }

  export type VariantUpdateManyWithWhereWithoutUserInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutUserInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: IntFilter<"Variant"> | number
    name?: StringFilter<"Variant"> | string
    sku?: StringFilter<"Variant"> | string
    cost?: FloatFilter<"Variant"> | number
    image_url?: StringFilter<"Variant"> | string
    product_id?: IntFilter<"Variant"> | number
    user_id?: IntFilter<"Variant"> | number
  }

  export type VariantOnStoresUpsertWithWhereUniqueWithoutUserInput = {
    where: VariantOnStoresWhereUniqueInput
    update: XOR<VariantOnStoresUpdateWithoutUserInput, VariantOnStoresUncheckedUpdateWithoutUserInput>
    create: XOR<VariantOnStoresCreateWithoutUserInput, VariantOnStoresUncheckedCreateWithoutUserInput>
  }

  export type VariantOnStoresUpdateWithWhereUniqueWithoutUserInput = {
    where: VariantOnStoresWhereUniqueInput
    data: XOR<VariantOnStoresUpdateWithoutUserInput, VariantOnStoresUncheckedUpdateWithoutUserInput>
  }

  export type VariantOnStoresUpdateManyWithWhereWithoutUserInput = {
    where: VariantOnStoresScalarWhereInput
    data: XOR<VariantOnStoresUpdateManyMutationInput, VariantOnStoresUncheckedUpdateManyWithoutUserInput>
  }

  export type VariantOnStoresScalarWhereInput = {
    AND?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
    OR?: VariantOnStoresScalarWhereInput[]
    NOT?: VariantOnStoresScalarWhereInput | VariantOnStoresScalarWhereInput[]
    id?: IntFilter<"VariantOnStores"> | number
    variant_id?: IntFilter<"VariantOnStores"> | number
    status?: StringFilter<"VariantOnStores"> | string
    store_id?: StringFilter<"VariantOnStores"> | string
    daraz_shop_sku?: StringFilter<"VariantOnStores"> | string
    price?: FloatFilter<"VariantOnStores"> | number
    sale_price?: FloatFilter<"VariantOnStores"> | number
    deduction_unit?: FloatFilter<"VariantOnStores"> | number
    created_at?: DateTimeFilter<"VariantOnStores"> | Date | string
    updated_at?: DateTimeNullableFilter<"VariantOnStores"> | Date | string | null
    platform_details?: JsonFilter<"VariantOnStores">
    sku_id?: StringFilter<"VariantOnStores"> | string
    seller_sku?: StringFilter<"VariantOnStores"> | string
    user_id?: IntFilter<"VariantOnStores"> | number
  }

  export type WarehouseUpsertWithWhereUniqueWithoutUserInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutUserInput, WarehouseUncheckedUpdateWithoutUserInput>
    create: XOR<WarehouseCreateWithoutUserInput, WarehouseUncheckedCreateWithoutUserInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutUserInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutUserInput, WarehouseUncheckedUpdateWithoutUserInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutUserInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutUserInput>
  }

  export type WarehouseScalarWhereInput = {
    AND?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    OR?: WarehouseScalarWhereInput[]
    NOT?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    user_id?: IntFilter<"Warehouse"> | number
  }

  export type InventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
  }

  export type InventoryUpdateManyWithWhereWithoutUserInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutUserInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: IntFilter<"Inventory"> | number
    variant_id?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    units?: StringFilter<"Inventory"> | string
    user_id?: IntFilter<"Inventory"> | number
    warehouse_id?: IntFilter<"Inventory"> | number
  }

  export type UserCreateWithoutStoreInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoreInput, UserUncheckedCreateWithoutStoreInput>
  }

  export type VariantOnStoresCreateWithoutStoreInput = {
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    variant: VariantCreateNestedOneWithoutVariantOnStoresInput
    user: UserCreateNestedOneWithoutVariantOnStoresInput
  }

  export type VariantOnStoresUncheckedCreateWithoutStoreInput = {
    id?: number
    variant_id: number
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type VariantOnStoresCreateOrConnectWithoutStoreInput = {
    where: VariantOnStoresWhereUniqueInput
    create: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput>
  }

  export type VariantOnStoresCreateManyStoreInputEnvelope = {
    data: VariantOnStoresCreateManyStoreInput | VariantOnStoresCreateManyStoreInput[]
    skipDuplicates?: boolean
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
    user_events?: JsonNullValueInput | InputJsonValue
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VariantOnStoresUpsertWithWhereUniqueWithoutStoreInput = {
    where: VariantOnStoresWhereUniqueInput
    update: XOR<VariantOnStoresUpdateWithoutStoreInput, VariantOnStoresUncheckedUpdateWithoutStoreInput>
    create: XOR<VariantOnStoresCreateWithoutStoreInput, VariantOnStoresUncheckedCreateWithoutStoreInput>
  }

  export type VariantOnStoresUpdateWithWhereUniqueWithoutStoreInput = {
    where: VariantOnStoresWhereUniqueInput
    data: XOR<VariantOnStoresUpdateWithoutStoreInput, VariantOnStoresUncheckedUpdateWithoutStoreInput>
  }

  export type VariantOnStoresUpdateManyWithWhereWithoutStoreInput = {
    where: VariantOnStoresScalarWhereInput
    data: XOR<VariantOnStoresUpdateManyMutationInput, VariantOnStoresUncheckedUpdateManyWithoutStoreInput>
  }

  export type UserCreateWithoutCustomerInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrderCreateWithoutCustomerInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user: UserCreateNestedOneWithoutDarazOrderInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderUncheckedCreateWithoutCustomerInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user_id: number
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutDaraz_orderInput
  }

  export type DarazOrderCreateOrConnectWithoutCustomerInput = {
    where: DarazOrderWhereUniqueInput
    create: XOR<DarazOrderCreateWithoutCustomerInput, DarazOrderUncheckedCreateWithoutCustomerInput>
  }

  export type DarazOrderCreateManyCustomerInputEnvelope = {
    data: DarazOrderCreateManyCustomerInput | DarazOrderCreateManyCustomerInput[]
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserCreateWithoutDarazOrderInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazOrderInput, UserUncheckedCreateWithoutDarazOrderInput>
  }

  export type CustomerCreateWithoutDarazOrderInput = {
    id: string
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDarazOrderInput = {
    id: string
    shopify_id?: string | null
    first_name: string
    last_name: string
    email: string
    city: string
    province: string
    country: string
    user_id: number
  }

  export type CustomerCreateOrConnectWithoutDarazOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDarazOrderInput, CustomerUncheckedCreateWithoutDarazOrderInput>
  }

  export type DarazTransactionCreateWithoutDaraz_orderInput = {
    id: string
    seller_id: string
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

  export type DarazTransactionUncheckedCreateWithoutDaraz_orderInput = {
    id: string
    seller_id: string
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

  export type DarazTransactionCreateOrConnectWithoutDaraz_orderInput = {
    where: DarazTransactionWhereUniqueInput
    create: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput>
  }

  export type DarazTransactionCreateManyDaraz_orderInputEnvelope = {
    data: DarazTransactionCreateManyDaraz_orderInput | DarazTransactionCreateManyDaraz_orderInput[]
    skipDuplicates?: boolean
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
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
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDarazOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazTransactionUpsertWithWhereUniqueWithoutDaraz_orderInput = {
    where: DarazTransactionWhereUniqueInput
    update: XOR<DarazTransactionUpdateWithoutDaraz_orderInput, DarazTransactionUncheckedUpdateWithoutDaraz_orderInput>
    create: XOR<DarazTransactionCreateWithoutDaraz_orderInput, DarazTransactionUncheckedCreateWithoutDaraz_orderInput>
  }

  export type DarazTransactionUpdateWithWhereUniqueWithoutDaraz_orderInput = {
    where: DarazTransactionWhereUniqueInput
    data: XOR<DarazTransactionUpdateWithoutDaraz_orderInput, DarazTransactionUncheckedUpdateWithoutDaraz_orderInput>
  }

  export type DarazTransactionUpdateManyWithWhereWithoutDaraz_orderInput = {
    where: DarazTransactionScalarWhereInput
    data: XOR<DarazTransactionUpdateManyMutationInput, DarazTransactionUncheckedUpdateManyWithoutDaraz_orderInput>
  }

  export type UserCreateWithoutDarazTransactionInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDarazTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDarazTransactionInput, UserUncheckedCreateWithoutDarazTransactionInput>
  }

  export type DarazOrderCreateWithoutDarazTransactionInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user: UserCreateNestedOneWithoutDarazOrderInput
    customer: CustomerCreateNestedOneWithoutDarazOrderInput
  }

  export type DarazOrderUncheckedCreateWithoutDarazTransactionInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user_id: number
    customer_id: string
  }

  export type DarazOrderCreateOrConnectWithoutDarazTransactionInput = {
    where: DarazOrderWhereUniqueInput
    create: XOR<DarazOrderCreateWithoutDarazTransactionInput, DarazOrderUncheckedCreateWithoutDarazTransactionInput>
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DarazOrderUpsertWithoutDarazTransactionInput = {
    update: XOR<DarazOrderUpdateWithoutDarazTransactionInput, DarazOrderUncheckedUpdateWithoutDarazTransactionInput>
    create: XOR<DarazOrderCreateWithoutDarazTransactionInput, DarazOrderUncheckedCreateWithoutDarazTransactionInput>
    where?: DarazOrderWhereInput
  }

  export type DarazOrderUpdateToOneWithWhereWithoutDarazTransactionInput = {
    where?: DarazOrderWhereInput
    data: XOR<DarazOrderUpdateWithoutDarazTransactionInput, DarazOrderUncheckedUpdateWithoutDarazTransactionInput>
  }

  export type DarazOrderUpdateWithoutDarazTransactionInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDarazOrderNestedInput
  }

  export type DarazOrderUncheckedUpdateWithoutDarazTransactionInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTemporaryDataInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
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
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
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
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCategoryInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoryInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    packing_material_cost: number
    user: UserCreateNestedOneWithoutProductInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: number
    packing_material_cost: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoryInput = {
    update: XOR<UserUpdateWithoutCategoryInput, UserUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoryInput, UserUncheckedUpdateWithoutCategoryInput>
  }

  export type UserUpdateWithoutCategoryInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutProductInput = {
    name: string
    user: UserCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    user_id: number
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type UserCreateWithoutProductInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateWithoutProductInput = {
    name: string
    sku: string
    cost: number
    image_url: string
    user: UserCreateNestedOneWithoutVariantInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    user_id: number
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutVariantInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutProductInput = {
    update: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateWithoutProductInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutVariantInput = {
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    packing_material_cost: number
    category: CategoryCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    category_id: number
    user_id: number
    packing_material_cost: number
  }

  export type ProductCreateOrConnectWithoutVariantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
  }

  export type UserCreateWithoutVariantInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVariantInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVariantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
  }

  export type VariantOnStoresCreateWithoutVariantInput = {
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    store: StoreCreateNestedOneWithoutVariantOnStoresInput
    user: UserCreateNestedOneWithoutVariantOnStoresInput
  }

  export type VariantOnStoresUncheckedCreateWithoutVariantInput = {
    id?: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type VariantOnStoresCreateOrConnectWithoutVariantInput = {
    where: VariantOnStoresWhereUniqueInput
    create: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput>
  }

  export type VariantOnStoresCreateManyVariantInputEnvelope = {
    data: VariantOnStoresCreateManyVariantInput | VariantOnStoresCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutVariantInput = {
    quantity: number
    units: string
    user: UserCreateNestedOneWithoutInventoryInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutVariantInput = {
    id?: number
    quantity: number
    units: string
    user_id: number
    warehouse_id: number
  }

  export type InventoryCreateOrConnectWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput>
  }

  export type InventoryCreateManyVariantInputEnvelope = {
    data: InventoryCreateManyVariantInput | InventoryCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantInput = {
    update: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
  }

  export type ProductUpdateWithoutVariantInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutVariantInput = {
    update: XOR<UserUpdateWithoutVariantInput, UserUncheckedUpdateWithoutVariantInput>
    create: XOR<UserCreateWithoutVariantInput, UserUncheckedCreateWithoutVariantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVariantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVariantInput, UserUncheckedUpdateWithoutVariantInput>
  }

  export type UserUpdateWithoutVariantInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VariantOnStoresUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantOnStoresWhereUniqueInput
    update: XOR<VariantOnStoresUpdateWithoutVariantInput, VariantOnStoresUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantOnStoresCreateWithoutVariantInput, VariantOnStoresUncheckedCreateWithoutVariantInput>
  }

  export type VariantOnStoresUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantOnStoresWhereUniqueInput
    data: XOR<VariantOnStoresUpdateWithoutVariantInput, VariantOnStoresUncheckedUpdateWithoutVariantInput>
  }

  export type VariantOnStoresUpdateManyWithWhereWithoutVariantInput = {
    where: VariantOnStoresScalarWhereInput
    data: XOR<VariantOnStoresUpdateManyMutationInput, VariantOnStoresUncheckedUpdateManyWithoutVariantInput>
  }

  export type InventoryUpsertWithWhereUniqueWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutVariantInput, InventoryUncheckedUpdateWithoutVariantInput>
    create: XOR<InventoryCreateWithoutVariantInput, InventoryUncheckedCreateWithoutVariantInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutVariantInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutVariantInput, InventoryUncheckedUpdateWithoutVariantInput>
  }

  export type InventoryUpdateManyWithWhereWithoutVariantInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutVariantInput>
  }

  export type VariantCreateWithoutVariantOnStoresInput = {
    name: string
    sku: string
    cost: number
    image_url: string
    product: ProductCreateNestedOneWithoutVariantInput
    user: UserCreateNestedOneWithoutVariantInput
    Inventory?: InventoryCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutVariantOnStoresInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    user_id: number
    Inventory?: InventoryUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutVariantOnStoresInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutVariantOnStoresInput, VariantUncheckedCreateWithoutVariantOnStoresInput>
  }

  export type StoreCreateWithoutVariantOnStoresInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutVariantOnStoresInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
    user_id: number
  }

  export type StoreCreateOrConnectWithoutVariantOnStoresInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutVariantOnStoresInput, StoreUncheckedCreateWithoutVariantOnStoresInput>
  }

  export type UserCreateWithoutVariantOnStoresInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVariantOnStoresInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVariantOnStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVariantOnStoresInput, UserUncheckedCreateWithoutVariantOnStoresInput>
  }

  export type VariantUpsertWithoutVariantOnStoresInput = {
    update: XOR<VariantUpdateWithoutVariantOnStoresInput, VariantUncheckedUpdateWithoutVariantOnStoresInput>
    create: XOR<VariantCreateWithoutVariantOnStoresInput, VariantUncheckedCreateWithoutVariantOnStoresInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutVariantOnStoresInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutVariantOnStoresInput, VariantUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type VariantUpdateWithoutVariantOnStoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutVariantNestedInput
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutVariantOnStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type StoreUpsertWithoutVariantOnStoresInput = {
    update: XOR<StoreUpdateWithoutVariantOnStoresInput, StoreUncheckedUpdateWithoutVariantOnStoresInput>
    create: XOR<StoreCreateWithoutVariantOnStoresInput, StoreUncheckedCreateWithoutVariantOnStoresInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutVariantOnStoresInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutVariantOnStoresInput, StoreUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type StoreUpdateWithoutVariantOnStoresInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutVariantOnStoresInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutVariantOnStoresInput = {
    update: XOR<UserUpdateWithoutVariantOnStoresInput, UserUncheckedUpdateWithoutVariantOnStoresInput>
    create: XOR<UserCreateWithoutVariantOnStoresInput, UserUncheckedCreateWithoutVariantOnStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVariantOnStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVariantOnStoresInput, UserUncheckedUpdateWithoutVariantOnStoresInput>
  }

  export type UserUpdateWithoutVariantOnStoresInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVariantOnStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWarehouseInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarehouseInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarehouseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryCreateWithoutWarehouseInput = {
    quantity: number
    units: string
    variant: VariantCreateNestedOneWithoutInventoryInput
    user: UserCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutWarehouseInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    user_id: number
  }

  export type InventoryCreateOrConnectWithoutWarehouseInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryCreateManyWarehouseInputEnvelope = {
    data: InventoryCreateManyWarehouseInput | InventoryCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWarehouseInput = {
    update: XOR<UserUpdateWithoutWarehouseInput, UserUncheckedUpdateWithoutWarehouseInput>
    create: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarehouseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarehouseInput, UserUncheckedUpdateWithoutWarehouseInput>
  }

  export type UserUpdateWithoutWarehouseInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutWarehouseInput, InventoryUncheckedUpdateWithoutWarehouseInput>
    create: XOR<InventoryCreateWithoutWarehouseInput, InventoryUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutWarehouseInput, InventoryUncheckedUpdateWithoutWarehouseInput>
  }

  export type InventoryUpdateManyWithWhereWithoutWarehouseInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type VariantCreateWithoutInventoryInput = {
    name: string
    sku: string
    cost: number
    image_url: string
    product: ProductCreateNestedOneWithoutVariantInput
    user: UserCreateNestedOneWithoutVariantInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutVariantInput
  }

  export type VariantUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
    user_id: number
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutVariantInput
  }

  export type VariantCreateOrConnectWithoutInventoryInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
  }

  export type UserCreateWithoutInventoryInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreCreateNestedManyWithoutUserInput
    Customer?: CustomerCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataCreateNestedManyWithoutUserInput
    Category?: CategoryCreateNestedManyWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Variant?: VariantCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string
    address: string
    joined_at?: Date | string
    user_events: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedCreateNestedManyWithoutUserInput
    Customer?: CustomerUncheckedCreateNestedManyWithoutUserInput
    DarazOrder?: DarazOrderUncheckedCreateNestedManyWithoutUserInput
    DarazTransaction?: DarazTransactionUncheckedCreateNestedManyWithoutUserInput
    TemporaryData?: TemporaryDataUncheckedCreateNestedManyWithoutUserInput
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Variant?: VariantUncheckedCreateNestedManyWithoutUserInput
    VariantOnStores?: VariantOnStoresUncheckedCreateNestedManyWithoutUserInput
    Warehouse?: WarehouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type WarehouseCreateWithoutInventoryInput = {
    name: string
    user: UserCreateNestedOneWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    user_id: number
  }

  export type WarehouseCreateOrConnectWithoutInventoryInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
  }

  export type VariantUpsertWithoutInventoryInput = {
    update: XOR<VariantUpdateWithoutInventoryInput, VariantUncheckedUpdateWithoutInventoryInput>
    create: XOR<VariantCreateWithoutInventoryInput, VariantUncheckedCreateWithoutInventoryInput>
    where?: VariantWhereInput
  }

  export type VariantUpdateToOneWithWhereWithoutInventoryInput = {
    where?: VariantWhereInput
    data: XOR<VariantUpdateWithoutInventoryInput, VariantUncheckedUpdateWithoutInventoryInput>
  }

  export type VariantUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutVariantNestedInput
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUpdateManyWithoutUserNestedInput
    Customer?: CustomerUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUpdateManyWithoutUserNestedInput
    Category?: CategoryUpdateManyWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Variant?: VariantUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_events?: JsonNullValueInput | InputJsonValue
    Store?: StoreUncheckedUpdateManyWithoutUserNestedInput
    Customer?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutUserNestedInput
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutUserNestedInput
    TemporaryData?: TemporaryDataUncheckedUpdateManyWithoutUserNestedInput
    Category?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Variant?: VariantUncheckedUpdateManyWithoutUserNestedInput
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutUserNestedInput
    Warehouse?: WarehouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarehouseUpsertWithoutInventoryInput = {
    update: XOR<WarehouseUpdateWithoutInventoryInput, WarehouseUncheckedUpdateWithoutInventoryInput>
    create: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutInventoryInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutInventoryInput, WarehouseUncheckedUpdateWithoutInventoryInput>
  }

  export type WarehouseUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyUserInput = {
    seller_id: string
    name: string
    platform: string
    image_url: string
    connected_at?: Date | string
    store_info: JsonNullValueInput | InputJsonValue
  }

  export type CustomerCreateManyUserInput = {
    id: string
    shopify_id?: string | null
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
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    customer_id: string
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

  export type TemporaryDataCreateManyUserInput = {
    id?: number
    email: string
    createdAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type CategoryCreateManyUserInput = {
    id?: number
    name: string
  }

  export type ProductCreateManyUserInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    category_id: number
    packing_material_cost: number
  }

  export type VariantCreateManyUserInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    product_id: number
  }

  export type VariantOnStoresCreateManyUserInput = {
    id?: number
    variant_id: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
  }

  export type WarehouseCreateManyUserInput = {
    id?: number
    name: string
  }

  export type InventoryCreateManyUserInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    warehouse_id: number
  }

  export type StoreUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    VariantOnStores?: VariantOnStoresUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    seller_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    connected_at?: DateTimeFieldUpdateOperationsInput | Date | string
    store_info?: JsonNullValueInput | InputJsonValue
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    DarazOrder?: DarazOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    DarazOrder?: DarazOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutDarazOrderNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderUncheckedUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderUncheckedUpdateManyWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type DarazTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
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
    daraz_order?: DarazOrderUpdateOneRequiredWithoutDarazTransactionNestedInput
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

  export type CategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutVariantNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutVariantOnStoresNestedInput
    store?: StoreUpdateOneRequiredWithoutVariantOnStoresNestedInput
  }

  export type VariantOnStoresUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    Inventory?: InventoryUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Inventory?: InventoryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutInventoryNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresCreateManyStoreInput = {
    id?: number
    variant_id: number
    status: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type VariantOnStoresUpdateWithoutStoreInput = {
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutVariantOnStoresNestedInput
    user?: UserUpdateOneRequiredWithoutVariantOnStoresNestedInput
  }

  export type VariantOnStoresUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazOrderCreateManyCustomerInput = {
    order_id: string
    seller_id: string
    shop_skus: string
    voucher_platform: string
    voucher: string
    voucher_seller: string
    order_number: string
    created_at: Date | string
    voucher_code: string
    gift_option: string
    shipping_fee_discount_platform: number
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
    shipping_address: JsonNullValueInput | InputJsonValue
    billing_address: JsonNullValueInput | InputJsonValue
    transactions_amount: number
    user_id: number
  }

  export type DarazOrderUpdateWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDarazOrderNestedInput
    DarazTransaction?: DarazTransactionUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderUncheckedUpdateWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    DarazTransaction?: DarazTransactionUncheckedUpdateManyWithoutDaraz_orderNestedInput
  }

  export type DarazOrderUncheckedUpdateManyWithoutCustomerInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    shop_skus?: StringFieldUpdateOperationsInput | string
    voucher_platform?: StringFieldUpdateOperationsInput | string
    voucher?: StringFieldUpdateOperationsInput | string
    voucher_seller?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher_code?: StringFieldUpdateOperationsInput | string
    gift_option?: StringFieldUpdateOperationsInput | string
    shipping_fee_discount_platform?: FloatFieldUpdateOperationsInput | number
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
    shipping_address?: JsonNullValueInput | InputJsonValue
    billing_address?: JsonNullValueInput | InputJsonValue
    transactions_amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DarazTransactionCreateManyDaraz_orderInput = {
    id: string
    seller_id: string
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

  export type DarazTransactionUpdateWithoutDaraz_orderInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
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

  export type DarazTransactionUncheckedUpdateWithoutDaraz_orderInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
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

  export type DarazTransactionUncheckedUpdateManyWithoutDaraz_orderInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
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

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    image_url: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string | null
    user_id: number
    packing_material_cost: number
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    packing_material_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantCreateManyProductInput = {
    id?: number
    name: string
    sku: string
    cost: number
    image_url: string
    user_id: number
  }

  export type VariantUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVariantNestedInput
    VariantOnStores?: VariantOnStoresUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    VariantOnStores?: VariantOnStoresUncheckedUpdateManyWithoutVariantNestedInput
    Inventory?: InventoryUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresCreateManyVariantInput = {
    id?: number
    status: string
    store_id: string
    daraz_shop_sku: string
    price: number
    sale_price: number
    deduction_unit: number
    created_at?: Date | string
    updated_at?: Date | string | null
    platform_details: JsonNullValueInput | InputJsonValue
    sku_id: string
    seller_sku: string
    user_id: number
  }

  export type InventoryCreateManyVariantInput = {
    id?: number
    quantity: number
    units: string
    user_id: number
    warehouse_id: number
  }

  export type VariantOnStoresUpdateWithoutVariantInput = {
    status?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutVariantOnStoresNestedInput
    user?: UserUpdateOneRequiredWithoutVariantOnStoresNestedInput
  }

  export type VariantOnStoresUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type VariantOnStoresUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    store_id?: StringFieldUpdateOperationsInput | string
    daraz_shop_sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    sale_price?: FloatFieldUpdateOperationsInput | number
    deduction_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform_details?: JsonNullValueInput | InputJsonValue
    sku_id?: StringFieldUpdateOperationsInput | string
    seller_sku?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUpdateWithoutVariantInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateManyWarehouseInput = {
    id?: number
    variant_id: number
    quantity: number
    units: string
    user_id: number
  }

  export type InventoryUpdateWithoutWarehouseInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    variant?: VariantUpdateOneRequiredWithoutInventoryNestedInput
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    units?: StringFieldUpdateOperationsInput | string
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
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DarazOrderCountOutputTypeDefaultArgs instead
     */
    export type DarazOrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DarazOrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantCountOutputTypeDefaultArgs instead
     */
    export type VariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseCountOutputTypeDefaultArgs instead
     */
    export type WarehouseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use TemporaryDataDefaultArgs instead
     */
    export type TemporaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemporaryDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantDefaultArgs instead
     */
    export type VariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantOnStoresDefaultArgs instead
     */
    export type VariantOnStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantOnStoresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseDefaultArgs instead
     */
    export type WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDefaultArgs instead
     */
    export type InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDefaultArgs<ExtArgs>

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