import './App.css'
import HeroSection from './components/HomePage/HeroSection'
import Contact from './components/Contact/Contact' // Make sure this path is correct

import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes, useParams } from 'react-router-dom'
import HighTech from './routes/industries/HighTech'
import BankingAndFinance from './routes/industries/BankingAndFinance'
import LifeSciences from './routes/industries/LifeSciences'
import Blogs from './components/Blogs/Blogs'
import ProductsPage1 from './components/Banking&Finance/Products1/ProductsPage1'
import ProductsPage2 from './components/Banking&Finance/Products2/ProductsPage2'
import { ScrollProvider } from './context/ScrollContext'
import AML from './components/Banking&Finance/ProductAML/AML'
import ProductDetailthree from './components/Banking&Finance/ProductPago/ProductDetailthree'
import ProductDetails_4_page from './components/Banking&Finance/ProductDetails4/ProductDetails_4_Page'
import Cos_Page from './components/Banking&Finance/ProductDetails(COS)/Cos_Page'
import AboutUs from './components/Banking&Finance/AboutUs/AboutUsPage'
import Marketing from './components/Banking&Finance/Marketing/MarketPage'
import Sams_Page from './components/Banking&Finance/ProductDetails(SAMS)/SAMS_Page'
import PDPage9 from './components/Banking&Finance/ProductDetails9/PDPage9'
import ProductsPage7 from './components/Banking&Finance/Products7/ProductsPage7'
import GlossaryPage from './components/Banking&Finance/Glossary/GlossaryPage'


const App = () => {

  const IndustryPage = () => {
    const { industry } = useParams();
    if (industry === "banking-and-finance") return <BankingAndFinance />;
    if (industry === "high-tech") return <HighTech />;
    if (industry === "life-sciences") return <LifeSciences />;
    return <div>Industry not found</div>;
  }

  const ProductsPage = () => {
    const { productId } = useParams();
    if (productId === "1") return <ProductsPage1 />;
    if (productId === "2") return <ProductsPage2 />;
    if (productId ==="3")   return <AML/>;
    if (productId === "4") return <ProductDetailthree/>
    if (productId === "5") return <ProductDetails_4_page/>
    if (productId === "6") return <Cos_Page/>
    if (productId === "8") return <Sams_Page/>
    if (productId === "9") return <PDPage9/>
    if( productId === "7") return <ProductsPage7/>


    return <div>Product not found</div>;
  }
  return (
    <>
      <ScrollProvider>
        <div data-scroll-container>
          <Navbar />
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path="/industries/:industry" element={<IndustryPage />} />
            <Route path="/industries/banking-and-finance/products/:productId" element={<ProductsPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path='/glossary' element={<GlossaryPage />} />
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path= 'marketplace' element={<Marketing />} />
          </Routes>
        </div>
      </ScrollProvider>
    </>
  )
}

export default App