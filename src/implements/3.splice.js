// Slice implement method
const spliceImplement = (array, fromItem, toItem, ...addingItems) => {
  const goToItem =
    typeof toItem === 'undefined' ? array.length : fromItem + toItem

  let splicedItems = []

  for (let index = fromItem; index < goToItem; index++) {
      splicedItems.push(array[index])
      delete array[index]
      for (let j = index; j < array[index]; j++) {
        array[index] = array[index + 1]
      }
  }

  return splicedItems
}

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = spliceImplement(myFish, 1, 2, 'hovo', 'hakobik', 'vle')

console.log('DEFAULT_ARR::', myFish)
console.log('REMOVED::', removed)

// removed равен ["mandarin"]
// myFish равен ["angel", "clown", "drum", "sturgeon"]