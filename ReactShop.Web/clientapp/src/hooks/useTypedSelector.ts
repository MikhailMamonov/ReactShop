import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootStateType, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
