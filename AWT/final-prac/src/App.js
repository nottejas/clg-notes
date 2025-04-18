import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import StoreSummary from './StoreSummary';
import OrderHistory from './OrderHistory';
import CheckoutForm from './CheckoutForm';
import ProductCatalog from './ProductCatalog';



function App() {

  // const storeBranches = [
    // {name: "adadda", city: "Adad", revenue: 2323},
    // {name: "adadda", city: "Adad", revenue: 2323},
// ]
// 
// 
  // const pastOrds = [
    // {id: 1, name: "tejas", total: 1000},
    // {id: 2, name: "cr7", total: 1000},
  // ]
// 
// 

  return (
    <div>
      {/* <OrderHistory orders= {pastOrds} /> */}
      {/* <CheckoutForm /> */}
      <ProductCatalog />
    </div>  
  );
}

export default App;
