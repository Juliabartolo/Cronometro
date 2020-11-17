import React, {Component} from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';


class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        numero: 0,
        botao: 'Inicio',
        ultimo: null
      };

      //variavel do time do relogio
      this.timer = null;

      this.vai = this.vai.bind(this);
      this.limpar = this.limpar.bind(this);
    }
    
    vai(){

      if(this.timer != null){
        //pausa do timer
        clearInterval(this.timer);
        this.timer = null;
        this.setState({botao:'Despausar'});
        
      } else {

       this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({botao: 'Pausar'});
      this.setState({ultimo: null});
      }
    }

    limpar(){
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
      }

      this.setState({
        ultimo: this.state.numero,
        numero : 0,
        botao:'Inicio',
         
      })
    }

    render(){
    return(
    <View style={styles.container}>

      <Image source={require('./src/cronometro.png')}
      styles={styles.cronometro}
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}>
            {this.state.botao}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>Zerar</Text>
        </TouchableOpacity>

       

      </View>
          <View style={styles.areaUltima}>
              <Text style={styles.textoCorrida}>
                {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(1) + 's' : ''}
              </Text>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5A9F2'
  },
  timer:{
    marginRight: 15,
    marginTop: -160,
    color: '#FFF',
    fontSize: 70,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 90, 
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9 
  },

  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#F5A9F2'
    
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'#FFF'
  }
});


export default App;

