import Image from 'next/image'
import { Header } from './Header/Header'
import Banner from "./image/BANNER.jpg" 

export default function Home() {
  return (
    <div className='app'>
      <Header></Header>
      <section className='info'>
        <div className='whats'>
          <p>(88)98789999</p>
        </div>
        <div className='redes'>
          
        </div>
      </section>
      <section className='banner'>
        
      </section>
    </div>
  )
}
