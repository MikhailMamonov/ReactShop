import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootStateType, AppDispatch } from "../store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
