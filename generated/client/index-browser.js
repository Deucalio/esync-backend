
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  address: 'address',
  joinedat: 'joinedat'
};

exports.Prisma.StoreScalarFieldEnum = {
  seller_id: 'seller_id',
  name: 'name',
  platform: 'platform',
  image_url: 'image_url',
  image_public_id: 'image_public_id',
  store_info: 'store_info',
  user_id: 'user_id'
};

exports.Prisma.DarazOrdersScalarFieldEnum = {
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

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.DarazStoreTransactionsScalarFieldEnum = {
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

exports.Prisma.ShopifyOrdersScalarFieldEnum = {
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

exports.Prisma.CourierScalarFieldEnum = {
  id: 'id',
  name: 'name',
  data: 'data',
  shippers: 'shippers',
  user_id: 'user_id'
};

exports.Prisma.TemporaryDataScalarFieldEnum = {
  id: 'id',
  email: 'email',
  data: 'data',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.DarazLogsScalarFieldEnum = {
  id: 'id',
  seller_id: 'seller_id',
  fetched_from_api: 'fetched_from_api',
  orders_appended_single_request: 'orders_appended_single_request',
  orders_appended: 'orders_appended',
  total_store_orders: 'total_store_orders',
  daraz_url: 'daraz_url'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
