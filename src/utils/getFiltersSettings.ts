import { store } from "store/redux.config";

export function getFiltersSettings() {
  let settings = store.getState();
  return settings.filters;
}
