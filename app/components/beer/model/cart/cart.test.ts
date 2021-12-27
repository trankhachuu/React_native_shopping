import { CartModel } from "./cart"

test("can be created", () => {
  const instance = CartModel.create({})

  expect(instance).toBeTruthy()
})
