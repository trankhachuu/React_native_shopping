import { BeerModel } from "./beer"

test("can be created", () => {
  const instance = BeerModel.create({})

  expect(instance).toBeTruthy()
})
