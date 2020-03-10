import React from 'react';
const url = " https://swapi.co/api/people/1"
export default class App extends React.Component {

    constructor(props) {
        super(props)
         this.state = {
            character: {},
            characterFilms: []
         }             
    }
    componentDidMount(){
        this.getData()
    }

    
    getData= async()=> {
        try{

            const response = await fetch(url)
            const data = await response.json()

            this.setState({
                character : data,
            })
            const filmsUrls = data.films

            for(const url of filmsUrls){
                const filmResponse = await fetch(url)
                const filmData = await filmResponse.json()
                this.setState(prevState=> {
                    return{
                     ...prevState,
                     characterFilms:[...prevState.characterFilms, filmData]
                 } 
            }) 
          }
        }
        catch(err) {
            console.log(err);
            
            this.setState ({
                err:true,
                errorMasage: err.message,
            })
        }
    }

    render() {
        

        const films = this.state.characterFilms.map((film,index) =>{
            return <p key={index}> {film.title} </p>
        })

        return (
            <div>                
            <h2>Name:</h2>
            <p> {this.state.character.name}</p>
            <h2>Height</h2>
            <p> {this.state.character.height}</p>
            <h2>Homeworld</h2>
            <p> {this.state.character.homeworld}</p>
            <h2>Birth year</h2>
            <p> {this.state.character.birth_year}</p>
            <h2>Films:</h2>
            {films}
            </div>
        )
    }

}

