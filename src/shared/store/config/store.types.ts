import { store } from '@/shared/store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchFunc = () => AppDispatch;
