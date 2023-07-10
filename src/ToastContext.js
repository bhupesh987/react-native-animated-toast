import React, {useContext, useState} from 'react';
import AnimatedToast from './AnimatedToast';

export const ToastContext = React.createContext({
  toastVisible: false,
  showToast: () => {},
});

export const ToastProvider = ({children}) => {
  const [toastVisible, setShowToast] = useState(false);

  return (
    <ToastContext.Provider
      value={{
        toastVisible,
        showToast: setShowToast,
      }}>
      <AnimatedToast />
    </ToastContext.Provider>
  );
};

export const useToastProvider = () => {
  const {toastVisible, showToast} = useContext(ToastContext);
  return {toastVisible, showToast};
};
