import assert from "assert/strict";
import test from "node:test";

import { orderPizza } from "./index";

test.before(async (t) => {
  console.log("Starting tests!");
});

test("can order a pizza", async (t) => {
  let result = await orderPizza({
    peppers: false,
    pineapple: false,
    bbqSauce: false,
    cheeseType: "swiss",
  });

  assert.strictEqual(result.message.includes("you ordered a pizza"), true);
  assert.strictEqual(result.message.includes("swiss"), true);
});
