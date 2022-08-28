export function increment() {
  return {
    type: "INCREMENT"
  }
}


export default function countReducer(count = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return count + 1
    default:
      return count
  }
}
