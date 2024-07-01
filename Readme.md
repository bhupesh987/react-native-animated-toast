
## Getting Started

<img width=200 title="iOS Crop Circular" src="https://github.com/bhupesh987/react-native-swiper-button/blob/master/swipe.jpg">

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
import {useToastProvider} from 'react-native-custom-toast-view';
const {showToast} = useToastProvider();
showToast.showToast('Hello', 'success')
```

4. The showToast() function accepts two arguments: the first is the message, and the second is the type (“success” or “error”).

