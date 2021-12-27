import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CartModel = types
  .model("Cart")
  .props({
    name: types.maybe(types.string),
    price: types.maybe(types.number),
    quantily: types.maybe(types.number),
    image: types.maybe(types.string),
    typeBeer: types.maybe(types.number),
    title: types.maybe(types.string),
    description: types.maybe(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type CartType = Instance<typeof CartModel>
export interface Cart extends CartType { }
type CartSnapshotType = SnapshotOut<typeof CartModel>
export interface CartSnapshot extends CartSnapshotType { }
export const createCartDefaultModel = () => types.optional(CartModel, {})
