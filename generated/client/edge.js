
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

exports.Prisma.DarazStoreTransactionsScalarFieldEnum = {
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
  user_id: 'user_id'
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
        "fromEnvVar": "VERCEL_POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gc2NoZW1hLnByaXNtYQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICAgIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogICAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiDQogICAgdXJsICAgICAgID0gZW52KCJWRVJDRUxfUE9TVEdSRVNfUFJJU01BX1VSTCIpIC8vIHVzZXMgY29ubmVjdGlvbiBwb29saW5nDQogICAgZGlyZWN0VXJsID0gZW52KCJWRVJDRUxfUE9TVEdSRVNfVVJMX05PTl9QT09MSU5HIikgLy8gdXNlcyBhIGRpcmVjdCBjb25uZWN0aW9uDQp9DQoNCm1vZGVsIFVzZXIgew0KICAgIGlkICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICAgIGZpcnN0X25hbWUgICAgICAgICAgICAgIFN0cmluZw0KICAgIGxhc3RfbmFtZSAgICAgICAgICAgICAgIFN0cmluZw0KICAgIGVtYWlsICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAdW5pcXVlDQogICAgcGFzc3dvcmQgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgcGhvbmUgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgYWRkcmVzcyAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgam9pbmVkYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICAgIFN0b3JlcyAgICAgICAgICAgICAgICAgIFN0b3JlW10NCiAgICBDb3VyaWVyICAgICAgICAgICAgICAgICBDb3VyaWVyW10NCiAgICBEYXJhek9yZGVycyAgICAgICAgICAgICBEYXJhek9yZGVyc1tdDQogICAgU2hvcGlmeU9yZGVycyAgICAgICAgICAgU2hvcGlmeU9yZGVyc1tdDQogICAgVGVtcG9yYXJ5RGF0YSAgICAgICAgICAgVGVtcG9yYXJ5RGF0YVtdDQogICAgRGFyYXpVbnBhaWRUcmFuc2FjdGlvbnMgRGFyYXpTdG9yZVRyYW5zYWN0aW9uc1tdDQp9DQoNCm1vZGVsIFN0b3JlIHsNCiAgICBzZWxsZXJfaWQgICAgICAgU3RyaW5nIEBpZCBAdW5pcXVlDQogICAgbmFtZSAgICAgICAgICAgIFN0cmluZw0KICAgIHBsYXRmb3JtICAgICAgICBTdHJpbmcNCiAgICBpbWFnZV91cmwgICAgICAgU3RyaW5nDQogICAgaW1hZ2VfcHVibGljX2lkIFN0cmluZw0KICAgIHN0b3JlX2luZm8gICAgICBKc29uDQogICAgdXNlcl9pZCAgICAgICAgIEludA0KICAgIHVzZXIgICAgICAgICAgICBVc2VyICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBEYXJhek9yZGVycyB7DQogICAgb3JkZXJfaWQgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpDQogICAgc2VsbGVyX2lkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICB2b3VjaGVyX3BsYXRmb3JtICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHZvdWNoZXIgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgdm91Y2hlcl9zZWxsZXIgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBvcmRlcl9udW1iZXIgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8NCiAgICB2b3VjaGVyX2NvZGUgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGdpZnRfb3B0aW9uICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgc2hpcHBpbmdfZmVlX2Rpc2NvdW50X3BsYXRmb3JtIFN0cmluZz8NCiAgICBjdXN0b21lcl9uYW1lICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHByb21pc2VkX3NoaXBwaW5nX3RpbWVzICAgICAgICBTdHJpbmc/DQogICAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lDQogICAgcHJpY2UgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIHNoaXBwaW5nX2ZlZV9vcmlnaW5hbCAgICAgICAgICBTdHJpbmcNCiAgICBwYXltZW50X21ldGhvZCAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgc2hpcHBpbmdfZmVlX2Rpc2NvdW50X3NlbGxlciAgIFN0cmluZw0KICAgIHNoaXBwaW5nX2ZlZSAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBpdGVtc19jb3VudCAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgc3RhdHVzZXMgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIGFkZHJlc3NfYmlsbGluZyAgICAgICAgICAgICAgICBKc29uDQogICAgZ2lmdF9tZXNzYWdlICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIHJlbWFya3MgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBhZGRyZXNzX3NoaXBwaW5nICAgICAgICAgICAgICAgSnNvbg0KICAgIG9yZGVyX2l0ZW1zICAgICAgICAgICAgICAgICAgICBKc29uDQogICAgdHJhbnNhY3Rpb25zICAgICAgICAgICAgICAgICAgIEpzb24NCiAgICBzaG9wX2xvZ28gICAgICAgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgdXNlcl9pZCAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICAgIHVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBEYXJhelN0b3JlVHJhbnNhY3Rpb25zIHsNCiAgICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgICBhbW91bnQgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHRyYW5zYWN0aW9uX2RhdGUgICBEYXRlVGltZT8NCiAgICB0cmFuc2FjdGlvbl90eXBlICAgU3RyaW5nPw0KICAgIHN0YXRlbWVudCAgICAgICAgICBTdHJpbmc/DQogICAgcGF5bWVudF9yZWZfaWQgICAgIFN0cmluZz8NCiAgICBmZWVfbmFtZSAgICAgICAgICAgU3RyaW5nPw0KICAgIHBhaWRfc3RhdHVzICAgICAgICBTdHJpbmc/DQogICAgV0hUX2Ftb3VudCAgICAgICAgIFN0cmluZz8NCiAgICBWQVRfaW5fYW1vdW50ICAgICAgU3RyaW5nPw0KICAgIHRyYW5zYWN0aW9uX251bWJlciBTdHJpbmc/DQogICAgY29tbWVudCAgICAgICAgICAgIFN0cmluZz8NCiAgICB1c2VyX2lkICAgICAgICAgICAgSW50DQogICAgdXNlciAgICAgICAgICAgICAgIFVzZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCm1vZGVsIFNob3BpZnlPcmRlcnMgew0KICAgIG9yZGVyX2lkICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpDQogICAgZG9tYWluICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KICAgIG9yZGVyX25hbWUgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgY29udGFjdF9lbWFpbCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUNCiAgICBjdXJyZW50X3RvdGFsX2FkZGl0aW9uYWxfZmVlc19zZXQgU3RyaW5nPw0KICAgIGN1cnJlbnRfdG90YWxfZGlzY291bnRzICAgICAgICAgICBTdHJpbmc/DQogICAgY3VycmVudF90b3RhbF9kdXRpZXNfc2V0ICAgICAgICAgIFN0cmluZz8NCiAgICBjdXJyZW50X3RvdGFsX3ByaWNlICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGN1cnJlbnRfdG90YWxfdGF4ICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgZW1haWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICBmaW5hbmNpYWxfc3RhdHVzICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIGZ1bGZpbGxtZW50X3N0YXR1cyAgICAgICAgICAgICAgICBKc29uDQogICAgbGluZV9pdGVtcyAgICAgICAgICAgICAgICAgICAgICAgIEpzb24NCiAgICBub3RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHBob25lICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICBwcm9jZXNzZWRfYXQgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUNCiAgICByZWZlcnJpbmdfc2l0ZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHNvdXJjZV9uYW1lICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgc3VidG90YWxfcHJpY2UgICAgICAgICAgICAgICAgICAgIFN0cmluZz8NCiAgICB0YWdzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHRvdGFsX2Rpc2NvdW50cyAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgdG90YWxfbGluZV9pdGVtc19wcmljZSAgICAgICAgICAgIFN0cmluZz8NCiAgICB0b3RhbF9vdXRzdGFuZGluZyAgICAgICAgICAgICAgICAgU3RyaW5nPw0KICAgIHRvdGFsX3ByaWNlICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/DQogICAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lDQogICAgdXNlcl9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludA0KICAgIHVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCm1vZGVsIENvdXJpZXIgew0KICAgIGlkICAgICAgIEludCAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogICAgbmFtZSAgICAgU3RyaW5nDQogICAgZGF0YSAgICAgSnNvbg0KICAgIHNoaXBwZXJzIEpzb24NCiAgICB1c2VyX2lkICBJbnQNCiAgICB1c2VyICAgICBVc2VyICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQovLyBEZWZpbmUgYSBtb2RlbCB0byBob2xkIHRoZSB0ZW1wb3JhcnkgZGF0YQ0KbW9kZWwgVGVtcG9yYXJ5RGF0YSB7DQogICAgaWQgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogICAgZW1haWwgICAgIFN0cmluZw0KICAgIGRhdGEgICAgICBKc29uDQogICAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KDQogICAgVXNlciAgIFVzZXI/IEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICAgIHVzZXJJZCBJbnQ/DQp9DQoNCi8vIENSRUFURSBUQUJMRSAiRGFyYXpMb2dzIiAoDQovLyAic2VsbGVyX2lkIiBWQVJDSEFSIFBSSU1BUlkgS0VZLA0KLy8gImZldGNoZWRfZnJvbV9hcGkiIFZBUkNIQVIsDQovLyAib3JkZXJzX2FwcGVuZGVkX3NpbmdsZV9yZXF1ZXN0IiBWQVJDSEFSLA0KLy8gIm9yZGVyc19hcHBlbmRlZCIgVkFSQ0hBUiwNCi8vICJ0b3RhbF9zdG9yZV9vcmRlcnMiIFZBUkNIQVIsDQovLyAiZGFyYXpfdXJsIiBWQVJDSEFSDQovLyApOw0KDQptb2RlbCBEYXJhekxvZ3Mgew0KICAgIHNlbGxlcl9pZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgQGlkIEB1bmlxdWUNCiAgICBmZXRjaGVkX2Zyb21fYXBpICAgICAgICAgICAgICAgU3RyaW5nDQogICAgb3JkZXJzX2FwcGVuZGVkX3NpbmdsZV9yZXF1ZXN0IFN0cmluZw0KICAgIG9yZGVyc19hcHBlbmRlZCAgICAgICAgICAgICAgICBTdHJpbmcNCiAgICB0b3RhbF9zdG9yZV9vcmRlcnMgICAgICAgICAgICAgU3RyaW5nDQogICAgZGFyYXpfdXJsICAgICAgICAgICAgICAgICAgICAgIFN0cmluZw0KfQ0K",
  "inlineSchemaHash": "33ca305f30dd259ca43adef99dbe08d0673f82d0f68d9e0723632be35e3387d3"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joinedat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Courier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Courier\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DarazOrders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DarazOrders\",\"relationName\":\"DarazOrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShopifyOrders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShopifyOrders\",\"relationName\":\"ShopifyOrdersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TemporaryData\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TemporaryData\",\"relationName\":\"TemporaryDataToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DarazUnpaidTransactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DarazStoreTransactions\",\"relationName\":\"DarazStoreTransactionsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Store\":{\"dbName\":null,\"fields\":[{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_public_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StoreToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazOrders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voucher_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_option\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_discount_platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promised_shipping_times\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_original\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee_discount_seller\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_billing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_shipping\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DarazOrdersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazStoreTransactions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_ref_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fee_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paid_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WHT_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VAT_in_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DarazStoreTransactionsToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShopifyOrders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_additional_fees_set\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_discounts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_duties_set\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_total_tax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"financial_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fulfillment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referring_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtotal_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_discounts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_line_items_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_outstanding\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ShopifyOrdersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Courier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shippers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TemporaryData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TemporaryDataToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DarazLogs\":{\"dbName\":null,\"fields\":[{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetched_from_api\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders_appended_single_request\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders_appended\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_store_orders\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"daraz_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    VERCEL_POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['VERCEL_POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.VERCEL_POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

