import React from 'react';
import Header from './components/header';
import Box from './components/box';
import { makeStyles } from '@material-ui/styles';
import Dog from './assets/dog.png';
import Location from './assets/location.jpg';
import Shipping from './assets/shipping.jpg';

const useStyles = makeStyles({
  content: {
    marginTop: '130px',
    display: 'flex',
    flexFlow: 'wrap',
    margin: 'auto',
    marginBottom: '30px',
    justifyContent: 'space-around',
    '@media(max-width: 600px)': {
      marginTop: '180px',
    }
  },
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <Header/>
        <div className={classes.content}>
          <Box 
            title={'Nuestros collares'} 
            text={'Lleva toda la información de tu mascota en nuestros collares con  código QR. ¡Podes obtener en tu mail la ubicación de tu mastoca cada vez que el código se escanea y cargá toda la información de contacto que quieras! '}
            image={Dog}
          />
          <Box 
            title={'¿Cómo funciona?'} 
            text={'Cada vez que nuestros códigos son escaneados enviaremos al mail registrado la ubicación desde la que se realizó. Existen dos posibilidades:'}
            image={Location}>
              <ul>
                <li>El usuario acepta compartir su ubicación, por lo que, la información será precisa.</li>
                <li>El usuario rechaza y se tomará un aproximado de la zona (a través de la antena que utilizó para conectarse).</li>
              </ul>
          </Box>
          <Box title={'¿Dónde entregamos?'} text={'Por el momento entregamos en Capital Federal. Igualmente no dudes en consultarnos por excepciones :)'} image={Shipping}/>
        </div>
    </div>
  );
}

export default App;

