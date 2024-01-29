import Root from "../router/Root";
import ShoppingProvider from "../context/ShoppingCartContext";

function App() {
  
  return (
    <ShoppingProvider>
      <Root></Root>    
    </ShoppingProvider>
  );
}
export default App;