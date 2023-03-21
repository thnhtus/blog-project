import { RootState } from "@/store";
import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export default useSelector;
