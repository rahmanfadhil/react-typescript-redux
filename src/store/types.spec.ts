import { INCREMENT, DECREMENT } from "./types";
import store from "./index";

describe("Counter Reducer", () => {
  it("Should increase counter", () => {
    const currentState = store.getState();
    store.dispatch({ type: INCREMENT });
    expect(store.getState().counter).toBe(currentState.counter + 1);
  });
  it("Should decrease counter", () => {
    const currentState = store.getState();
    store.dispatch({ type: DECREMENT });
    expect(store.getState().counter).toBe(currentState.counter - 1);
  });
});