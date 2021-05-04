
import React,{Fragment,useState} from 'react';
import Imagen from '../images/inuyasha.gif';




const Contenido  = () => {

    const [Anime,SeachAnime] = useState(``);



    const ChangeSeach = (e)=>{

        SeachAnime({

            ...Anime,

            [e.target.name] : e.target.value




        });



    }



    const BtnSeach = (e)=>{

        e.preventDefault();

        console.log('diste click');


    }



    return ( 

  
        <Fragment>

        <div>

         <img src={Imagen} className="image" />
        
        </div>
            
     
        <form

            onSubmit={BtnSeach}

        >

            


        <div className="container">




        <input 
        
        type="text"
        placeholder="Introduce el Anime"
        className="inputText"
        onChange={ChangeSeach}

        />
              

        <button 
        type="submit"
        className="btnBoton"
    
        
       >Buscar</button>



</div>

        </form>

        











        </Fragment>


     );
}
 
export default Contenido ;