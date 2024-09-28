import TopNews from '../../components/topNews/TopNews'
import './home.css'
import WorldCard from './../../components/WorldCard/WorldCard';

function Home() {
  return (
    <div className="home">
      <TopNews/>
      <WorldCard/>
    </div>
  )
}

export default Home