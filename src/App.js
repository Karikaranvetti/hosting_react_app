import { WonderPush } from 'react-wonderpush';
  import './App.css';

function App() {
  return (
   // Wrap your app with our WonderPush component
   <WonderPush options = {{webKey: "eb6fafdce2dc916c828bd68ae984fa7b5d5e0826ac8ba33c420a5bc68bd08c89"}}>
   <div className="App">
     <h1>here my componet</h1>
   </div>
 </WonderPush>
  );
}         

export default App;
