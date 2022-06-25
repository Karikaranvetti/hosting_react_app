import { WonderPush } from 'react-wonderpush';
import { useEffect } from 'react';
import './App.css';
import SwitchButton from './SwitchButton'
import EventToTrack from './withWonderPush';
import { appendScript } from './appendScript';



// appendScript("../public/wonderpush-sdk-files/wonderpush-worker-loader.min.js");
function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "../public/wonderpush-worker-loader.min.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    // Wrap your app with our WonderPush component
    <WonderPush options={{ webKey: "eb6fafdce2dc916c828bd68ae984fa7b5d5e0826ac8ba33c420a5bc68bd08c89" }}>

      <div className="App">
        <h1>here my componet2</h1>
        <a href="#" onclick="WonderPush.subscribeToNotifications(event); return false;">Click me to subscribe</a>

      </div>
      <SwitchButton />
      {/* <EventToTrack/> */}
    </WonderPush>
  );
}

export default App;
