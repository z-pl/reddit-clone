export function toggleLoading() {
  return {
    type: "TOGGLE_LOADING"
  }
}

export default function loadingReducer(toggle=false, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return !toggle
    default:
      return toggle
  }
}
