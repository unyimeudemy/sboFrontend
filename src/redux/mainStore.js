import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.js";
import tabReducer from "../redux/tabSlice.js";
import safeWorkPractiseReducer from "../redux/safeWorkPractiseSlice.js";
import recommendationReducer from "../redux/recommendationSlice.js";
import departmentReducer from "../redux/departmentSlice.js";
import unsafeWorkPractiseReducer from "../redux/unsafeWorkPractiseSlice.js";
import timeReducer from "../redux/filter-components-slices/timeSlice.js";
import actionOrConditionReducer from "../redux/filter-components-slices/actionOrConditionSlice.js";
import categoryReducer from "../redux/filter-components-slices/categorySlice.js";
import refreshReducer from "../redux/filter-components-slices/refreshSBOSlice.js";
import departmentPopUpReducer from "../redux/filter-components-slices/departmentSlice.js";
import departmentStaffPopUpReducer from "../redux/filter-components-slices/departmentStaffSlice.js";
import staffIDReducer from "../redux/filter-components-slices/staffIDSlice.js";
import visitorReducer from "../redux/filter-components-slices/visitorSlice.js";
import plantLocationReducer from "../redux/filter-components-slices/plantLocationSlice.js";
import categoryDataReducer from "../redux/filterDataSlices/categoryDataSlice.js";
import departmentDataReducer from "../redux/filterDataSlices/departmentDataSlice.js";
import departmentStaffDataReducer from "../redux/filterDataSlices/departmentStaffDataSlice.js";
import staffIDDataReducer from "../redux/filterDataSlices/staffIDDataSlice.js";
import timeDataReducer from "../redux/filterDataSlices/timeDataSlice.js";
import titleDataReducer from "../redux/filterDataSlices/titleDataSlice.js";
import visitorDataReducer from "../redux/filterDataSlices/visitorDataSlice.js";
import plantLocationDataReducer from "../redux/filterDataSlices/plantLocationDataSlice.js";
import SBOReducer from "../redux/SBOSlice.js";
import filterQueryReducer from "../redux/filterQuerySlice.js";
import filesReducer from "../redux/filesSlice.js";
import clickedProfileReducer from "../redux/clickedProfileSlice.js";
import addAudioProgressReducer from "../redux/addFilesProgressSlices/addAudioProgressSlice.js";
import addVideoProgressReducer from "../redux/addFilesProgressSlices/addVideoProgressSlice.js";
import addImageProgressReducer from "../redux/addFilesProgressSlices/addImageProgressSlice.js";
import sboFormCheckReducer from "../redux/sboFormCheckSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  recommendation: recommendationReducer,
  safeWorkPractise: safeWorkPractiseReducer,
  unsafeWorkPractise: unsafeWorkPractiseReducer,
  tab: tabReducer,
  department: departmentReducer,
  time: timeReducer,
  actionOrCondition: actionOrConditionReducer,
  category: categoryReducer,
  departmentPopUp: departmentPopUpReducer,
  departmentStaffPopUp: departmentStaffPopUpReducer,
  staffID: staffIDReducer,
  visitor: visitorReducer,
  plantLocation: plantLocationReducer,
  SBO: SBOReducer,
  filterQuery: filterQueryReducer,
  categoryDataName: categoryDataReducer,
  departmentDataName: departmentDataReducer,
  departmentStaffDataName: departmentStaffDataReducer,
  staffIDDataName: staffIDDataReducer,
  timeDataName: timeDataReducer,
  titleDataName: titleDataReducer,
  visitorDataName: visitorDataReducer,
  plantLocationDataName: plantLocationDataReducer,
  refresh: refreshReducer,
  files: filesReducer,
  clickedProfile: clickedProfileReducer,
  addAudioProgress: addAudioProgressReducer,
  addVideoProgress: addVideoProgressReducer,
  addImageProgress: addImageProgressReducer,
  sboFormCheck: sboFormCheckReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
