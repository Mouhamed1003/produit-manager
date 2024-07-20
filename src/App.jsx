import { Input } from "./Components/Form/Input.jsx";
import { Checkbox } from "./Components/Form/Checkbox.jsx";
import { ProductCategoryRow } from "./Components/Produits/ProductCategoryRow.jsx";
import { ProductRow } from "./Components/Produits/ProductRow.jsx";
import { useState } from "react";


const PRODUCTS = [
  {category : 'Fruits', price : '10.00 $ /kg', stocked : true, name : 'Pommes'},
  {category : 'Fruits', price : '05.00 $ /kg', stocked : true, name : 'Bananes'},
  {category : 'Fruits', price : '03.00 $ /kg', stocked : false, name : 'Oranges'},
  {category : 'Vegetables', price : '15.00 $ /kg', stocked : true, name : 'Fraises'},
  {category : 'Vegetables', price : '08.00 $ /kg', stocked : false, name : 'Manques'},
  {category : 'Vegetables', price : '13.00 $ /kg', stocked : true, name : 'Cocos'},
  {category : 'Vegetables', price : '13.00 $ /kg', stocked : false, name : 'plantes'},
  {category : 'Vegetables', price : '13.00 $ /kg', stocked : true, name : 'poivrons'}
]


function App () {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  const visibleProducts = PRODUCTS.filter((product)=> {
    if(showStockedOnly && !product.stocked){
      return false
    }
    if(search && !product.name.includes(search)){
      return false
    }
    return true
  })

  return <div className="container my-3">
    <h1>Au Marché Hebdomadaire</h1>
  <SearchBar 
    search={search}
    onSearchChange={setSearch}
    showStockedOnly={showStockedOnly} 
    onStockedOnlyChange={setShowStockedOnly}
  />
  <ProductTable products={visibleProducts} />
</div>

}


function SearchBar ({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  
  return <div>
    <div className="mb-4"></div>
      <Input 
        value={search} 
        onChange = {onSearchChange} 
        placeholder = "Rechercher..." 
      />
      <input type="week" className="form-range mt-4 bg-light" min={0} max={10} />
      <br/><Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange = {onStockedOnlyChange} 
        label= "N'afficher que les produits en stock" 
      /><br/>
  
    </div>
}

function ProductTable ({products}) {
  const tableStyle = {
    boxShadow: '1px 1px 20px 3px aqua', // Box-shadow bleu clair
    borderRadius: '10px'
};

  const rows = [];
  let lastCategory = null;
  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  

  return <table className="table table-dark " style={{...tableStyle}}>
    <thead>
      <tr>
        <th  className="bg-primary">Nom</th>
        <th  className="bg-primary">Prix</th>
      </tr>
    </thead>
    <tbody >
        {rows}
    </tbody>
  </table>
}

export default App

