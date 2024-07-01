
## Getting Started

### Installation
```bash
npm i react-native-custom-toast-view --save
```

## Usage

1. Import package
```javascript
import {ToastProvider} from 'react-native-custom-toast-view';
```
2. Import the Provide and wrap the application component (in App.js)
```javascript
const Root = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);
```
3. Now, you can use the package like this (on any action)
```javascript
import {useToastProvider} from 'react-native-custom-toast-view';   // import package
const {showToast} = useToastProvider();                            // use provider
showToast('Toast notification message', 'success')                 // use method direction
```

4. The showToast() function accepts two arguments: the first is the message, and the second is the type (“success” or “error”).
  <img width=300 title="Success toast image" src="https://github.com/bhupesh987/react-native-animated- 
    toast/blob/main/src/images/success.png">
  <img width=300 title="Error toast image" src="https://github.com/bhupesh987/react-native-animated- 
    toast/blob/main/src/images/error.png">
