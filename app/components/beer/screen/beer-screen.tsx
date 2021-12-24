import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View } from "react-native"
import { NavigatorParamList } from "../../../navigators"
import { ListMenu } from "../list-menu/list-menu"


export const BeerScreen: FC<StackScreenProps<NavigatorParamList, "beer">> = observer(function BeerScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="beer" style={{ flex: 1 }}>
      <ListMenu />
    </View>
  )
})
