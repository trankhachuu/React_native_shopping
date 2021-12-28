import { BeerSnapshot } from './../beer/beer';
import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { Cart, CartModel } from "../cart/cart";
import { CartSnapshot } from './../cart/cart';

/**
 * Model description here for TypeScript hints.
 */
export const CartStoreModel = types
  .model("CartStore")
  .props({
    cartBeers: types.maybeNull(types.array(CartModel)),
    cartBeer: types.maybeNull(CartModel),
    id: types.maybe(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveBeers: (beerSnapshots: BeerSnapshot[]) => {
      self.cartBeers.replace(beerSnapshots)
    },
  }))
  .actions((self) => ({
    setCartBeer(beerSelected) {
      self.cartBeer = { ...beerSelected }
    },

    addCartBeer(cartBeer: Cart) {
      let check: boolean = true;
      if (self.cartBeers && self.cartBeers.length > 0) {
        self.cartBeers.forEach(e => {
          if (e.name === cartBeer.name && e.typeBeer === cartBeer.typeBeer) {
            e.price += cartBeer.price;
            e.quantily += cartBeer.quantily;
            check = false;
          }
        })
      }
      if (check) {
        self.cartBeers.push(cartBeer);
      }
      // const cartTemp = [...self.cartBeers]
      // cartTemp.push(cartBeer);
      // console.log('cart: ', cartTemp)
      // self.saveBeers(cartTemp)
      // // self.cartBeers.push(cartBeer);
    },

    getCartBeer() {
      return self.cartBeer;
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type CartStoreType = Instance<typeof CartStoreModel>
export interface CartStore extends CartStoreType { }
type CartStoreSnapshotType = SnapshotOut<typeof CartStoreModel>
export interface CartStoreSnapshot extends CartStoreSnapshotType { }
export const createCartStoreDefaultModel = () => types.optional(CartStoreModel, {})
