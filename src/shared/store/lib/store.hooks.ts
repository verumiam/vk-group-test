import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { DispatchFunc, RootState } from '@/shared/store';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
