
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
 * Model combates
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type combates = $Result.DefaultSelection<Prisma.$combatesPayload>
/**
 * Model entrenadores
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type entrenadores = $Result.DefaultSelection<Prisma.$entrenadoresPayload>
/**
 * Model pokemons
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type pokemons = $Result.DefaultSelection<Prisma.$pokemonsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Combates
 * const combates = await prisma.combates.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Combates
   * const combates = await prisma.combates.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.combates`: Exposes CRUD operations for the **combates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combates
    * const combates = await prisma.combates.findMany()
    * ```
    */
  get combates(): Prisma.combatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenadores`: Exposes CRUD operations for the **entrenadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadores
    * const entrenadores = await prisma.entrenadores.findMany()
    * ```
    */
  get entrenadores(): Prisma.entrenadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemons`: Exposes CRUD operations for the **pokemons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemons
    * const pokemons = await prisma.pokemons.findMany()
    * ```
    */
  get pokemons(): Prisma.pokemonsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    combates: 'combates',
    entrenadores: 'entrenadores',
    pokemons: 'pokemons'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "combates" | "entrenadores" | "pokemons"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      combates: {
        payload: Prisma.$combatesPayload<ExtArgs>
        fields: Prisma.combatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.combatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.combatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          findFirst: {
            args: Prisma.combatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.combatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          findMany: {
            args: Prisma.combatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>[]
          }
          create: {
            args: Prisma.combatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          createMany: {
            args: Prisma.combatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.combatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>[]
          }
          delete: {
            args: Prisma.combatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          update: {
            args: Prisma.combatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          deleteMany: {
            args: Prisma.combatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.combatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.combatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>[]
          }
          upsert: {
            args: Prisma.combatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combatesPayload>
          }
          aggregate: {
            args: Prisma.CombatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombates>
          }
          groupBy: {
            args: Prisma.combatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CombatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.combatesCountArgs<ExtArgs>
            result: $Utils.Optional<CombatesCountAggregateOutputType> | number
          }
        }
      }
      entrenadores: {
        payload: Prisma.$entrenadoresPayload<ExtArgs>
        fields: Prisma.entrenadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entrenadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entrenadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          findFirst: {
            args: Prisma.entrenadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entrenadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          findMany: {
            args: Prisma.entrenadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>[]
          }
          create: {
            args: Prisma.entrenadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          createMany: {
            args: Prisma.entrenadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.entrenadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>[]
          }
          delete: {
            args: Prisma.entrenadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          update: {
            args: Prisma.entrenadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          deleteMany: {
            args: Prisma.entrenadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entrenadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.entrenadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>[]
          }
          upsert: {
            args: Prisma.entrenadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrenadoresPayload>
          }
          aggregate: {
            args: Prisma.EntrenadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenadores>
          }
          groupBy: {
            args: Prisma.entrenadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.entrenadoresCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresCountAggregateOutputType> | number
          }
        }
      }
      pokemons: {
        payload: Prisma.$pokemonsPayload<ExtArgs>
        fields: Prisma.pokemonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pokemonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pokemonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          findFirst: {
            args: Prisma.pokemonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pokemonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          findMany: {
            args: Prisma.pokemonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>[]
          }
          create: {
            args: Prisma.pokemonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          createMany: {
            args: Prisma.pokemonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pokemonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>[]
          }
          delete: {
            args: Prisma.pokemonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          update: {
            args: Prisma.pokemonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          deleteMany: {
            args: Prisma.pokemonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pokemonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pokemonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>[]
          }
          upsert: {
            args: Prisma.pokemonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pokemonsPayload>
          }
          aggregate: {
            args: Prisma.PokemonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemons>
          }
          groupBy: {
            args: Prisma.pokemonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pokemonsCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    combates?: combatesOmit
    entrenadores?: entrenadoresOmit
    pokemons?: pokemonsOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type EntrenadoresCountOutputType
   */

  export type EntrenadoresCountOutputType = {
    combates_combates_entrenador1_idToentrenadores: number
    combates_combates_entrenador2_idToentrenadores: number
  }

  export type EntrenadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combates_combates_entrenador1_idToentrenadores?: boolean | EntrenadoresCountOutputTypeCountCombates_combates_entrenador1_idToentrenadoresArgs
    combates_combates_entrenador2_idToentrenadores?: boolean | EntrenadoresCountOutputTypeCountCombates_combates_entrenador2_idToentrenadoresArgs
  }

  // Custom InputTypes
  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrenadoresCountOutputType
     */
    select?: EntrenadoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeCountCombates_combates_entrenador1_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
  }

  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeCountCombates_combates_entrenador2_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
  }


  /**
   * Count Type PokemonsCountOutputType
   */

  export type PokemonsCountOutputType = {
    combates_combates_ganador_idTopokemons: number
    combates_combates_pokemon1_idTopokemons: number
    combates_combates_pokemon2_idTopokemons: number
    entrenadores: number
    other_pokemons_pokemons_evoluciona_aTopokemons: number
    other_pokemons_pokemons_evoluciona_deTopokemons: number
  }

  export type PokemonsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combates_combates_ganador_idTopokemons?: boolean | PokemonsCountOutputTypeCountCombates_combates_ganador_idTopokemonsArgs
    combates_combates_pokemon1_idTopokemons?: boolean | PokemonsCountOutputTypeCountCombates_combates_pokemon1_idTopokemonsArgs
    combates_combates_pokemon2_idTopokemons?: boolean | PokemonsCountOutputTypeCountCombates_combates_pokemon2_idTopokemonsArgs
    entrenadores?: boolean | PokemonsCountOutputTypeCountEntrenadoresArgs
    other_pokemons_pokemons_evoluciona_aTopokemons?: boolean | PokemonsCountOutputTypeCountOther_pokemons_pokemons_evoluciona_aTopokemonsArgs
    other_pokemons_pokemons_evoluciona_deTopokemons?: boolean | PokemonsCountOutputTypeCountOther_pokemons_pokemons_evoluciona_deTopokemonsArgs
  }

  // Custom InputTypes
  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonsCountOutputType
     */
    select?: PokemonsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountCombates_combates_ganador_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountCombates_combates_pokemon1_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountCombates_combates_pokemon2_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountEntrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrenadoresWhereInput
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountOther_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemonsWhereInput
  }

  /**
   * PokemonsCountOutputType without action
   */
  export type PokemonsCountOutputTypeCountOther_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemonsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model combates
   */

  export type AggregateCombates = {
    _count: CombatesCountAggregateOutputType | null
    _avg: CombatesAvgAggregateOutputType | null
    _sum: CombatesSumAggregateOutputType | null
    _min: CombatesMinAggregateOutputType | null
    _max: CombatesMaxAggregateOutputType | null
  }

  export type CombatesAvgAggregateOutputType = {
    id: number | null
    entrenador1_id: number | null
    pokemon1_id: number | null
    pokemon2_id: number | null
    entrenador2_id: number | null
    ganador_id: number | null
    rondas: number | null
  }

  export type CombatesSumAggregateOutputType = {
    id: number | null
    entrenador1_id: number | null
    pokemon1_id: number | null
    pokemon2_id: number | null
    entrenador2_id: number | null
    ganador_id: number | null
    rondas: number | null
  }

  export type CombatesMinAggregateOutputType = {
    id: number | null
    entrenador1_id: number | null
    pokemon1_id: number | null
    pokemon2_id: number | null
    entrenador2_id: number | null
    lugar: string | null
    evento: string | null
    ganador_id: number | null
    fecha: Date | null
    rondas: number | null
    descripcion: string | null
  }

  export type CombatesMaxAggregateOutputType = {
    id: number | null
    entrenador1_id: number | null
    pokemon1_id: number | null
    pokemon2_id: number | null
    entrenador2_id: number | null
    lugar: string | null
    evento: string | null
    ganador_id: number | null
    fecha: Date | null
    rondas: number | null
    descripcion: string | null
  }

  export type CombatesCountAggregateOutputType = {
    id: number
    entrenador1_id: number
    pokemon1_id: number
    pokemon2_id: number
    entrenador2_id: number
    lugar: number
    evento: number
    ganador_id: number
    fecha: number
    rondas: number
    descripcion: number
    _all: number
  }


  export type CombatesAvgAggregateInputType = {
    id?: true
    entrenador1_id?: true
    pokemon1_id?: true
    pokemon2_id?: true
    entrenador2_id?: true
    ganador_id?: true
    rondas?: true
  }

  export type CombatesSumAggregateInputType = {
    id?: true
    entrenador1_id?: true
    pokemon1_id?: true
    pokemon2_id?: true
    entrenador2_id?: true
    ganador_id?: true
    rondas?: true
  }

  export type CombatesMinAggregateInputType = {
    id?: true
    entrenador1_id?: true
    pokemon1_id?: true
    pokemon2_id?: true
    entrenador2_id?: true
    lugar?: true
    evento?: true
    ganador_id?: true
    fecha?: true
    rondas?: true
    descripcion?: true
  }

  export type CombatesMaxAggregateInputType = {
    id?: true
    entrenador1_id?: true
    pokemon1_id?: true
    pokemon2_id?: true
    entrenador2_id?: true
    lugar?: true
    evento?: true
    ganador_id?: true
    fecha?: true
    rondas?: true
    descripcion?: true
  }

  export type CombatesCountAggregateInputType = {
    id?: true
    entrenador1_id?: true
    pokemon1_id?: true
    pokemon2_id?: true
    entrenador2_id?: true
    lugar?: true
    evento?: true
    ganador_id?: true
    fecha?: true
    rondas?: true
    descripcion?: true
    _all?: true
  }

  export type CombatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which combates to aggregate.
     */
    where?: combatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combates to fetch.
     */
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: combatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned combates
    **/
    _count?: true | CombatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CombatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CombatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CombatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CombatesMaxAggregateInputType
  }

  export type GetCombatesAggregateType<T extends CombatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCombates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombates[P]>
      : GetScalarType<T[P], AggregateCombates[P]>
  }




  export type combatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithAggregationInput | combatesOrderByWithAggregationInput[]
    by: CombatesScalarFieldEnum[] | CombatesScalarFieldEnum
    having?: combatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CombatesCountAggregateInputType | true
    _avg?: CombatesAvgAggregateInputType
    _sum?: CombatesSumAggregateInputType
    _min?: CombatesMinAggregateInputType
    _max?: CombatesMaxAggregateInputType
  }

  export type CombatesGroupByOutputType = {
    id: number
    entrenador1_id: number | null
    pokemon1_id: number | null
    pokemon2_id: number | null
    entrenador2_id: number | null
    lugar: string | null
    evento: string | null
    ganador_id: number | null
    fecha: Date | null
    rondas: number | null
    descripcion: string | null
    _count: CombatesCountAggregateOutputType | null
    _avg: CombatesAvgAggregateOutputType | null
    _sum: CombatesSumAggregateOutputType | null
    _min: CombatesMinAggregateOutputType | null
    _max: CombatesMaxAggregateOutputType | null
  }

  type GetCombatesGroupByPayload<T extends combatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CombatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CombatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CombatesGroupByOutputType[P]>
            : GetScalarType<T[P], CombatesGroupByOutputType[P]>
        }
      >
    >


  export type combatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenador1_id?: boolean
    pokemon1_id?: boolean
    pokemon2_id?: boolean
    entrenador2_id?: boolean
    lugar?: boolean
    evento?: boolean
    ganador_id?: boolean
    fecha?: boolean
    rondas?: boolean
    descripcion?: boolean
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["combates"]>

  export type combatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenador1_id?: boolean
    pokemon1_id?: boolean
    pokemon2_id?: boolean
    entrenador2_id?: boolean
    lugar?: boolean
    evento?: boolean
    ganador_id?: boolean
    fecha?: boolean
    rondas?: boolean
    descripcion?: boolean
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["combates"]>

  export type combatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenador1_id?: boolean
    pokemon1_id?: boolean
    pokemon2_id?: boolean
    entrenador2_id?: boolean
    lugar?: boolean
    evento?: boolean
    ganador_id?: boolean
    fecha?: boolean
    rondas?: boolean
    descripcion?: boolean
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["combates"]>

  export type combatesSelectScalar = {
    id?: boolean
    entrenador1_id?: boolean
    pokemon1_id?: boolean
    pokemon2_id?: boolean
    entrenador2_id?: boolean
    lugar?: boolean
    evento?: boolean
    ganador_id?: boolean
    fecha?: boolean
    rondas?: boolean
    descripcion?: boolean
  }

  export type combatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entrenador1_id" | "pokemon1_id" | "pokemon2_id" | "entrenador2_id" | "lugar" | "evento" | "ganador_id" | "fecha" | "rondas" | "descripcion", ExtArgs["result"]["combates"]>
  export type combatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }
  export type combatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }
  export type combatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenadores_combates_entrenador1_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    entrenadores_combates_entrenador2_idToentrenadores?: boolean | combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons_combates_ganador_idTopokemons?: boolean | combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon1_idTopokemons?: boolean | combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    pokemons_combates_pokemon2_idTopokemons?: boolean | combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>
  }

  export type $combatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "combates"
    objects: {
      entrenadores_combates_entrenador1_idToentrenadores: Prisma.$entrenadoresPayload<ExtArgs> | null
      entrenadores_combates_entrenador2_idToentrenadores: Prisma.$entrenadoresPayload<ExtArgs> | null
      pokemons_combates_ganador_idTopokemons: Prisma.$pokemonsPayload<ExtArgs> | null
      pokemons_combates_pokemon1_idTopokemons: Prisma.$pokemonsPayload<ExtArgs> | null
      pokemons_combates_pokemon2_idTopokemons: Prisma.$pokemonsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entrenador1_id: number | null
      pokemon1_id: number | null
      pokemon2_id: number | null
      entrenador2_id: number | null
      lugar: string | null
      evento: string | null
      ganador_id: number | null
      fecha: Date | null
      rondas: number | null
      descripcion: string | null
    }, ExtArgs["result"]["combates"]>
    composites: {}
  }

  type combatesGetPayload<S extends boolean | null | undefined | combatesDefaultArgs> = $Result.GetResult<Prisma.$combatesPayload, S>

  type combatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<combatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CombatesCountAggregateInputType | true
    }

  export interface combatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['combates'], meta: { name: 'combates' } }
    /**
     * Find zero or one Combates that matches the filter.
     * @param {combatesFindUniqueArgs} args - Arguments to find a Combates
     * @example
     * // Get one Combates
     * const combates = await prisma.combates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends combatesFindUniqueArgs>(args: SelectSubset<T, combatesFindUniqueArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {combatesFindUniqueOrThrowArgs} args - Arguments to find a Combates
     * @example
     * // Get one Combates
     * const combates = await prisma.combates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends combatesFindUniqueOrThrowArgs>(args: SelectSubset<T, combatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesFindFirstArgs} args - Arguments to find a Combates
     * @example
     * // Get one Combates
     * const combates = await prisma.combates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends combatesFindFirstArgs>(args?: SelectSubset<T, combatesFindFirstArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesFindFirstOrThrowArgs} args - Arguments to find a Combates
     * @example
     * // Get one Combates
     * const combates = await prisma.combates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends combatesFindFirstOrThrowArgs>(args?: SelectSubset<T, combatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combates
     * const combates = await prisma.combates.findMany()
     * 
     * // Get first 10 Combates
     * const combates = await prisma.combates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const combatesWithIdOnly = await prisma.combates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends combatesFindManyArgs>(args?: SelectSubset<T, combatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combates.
     * @param {combatesCreateArgs} args - Arguments to create a Combates.
     * @example
     * // Create one Combates
     * const Combates = await prisma.combates.create({
     *   data: {
     *     // ... data to create a Combates
     *   }
     * })
     * 
     */
    create<T extends combatesCreateArgs>(args: SelectSubset<T, combatesCreateArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combates.
     * @param {combatesCreateManyArgs} args - Arguments to create many Combates.
     * @example
     * // Create many Combates
     * const combates = await prisma.combates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends combatesCreateManyArgs>(args?: SelectSubset<T, combatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combates and returns the data saved in the database.
     * @param {combatesCreateManyAndReturnArgs} args - Arguments to create many Combates.
     * @example
     * // Create many Combates
     * const combates = await prisma.combates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combates and only return the `id`
     * const combatesWithIdOnly = await prisma.combates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends combatesCreateManyAndReturnArgs>(args?: SelectSubset<T, combatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combates.
     * @param {combatesDeleteArgs} args - Arguments to delete one Combates.
     * @example
     * // Delete one Combates
     * const Combates = await prisma.combates.delete({
     *   where: {
     *     // ... filter to delete one Combates
     *   }
     * })
     * 
     */
    delete<T extends combatesDeleteArgs>(args: SelectSubset<T, combatesDeleteArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combates.
     * @param {combatesUpdateArgs} args - Arguments to update one Combates.
     * @example
     * // Update one Combates
     * const combates = await prisma.combates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends combatesUpdateArgs>(args: SelectSubset<T, combatesUpdateArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combates.
     * @param {combatesDeleteManyArgs} args - Arguments to filter Combates to delete.
     * @example
     * // Delete a few Combates
     * const { count } = await prisma.combates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends combatesDeleteManyArgs>(args?: SelectSubset<T, combatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combates
     * const combates = await prisma.combates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends combatesUpdateManyArgs>(args: SelectSubset<T, combatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combates and returns the data updated in the database.
     * @param {combatesUpdateManyAndReturnArgs} args - Arguments to update many Combates.
     * @example
     * // Update many Combates
     * const combates = await prisma.combates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combates and only return the `id`
     * const combatesWithIdOnly = await prisma.combates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends combatesUpdateManyAndReturnArgs>(args: SelectSubset<T, combatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combates.
     * @param {combatesUpsertArgs} args - Arguments to update or create a Combates.
     * @example
     * // Update or create a Combates
     * const combates = await prisma.combates.upsert({
     *   create: {
     *     // ... data to create a Combates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combates we want to update
     *   }
     * })
     */
    upsert<T extends combatesUpsertArgs>(args: SelectSubset<T, combatesUpsertArgs<ExtArgs>>): Prisma__combatesClient<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesCountArgs} args - Arguments to filter Combates to count.
     * @example
     * // Count the number of Combates
     * const count = await prisma.combates.count({
     *   where: {
     *     // ... the filter for the Combates we want to count
     *   }
     * })
    **/
    count<T extends combatesCountArgs>(
      args?: Subset<T, combatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CombatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CombatesAggregateArgs>(args: Subset<T, CombatesAggregateArgs>): Prisma.PrismaPromise<GetCombatesAggregateType<T>>

    /**
     * Group by Combates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combatesGroupByArgs} args - Group by arguments.
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
      T extends combatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: combatesGroupByArgs['orderBy'] }
        : { orderBy?: combatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, combatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the combates model
   */
  readonly fields: combatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for combates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__combatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entrenadores_combates_entrenador1_idToentrenadores<T extends combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entrenadores_combates_entrenador2_idToentrenadores<T extends combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pokemons_combates_ganador_idTopokemons<T extends combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pokemons_combates_pokemon1_idTopokemons<T extends combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pokemons_combates_pokemon2_idTopokemons<T extends combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the combates model
   */
  interface combatesFieldRefs {
    readonly id: FieldRef<"combates", 'Int'>
    readonly entrenador1_id: FieldRef<"combates", 'Int'>
    readonly pokemon1_id: FieldRef<"combates", 'Int'>
    readonly pokemon2_id: FieldRef<"combates", 'Int'>
    readonly entrenador2_id: FieldRef<"combates", 'Int'>
    readonly lugar: FieldRef<"combates", 'String'>
    readonly evento: FieldRef<"combates", 'String'>
    readonly ganador_id: FieldRef<"combates", 'Int'>
    readonly fecha: FieldRef<"combates", 'DateTime'>
    readonly rondas: FieldRef<"combates", 'Int'>
    readonly descripcion: FieldRef<"combates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * combates findUnique
   */
  export type combatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter, which combates to fetch.
     */
    where: combatesWhereUniqueInput
  }

  /**
   * combates findUniqueOrThrow
   */
  export type combatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter, which combates to fetch.
     */
    where: combatesWhereUniqueInput
  }

  /**
   * combates findFirst
   */
  export type combatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter, which combates to fetch.
     */
    where?: combatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combates to fetch.
     */
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for combates.
     */
    cursor?: combatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of combates.
     */
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * combates findFirstOrThrow
   */
  export type combatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter, which combates to fetch.
     */
    where?: combatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combates to fetch.
     */
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for combates.
     */
    cursor?: combatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of combates.
     */
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * combates findMany
   */
  export type combatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter, which combates to fetch.
     */
    where?: combatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combates to fetch.
     */
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing combates.
     */
    cursor?: combatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combates.
     */
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * combates create
   */
  export type combatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * The data needed to create a combates.
     */
    data?: XOR<combatesCreateInput, combatesUncheckedCreateInput>
  }

  /**
   * combates createMany
   */
  export type combatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many combates.
     */
    data: combatesCreateManyInput | combatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * combates createManyAndReturn
   */
  export type combatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * The data used to create many combates.
     */
    data: combatesCreateManyInput | combatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * combates update
   */
  export type combatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * The data needed to update a combates.
     */
    data: XOR<combatesUpdateInput, combatesUncheckedUpdateInput>
    /**
     * Choose, which combates to update.
     */
    where: combatesWhereUniqueInput
  }

  /**
   * combates updateMany
   */
  export type combatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update combates.
     */
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyInput>
    /**
     * Filter which combates to update
     */
    where?: combatesWhereInput
    /**
     * Limit how many combates to update.
     */
    limit?: number
  }

  /**
   * combates updateManyAndReturn
   */
  export type combatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * The data used to update combates.
     */
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyInput>
    /**
     * Filter which combates to update
     */
    where?: combatesWhereInput
    /**
     * Limit how many combates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * combates upsert
   */
  export type combatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * The filter to search for the combates to update in case it exists.
     */
    where: combatesWhereUniqueInput
    /**
     * In case the combates found by the `where` argument doesn't exist, create a new combates with this data.
     */
    create: XOR<combatesCreateInput, combatesUncheckedCreateInput>
    /**
     * In case the combates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<combatesUpdateInput, combatesUncheckedUpdateInput>
  }

  /**
   * combates delete
   */
  export type combatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    /**
     * Filter which combates to delete.
     */
    where: combatesWhereUniqueInput
  }

  /**
   * combates deleteMany
   */
  export type combatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which combates to delete
     */
    where?: combatesWhereInput
    /**
     * Limit how many combates to delete.
     */
    limit?: number
  }

  /**
   * combates.entrenadores_combates_entrenador1_idToentrenadores
   */
  export type combates$entrenadores_combates_entrenador1_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    where?: entrenadoresWhereInput
  }

  /**
   * combates.entrenadores_combates_entrenador2_idToentrenadores
   */
  export type combates$entrenadores_combates_entrenador2_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    where?: entrenadoresWhereInput
  }

  /**
   * combates.pokemons_combates_ganador_idTopokemons
   */
  export type combates$pokemons_combates_ganador_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * combates.pokemons_combates_pokemon1_idTopokemons
   */
  export type combates$pokemons_combates_pokemon1_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * combates.pokemons_combates_pokemon2_idTopokemons
   */
  export type combates$pokemons_combates_pokemon2_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * combates without action
   */
  export type combatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
  }


  /**
   * Model entrenadores
   */

  export type AggregateEntrenadores = {
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  export type EntrenadoresAvgAggregateOutputType = {
    id: number | null
    pokemon_default: number | null
    edad: number | null
    experiencia: number | null
  }

  export type EntrenadoresSumAggregateOutputType = {
    id: number | null
    pokemon_default: number | null
    edad: number | null
    experiencia: number | null
  }

  export type EntrenadoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    origen: string | null
    escuela: string | null
    medallas: string | null
    pokemon_default: number | null
    edad: number | null
    experiencia: number | null
  }

  export type EntrenadoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    origen: string | null
    escuela: string | null
    medallas: string | null
    pokemon_default: number | null
    edad: number | null
    experiencia: number | null
  }

  export type EntrenadoresCountAggregateOutputType = {
    id: number
    nombre: number
    origen: number
    escuela: number
    medallas: number
    pokemon_default: number
    edad: number
    experiencia: number
    _all: number
  }


  export type EntrenadoresAvgAggregateInputType = {
    id?: true
    pokemon_default?: true
    edad?: true
    experiencia?: true
  }

  export type EntrenadoresSumAggregateInputType = {
    id?: true
    pokemon_default?: true
    edad?: true
    experiencia?: true
  }

  export type EntrenadoresMinAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    escuela?: true
    medallas?: true
    pokemon_default?: true
    edad?: true
    experiencia?: true
  }

  export type EntrenadoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    escuela?: true
    medallas?: true
    pokemon_default?: true
    edad?: true
    experiencia?: true
  }

  export type EntrenadoresCountAggregateInputType = {
    id?: true
    nombre?: true
    origen?: true
    escuela?: true
    medallas?: true
    pokemon_default?: true
    edad?: true
    experiencia?: true
    _all?: true
  }

  export type EntrenadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrenadores to aggregate.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entrenadores
    **/
    _count?: true | EntrenadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type GetEntrenadoresAggregateType<T extends EntrenadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenadores[P]>
      : GetScalarType<T[P], AggregateEntrenadores[P]>
  }




  export type entrenadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrenadoresWhereInput
    orderBy?: entrenadoresOrderByWithAggregationInput | entrenadoresOrderByWithAggregationInput[]
    by: EntrenadoresScalarFieldEnum[] | EntrenadoresScalarFieldEnum
    having?: entrenadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadoresCountAggregateInputType | true
    _avg?: EntrenadoresAvgAggregateInputType
    _sum?: EntrenadoresSumAggregateInputType
    _min?: EntrenadoresMinAggregateInputType
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type EntrenadoresGroupByOutputType = {
    id: number
    nombre: string
    origen: string | null
    escuela: string | null
    medallas: string | null
    pokemon_default: number | null
    edad: number | null
    experiencia: number | null
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  type GetEntrenadoresGroupByPayload<T extends entrenadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
        }
      >
    >


  export type entrenadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    origen?: boolean
    escuela?: boolean
    medallas?: boolean
    pokemon_default?: boolean
    edad?: boolean
    experiencia?: boolean
    combates_combates_entrenador1_idToentrenadores?: boolean | entrenadores$combates_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    combates_combates_entrenador2_idToentrenadores?: boolean | entrenadores$combates_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
    _count?: boolean | EntrenadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrenadores"]>

  export type entrenadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    origen?: boolean
    escuela?: boolean
    medallas?: boolean
    pokemon_default?: boolean
    edad?: boolean
    experiencia?: boolean
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["entrenadores"]>

  export type entrenadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    origen?: boolean
    escuela?: boolean
    medallas?: boolean
    pokemon_default?: boolean
    edad?: boolean
    experiencia?: boolean
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["entrenadores"]>

  export type entrenadoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    origen?: boolean
    escuela?: boolean
    medallas?: boolean
    pokemon_default?: boolean
    edad?: boolean
    experiencia?: boolean
  }

  export type entrenadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "origen" | "escuela" | "medallas" | "pokemon_default" | "edad" | "experiencia", ExtArgs["result"]["entrenadores"]>
  export type entrenadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combates_combates_entrenador1_idToentrenadores?: boolean | entrenadores$combates_combates_entrenador1_idToentrenadoresArgs<ExtArgs>
    combates_combates_entrenador2_idToentrenadores?: boolean | entrenadores$combates_combates_entrenador2_idToentrenadoresArgs<ExtArgs>
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
    _count?: boolean | EntrenadoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type entrenadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
  }
  export type entrenadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons?: boolean | entrenadores$pokemonsArgs<ExtArgs>
  }

  export type $entrenadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entrenadores"
    objects: {
      combates_combates_entrenador1_idToentrenadores: Prisma.$combatesPayload<ExtArgs>[]
      combates_combates_entrenador2_idToentrenadores: Prisma.$combatesPayload<ExtArgs>[]
      pokemons: Prisma.$pokemonsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      origen: string | null
      escuela: string | null
      medallas: string | null
      pokemon_default: number | null
      edad: number | null
      experiencia: number | null
    }, ExtArgs["result"]["entrenadores"]>
    composites: {}
  }

  type entrenadoresGetPayload<S extends boolean | null | undefined | entrenadoresDefaultArgs> = $Result.GetResult<Prisma.$entrenadoresPayload, S>

  type entrenadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entrenadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrenadoresCountAggregateInputType | true
    }

  export interface entrenadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entrenadores'], meta: { name: 'entrenadores' } }
    /**
     * Find zero or one Entrenadores that matches the filter.
     * @param {entrenadoresFindUniqueArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entrenadoresFindUniqueArgs>(args: SelectSubset<T, entrenadoresFindUniqueArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entrenadoresFindUniqueOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entrenadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, entrenadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindFirstArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entrenadoresFindFirstArgs>(args?: SelectSubset<T, entrenadoresFindFirstArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindFirstOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entrenadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, entrenadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany()
     * 
     * // Get first 10 Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrenadoresWithIdOnly = await prisma.entrenadores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entrenadoresFindManyArgs>(args?: SelectSubset<T, entrenadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenadores.
     * @param {entrenadoresCreateArgs} args - Arguments to create a Entrenadores.
     * @example
     * // Create one Entrenadores
     * const Entrenadores = await prisma.entrenadores.create({
     *   data: {
     *     // ... data to create a Entrenadores
     *   }
     * })
     * 
     */
    create<T extends entrenadoresCreateArgs>(args: SelectSubset<T, entrenadoresCreateArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadores.
     * @param {entrenadoresCreateManyArgs} args - Arguments to create many Entrenadores.
     * @example
     * // Create many Entrenadores
     * const entrenadores = await prisma.entrenadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entrenadoresCreateManyArgs>(args?: SelectSubset<T, entrenadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entrenadores and returns the data saved in the database.
     * @param {entrenadoresCreateManyAndReturnArgs} args - Arguments to create many Entrenadores.
     * @example
     * // Create many Entrenadores
     * const entrenadores = await prisma.entrenadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entrenadores and only return the `id`
     * const entrenadoresWithIdOnly = await prisma.entrenadores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends entrenadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, entrenadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrenadores.
     * @param {entrenadoresDeleteArgs} args - Arguments to delete one Entrenadores.
     * @example
     * // Delete one Entrenadores
     * const Entrenadores = await prisma.entrenadores.delete({
     *   where: {
     *     // ... filter to delete one Entrenadores
     *   }
     * })
     * 
     */
    delete<T extends entrenadoresDeleteArgs>(args: SelectSubset<T, entrenadoresDeleteArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenadores.
     * @param {entrenadoresUpdateArgs} args - Arguments to update one Entrenadores.
     * @example
     * // Update one Entrenadores
     * const entrenadores = await prisma.entrenadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entrenadoresUpdateArgs>(args: SelectSubset<T, entrenadoresUpdateArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadores.
     * @param {entrenadoresDeleteManyArgs} args - Arguments to filter Entrenadores to delete.
     * @example
     * // Delete a few Entrenadores
     * const { count } = await prisma.entrenadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entrenadoresDeleteManyArgs>(args?: SelectSubset<T, entrenadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadores
     * const entrenadores = await prisma.entrenadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entrenadoresUpdateManyArgs>(args: SelectSubset<T, entrenadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadores and returns the data updated in the database.
     * @param {entrenadoresUpdateManyAndReturnArgs} args - Arguments to update many Entrenadores.
     * @example
     * // Update many Entrenadores
     * const entrenadores = await prisma.entrenadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entrenadores and only return the `id`
     * const entrenadoresWithIdOnly = await prisma.entrenadores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends entrenadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, entrenadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrenadores.
     * @param {entrenadoresUpsertArgs} args - Arguments to update or create a Entrenadores.
     * @example
     * // Update or create a Entrenadores
     * const entrenadores = await prisma.entrenadores.upsert({
     *   create: {
     *     // ... data to create a Entrenadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenadores we want to update
     *   }
     * })
     */
    upsert<T extends entrenadoresUpsertArgs>(args: SelectSubset<T, entrenadoresUpsertArgs<ExtArgs>>): Prisma__entrenadoresClient<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresCountArgs} args - Arguments to filter Entrenadores to count.
     * @example
     * // Count the number of Entrenadores
     * const count = await prisma.entrenadores.count({
     *   where: {
     *     // ... the filter for the Entrenadores we want to count
     *   }
     * })
    **/
    count<T extends entrenadoresCountArgs>(
      args?: Subset<T, entrenadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrenadoresAggregateArgs>(args: Subset<T, EntrenadoresAggregateArgs>): Prisma.PrismaPromise<GetEntrenadoresAggregateType<T>>

    /**
     * Group by Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrenadoresGroupByArgs} args - Group by arguments.
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
      T extends entrenadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entrenadoresGroupByArgs['orderBy'] }
        : { orderBy?: entrenadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, entrenadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entrenadores model
   */
  readonly fields: entrenadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entrenadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entrenadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combates_combates_entrenador1_idToentrenadores<T extends entrenadores$combates_combates_entrenador1_idToentrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, entrenadores$combates_combates_entrenador1_idToentrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    combates_combates_entrenador2_idToentrenadores<T extends entrenadores$combates_combates_entrenador2_idToentrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, entrenadores$combates_combates_entrenador2_idToentrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokemons<T extends entrenadores$pokemonsArgs<ExtArgs> = {}>(args?: Subset<T, entrenadores$pokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entrenadores model
   */
  interface entrenadoresFieldRefs {
    readonly id: FieldRef<"entrenadores", 'Int'>
    readonly nombre: FieldRef<"entrenadores", 'String'>
    readonly origen: FieldRef<"entrenadores", 'String'>
    readonly escuela: FieldRef<"entrenadores", 'String'>
    readonly medallas: FieldRef<"entrenadores", 'String'>
    readonly pokemon_default: FieldRef<"entrenadores", 'Int'>
    readonly edad: FieldRef<"entrenadores", 'Int'>
    readonly experiencia: FieldRef<"entrenadores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * entrenadores findUnique
   */
  export type entrenadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores findUniqueOrThrow
   */
  export type entrenadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores findFirst
   */
  export type entrenadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores findFirstOrThrow
   */
  export type entrenadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores findMany
   */
  export type entrenadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which entrenadores to fetch.
     */
    where?: entrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrenadores to fetch.
     */
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entrenadores.
     */
    cursor?: entrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrenadores.
     */
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * entrenadores create
   */
  export type entrenadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a entrenadores.
     */
    data: XOR<entrenadoresCreateInput, entrenadoresUncheckedCreateInput>
  }

  /**
   * entrenadores createMany
   */
  export type entrenadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entrenadores.
     */
    data: entrenadoresCreateManyInput | entrenadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrenadores createManyAndReturn
   */
  export type entrenadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * The data used to create many entrenadores.
     */
    data: entrenadoresCreateManyInput | entrenadoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * entrenadores update
   */
  export type entrenadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a entrenadores.
     */
    data: XOR<entrenadoresUpdateInput, entrenadoresUncheckedUpdateInput>
    /**
     * Choose, which entrenadores to update.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores updateMany
   */
  export type entrenadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entrenadores.
     */
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyInput>
    /**
     * Filter which entrenadores to update
     */
    where?: entrenadoresWhereInput
    /**
     * Limit how many entrenadores to update.
     */
    limit?: number
  }

  /**
   * entrenadores updateManyAndReturn
   */
  export type entrenadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * The data used to update entrenadores.
     */
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyInput>
    /**
     * Filter which entrenadores to update
     */
    where?: entrenadoresWhereInput
    /**
     * Limit how many entrenadores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * entrenadores upsert
   */
  export type entrenadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the entrenadores to update in case it exists.
     */
    where: entrenadoresWhereUniqueInput
    /**
     * In case the entrenadores found by the `where` argument doesn't exist, create a new entrenadores with this data.
     */
    create: XOR<entrenadoresCreateInput, entrenadoresUncheckedCreateInput>
    /**
     * In case the entrenadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entrenadoresUpdateInput, entrenadoresUncheckedUpdateInput>
  }

  /**
   * entrenadores delete
   */
  export type entrenadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    /**
     * Filter which entrenadores to delete.
     */
    where: entrenadoresWhereUniqueInput
  }

  /**
   * entrenadores deleteMany
   */
  export type entrenadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrenadores to delete
     */
    where?: entrenadoresWhereInput
    /**
     * Limit how many entrenadores to delete.
     */
    limit?: number
  }

  /**
   * entrenadores.combates_combates_entrenador1_idToentrenadores
   */
  export type entrenadores$combates_combates_entrenador1_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    cursor?: combatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * entrenadores.combates_combates_entrenador2_idToentrenadores
   */
  export type entrenadores$combates_combates_entrenador2_idToentrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    cursor?: combatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * entrenadores.pokemons
   */
  export type entrenadores$pokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * entrenadores without action
   */
  export type entrenadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
  }


  /**
   * Model pokemons
   */

  export type AggregatePokemons = {
    _count: PokemonsCountAggregateOutputType | null
    _avg: PokemonsAvgAggregateOutputType | null
    _sum: PokemonsSumAggregateOutputType | null
    _min: PokemonsMinAggregateOutputType | null
    _max: PokemonsMaxAggregateOutputType | null
  }

  export type PokemonsAvgAggregateOutputType = {
    id: number | null
    nivel_poder: number | null
    altura: number | null
    peso: number | null
    evoluciona_de: number | null
    evoluciona_a: number | null
  }

  export type PokemonsSumAggregateOutputType = {
    id: number | null
    nivel_poder: number | null
    altura: number | null
    peso: number | null
    evoluciona_de: number | null
    evoluciona_a: number | null
  }

  export type PokemonsMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    habilidades: string | null
    nivel_poder: number | null
    imagen: string | null
    altura: number | null
    peso: number | null
    descripcion: string | null
    evoluciona_de: number | null
    evoluciona_a: number | null
  }

  export type PokemonsMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    habilidades: string | null
    nivel_poder: number | null
    imagen: string | null
    altura: number | null
    peso: number | null
    descripcion: string | null
    evoluciona_de: number | null
    evoluciona_a: number | null
  }

  export type PokemonsCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    habilidades: number
    nivel_poder: number
    imagen: number
    altura: number
    peso: number
    descripcion: number
    evoluciona_de: number
    evoluciona_a: number
    _all: number
  }


  export type PokemonsAvgAggregateInputType = {
    id?: true
    nivel_poder?: true
    altura?: true
    peso?: true
    evoluciona_de?: true
    evoluciona_a?: true
  }

  export type PokemonsSumAggregateInputType = {
    id?: true
    nivel_poder?: true
    altura?: true
    peso?: true
    evoluciona_de?: true
    evoluciona_a?: true
  }

  export type PokemonsMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    habilidades?: true
    nivel_poder?: true
    imagen?: true
    altura?: true
    peso?: true
    descripcion?: true
    evoluciona_de?: true
    evoluciona_a?: true
  }

  export type PokemonsMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    habilidades?: true
    nivel_poder?: true
    imagen?: true
    altura?: true
    peso?: true
    descripcion?: true
    evoluciona_de?: true
    evoluciona_a?: true
  }

  export type PokemonsCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    habilidades?: true
    nivel_poder?: true
    imagen?: true
    altura?: true
    peso?: true
    descripcion?: true
    evoluciona_de?: true
    evoluciona_a?: true
    _all?: true
  }

  export type PokemonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemons to aggregate.
     */
    where?: pokemonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemons to fetch.
     */
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pokemonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pokemons
    **/
    _count?: true | PokemonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonsMaxAggregateInputType
  }

  export type GetPokemonsAggregateType<T extends PokemonsAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemons[P]>
      : GetScalarType<T[P], AggregatePokemons[P]>
  }




  export type pokemonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pokemonsWhereInput
    orderBy?: pokemonsOrderByWithAggregationInput | pokemonsOrderByWithAggregationInput[]
    by: PokemonsScalarFieldEnum[] | PokemonsScalarFieldEnum
    having?: pokemonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonsCountAggregateInputType | true
    _avg?: PokemonsAvgAggregateInputType
    _sum?: PokemonsSumAggregateInputType
    _min?: PokemonsMinAggregateInputType
    _max?: PokemonsMaxAggregateInputType
  }

  export type PokemonsGroupByOutputType = {
    id: number
    nombre: string
    tipo: string
    habilidades: string | null
    nivel_poder: number | null
    imagen: string | null
    altura: number | null
    peso: number | null
    descripcion: string | null
    evoluciona_de: number | null
    evoluciona_a: number | null
    _count: PokemonsCountAggregateOutputType | null
    _avg: PokemonsAvgAggregateOutputType | null
    _sum: PokemonsSumAggregateOutputType | null
    _min: PokemonsMinAggregateOutputType | null
    _max: PokemonsMaxAggregateOutputType | null
  }

  type GetPokemonsGroupByPayload<T extends pokemonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonsGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonsGroupByOutputType[P]>
        }
      >
    >


  export type pokemonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    habilidades?: boolean
    nivel_poder?: boolean
    imagen?: boolean
    altura?: boolean
    peso?: boolean
    descripcion?: boolean
    evoluciona_de?: boolean
    evoluciona_a?: boolean
    combates_combates_ganador_idTopokemons?: boolean | pokemons$combates_combates_ganador_idTopokemonsArgs<ExtArgs>
    combates_combates_pokemon1_idTopokemons?: boolean | pokemons$combates_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    combates_combates_pokemon2_idTopokemons?: boolean | pokemons$combates_combates_pokemon2_idTopokemonsArgs<ExtArgs>
    entrenadores?: boolean | pokemons$entrenadoresArgs<ExtArgs>
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    other_pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$other_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
    other_pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$other_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
    _count?: boolean | PokemonsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemons"]>

  export type pokemonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    habilidades?: boolean
    nivel_poder?: boolean
    imagen?: boolean
    altura?: boolean
    peso?: boolean
    descripcion?: boolean
    evoluciona_de?: boolean
    evoluciona_a?: boolean
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["pokemons"]>

  export type pokemonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    habilidades?: boolean
    nivel_poder?: boolean
    imagen?: boolean
    altura?: boolean
    peso?: boolean
    descripcion?: boolean
    evoluciona_de?: boolean
    evoluciona_a?: boolean
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
  }, ExtArgs["result"]["pokemons"]>

  export type pokemonsSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    habilidades?: boolean
    nivel_poder?: boolean
    imagen?: boolean
    altura?: boolean
    peso?: boolean
    descripcion?: boolean
    evoluciona_de?: boolean
    evoluciona_a?: boolean
  }

  export type pokemonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "habilidades" | "nivel_poder" | "imagen" | "altura" | "peso" | "descripcion" | "evoluciona_de" | "evoluciona_a", ExtArgs["result"]["pokemons"]>
  export type pokemonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combates_combates_ganador_idTopokemons?: boolean | pokemons$combates_combates_ganador_idTopokemonsArgs<ExtArgs>
    combates_combates_pokemon1_idTopokemons?: boolean | pokemons$combates_combates_pokemon1_idTopokemonsArgs<ExtArgs>
    combates_combates_pokemon2_idTopokemons?: boolean | pokemons$combates_combates_pokemon2_idTopokemonsArgs<ExtArgs>
    entrenadores?: boolean | pokemons$entrenadoresArgs<ExtArgs>
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    other_pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$other_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
    other_pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$other_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
    _count?: boolean | PokemonsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pokemonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
  }
  export type pokemonsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemons_pokemons_evoluciona_aTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>
    pokemons_pokemons_evoluciona_deTopokemons?: boolean | pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>
  }

  export type $pokemonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pokemons"
    objects: {
      combates_combates_ganador_idTopokemons: Prisma.$combatesPayload<ExtArgs>[]
      combates_combates_pokemon1_idTopokemons: Prisma.$combatesPayload<ExtArgs>[]
      combates_combates_pokemon2_idTopokemons: Prisma.$combatesPayload<ExtArgs>[]
      entrenadores: Prisma.$entrenadoresPayload<ExtArgs>[]
      pokemons_pokemons_evoluciona_aTopokemons: Prisma.$pokemonsPayload<ExtArgs> | null
      other_pokemons_pokemons_evoluciona_aTopokemons: Prisma.$pokemonsPayload<ExtArgs>[]
      pokemons_pokemons_evoluciona_deTopokemons: Prisma.$pokemonsPayload<ExtArgs> | null
      other_pokemons_pokemons_evoluciona_deTopokemons: Prisma.$pokemonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo: string
      habilidades: string | null
      nivel_poder: number | null
      imagen: string | null
      altura: number | null
      peso: number | null
      descripcion: string | null
      evoluciona_de: number | null
      evoluciona_a: number | null
    }, ExtArgs["result"]["pokemons"]>
    composites: {}
  }

  type pokemonsGetPayload<S extends boolean | null | undefined | pokemonsDefaultArgs> = $Result.GetResult<Prisma.$pokemonsPayload, S>

  type pokemonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pokemonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonsCountAggregateInputType | true
    }

  export interface pokemonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pokemons'], meta: { name: 'pokemons' } }
    /**
     * Find zero or one Pokemons that matches the filter.
     * @param {pokemonsFindUniqueArgs} args - Arguments to find a Pokemons
     * @example
     * // Get one Pokemons
     * const pokemons = await prisma.pokemons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pokemonsFindUniqueArgs>(args: SelectSubset<T, pokemonsFindUniqueArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pokemonsFindUniqueOrThrowArgs} args - Arguments to find a Pokemons
     * @example
     * // Get one Pokemons
     * const pokemons = await prisma.pokemons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pokemonsFindUniqueOrThrowArgs>(args: SelectSubset<T, pokemonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsFindFirstArgs} args - Arguments to find a Pokemons
     * @example
     * // Get one Pokemons
     * const pokemons = await prisma.pokemons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pokemonsFindFirstArgs>(args?: SelectSubset<T, pokemonsFindFirstArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsFindFirstOrThrowArgs} args - Arguments to find a Pokemons
     * @example
     * // Get one Pokemons
     * const pokemons = await prisma.pokemons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pokemonsFindFirstOrThrowArgs>(args?: SelectSubset<T, pokemonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemons
     * const pokemons = await prisma.pokemons.findMany()
     * 
     * // Get first 10 Pokemons
     * const pokemons = await prisma.pokemons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonsWithIdOnly = await prisma.pokemons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pokemonsFindManyArgs>(args?: SelectSubset<T, pokemonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemons.
     * @param {pokemonsCreateArgs} args - Arguments to create a Pokemons.
     * @example
     * // Create one Pokemons
     * const Pokemons = await prisma.pokemons.create({
     *   data: {
     *     // ... data to create a Pokemons
     *   }
     * })
     * 
     */
    create<T extends pokemonsCreateArgs>(args: SelectSubset<T, pokemonsCreateArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemons.
     * @param {pokemonsCreateManyArgs} args - Arguments to create many Pokemons.
     * @example
     * // Create many Pokemons
     * const pokemons = await prisma.pokemons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pokemonsCreateManyArgs>(args?: SelectSubset<T, pokemonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemons and returns the data saved in the database.
     * @param {pokemonsCreateManyAndReturnArgs} args - Arguments to create many Pokemons.
     * @example
     * // Create many Pokemons
     * const pokemons = await prisma.pokemons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemons and only return the `id`
     * const pokemonsWithIdOnly = await prisma.pokemons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pokemonsCreateManyAndReturnArgs>(args?: SelectSubset<T, pokemonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemons.
     * @param {pokemonsDeleteArgs} args - Arguments to delete one Pokemons.
     * @example
     * // Delete one Pokemons
     * const Pokemons = await prisma.pokemons.delete({
     *   where: {
     *     // ... filter to delete one Pokemons
     *   }
     * })
     * 
     */
    delete<T extends pokemonsDeleteArgs>(args: SelectSubset<T, pokemonsDeleteArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemons.
     * @param {pokemonsUpdateArgs} args - Arguments to update one Pokemons.
     * @example
     * // Update one Pokemons
     * const pokemons = await prisma.pokemons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pokemonsUpdateArgs>(args: SelectSubset<T, pokemonsUpdateArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemons.
     * @param {pokemonsDeleteManyArgs} args - Arguments to filter Pokemons to delete.
     * @example
     * // Delete a few Pokemons
     * const { count } = await prisma.pokemons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pokemonsDeleteManyArgs>(args?: SelectSubset<T, pokemonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemons
     * const pokemons = await prisma.pokemons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pokemonsUpdateManyArgs>(args: SelectSubset<T, pokemonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemons and returns the data updated in the database.
     * @param {pokemonsUpdateManyAndReturnArgs} args - Arguments to update many Pokemons.
     * @example
     * // Update many Pokemons
     * const pokemons = await prisma.pokemons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemons and only return the `id`
     * const pokemonsWithIdOnly = await prisma.pokemons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pokemonsUpdateManyAndReturnArgs>(args: SelectSubset<T, pokemonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemons.
     * @param {pokemonsUpsertArgs} args - Arguments to update or create a Pokemons.
     * @example
     * // Update or create a Pokemons
     * const pokemons = await prisma.pokemons.upsert({
     *   create: {
     *     // ... data to create a Pokemons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemons we want to update
     *   }
     * })
     */
    upsert<T extends pokemonsUpsertArgs>(args: SelectSubset<T, pokemonsUpsertArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsCountArgs} args - Arguments to filter Pokemons to count.
     * @example
     * // Count the number of Pokemons
     * const count = await prisma.pokemons.count({
     *   where: {
     *     // ... the filter for the Pokemons we want to count
     *   }
     * })
    **/
    count<T extends pokemonsCountArgs>(
      args?: Subset<T, pokemonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonsAggregateArgs>(args: Subset<T, PokemonsAggregateArgs>): Prisma.PrismaPromise<GetPokemonsAggregateType<T>>

    /**
     * Group by Pokemons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pokemonsGroupByArgs} args - Group by arguments.
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
      T extends pokemonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pokemonsGroupByArgs['orderBy'] }
        : { orderBy?: pokemonsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pokemonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pokemons model
   */
  readonly fields: pokemonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pokemons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pokemonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combates_combates_ganador_idTopokemons<T extends pokemons$combates_combates_ganador_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$combates_combates_ganador_idTopokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    combates_combates_pokemon1_idTopokemons<T extends pokemons$combates_combates_pokemon1_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$combates_combates_pokemon1_idTopokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    combates_combates_pokemon2_idTopokemons<T extends pokemons$combates_combates_pokemon2_idTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$combates_combates_pokemon2_idTopokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entrenadores<T extends pokemons$entrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$entrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokemons_pokemons_evoluciona_aTopokemons<T extends pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_pokemons_pokemons_evoluciona_aTopokemons<T extends pokemons$other_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$other_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pokemons_pokemons_evoluciona_deTopokemons<T extends pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>>): Prisma__pokemonsClient<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_pokemons_pokemons_evoluciona_deTopokemons<T extends pokemons$other_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs> = {}>(args?: Subset<T, pokemons$other_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pokemonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pokemons model
   */
  interface pokemonsFieldRefs {
    readonly id: FieldRef<"pokemons", 'Int'>
    readonly nombre: FieldRef<"pokemons", 'String'>
    readonly tipo: FieldRef<"pokemons", 'String'>
    readonly habilidades: FieldRef<"pokemons", 'String'>
    readonly nivel_poder: FieldRef<"pokemons", 'Int'>
    readonly imagen: FieldRef<"pokemons", 'String'>
    readonly altura: FieldRef<"pokemons", 'Float'>
    readonly peso: FieldRef<"pokemons", 'Float'>
    readonly descripcion: FieldRef<"pokemons", 'String'>
    readonly evoluciona_de: FieldRef<"pokemons", 'Int'>
    readonly evoluciona_a: FieldRef<"pokemons", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pokemons findUnique
   */
  export type pokemonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter, which pokemons to fetch.
     */
    where: pokemonsWhereUniqueInput
  }

  /**
   * pokemons findUniqueOrThrow
   */
  export type pokemonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter, which pokemons to fetch.
     */
    where: pokemonsWhereUniqueInput
  }

  /**
   * pokemons findFirst
   */
  export type pokemonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter, which pokemons to fetch.
     */
    where?: pokemonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemons to fetch.
     */
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemons.
     */
    cursor?: pokemonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemons.
     */
    distinct?: PokemonsScalarFieldEnum | PokemonsScalarFieldEnum[]
  }

  /**
   * pokemons findFirstOrThrow
   */
  export type pokemonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter, which pokemons to fetch.
     */
    where?: pokemonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemons to fetch.
     */
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pokemons.
     */
    cursor?: pokemonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pokemons.
     */
    distinct?: PokemonsScalarFieldEnum | PokemonsScalarFieldEnum[]
  }

  /**
   * pokemons findMany
   */
  export type pokemonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter, which pokemons to fetch.
     */
    where?: pokemonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pokemons to fetch.
     */
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pokemons.
     */
    cursor?: pokemonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pokemons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pokemons.
     */
    skip?: number
    distinct?: PokemonsScalarFieldEnum | PokemonsScalarFieldEnum[]
  }

  /**
   * pokemons create
   */
  export type pokemonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * The data needed to create a pokemons.
     */
    data: XOR<pokemonsCreateInput, pokemonsUncheckedCreateInput>
  }

  /**
   * pokemons createMany
   */
  export type pokemonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pokemons.
     */
    data: pokemonsCreateManyInput | pokemonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pokemons createManyAndReturn
   */
  export type pokemonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * The data used to create many pokemons.
     */
    data: pokemonsCreateManyInput | pokemonsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pokemons update
   */
  export type pokemonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * The data needed to update a pokemons.
     */
    data: XOR<pokemonsUpdateInput, pokemonsUncheckedUpdateInput>
    /**
     * Choose, which pokemons to update.
     */
    where: pokemonsWhereUniqueInput
  }

  /**
   * pokemons updateMany
   */
  export type pokemonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pokemons.
     */
    data: XOR<pokemonsUpdateManyMutationInput, pokemonsUncheckedUpdateManyInput>
    /**
     * Filter which pokemons to update
     */
    where?: pokemonsWhereInput
    /**
     * Limit how many pokemons to update.
     */
    limit?: number
  }

  /**
   * pokemons updateManyAndReturn
   */
  export type pokemonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * The data used to update pokemons.
     */
    data: XOR<pokemonsUpdateManyMutationInput, pokemonsUncheckedUpdateManyInput>
    /**
     * Filter which pokemons to update
     */
    where?: pokemonsWhereInput
    /**
     * Limit how many pokemons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pokemons upsert
   */
  export type pokemonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * The filter to search for the pokemons to update in case it exists.
     */
    where: pokemonsWhereUniqueInput
    /**
     * In case the pokemons found by the `where` argument doesn't exist, create a new pokemons with this data.
     */
    create: XOR<pokemonsCreateInput, pokemonsUncheckedCreateInput>
    /**
     * In case the pokemons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pokemonsUpdateInput, pokemonsUncheckedUpdateInput>
  }

  /**
   * pokemons delete
   */
  export type pokemonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    /**
     * Filter which pokemons to delete.
     */
    where: pokemonsWhereUniqueInput
  }

  /**
   * pokemons deleteMany
   */
  export type pokemonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pokemons to delete
     */
    where?: pokemonsWhereInput
    /**
     * Limit how many pokemons to delete.
     */
    limit?: number
  }

  /**
   * pokemons.combates_combates_ganador_idTopokemons
   */
  export type pokemons$combates_combates_ganador_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    cursor?: combatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * pokemons.combates_combates_pokemon1_idTopokemons
   */
  export type pokemons$combates_combates_pokemon1_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    cursor?: combatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * pokemons.combates_combates_pokemon2_idTopokemons
   */
  export type pokemons$combates_combates_pokemon2_idTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combates
     */
    select?: combatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combates
     */
    omit?: combatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combatesInclude<ExtArgs> | null
    where?: combatesWhereInput
    orderBy?: combatesOrderByWithRelationInput | combatesOrderByWithRelationInput[]
    cursor?: combatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatesScalarFieldEnum | CombatesScalarFieldEnum[]
  }

  /**
   * pokemons.entrenadores
   */
  export type pokemons$entrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrenadores
     */
    select?: entrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrenadores
     */
    omit?: entrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrenadoresInclude<ExtArgs> | null
    where?: entrenadoresWhereInput
    orderBy?: entrenadoresOrderByWithRelationInput | entrenadoresOrderByWithRelationInput[]
    cursor?: entrenadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * pokemons.pokemons_pokemons_evoluciona_aTopokemons
   */
  export type pokemons$pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * pokemons.other_pokemons_pokemons_evoluciona_aTopokemons
   */
  export type pokemons$other_pokemons_pokemons_evoluciona_aTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    cursor?: pokemonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonsScalarFieldEnum | PokemonsScalarFieldEnum[]
  }

  /**
   * pokemons.pokemons_pokemons_evoluciona_deTopokemons
   */
  export type pokemons$pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
  }

  /**
   * pokemons.other_pokemons_pokemons_evoluciona_deTopokemons
   */
  export type pokemons$other_pokemons_pokemons_evoluciona_deTopokemonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
    where?: pokemonsWhereInput
    orderBy?: pokemonsOrderByWithRelationInput | pokemonsOrderByWithRelationInput[]
    cursor?: pokemonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonsScalarFieldEnum | PokemonsScalarFieldEnum[]
  }

  /**
   * pokemons without action
   */
  export type pokemonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pokemons
     */
    select?: pokemonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pokemons
     */
    omit?: pokemonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pokemonsInclude<ExtArgs> | null
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


  export const CombatesScalarFieldEnum: {
    id: 'id',
    entrenador1_id: 'entrenador1_id',
    pokemon1_id: 'pokemon1_id',
    pokemon2_id: 'pokemon2_id',
    entrenador2_id: 'entrenador2_id',
    lugar: 'lugar',
    evento: 'evento',
    ganador_id: 'ganador_id',
    fecha: 'fecha',
    rondas: 'rondas',
    descripcion: 'descripcion'
  };

  export type CombatesScalarFieldEnum = (typeof CombatesScalarFieldEnum)[keyof typeof CombatesScalarFieldEnum]


  export const EntrenadoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    origen: 'origen',
    escuela: 'escuela',
    medallas: 'medallas',
    pokemon_default: 'pokemon_default',
    edad: 'edad',
    experiencia: 'experiencia'
  };

  export type EntrenadoresScalarFieldEnum = (typeof EntrenadoresScalarFieldEnum)[keyof typeof EntrenadoresScalarFieldEnum]


  export const PokemonsScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    habilidades: 'habilidades',
    nivel_poder: 'nivel_poder',
    imagen: 'imagen',
    altura: 'altura',
    peso: 'peso',
    descripcion: 'descripcion',
    evoluciona_de: 'evoluciona_de',
    evoluciona_a: 'evoluciona_a'
  };

  export type PokemonsScalarFieldEnum = (typeof PokemonsScalarFieldEnum)[keyof typeof PokemonsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  export type combatesWhereInput = {
    AND?: combatesWhereInput | combatesWhereInput[]
    OR?: combatesWhereInput[]
    NOT?: combatesWhereInput | combatesWhereInput[]
    id?: IntFilter<"combates"> | number
    entrenador1_id?: IntNullableFilter<"combates"> | number | null
    pokemon1_id?: IntNullableFilter<"combates"> | number | null
    pokemon2_id?: IntNullableFilter<"combates"> | number | null
    entrenador2_id?: IntNullableFilter<"combates"> | number | null
    lugar?: StringNullableFilter<"combates"> | string | null
    evento?: StringNullableFilter<"combates"> | string | null
    ganador_id?: IntNullableFilter<"combates"> | number | null
    fecha?: DateTimeNullableFilter<"combates"> | Date | string | null
    rondas?: IntNullableFilter<"combates"> | number | null
    descripcion?: StringNullableFilter<"combates"> | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: XOR<EntrenadoresNullableScalarRelationFilter, entrenadoresWhereInput> | null
    entrenadores_combates_entrenador2_idToentrenadores?: XOR<EntrenadoresNullableScalarRelationFilter, entrenadoresWhereInput> | null
    pokemons_combates_ganador_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    pokemons_combates_pokemon1_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    pokemons_combates_pokemon2_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
  }

  export type combatesOrderByWithRelationInput = {
    id?: SortOrder
    entrenador1_id?: SortOrderInput | SortOrder
    pokemon1_id?: SortOrderInput | SortOrder
    pokemon2_id?: SortOrderInput | SortOrder
    entrenador2_id?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    evento?: SortOrderInput | SortOrder
    ganador_id?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    rondas?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresOrderByWithRelationInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresOrderByWithRelationInput
    pokemons_combates_ganador_idTopokemons?: pokemonsOrderByWithRelationInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsOrderByWithRelationInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsOrderByWithRelationInput
  }

  export type combatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: combatesWhereInput | combatesWhereInput[]
    OR?: combatesWhereInput[]
    NOT?: combatesWhereInput | combatesWhereInput[]
    entrenador1_id?: IntNullableFilter<"combates"> | number | null
    pokemon1_id?: IntNullableFilter<"combates"> | number | null
    pokemon2_id?: IntNullableFilter<"combates"> | number | null
    entrenador2_id?: IntNullableFilter<"combates"> | number | null
    lugar?: StringNullableFilter<"combates"> | string | null
    evento?: StringNullableFilter<"combates"> | string | null
    ganador_id?: IntNullableFilter<"combates"> | number | null
    fecha?: DateTimeNullableFilter<"combates"> | Date | string | null
    rondas?: IntNullableFilter<"combates"> | number | null
    descripcion?: StringNullableFilter<"combates"> | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: XOR<EntrenadoresNullableScalarRelationFilter, entrenadoresWhereInput> | null
    entrenadores_combates_entrenador2_idToentrenadores?: XOR<EntrenadoresNullableScalarRelationFilter, entrenadoresWhereInput> | null
    pokemons_combates_ganador_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    pokemons_combates_pokemon1_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    pokemons_combates_pokemon2_idTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
  }, "id">

  export type combatesOrderByWithAggregationInput = {
    id?: SortOrder
    entrenador1_id?: SortOrderInput | SortOrder
    pokemon1_id?: SortOrderInput | SortOrder
    pokemon2_id?: SortOrderInput | SortOrder
    entrenador2_id?: SortOrderInput | SortOrder
    lugar?: SortOrderInput | SortOrder
    evento?: SortOrderInput | SortOrder
    ganador_id?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    rondas?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: combatesCountOrderByAggregateInput
    _avg?: combatesAvgOrderByAggregateInput
    _max?: combatesMaxOrderByAggregateInput
    _min?: combatesMinOrderByAggregateInput
    _sum?: combatesSumOrderByAggregateInput
  }

  export type combatesScalarWhereWithAggregatesInput = {
    AND?: combatesScalarWhereWithAggregatesInput | combatesScalarWhereWithAggregatesInput[]
    OR?: combatesScalarWhereWithAggregatesInput[]
    NOT?: combatesScalarWhereWithAggregatesInput | combatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"combates"> | number
    entrenador1_id?: IntNullableWithAggregatesFilter<"combates"> | number | null
    pokemon1_id?: IntNullableWithAggregatesFilter<"combates"> | number | null
    pokemon2_id?: IntNullableWithAggregatesFilter<"combates"> | number | null
    entrenador2_id?: IntNullableWithAggregatesFilter<"combates"> | number | null
    lugar?: StringNullableWithAggregatesFilter<"combates"> | string | null
    evento?: StringNullableWithAggregatesFilter<"combates"> | string | null
    ganador_id?: IntNullableWithAggregatesFilter<"combates"> | number | null
    fecha?: DateTimeNullableWithAggregatesFilter<"combates"> | Date | string | null
    rondas?: IntNullableWithAggregatesFilter<"combates"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"combates"> | string | null
  }

  export type entrenadoresWhereInput = {
    AND?: entrenadoresWhereInput | entrenadoresWhereInput[]
    OR?: entrenadoresWhereInput[]
    NOT?: entrenadoresWhereInput | entrenadoresWhereInput[]
    id?: IntFilter<"entrenadores"> | number
    nombre?: StringFilter<"entrenadores"> | string
    origen?: StringNullableFilter<"entrenadores"> | string | null
    escuela?: StringNullableFilter<"entrenadores"> | string | null
    medallas?: StringNullableFilter<"entrenadores"> | string | null
    pokemon_default?: IntNullableFilter<"entrenadores"> | number | null
    edad?: IntNullableFilter<"entrenadores"> | number | null
    experiencia?: IntNullableFilter<"entrenadores"> | number | null
    combates_combates_entrenador1_idToentrenadores?: CombatesListRelationFilter
    combates_combates_entrenador2_idToentrenadores?: CombatesListRelationFilter
    pokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
  }

  export type entrenadoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrderInput | SortOrder
    escuela?: SortOrderInput | SortOrder
    medallas?: SortOrderInput | SortOrder
    pokemon_default?: SortOrderInput | SortOrder
    edad?: SortOrderInput | SortOrder
    experiencia?: SortOrderInput | SortOrder
    combates_combates_entrenador1_idToentrenadores?: combatesOrderByRelationAggregateInput
    combates_combates_entrenador2_idToentrenadores?: combatesOrderByRelationAggregateInput
    pokemons?: pokemonsOrderByWithRelationInput
  }

  export type entrenadoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: entrenadoresWhereInput | entrenadoresWhereInput[]
    OR?: entrenadoresWhereInput[]
    NOT?: entrenadoresWhereInput | entrenadoresWhereInput[]
    nombre?: StringFilter<"entrenadores"> | string
    origen?: StringNullableFilter<"entrenadores"> | string | null
    escuela?: StringNullableFilter<"entrenadores"> | string | null
    medallas?: StringNullableFilter<"entrenadores"> | string | null
    pokemon_default?: IntNullableFilter<"entrenadores"> | number | null
    edad?: IntNullableFilter<"entrenadores"> | number | null
    experiencia?: IntNullableFilter<"entrenadores"> | number | null
    combates_combates_entrenador1_idToentrenadores?: CombatesListRelationFilter
    combates_combates_entrenador2_idToentrenadores?: CombatesListRelationFilter
    pokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
  }, "id">

  export type entrenadoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrderInput | SortOrder
    escuela?: SortOrderInput | SortOrder
    medallas?: SortOrderInput | SortOrder
    pokemon_default?: SortOrderInput | SortOrder
    edad?: SortOrderInput | SortOrder
    experiencia?: SortOrderInput | SortOrder
    _count?: entrenadoresCountOrderByAggregateInput
    _avg?: entrenadoresAvgOrderByAggregateInput
    _max?: entrenadoresMaxOrderByAggregateInput
    _min?: entrenadoresMinOrderByAggregateInput
    _sum?: entrenadoresSumOrderByAggregateInput
  }

  export type entrenadoresScalarWhereWithAggregatesInput = {
    AND?: entrenadoresScalarWhereWithAggregatesInput | entrenadoresScalarWhereWithAggregatesInput[]
    OR?: entrenadoresScalarWhereWithAggregatesInput[]
    NOT?: entrenadoresScalarWhereWithAggregatesInput | entrenadoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entrenadores"> | number
    nombre?: StringWithAggregatesFilter<"entrenadores"> | string
    origen?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    escuela?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    medallas?: StringNullableWithAggregatesFilter<"entrenadores"> | string | null
    pokemon_default?: IntNullableWithAggregatesFilter<"entrenadores"> | number | null
    edad?: IntNullableWithAggregatesFilter<"entrenadores"> | number | null
    experiencia?: IntNullableWithAggregatesFilter<"entrenadores"> | number | null
  }

  export type pokemonsWhereInput = {
    AND?: pokemonsWhereInput | pokemonsWhereInput[]
    OR?: pokemonsWhereInput[]
    NOT?: pokemonsWhereInput | pokemonsWhereInput[]
    id?: IntFilter<"pokemons"> | number
    nombre?: StringFilter<"pokemons"> | string
    tipo?: StringFilter<"pokemons"> | string
    habilidades?: StringNullableFilter<"pokemons"> | string | null
    nivel_poder?: IntNullableFilter<"pokemons"> | number | null
    imagen?: StringNullableFilter<"pokemons"> | string | null
    altura?: FloatNullableFilter<"pokemons"> | number | null
    peso?: FloatNullableFilter<"pokemons"> | number | null
    descripcion?: StringNullableFilter<"pokemons"> | string | null
    evoluciona_de?: IntNullableFilter<"pokemons"> | number | null
    evoluciona_a?: IntNullableFilter<"pokemons"> | number | null
    combates_combates_ganador_idTopokemons?: CombatesListRelationFilter
    combates_combates_pokemon1_idTopokemons?: CombatesListRelationFilter
    combates_combates_pokemon2_idTopokemons?: CombatesListRelationFilter
    entrenadores?: EntrenadoresListRelationFilter
    pokemons_pokemons_evoluciona_aTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    other_pokemons_pokemons_evoluciona_aTopokemons?: PokemonsListRelationFilter
    pokemons_pokemons_evoluciona_deTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    other_pokemons_pokemons_evoluciona_deTopokemons?: PokemonsListRelationFilter
  }

  export type pokemonsOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    habilidades?: SortOrderInput | SortOrder
    nivel_poder?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    evoluciona_de?: SortOrderInput | SortOrder
    evoluciona_a?: SortOrderInput | SortOrder
    combates_combates_ganador_idTopokemons?: combatesOrderByRelationAggregateInput
    combates_combates_pokemon1_idTopokemons?: combatesOrderByRelationAggregateInput
    combates_combates_pokemon2_idTopokemons?: combatesOrderByRelationAggregateInput
    entrenadores?: entrenadoresOrderByRelationAggregateInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsOrderByWithRelationInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsOrderByRelationAggregateInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsOrderByWithRelationInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsOrderByRelationAggregateInput
  }

  export type pokemonsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pokemonsWhereInput | pokemonsWhereInput[]
    OR?: pokemonsWhereInput[]
    NOT?: pokemonsWhereInput | pokemonsWhereInput[]
    nombre?: StringFilter<"pokemons"> | string
    tipo?: StringFilter<"pokemons"> | string
    habilidades?: StringNullableFilter<"pokemons"> | string | null
    nivel_poder?: IntNullableFilter<"pokemons"> | number | null
    imagen?: StringNullableFilter<"pokemons"> | string | null
    altura?: FloatNullableFilter<"pokemons"> | number | null
    peso?: FloatNullableFilter<"pokemons"> | number | null
    descripcion?: StringNullableFilter<"pokemons"> | string | null
    evoluciona_de?: IntNullableFilter<"pokemons"> | number | null
    evoluciona_a?: IntNullableFilter<"pokemons"> | number | null
    combates_combates_ganador_idTopokemons?: CombatesListRelationFilter
    combates_combates_pokemon1_idTopokemons?: CombatesListRelationFilter
    combates_combates_pokemon2_idTopokemons?: CombatesListRelationFilter
    entrenadores?: EntrenadoresListRelationFilter
    pokemons_pokemons_evoluciona_aTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    other_pokemons_pokemons_evoluciona_aTopokemons?: PokemonsListRelationFilter
    pokemons_pokemons_evoluciona_deTopokemons?: XOR<PokemonsNullableScalarRelationFilter, pokemonsWhereInput> | null
    other_pokemons_pokemons_evoluciona_deTopokemons?: PokemonsListRelationFilter
  }, "id">

  export type pokemonsOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    habilidades?: SortOrderInput | SortOrder
    nivel_poder?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    evoluciona_de?: SortOrderInput | SortOrder
    evoluciona_a?: SortOrderInput | SortOrder
    _count?: pokemonsCountOrderByAggregateInput
    _avg?: pokemonsAvgOrderByAggregateInput
    _max?: pokemonsMaxOrderByAggregateInput
    _min?: pokemonsMinOrderByAggregateInput
    _sum?: pokemonsSumOrderByAggregateInput
  }

  export type pokemonsScalarWhereWithAggregatesInput = {
    AND?: pokemonsScalarWhereWithAggregatesInput | pokemonsScalarWhereWithAggregatesInput[]
    OR?: pokemonsScalarWhereWithAggregatesInput[]
    NOT?: pokemonsScalarWhereWithAggregatesInput | pokemonsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pokemons"> | number
    nombre?: StringWithAggregatesFilter<"pokemons"> | string
    tipo?: StringWithAggregatesFilter<"pokemons"> | string
    habilidades?: StringNullableWithAggregatesFilter<"pokemons"> | string | null
    nivel_poder?: IntNullableWithAggregatesFilter<"pokemons"> | number | null
    imagen?: StringNullableWithAggregatesFilter<"pokemons"> | string | null
    altura?: FloatNullableWithAggregatesFilter<"pokemons"> | number | null
    peso?: FloatNullableWithAggregatesFilter<"pokemons"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"pokemons"> | string | null
    evoluciona_de?: IntNullableWithAggregatesFilter<"pokemons"> | number | null
    evoluciona_a?: IntNullableWithAggregatesFilter<"pokemons"> | number | null
  }

  export type combatesCreateInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput
    pokemons_combates_ganador_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput
  }

  export type combatesUncheckedCreateInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesUpdateInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput
    pokemons_combates_ganador_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesCreateManyInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesUpdateManyMutationInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresCreateInput = {
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
    combates_combates_entrenador2_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
    pokemons?: pokemonsCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    pokemon_default?: number | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
  }

  export type entrenadoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
    combates_combates_entrenador2_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
    pokemons?: pokemonsUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_default?: NullableIntFieldUpdateOperationsInput | number | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
  }

  export type entrenadoresCreateManyInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    pokemon_default?: number | null
    edad?: number | null
    experiencia?: number | null
  }

  export type entrenadoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type entrenadoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_default?: NullableIntFieldUpdateOperationsInput | number | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pokemonsCreateInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsCreateManyInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
  }

  export type pokemonsUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pokemonsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EntrenadoresNullableScalarRelationFilter = {
    is?: entrenadoresWhereInput | null
    isNot?: entrenadoresWhereInput | null
  }

  export type PokemonsNullableScalarRelationFilter = {
    is?: pokemonsWhereInput | null
    isNot?: pokemonsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type combatesCountOrderByAggregateInput = {
    id?: SortOrder
    entrenador1_id?: SortOrder
    pokemon1_id?: SortOrder
    pokemon2_id?: SortOrder
    entrenador2_id?: SortOrder
    lugar?: SortOrder
    evento?: SortOrder
    ganador_id?: SortOrder
    fecha?: SortOrder
    rondas?: SortOrder
    descripcion?: SortOrder
  }

  export type combatesAvgOrderByAggregateInput = {
    id?: SortOrder
    entrenador1_id?: SortOrder
    pokemon1_id?: SortOrder
    pokemon2_id?: SortOrder
    entrenador2_id?: SortOrder
    ganador_id?: SortOrder
    rondas?: SortOrder
  }

  export type combatesMaxOrderByAggregateInput = {
    id?: SortOrder
    entrenador1_id?: SortOrder
    pokemon1_id?: SortOrder
    pokemon2_id?: SortOrder
    entrenador2_id?: SortOrder
    lugar?: SortOrder
    evento?: SortOrder
    ganador_id?: SortOrder
    fecha?: SortOrder
    rondas?: SortOrder
    descripcion?: SortOrder
  }

  export type combatesMinOrderByAggregateInput = {
    id?: SortOrder
    entrenador1_id?: SortOrder
    pokemon1_id?: SortOrder
    pokemon2_id?: SortOrder
    entrenador2_id?: SortOrder
    lugar?: SortOrder
    evento?: SortOrder
    ganador_id?: SortOrder
    fecha?: SortOrder
    rondas?: SortOrder
    descripcion?: SortOrder
  }

  export type combatesSumOrderByAggregateInput = {
    id?: SortOrder
    entrenador1_id?: SortOrder
    pokemon1_id?: SortOrder
    pokemon2_id?: SortOrder
    entrenador2_id?: SortOrder
    ganador_id?: SortOrder
    rondas?: SortOrder
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

  export type CombatesListRelationFilter = {
    every?: combatesWhereInput
    some?: combatesWhereInput
    none?: combatesWhereInput
  }

  export type combatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entrenadoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    escuela?: SortOrder
    medallas?: SortOrder
    pokemon_default?: SortOrder
    edad?: SortOrder
    experiencia?: SortOrder
  }

  export type entrenadoresAvgOrderByAggregateInput = {
    id?: SortOrder
    pokemon_default?: SortOrder
    edad?: SortOrder
    experiencia?: SortOrder
  }

  export type entrenadoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    escuela?: SortOrder
    medallas?: SortOrder
    pokemon_default?: SortOrder
    edad?: SortOrder
    experiencia?: SortOrder
  }

  export type entrenadoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    origen?: SortOrder
    escuela?: SortOrder
    medallas?: SortOrder
    pokemon_default?: SortOrder
    edad?: SortOrder
    experiencia?: SortOrder
  }

  export type entrenadoresSumOrderByAggregateInput = {
    id?: SortOrder
    pokemon_default?: SortOrder
    edad?: SortOrder
    experiencia?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EntrenadoresListRelationFilter = {
    every?: entrenadoresWhereInput
    some?: entrenadoresWhereInput
    none?: entrenadoresWhereInput
  }

  export type PokemonsListRelationFilter = {
    every?: pokemonsWhereInput
    some?: pokemonsWhereInput
    none?: pokemonsWhereInput
  }

  export type entrenadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pokemonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pokemonsCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    habilidades?: SortOrder
    nivel_poder?: SortOrder
    imagen?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    descripcion?: SortOrder
    evoluciona_de?: SortOrder
    evoluciona_a?: SortOrder
  }

  export type pokemonsAvgOrderByAggregateInput = {
    id?: SortOrder
    nivel_poder?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    evoluciona_de?: SortOrder
    evoluciona_a?: SortOrder
  }

  export type pokemonsMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    habilidades?: SortOrder
    nivel_poder?: SortOrder
    imagen?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    descripcion?: SortOrder
    evoluciona_de?: SortOrder
    evoluciona_a?: SortOrder
  }

  export type pokemonsMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    habilidades?: SortOrder
    nivel_poder?: SortOrder
    imagen?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    descripcion?: SortOrder
    evoluciona_de?: SortOrder
    evoluciona_a?: SortOrder
  }

  export type pokemonsSumOrderByAggregateInput = {
    id?: SortOrder
    nivel_poder?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    evoluciona_de?: SortOrder
    evoluciona_a?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    create?: XOR<entrenadoresCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
    connectOrCreate?: entrenadoresCreateOrConnectWithoutCombates_combates_entrenador1_idToentrenadoresInput
    connect?: entrenadoresWhereUniqueInput
  }

  export type entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    create?: XOR<entrenadoresCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
    connectOrCreate?: entrenadoresCreateOrConnectWithoutCombates_combates_entrenador2_idToentrenadoresInput
    connect?: entrenadoresWhereUniqueInput
  }

  export type pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_ganador_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_ganador_idTopokemonsInput
    connect?: pokemonsWhereUniqueInput
  }

  export type pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon1_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_pokemon1_idTopokemonsInput
    connect?: pokemonsWhereUniqueInput
  }

  export type pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon2_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_pokemon2_idTopokemonsInput
    connect?: pokemonsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput = {
    create?: XOR<entrenadoresCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
    connectOrCreate?: entrenadoresCreateOrConnectWithoutCombates_combates_entrenador1_idToentrenadoresInput
    upsert?: entrenadoresUpsertWithoutCombates_combates_entrenador1_idToentrenadoresInput
    disconnect?: entrenadoresWhereInput | boolean
    delete?: entrenadoresWhereInput | boolean
    connect?: entrenadoresWhereUniqueInput
    update?: XOR<XOR<entrenadoresUpdateToOneWithWhereWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput>, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
  }

  export type entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput = {
    create?: XOR<entrenadoresCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
    connectOrCreate?: entrenadoresCreateOrConnectWithoutCombates_combates_entrenador2_idToentrenadoresInput
    upsert?: entrenadoresUpsertWithoutCombates_combates_entrenador2_idToentrenadoresInput
    disconnect?: entrenadoresWhereInput | boolean
    delete?: entrenadoresWhereInput | boolean
    connect?: entrenadoresWhereUniqueInput
    update?: XOR<XOR<entrenadoresUpdateToOneWithWhereWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput>, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
  }

  export type pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_ganador_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_ganador_idTopokemonsInput
    upsert?: pokemonsUpsertWithoutCombates_combates_ganador_idTopokemonsInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUpdateWithoutCombates_combates_ganador_idTopokemonsInput>, pokemonsUncheckedUpdateWithoutCombates_combates_ganador_idTopokemonsInput>
  }

  export type pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon1_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_pokemon1_idTopokemonsInput
    upsert?: pokemonsUpsertWithoutCombates_combates_pokemon1_idTopokemonsInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput>, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput>
  }

  export type pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon2_idTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutCombates_combates_pokemon2_idTopokemonsInput
    upsert?: pokemonsUpsertWithoutCombates_combates_pokemon2_idTopokemonsInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput>, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type combatesCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type pokemonsCreateNestedOneWithoutEntrenadoresInput = {
    create?: XOR<pokemonsCreateWithoutEntrenadoresInput, pokemonsUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutEntrenadoresInput
    connect?: pokemonsWhereUniqueInput
  }

  export type combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type combatesUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type pokemonsUpdateOneWithoutEntrenadoresNestedInput = {
    create?: XOR<pokemonsCreateWithoutEntrenadoresInput, pokemonsUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutEntrenadoresInput
    upsert?: pokemonsUpsertWithoutEntrenadoresInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutEntrenadoresInput, pokemonsUpdateWithoutEntrenadoresInput>, pokemonsUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput = {
    create?: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput> | combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[] | combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    createMany?: combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_ganador_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type entrenadoresCreateNestedManyWithoutPokemonsInput = {
    create?: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput> | entrenadoresCreateWithoutPokemonsInput[] | entrenadoresUncheckedCreateWithoutPokemonsInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutPokemonsInput | entrenadoresCreateOrConnectWithoutPokemonsInput[]
    createMany?: entrenadoresCreateManyPokemonsInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    connect?: pokemonsWhereUniqueInput
  }

  export type pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInputEnvelope
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
  }

  export type pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    connect?: pokemonsWhereUniqueInput
  }

  export type pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInputEnvelope
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
  }

  export type combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_ganador_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInputEnvelope
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
  }

  export type entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput = {
    create?: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput> | entrenadoresCreateWithoutPokemonsInput[] | entrenadoresUncheckedCreateWithoutPokemonsInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutPokemonsInput | entrenadoresCreateOrConnectWithoutPokemonsInput[]
    createMany?: entrenadoresCreateManyPokemonsInputEnvelope
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
  }

  export type pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInputEnvelope
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
  }

  export type pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInputEnvelope
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_ganador_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_ganador_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type entrenadoresUpdateManyWithoutPokemonsNestedInput = {
    create?: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput> | entrenadoresCreateWithoutPokemonsInput[] | entrenadoresUncheckedCreateWithoutPokemonsInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutPokemonsInput | entrenadoresCreateOrConnectWithoutPokemonsInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutPokemonsInput | entrenadoresUpsertWithWhereUniqueWithoutPokemonsInput[]
    createMany?: entrenadoresCreateManyPokemonsInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutPokemonsInput | entrenadoresUpdateWithWhereUniqueWithoutPokemonsInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutPokemonsInput | entrenadoresUpdateManyWithWhereWithoutPokemonsInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    upsert?: pokemonsUpsertWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    upsert?: pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInputEnvelope
    set?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    disconnect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    delete?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    update?: pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    updateMany?: pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    deleteMany?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
  }

  export type pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
    connectOrCreate?: pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    upsert?: pokemonsUpsertWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    disconnect?: pokemonsWhereInput | boolean
    delete?: pokemonsWhereInput | boolean
    connect?: pokemonsWhereUniqueInput
    update?: XOR<XOR<pokemonsUpdateToOneWithWhereWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    upsert?: pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInputEnvelope
    set?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    disconnect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    delete?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    update?: pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    updateMany?: pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    deleteMany?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_ganador_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_ganador_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_ganador_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon1_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon1_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput = {
    create?: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput> | combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[] | combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    connectOrCreate?: combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    upsert?: combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    createMany?: combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInputEnvelope
    set?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    disconnect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    delete?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    connect?: combatesWhereUniqueInput | combatesWhereUniqueInput[]
    update?: combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    updateMany?: combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon2_idTopokemonsInput | combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon2_idTopokemonsInput[]
    deleteMany?: combatesScalarWhereInput | combatesScalarWhereInput[]
  }

  export type entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput = {
    create?: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput> | entrenadoresCreateWithoutPokemonsInput[] | entrenadoresUncheckedCreateWithoutPokemonsInput[]
    connectOrCreate?: entrenadoresCreateOrConnectWithoutPokemonsInput | entrenadoresCreateOrConnectWithoutPokemonsInput[]
    upsert?: entrenadoresUpsertWithWhereUniqueWithoutPokemonsInput | entrenadoresUpsertWithWhereUniqueWithoutPokemonsInput[]
    createMany?: entrenadoresCreateManyPokemonsInputEnvelope
    set?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    disconnect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    delete?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    connect?: entrenadoresWhereUniqueInput | entrenadoresWhereUniqueInput[]
    update?: entrenadoresUpdateWithWhereUniqueWithoutPokemonsInput | entrenadoresUpdateWithWhereUniqueWithoutPokemonsInput[]
    updateMany?: entrenadoresUpdateManyWithWhereWithoutPokemonsInput | entrenadoresUpdateManyWithWhereWithoutPokemonsInput[]
    deleteMany?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
  }

  export type pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    upsert?: pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInputEnvelope
    set?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    disconnect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    delete?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    update?: pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    updateMany?: pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_aTopokemonsInput[]
    deleteMany?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
  }

  export type pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput = {
    create?: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput> | pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[] | pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    connectOrCreate?: pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    upsert?: pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    createMany?: pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInputEnvelope
    set?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    disconnect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    delete?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    connect?: pokemonsWhereUniqueInput | pokemonsWhereUniqueInput[]
    update?: pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    updateMany?: pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_deTopokemonsInput[]
    deleteMany?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type entrenadoresCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador2_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
    pokemons?: pokemonsCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    pokemon_default?: number | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
  }

  export type entrenadoresCreateOrConnectWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    where: entrenadoresWhereUniqueInput
    create: XOR<entrenadoresCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
  }

  export type entrenadoresCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
    pokemons?: pokemonsCreateNestedOneWithoutEntrenadoresInput
  }

  export type entrenadoresUncheckedCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    pokemon_default?: number | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
  }

  export type entrenadoresCreateOrConnectWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    where: entrenadoresWhereUniqueInput
    create: XOR<entrenadoresCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
  }

  export type pokemonsCreateWithoutCombates_combates_ganador_idTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutCombates_combates_ganador_idTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutCombates_combates_ganador_idTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_ganador_idTopokemonsInput>
  }

  export type pokemonsCreateWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon1_idTopokemonsInput>
  }

  export type pokemonsCreateWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon2_idTopokemonsInput>
  }

  export type entrenadoresUpsertWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    update: XOR<entrenadoresUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
    create: XOR<entrenadoresCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
    where?: entrenadoresWhereInput
  }

  export type entrenadoresUpdateToOneWithWhereWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    where?: entrenadoresWhereInput
    data: XOR<entrenadoresUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput>
  }

  export type entrenadoresUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador2_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
    pokemons?: pokemonsUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador1_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_default?: NullableIntFieldUpdateOperationsInput | number | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
  }

  export type entrenadoresUpsertWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    update: XOR<entrenadoresUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
    create: XOR<entrenadoresCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedCreateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
    where?: entrenadoresWhereInput
  }

  export type entrenadoresUpdateToOneWithWhereWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    where?: entrenadoresWhereInput
    data: XOR<entrenadoresUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput, entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput>
  }

  export type entrenadoresUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
    pokemons?: pokemonsUpdateOneWithoutEntrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateWithoutCombates_combates_entrenador2_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_default?: NullableIntFieldUpdateOperationsInput | number | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
  }

  export type pokemonsUpsertWithoutCombates_combates_ganador_idTopokemonsInput = {
    update: XOR<pokemonsUpdateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_ganador_idTopokemonsInput>
    create: XOR<pokemonsCreateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_ganador_idTopokemonsInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutCombates_combates_ganador_idTopokemonsInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutCombates_combates_ganador_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_ganador_idTopokemonsInput>
  }

  export type pokemonsUpdateWithoutCombates_combates_ganador_idTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutCombates_combates_ganador_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUpsertWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    update: XOR<pokemonsUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput>
    create: XOR<pokemonsCreateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon1_idTopokemonsInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput>
  }

  export type pokemonsUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutCombates_combates_pokemon1_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUpsertWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    update: XOR<pokemonsUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput>
    create: XOR<pokemonsCreateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedCreateWithoutCombates_combates_pokemon2_idTopokemonsInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput, pokemonsUncheckedUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput>
  }

  export type pokemonsUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutCombates_combates_pokemon2_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput
    pokemons_combates_ganador_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput
  }

  export type combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    id?: number
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateOrConnectWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    create: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput>
  }

  export type combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInputEnvelope = {
    data: combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInput | combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInput[]
    skipDuplicates?: boolean
  }

  export type combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput
    pokemons_combates_ganador_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput
  }

  export type combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateOrConnectWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    create: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput>
  }

  export type combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInputEnvelope = {
    data: combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInput | combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInput[]
    skipDuplicates?: boolean
  }

  export type pokemonsCreateWithoutEntrenadoresInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutEntrenadoresInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutEntrenadoresInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutEntrenadoresInput, pokemonsUncheckedCreateWithoutEntrenadoresInput>
  }

  export type combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    update: XOR<combatesUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput>
    create: XOR<combatesCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput>
  }

  export type combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    data: XOR<combatesUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput, combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput>
  }

  export type combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    where: combatesScalarWhereInput
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput>
  }

  export type combatesScalarWhereInput = {
    AND?: combatesScalarWhereInput | combatesScalarWhereInput[]
    OR?: combatesScalarWhereInput[]
    NOT?: combatesScalarWhereInput | combatesScalarWhereInput[]
    id?: IntFilter<"combates"> | number
    entrenador1_id?: IntNullableFilter<"combates"> | number | null
    pokemon1_id?: IntNullableFilter<"combates"> | number | null
    pokemon2_id?: IntNullableFilter<"combates"> | number | null
    entrenador2_id?: IntNullableFilter<"combates"> | number | null
    lugar?: StringNullableFilter<"combates"> | string | null
    evento?: StringNullableFilter<"combates"> | string | null
    ganador_id?: IntNullableFilter<"combates"> | number | null
    fecha?: DateTimeNullableFilter<"combates"> | Date | string | null
    rondas?: IntNullableFilter<"combates"> | number | null
    descripcion?: StringNullableFilter<"combates"> | string | null
  }

  export type combatesUpsertWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    update: XOR<combatesUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput>
    create: XOR<combatesCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedCreateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput>
  }

  export type combatesUpdateWithWhereUniqueWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    where: combatesWhereUniqueInput
    data: XOR<combatesUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput, combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput>
  }

  export type combatesUpdateManyWithWhereWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    where: combatesScalarWhereInput
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput>
  }

  export type pokemonsUpsertWithoutEntrenadoresInput = {
    update: XOR<pokemonsUpdateWithoutEntrenadoresInput, pokemonsUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<pokemonsCreateWithoutEntrenadoresInput, pokemonsUncheckedCreateWithoutEntrenadoresInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutEntrenadoresInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutEntrenadoresInput, pokemonsUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type pokemonsUpdateWithoutEntrenadoresInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutEntrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput
  }

  export type combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateOrConnectWithoutPokemons_combates_ganador_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    create: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput>
  }

  export type combatesCreateManyPokemons_combates_ganador_idTopokemonsInputEnvelope = {
    data: combatesCreateManyPokemons_combates_ganador_idTopokemonsInput | combatesCreateManyPokemons_combates_ganador_idTopokemonsInput[]
    skipDuplicates?: boolean
  }

  export type combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput
    pokemons_combates_ganador_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon2_idTopokemonsInput
  }

  export type combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateOrConnectWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    create: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput>
  }

  export type combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInputEnvelope = {
    data: combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInput | combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInput[]
    skipDuplicates?: boolean
  }

  export type combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador1_idToentrenadoresInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresCreateNestedOneWithoutCombates_combates_entrenador2_idToentrenadoresInput
    pokemons_combates_ganador_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_ganador_idTopokemonsInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsCreateNestedOneWithoutCombates_combates_pokemon1_idTopokemonsInput
  }

  export type combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateOrConnectWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    create: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput>
  }

  export type combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInputEnvelope = {
    data: combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInput | combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInput[]
    skipDuplicates?: boolean
  }

  export type entrenadoresCreateWithoutPokemonsInput = {
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
    combates_combates_entrenador2_idToentrenadores?: combatesCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
  }

  export type entrenadoresUncheckedCreateWithoutPokemonsInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedCreateNestedManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput
  }

  export type entrenadoresCreateOrConnectWithoutPokemonsInput = {
    where: entrenadoresWhereUniqueInput
    create: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput>
  }

  export type entrenadoresCreateManyPokemonsInputEnvelope = {
    data: entrenadoresCreateManyPokemonsInput | entrenadoresCreateManyPokemonsInput[]
    skipDuplicates?: boolean
  }

  export type pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInputEnvelope = {
    data: pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInput | pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInput[]
    skipDuplicates?: boolean
  }

  export type pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    combates_combates_ganador_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresCreateNestedManyWithoutPokemonsInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_a?: number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_ganador_idTopokemonsInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon1_idTopokemonsInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedCreateNestedManyWithoutPokemons_combates_pokemon2_idTopokemonsInput
    entrenadores?: entrenadoresUncheckedCreateNestedManyWithoutPokemonsInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedCreateNestedManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput
  }

  export type pokemonsCreateOrConnectWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    create: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInputEnvelope = {
    data: pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInput | pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInput[]
    skipDuplicates?: boolean
  }

  export type combatesUpsertWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    update: XOR<combatesUpdateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_ganador_idTopokemonsInput>
    create: XOR<combatesCreateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_ganador_idTopokemonsInput>
  }

  export type combatesUpdateWithWhereUniqueWithoutPokemons_combates_ganador_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    data: XOR<combatesUpdateWithoutPokemons_combates_ganador_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_ganador_idTopokemonsInput>
  }

  export type combatesUpdateManyWithWhereWithoutPokemons_combates_ganador_idTopokemonsInput = {
    where: combatesScalarWhereInput
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsInput>
  }

  export type combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    update: XOR<combatesUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput>
    create: XOR<combatesCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon1_idTopokemonsInput>
  }

  export type combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    data: XOR<combatesUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput>
  }

  export type combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    where: combatesScalarWhereInput
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsInput>
  }

  export type combatesUpsertWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    update: XOR<combatesUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput>
    create: XOR<combatesCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedCreateWithoutPokemons_combates_pokemon2_idTopokemonsInput>
  }

  export type combatesUpdateWithWhereUniqueWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    where: combatesWhereUniqueInput
    data: XOR<combatesUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput, combatesUncheckedUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput>
  }

  export type combatesUpdateManyWithWhereWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    where: combatesScalarWhereInput
    data: XOR<combatesUpdateManyMutationInput, combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsInput>
  }

  export type entrenadoresUpsertWithWhereUniqueWithoutPokemonsInput = {
    where: entrenadoresWhereUniqueInput
    update: XOR<entrenadoresUpdateWithoutPokemonsInput, entrenadoresUncheckedUpdateWithoutPokemonsInput>
    create: XOR<entrenadoresCreateWithoutPokemonsInput, entrenadoresUncheckedCreateWithoutPokemonsInput>
  }

  export type entrenadoresUpdateWithWhereUniqueWithoutPokemonsInput = {
    where: entrenadoresWhereUniqueInput
    data: XOR<entrenadoresUpdateWithoutPokemonsInput, entrenadoresUncheckedUpdateWithoutPokemonsInput>
  }

  export type entrenadoresUpdateManyWithWhereWithoutPokemonsInput = {
    where: entrenadoresScalarWhereInput
    data: XOR<entrenadoresUpdateManyMutationInput, entrenadoresUncheckedUpdateManyWithoutPokemonsInput>
  }

  export type entrenadoresScalarWhereInput = {
    AND?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
    OR?: entrenadoresScalarWhereInput[]
    NOT?: entrenadoresScalarWhereInput | entrenadoresScalarWhereInput[]
    id?: IntFilter<"entrenadores"> | number
    nombre?: StringFilter<"entrenadores"> | string
    origen?: StringNullableFilter<"entrenadores"> | string | null
    escuela?: StringNullableFilter<"entrenadores"> | string | null
    medallas?: StringNullableFilter<"entrenadores"> | string | null
    pokemon_default?: IntNullableFilter<"entrenadores"> | number | null
    edad?: IntNullableFilter<"entrenadores"> | number | null
    experiencia?: IntNullableFilter<"entrenadores"> | number | null
  }

  export type pokemonsUpsertWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    update: XOR<pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
    create: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    update: XOR<pokemonsUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput>
    create: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    data: XOR<pokemonsUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput, pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    where: pokemonsScalarWhereInput
    data: XOR<pokemonsUpdateManyMutationInput, pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput>
  }

  export type pokemonsScalarWhereInput = {
    AND?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
    OR?: pokemonsScalarWhereInput[]
    NOT?: pokemonsScalarWhereInput | pokemonsScalarWhereInput[]
    id?: IntFilter<"pokemons"> | number
    nombre?: StringFilter<"pokemons"> | string
    tipo?: StringFilter<"pokemons"> | string
    habilidades?: StringNullableFilter<"pokemons"> | string | null
    nivel_poder?: IntNullableFilter<"pokemons"> | number | null
    imagen?: StringNullableFilter<"pokemons"> | string | null
    altura?: FloatNullableFilter<"pokemons"> | number | null
    peso?: FloatNullableFilter<"pokemons"> | number | null
    descripcion?: StringNullableFilter<"pokemons"> | string | null
    evoluciona_de?: IntNullableFilter<"pokemons"> | number | null
    evoluciona_a?: IntNullableFilter<"pokemons"> | number | null
  }

  export type pokemonsUpsertWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    update: XOR<pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
    create: XOR<pokemonsCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
    where?: pokemonsWhereInput
  }

  export type pokemonsUpdateToOneWithWhereWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    where?: pokemonsWhereInput
    data: XOR<pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
  }

  export type pokemonsUpsertWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    update: XOR<pokemonsUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput>
    create: XOR<pokemonsCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedCreateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsUpdateWithWhereUniqueWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    where: pokemonsWhereUniqueInput
    data: XOR<pokemonsUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput, pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type pokemonsUpdateManyWithWhereWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    where: pokemonsScalarWhereInput
    data: XOR<pokemonsUpdateManyMutationInput, pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput>
  }

  export type combatesCreateManyEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    id?: number
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateManyEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput
    pokemons_combates_ganador_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput
    pokemons_combates_ganador_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesCreateManyPokemons_combates_ganador_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateManyPokemons_combates_pokemon1_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon2_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type combatesCreateManyPokemons_combates_pokemon2_idTopokemonsInput = {
    id?: number
    entrenador1_id?: number | null
    pokemon1_id?: number | null
    entrenador2_id?: number | null
    lugar?: string | null
    evento?: string | null
    ganador_id?: number | null
    fecha?: Date | string | null
    rondas?: number | null
    descripcion?: string | null
  }

  export type entrenadoresCreateManyPokemonsInput = {
    id?: number
    nombre: string
    origen?: string | null
    escuela?: string | null
    medallas?: string | null
    edad?: number | null
    experiencia?: number | null
  }

  export type pokemonsCreateManyPokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_de?: number | null
  }

  export type pokemonsCreateManyPokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: number
    nombre: string
    tipo: string
    habilidades?: string | null
    nivel_poder?: number | null
    imagen?: string | null
    altura?: number | null
    peso?: number | null
    descripcion?: string | null
    evoluciona_a?: number | null
  }

  export type combatesUpdateWithoutPokemons_combates_ganador_idTopokemonsInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateWithoutPokemons_combates_ganador_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput
    pokemons_combates_ganador_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput
    pokemons_combates_pokemon2_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon2_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon2_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    entrenadores_combates_entrenador1_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador1_idToentrenadoresNestedInput
    entrenadores_combates_entrenador2_idToentrenadores?: entrenadoresUpdateOneWithoutCombates_combates_entrenador2_idToentrenadoresNestedInput
    pokemons_combates_ganador_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_ganador_idTopokemonsNestedInput
    pokemons_combates_pokemon1_idTopokemons?: pokemonsUpdateOneWithoutCombates_combates_pokemon1_idTopokemonsNestedInput
  }

  export type combatesUncheckedUpdateWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenador1_id?: NullableIntFieldUpdateOperationsInput | number | null
    pokemon1_id?: NullableIntFieldUpdateOperationsInput | number | null
    entrenador2_id?: NullableIntFieldUpdateOperationsInput | number | null
    lugar?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: NullableStringFieldUpdateOperationsInput | string | null
    ganador_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rondas?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entrenadoresUpdateWithoutPokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
    combates_combates_entrenador2_idToentrenadores?: combatesUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_entrenador1_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador1_idToentrenadoresNestedInput
    combates_combates_entrenador2_idToentrenadores?: combatesUncheckedUpdateManyWithoutEntrenadores_combates_entrenador2_idToentrenadoresNestedInput
  }

  export type entrenadoresUncheckedUpdateManyWithoutPokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    origen?: NullableStringFieldUpdateOperationsInput | string | null
    escuela?: NullableStringFieldUpdateOperationsInput | string | null
    medallas?: NullableStringFieldUpdateOperationsInput | string | null
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    experiencia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pokemonsUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_deTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_de?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pokemonsUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    combates_combates_ganador_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUpdateManyWithoutPokemonsNestedInput
    pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateOneWithoutOther_pokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
    combates_combates_ganador_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_ganador_idTopokemonsNestedInput
    combates_combates_pokemon1_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon1_idTopokemonsNestedInput
    combates_combates_pokemon2_idTopokemons?: combatesUncheckedUpdateManyWithoutPokemons_combates_pokemon2_idTopokemonsNestedInput
    entrenadores?: entrenadoresUncheckedUpdateManyWithoutPokemonsNestedInput
    other_pokemons_pokemons_evoluciona_aTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_aTopokemonsNestedInput
    other_pokemons_pokemons_evoluciona_deTopokemons?: pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsNestedInput
  }

  export type pokemonsUncheckedUpdateManyWithoutPokemons_pokemons_evoluciona_deTopokemonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    habilidades?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_poder?: NullableIntFieldUpdateOperationsInput | number | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    evoluciona_a?: NullableIntFieldUpdateOperationsInput | number | null
  }



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