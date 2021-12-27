import { BeerStoreModel } from "./beer-store"

test("can be created", () => {
  const instance = BeerStoreModel.create({})

  expect(instance).toBeTruthy()
})
