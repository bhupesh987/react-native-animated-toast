import {ToastProvider as ToastWrapper, useToastProvider as toastContext} from './src/ToastContext';

declare module 'react-native-custom-toast-view'{
    export const ToastProvider = ToastWrapper;
    export const useToastProvider = toastContext;
};