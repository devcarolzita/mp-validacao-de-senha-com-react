import Forms from "./Forms"
import bgImage from '../assets/background.png'
const Home = () => {
  return (
    <main className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{backgroundImage: `url(${bgImage})`}}>
      <Forms />
    </main>
  )
}

export default Home
