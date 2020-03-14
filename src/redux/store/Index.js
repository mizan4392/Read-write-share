import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ReduxPromise from "redux-promise";
import storage from "redux-persist/lib/storage";
import rootReducer from '../reducers/Index';

// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const persistConfig = {
    key: "read-write-share",
    storage: storage,
    whitelist: ["login", "userData", "userData", "selectedMeetingForView"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(ReduxPromise))
);



export const persistor = persistStore(store);