import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CartStoreModel = types
  .model("CartStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type CartStoreType = Instance<typeof CartStoreModel>
export interface CartStore extends CartStoreType {}
type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>
export interface CartStoreSnapshot extends CartStoreSnapshotType {}
export const createCartStoreDefaultModel = () => types.optional(CartStoreModel, {})
