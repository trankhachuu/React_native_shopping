import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const BeerStoreModel = types
  .model("BeerStore")
  .props({
    
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type BeerStoreType = Instance<typeof BeerStoreModel>
export interface BeerStore extends BeerStoreType {}
type BeerStoreSnapshotType = SnapshotOut<typeof BeerStoreModel>
export interface BeerStoreSnapshot extends BeerStoreSnapshotType {}
export const createBeerStoreDefaultModel = () => types.optional(BeerStoreModel, {})
