import { WonderPush } from 'react-wonderpush';
  import './App.css';
  import SwitchButton from './SwitchButton'
  import EventToTrack from './withWonderPush';

 
function App() {

  // withWonderPush(SwitchButton);
  return (
   // Wrap your app with our WonderPush component
   <WonderPush options = {{webKey: "eb6fafdce2dc916c828bd68ae984fa7b5d5e0826ac8ba33c420a5bc68bd08c89" }}>
  
   <div className="App">
     <h1>here my componet</h1>
     <a href="#" onclick="WonderPush.subscribeToNotifications(event); return false;">Click me to subscribe</a>

   </div>
   <SwitchButton/>
   {/* <EventToTrack/> */}
 </WonderPush>
  );
}         

export default App;
