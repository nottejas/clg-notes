import logo from "./logo.svg";
import "./App.css";
import Menu from "./Menu";
import StoreSummary from "./StoreSummary";
import OrderHistory from "./OrderHistory";
import CheckoutForm from "./CheckoutForm";
import ProductCatalog from "./ProductCatalog";
import FitMenu from "./FiltMenu";
import OrderTable from "./OrderTable";
import EventManagement from "./EventManagement";
import LabTestReports from "./LabTestReports";
import FlightManagement from "./FlightManagement";
import ClothingStore from "./ClothingStore";
import OfficeSupplyPortal from "./OfficeSupplyPortal";

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
      {/* <ProductCatalog /> */}
      {/* <OrderHistory /> */}
      {/* <FitMenu /> */}
      {/* <StoreSummary
        branches={[
          { storeName: "ABC Mart", city: "Mumbai", revenue: 500000 },
          { storeName: "XYZ Mart", city: "Pune", revenue: 350000 },
        ]}
      /> */}
      <OrderTable />
      {/* <EventManagement /> */}
      {/* <LabTestReports /> */}
      {/* <FlightManagement /> */}
      {/* <ClothingStore /> */}
      {/* <OfficeSupplyPortal /> */}
    </div>

  );
}

export default App;
