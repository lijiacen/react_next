// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";

// // import { reducer as homeReducer } from "../container/home/store";

// const reducer = combineReducers({
//   //   home: homeReducer,
//   //   header: headerReducer,
//   //   tran: tranReducer
// });
// //使用thunk.withExtraArgument 传递不同 axios实例给 redux-thunk,从而服务端，客户端调用不同axios instance 请求
// export const getStore = req => {
//   return createStore(
//     reducer,
//     applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
//   );
// };
