import { Cards } from './cards';
import Charts from './charts/charts';
import ProductInfo from './productInfo';
const Home = () => {
  return (
    <main className="main-container">
      <Cards  />
      <Charts />
      <ProductInfo/>
    </main>
  );
};
export default Home;
