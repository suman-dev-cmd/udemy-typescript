import { useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../state/reducers";

export const useTypedSeletor:TypedUseSelectorHook<RootState> = useSelector;