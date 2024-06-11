import { createStore } from "redux";
import Rootreducer from "./services/redusers/index";

const store = createStore(Rootreducer);

export default store;