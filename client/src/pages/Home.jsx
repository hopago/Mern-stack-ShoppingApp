import Announcement from "../components/Announcement"
import Category from "../components/Category"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import Slider from "../components/Slider"



function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
