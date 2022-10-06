import Layout from '../components/layout'
import Image from 'next/future/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda de música'}
    >
        <main className='contenedor'>
         <h2 className='heading'></h2>

         <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width ={1000} height={800} alt="Imagen sobre nosotros" />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices porttitor ligula sed rutrum. Aliquam consectetur erat arcu. In lectus orci, interdum non interdum sit amet, convallis ac ex. Donec nec ligula arcu. Duis aliquam non dui eu efficitur. Fusce dignissim, tortor sit amet sollicitudin ultrices, lacus metus facilisis nibh, ut laoreet erat urna sit amet tortor.</p>
              <p>

              Nulla nec tellus eu lorem tincidunt pulvinar egestas et orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus ipsum, gravida et tristique pellentesque, consequat id ex. Etiam in tellus vitae ligula interdum condimentum sit amet eu justo. </p>
            </div>
         </div>
        </main>
    </Layout>
    
  )
}
