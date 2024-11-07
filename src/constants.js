// const BASE_URL_ONE = "http://192.168.99.141:8080/user"; //AYUSH
// const BASE_URL_TWO = "http://192.168.99.141:8088/user"; //AYUSH

// api urls -

//const BASE_URL_ONE = "http://192.168.1.8:8090"
// const BASE_URL_TWO = "http://192.168.1.8:8084"
 const BASE_URL_ONE = "http://localhost:8081";
 const BASE_URL_TWO = "http://localhost:8084";
 const BASE_URL_THREE = "http://localhost:8087";

// export const SOCKET_BASE_URL = "ws://192.168.99.141:8888";
// export const SOCKET_BASE_URL = "ws://localhost:8888";

export const URLS = {
  SIGN_UP: `${BASE_URL_ONE}/user/signup`,
  VERIFY_OTP: `${BASE_URL_ONE}/user/validateotp`,
  ADD_PASSWORD: `${BASE_URL_ONE}/user/createPassword`,
  LOGIN: `${BASE_URL_TWO}/user/session`,
  LOGOUT: `${BASE_URL_TWO}/session/logout`,
  FORGOT_PASSWORD: `${BASE_URL_ONE}/user/forgotpassword`,
  OTP_FORGOT_PASS: `${BASE_URL_ONE}/user/validateOTPForForgotPassword`,
  CHANGE_PASSOWRD: `${BASE_URL_ONE}/user/changePassword`,
  RESEND_OTP: `${BASE_URL_TWO}/user/resendotp`,
  DASHBOARD: `${BASE_URL_THREE}/user/dashBoard`,
  PRODUCT_DETAILS: `${BASE_URL_THREE}/product/details`,
  PRODUCT_FILTER: `${BASE_URL_THREE}/filter/product`,
  CART: `${BASE_URL_THREE}/user/cart/view`,
  CART_INCREASE: `${BASE_URL_THREE}/user/cart/increase`,
  CART_DECREASE: `${BASE_URL_THREE}/user/cart/decrease`,
  CART_REMOVE: `${BASE_URL_THREE}/user/cart/remove`
};

// common value contants
export const WEBSOCKET_PROTOCOL = "OSC-WebSocket-Protocol";
export const DEVICE_TYPE = "Web";

// Product Types
export const FEATURED = "Featured Products";
export const CATEGORIES = "Categories";
export const SIMILAR = "Similar Products";
export const RECENTLYVIEWED = "Recently Viewed Products";
export const CART = "Cart"