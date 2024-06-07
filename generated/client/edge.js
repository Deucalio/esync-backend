
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\vscodeee\\esync-backend\\backened\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gc2NoZW1hLnByaXNtYQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICAgIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogICAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiDQogICAgdXJsICAgICAgID0gZW52KCJQT1NUR1JFU19QUklTTUFfVVJMIikgLy8gdXNlcyBjb25uZWN0aW9uIHBvb2xpbmcNCiAgICBkaXJlY3RVcmwgPSBlbnYoIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIpIC8vIHVzZXMgYSBkaXJlY3QgY29ubmVjdGlvbg0KfQ0KDQptb2RlbCBVc2VyIHsNCiAgICBpZCAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICAgIGZpcnN0X25hbWUgICAgICAgICAgICAgU3RyaW5nDQogICAgbGFzdF9uYW1lICAgICAgICAgICAgICBTdHJpbmcNCiAgICBlbWFpbCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAdW5pcXVlDQogICAgcGFzc3dvcmQgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBwaG9uZSAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIGFkZHJlc3MgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgam9pbmVkYXQgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpDQogICAgU3RvcmUgICAgICAgICAgICAgICAgICBTdG9yZVtdDQogICAgQ291cmllciAgICAgICAgICAgICAgICBDb3VyaWVyW10NCiAgICBEYXJhek9yZGVyICAgICAgICAgICAgIERhcmF6T3JkZXJzW10NCiAgICBTaG9waWZ5T3JkZXIgICAgICAgICAgIFNob3BpZnlPcmRlcnNbXQ0KICAgIFRlbXBvcmFyeURhdGEgICAgICAgICAgVGVtcG9yYXJ5RGF0YVtdDQogICAgRGFyYXpVbnBhaWRUcmFuc2FjdGlvbiBEYXJhelN0b3JlVHJhbnNhY3Rpb25zW10NCiAgICBDdXN0b21lciAgICAgICAgICAgICAgIEN1c3RvbWVyW10NCn0NCg0KbW9kZWwgU3RvcmUgew0KICAgIHNlbGxlcl9pZCAgICAgICBTdHJpbmcgQGlkIEB1bmlxdWUNCiAgICBuYW1lICAgICAgICAgICAgU3RyaW5nDQogICAgcGxhdGZvcm0gICAgICAgIFN0cmluZw0KICAgIGltYWdlX3VybCAgICAgICBTdHJpbmcNCiAgICBpbWFnZV9wdWJsaWNfaWQgU3RyaW5nDQogICAgc3RvcmVfaW5mbyAgICAgIEpzb24NCiAgICB1c2VyX2lkICAgICAgICAgSW50DQogICAgdXNlciAgICAgICAgICAgIFVzZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCm1vZGVsIERhcmF6T3JkZXJzIHsNCiAgICBvcmRlcl9pZCAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkNCiAgICBzZWxsZXJfaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHZvdWNoZXJfcGxhdGZvcm0gICAgICAgICAgICAgICBTdHJpbmc/DQogICAgdm91Y2hlciAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICB2b3VjaGVyX3NlbGxlciAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIG9yZGVyX251bWJlciAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPw0KICAgIHZvdWNoZXJfY29kZSAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgZ2lmdF9vcHRpb24gICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBzaGlwcGluZ19mZWVfZGlzY291bnRfcGxhdGZvcm0gU3RyaW5nPw0KICAgIHByb21pc2VkX3NoaXBwaW5nX3RpbWVzICAgICAgICBTdHJpbmc/DQogICAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lDQogICAgcHJpY2UgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2ltYWwNCiAgICBzaGlwcGluZ19mZWVfb3JpZ2luYWwgICAgICAgICAgU3RyaW5nDQogICAgcGF5bWVudF9tZXRob2QgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIHNoaXBwaW5nX2ZlZV9kaXNjb3VudF9zZWxsZXIgICBTdHJpbmcNCiAgICBzaGlwcGluZ19mZWUgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgaXRlbXNfY291bnQgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIHBheW1lbnRfc3RhdHVzICAgICAgICAgICAgICAgICBCb29sZWFuDQogICAgc3RhdHVzZXMgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1tdDQogICAgaXNfcmVjZWl2ZWQgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4NCiAgICBhZGRyZXNzX2JpbGxpbmcgICAgICAgICAgICAgICAgSnNvbg0KICAgIGdpZnRfbWVzc2FnZSAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICByZW1hcmtzICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgYWRkcmVzc19zaGlwcGluZyAgICAgICAgICAgICAgIEpzb24NCiAgICBvcmRlcl9pdGVtcyAgICAgICAgICAgICAgICAgICAgSnNvbg0KICAgIHRyYW5zYWN0aW9ucyAgICAgICAgICAgICAgICAgICBKc29uDQogICAgc2hvcF9sb2dvICAgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIHVzZXJfaWQgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgICBjdXN0b21lcl9pZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgY3VzdG9tZXIgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyICBAcmVsYXRpb24oZmllbGRzOiBbY3VzdG9tZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBDdXN0b21lciB7DQogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEB1bmlxdWUNCiAgICBzaG9waWZ5X2lkICAgIFN0cmluZz8NCiAgICBmaXJzdF9uYW1lICAgIFN0cmluZz8NCiAgICBsYXN0X25hbWUgICAgIFN0cmluZz8NCiAgICBlbWFpbCAgICAgICAgIFN0cmluZz8NCiAgICBjaXR5ICAgICAgICAgIFN0cmluZz8NCiAgICBwcm92aW5jZSAgICAgIFN0cmluZz8NCiAgICBjb3VudHJ5ICAgICAgIFN0cmluZz8NCiAgICB1c2VyX2lkICAgICAgIEludA0KICAgIHVzZXIgICAgICAgICAgVXNlciAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBEYXJhek9yZGVycyAgIERhcmF6T3JkZXJzW10NCiAgICBTaG9waWZ5T3JkZXJzIFNob3BpZnlPcmRlcnNbXQ0KfQ0KDQptb2RlbCBEYXJhelN0b3JlVHJhbnNhY3Rpb25zIHsNCiAgICBzZWxsZXJfaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlDQogICAgYW1vdW50ICAgICAgICAgICAgIFN0cmluZz8NCiAgICB0cmFuc2FjdGlvbl9kYXRlICAgRGF0ZVRpbWU/DQogICAgdHJhbnNhY3Rpb25fdHlwZSAgIFN0cmluZz8NCiAgICBzdGF0ZW1lbnQgICAgICAgICAgU3RyaW5nPw0KICAgIHBheW1lbnRfcmVmX2lkICAgICBTdHJpbmc/DQogICAgZmVlX25hbWUgICAgICAgICAgIFN0cmluZz8NCiAgICBwYWlkX3N0YXR1cyAgICAgICAgU3RyaW5nPw0KICAgIFdIVF9hbW91bnQgICAgICAgICBTdHJpbmc/DQogICAgVkFUX2luX2Ftb3VudCAgICAgIFN0cmluZz8NCiAgICB0cmFuc2FjdGlvbl9udW1iZXIgU3RyaW5nPw0KICAgIGNvbW1lbnQgICAgICAgICAgICBTdHJpbmc/DQogICAgdXNlcl9pZCAgICAgICAgICAgIEludA0KICAgIHVzZXIgICAgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBTaG9waWZ5T3JkZXJzIHsNCiAgICBvcmRlcl9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQ0KICAgIGRvbWFpbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBvcmRlcl9uYW1lICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGNvbnRhY3RfZW1haWwgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lDQogICAgY3VycmVudF90b3RhbF9hZGRpdGlvbmFsX2ZlZXNfc2V0IFN0cmluZz8NCiAgICBjdXJyZW50X3RvdGFsX2Rpc2NvdW50cyAgICAgICAgICAgU3RyaW5nPw0KICAgIGN1cnJlbnRfdG90YWxfZHV0aWVzX3NldCAgICAgICAgICBTdHJpbmc/DQogICAgY3VycmVudF90b3RhbF9wcmljZSAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBjdXJyZW50X3RvdGFsX3RheCAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGVtYWlsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgZmluYW5jaWFsX3N0YXR1cyAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBmdWxmaWxsbWVudF9zdGF0dXMgICAgICAgICAgICAgICAgSnNvbg0KICAgIGxpbmVfaXRlbXMgICAgICAgICAgICAgICAgICAgICAgICBKc29uDQogICAgbm90ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBwaG9uZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgcHJvY2Vzc2VkX2F0ICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lDQogICAgcmVmZXJyaW5nX3NpdGUgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBzb3VyY2VfbmFtZSAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHN1YnRvdGFsX3ByaWNlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgdGFncyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICB0b3RhbF9kaXNjb3VudHMgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHRvdGFsX2xpbmVfaXRlbXNfcHJpY2UgICAgICAgICAgICBTdHJpbmc/DQogICAgdG90YWxfb3V0c3RhbmRpbmcgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICB0b3RhbF9wcmljZSAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZQ0KICAgIHVzZXJfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgICBjdXN0b21lcl9pZCAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgICBjdXN0b21lciAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXIgQHJlbGF0aW9uKGZpZWxkczogW2N1c3RvbWVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KbW9kZWwgQ291cmllciB7DQogICAgaWQgICAgICAgSW50ICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgICBuYW1lICAgICBTdHJpbmcNCiAgICBkYXRhICAgICBKc29uDQogICAgc2hpcHBlcnMgSnNvbg0KICAgIHVzZXJfaWQgIEludA0KICAgIHVzZXIgICAgIFVzZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCi8vIERlZmluZSBhIG1vZGVsIHRvIGhvbGQgdGhlIHRlbXBvcmFyeSBkYXRhDQptb2RlbCBUZW1wb3JhcnlEYXRhIHsNCiAgICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgICBlbWFpbCAgICAgU3RyaW5nDQogICAgZGF0YSAgICAgIEpzb24NCiAgICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQoNCiAgICBVc2VyICAgVXNlcj8gQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogICAgdXNlcklkIEludD8NCn0NCg0KbW9kZWwgRGFyYXpMb2dzIHsNCiAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgICBzZWxsZXJfaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgZmV0Y2hlZF9mcm9tX2FwaSAgICAgICAgICAgICAgIFN0cmluZw0KICAgIG9yZGVyc19hcHBlbmRlZF9zaW5nbGVfcmVxdWVzdCBTdHJpbmcNCiAgICBvcmRlcnNfYXBwZW5kZWQgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgdG90YWxfc3RvcmVfb3JkZXJzICAgICAgICAgICAgIFN0cmluZw0KICAgIGRhcmF6X3VybCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCn0NCg==",
  "inlineSchemaHash": "b66c454518781c49da99d8bfd22d2cfc4d20dcc7d30a5f8af66938550b611144"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinedat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Store\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Courier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Courier\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DarazOrder\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DarazOrders\",\"relationName\":\"DarazOrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShopifyOrder\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShopifyOrders\",\"relationName\":\"ShopifyOrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TemporaryData\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TemporaryData\",\"relationName\":\"TemporaryDataToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DarazUnpaidTransaction\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DarazStoreTransactions\",\"relationName\":\"DarazStoreTransactionsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Store\":{\"dbName\":null,\"fields\":[{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_public_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazOrders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_option\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_discount_platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promised_shipping_times\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_original\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_discount_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuses\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_received\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_billing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_shipping\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DarazOrdersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToDarazOrders\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shopify_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DarazOrders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DarazOrders\",\"relationName\":\"CustomerToDarazOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShopifyOrders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShopifyOrders\",\"relationName\":\"CustomerToShopifyOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazStoreTransactions\":{\"dbName\":null,\"fields\":[{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_ref_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fee_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paid_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WHT_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VAT_in_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DarazStoreTransactionsToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShopifyOrders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_additional_fees_set\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_discounts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_duties_set\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_tax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"financial_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fulfillment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referring_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_discounts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_line_items_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_outstanding\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ShopifyOrdersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToShopifyOrders\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Courier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shippers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TemporaryData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TemporaryDataToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazLogs\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetched_from_api\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders_appended_single_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders_appended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_store_orders\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daraz_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

