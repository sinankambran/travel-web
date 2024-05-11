import React, {useEffect}  from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Let me paste the array named data

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: '  New zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activaties.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: ' Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'A consensus among archaeologists is that Pachacutec ordered the construction of the royal estate for his use as a retreat, most likely after a successful military campaign.' 
  },
{
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'The Great Barrier Reef is a distinct feature of the East Australian Cordillera division. It reaches from Torres Strait (between Bramble Cay, its northernmost island, and the south coast of Papua.'
},
  {
  id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description:'Cappadocia, ancient district in east-central Anatolia, situated on the rugged plateau north of the Taurus Mountains, in the centre of present-day Turkey.'

  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Maxico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'Guanajuato is a municipality in central Mexico and the capital of the state of the same name12. It is located in a narrow valley, which makes its streets narrow and winding1.'

  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'The Cinque Terre are a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia Province, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola.'

  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'within the ancient Khmer capital city of Angkor, it is considered as the largest religious structure in the world by Guinness World Records.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:' It is an extensive complex of buildings and gardens that includes subsidiary tombs, waterworks infrastructure, and a .'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description:' The island has a mountainous interior of lush forests and clear lakes that complement the gorgeous beaches, which ring the island.'
  },


]






const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (  
    <section className='main container section'> 

    <div className="secTitle">
      <h3  data-aos='fade-right' className="title">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
    {
      Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
        return(
          <div key={id}  data-aos='fade-up' className='singleDestination'>
         
            <div className='imageDive'>
              <img src={imgSrc} alt={destTitle} />
            </div>

     
          

            <div className="cardInfo">
              <h4 className="destTitle">
                {destTitle}
              </h4>
              <span className='continent flex'>
                <HiOutlineLocationMarker className='icon' />
                <span className="name">{location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>

          </div>

        )

      })
    }

    </div>

    </section>
  )
}

export default Main
