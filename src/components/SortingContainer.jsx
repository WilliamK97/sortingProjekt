/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import "./styles.css";

export default class SortingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            reversedArray: [],
            manyOfSameValueArray: [],
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
            array : array
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

    changeRandomArrayState = (arr) => {
        this.setState({
            randomArray : arr
        })
    }

    randomNumbersBetweenMinAndMax = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    bubbleSort = async (arr, arr2, arr3) => {
        console.log('bubblesort is running');
        const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
        var len = arr.length;
        console.log('array length: ', len);
        console.log(arr);
        console.log(arr2);
        console.log(arr3);
     
        for (var i = len-1; i>=0; i--){
                 console.log("i: ", i); 
                 for(var j = 1; j<=i; j++){
                    console.log("j: ", j);
                    if(arr[j-1]>arr[j]){
                        let temp = arr[j-1];
                        arr[j-1] = arr[j];
                        arr[j] = temp;
                        console.log("current array: ", arr);
                        this.setState({
                            array: arr
                        })
                    }
                    if(arr2[j-1]>arr2[j]){
                        let temp = arr2[j-1];
                        arr2[j-1] = arr2[j];
                        arr2[j] = temp;
                        console.log("current array: ", arr2);
                        this.setState({
                            reversedArray: arr2
                        })
                    }
                    if(arr3[j-1]>arr3[j]){
                        let temp = arr3[j-1];
                        arr3[j-1] = arr3[j];
                        arr3[j] = temp;
                        console.log("current array: ", arr3);
                        this.setState({
                            manyOfSameValueArray: arr3
                        })
                    }  
                }
                await delay(100);
            } 
            console.log("final array: ", arr)
            console.log("final array2: ", arr2)
            console.log("final array3: ", arr3)
    }

    render() {

        let renderRandomArray = this.state.array.map((item, key) => {
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

            <button onClick={() => this.bubbleSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray)}>Bubble Sort</button>
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




