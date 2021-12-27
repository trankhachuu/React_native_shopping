import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const BeerModel = types
  .model("Beer")
  .props({
    
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type BeerType = Instance<typeof BeerModel>
export interface Beer extends BeerType {}
type BeerSnapshotType = SnapshotOut<typeof BeerModel>
export interface BeerSnapshot extends BeerSnapshotType {}
export const createBeerDefaultModel = () => types.optional(BeerModel, {})
