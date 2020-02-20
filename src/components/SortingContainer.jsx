import React, { Component } from 'react'
import "./styles.css";

export default class SortingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          randomArray: [],
          reversedArray: [],
          manyOfSameValueArray: []
        };
    }

    componentDidMount = () => {
        this.randomArray();
        this.reversedArray();
        this.manyOfSameValueArray();
    }

    randomArray = () => {
        let array = [];
        for (let i = 0; i < 12; i++) {
          array.push(this.randomNumbersBetweenMinAndMax(5, 100));
        }
        this.setState({
            randomArray : array
        });
    }

    resetArrays = () => {
        this.randomArray();
        this.manyOfSameValueArray();
        this.reversedArray();
    }

    reversedArray = () => {
        let array = [];
        for (let i = 0; i < 12; i++) {
          array.push((i * 8) + 3);
        }
        array.reverse();
        this.setState({
            reversedArray : array
        });
    }

    manyOfSameValueArray = () => {
        let array = [];
        let randomNumbOne = Math.floor(Math.random() * 40) + 30
        let randomNumbTwo = Math.floor(Math.random() * 20) + 10
        let randomNumbThree = Math.floor(Math.random() * 50) + 50
        for (let i = 0; i < 4; i++) {
            array.push(randomNumbOne);
            array.push(randomNumbTwo);
            array.push(randomNumbThree);
        }
        this.setState({
            manyOfSameValueArray : array
        });
    }

    randomNumbersBetweenMinAndMax = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    bubbleSort = (arr) => {
        console.log('bubblesort is running');
        var len = arr.length;
        console.log('array length: ', len);
        console.log(arr);
        for (var i = len-1; i>=0; i--){
            console.log("i: ", i);
            console.log("första iterationen klar, jämför alla element en gång till")
            for(var j = 1; j<=i; j++){
                console.log("j: ", j);
                if(arr[j-1]>arr[j]){
                    console.log("om compare value vänster är större än compare value höger körs detta")
                    console.log("compare value vänster: ",arr[j-1]);
                    console.log("compare value höger: ", arr[j]);
                    var temp = arr[j-1];
                    console.log("temp är compare value vänster: ",temp)
                    console.log("nu byter vänster och högervärdet plats");
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                    console.log("nu ser den nya arrayen efter bytet ut så här: ", arr)
                    
                }
                console.log("vänster värdet var lägre än höger... går till nästa jämförelse");
            }
        }
        console.log("final arr: ",arr)
        return arr;
    }

    render() {

        let renderRandomArray = this.state.randomArray.map((item, key) => {
            return (
                <div className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
            ) 
        })

        let renderReversedArray = this.state.reversedArray.map((item, key) => {
            return (
                <div className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
            ) 
        })

        let manyOfSameValueArray = this.state.manyOfSameValueArray.map((item, key) => {
            return (
                <div className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
            ) 
        })

        return (
            <>

            <h1>Sorting Project</h1>

            <button onClick={() => this.bubbleSort(this.state.randomArray)}>Bubble Sort</button>
            <button onClick={this.resetArrays}>New Arrays</button>

            <div className="allArrays">
                <p>Random Array</p>
                <div className="randomArray">
                    {renderRandomArray}
                </div>

                <p>Reversed Array</p>
                <div className="reversedArray">
                    {renderReversedArray}
                </div>

                <p>Many Of Same Value Array</p>
                <div className="manyOfSameValueArray">
                    {manyOfSameValueArray}
                </div>  
                        
            </div>

            <div className="explainingGifs">
                <h4>Bubble Sort Gif</h4>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif" alt="bubble sort gif"/>
            </div>

            </>
        )
    }
}


