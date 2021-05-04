import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
// import styles from './styles.css'


const App = () => { 
  return (
    <div>
    <Header />
    <div>
        <Menu />
        <Content />
    </div>
    <Footer />
  </div>
  )
}
  


export default App;
