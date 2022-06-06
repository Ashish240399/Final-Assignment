
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Products/Product';

function App() {
  const pageNum=useSelector((store)=>store.page.page)
  //console.log(pageNum)
  let page="/";
  let pages=`?page=${pageNum}`
  var ans="";
  if(pageNum>1){
    ans=pages
  }
  console.log(ans)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product/>}>
          <Route path={ans} element={<Product/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
