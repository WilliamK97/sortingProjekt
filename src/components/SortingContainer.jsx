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
            leftBarIndex: 0,
            rightBarIndex: 1,
            barValue: 0,
            clickedOnBubble: false,
            completedBars: 0
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

    resetArrays = () => {
        this.randomArray();
        this.manyOfSameValueArray();
        this.reversedArray();
        this.setState({
            barValue : 0,
            clickedOnBubble : false
        })
    }


    randomNumbersBetweenMinAndMax = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    //ändra färg på de stolpar som är klara
    //när i är lägre än 11 så är stolpen till höger klar


    bubbleSort = async (arr, arr2, arr3) => {
        console.log('bubblesort is running');
        this.setState({clickedOnBubble : true})
        const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
        var len = arr.length

        console.log('array length: ', len);
     
        for (var i = len-1; i>=0; i--){ 
            var left = 0;
            var right = 1
            this.setState({
                leftBarIndex: left,
                rightBarIndex: right
            })
            if(i < 11) {
                console.log("i är minde än 11")
                this.setState({
                    completedBars: i 
                })
                console.log(this.state.completedBars)
            }
            console.log("i",i, "left:", left, "right:", right)
                for(var j = 1; j<=i; j++){
                    j === 1 ? left = 0 : left++
                    j === 1 ? right = 1 : right++
                    this.setState({
                        leftBarIndex: left,
                        rightBarIndex: right
                    })
                    console.log("j",j, "left:", left, "right:", right)
                    console.log(arr)
                    console.log("nu jämförs stapel: värde:",arr[j-1]," index",left, " mot stapel värde:",arr[j], " index", right)
                    if(arr[j-1]>arr[j]){
                        console.log("vänster är större än höger... här byter dom 2 staplarna som jämförs plats");
                        let temp = arr[j-1];
                        arr[j-1] = arr[j];
                        arr[j] = temp;
                        this.setState({
                            array: arr
                        })
                        console.log("uppdaterad arr: ", arr)
                    }
                    if(arr2[j-1]>arr2[j]){
                        let temp = arr2[j-1];
                        arr2[j-1] = arr2[j];
                        arr2[j] = temp;
                        this.setState({
                            reversedArray: arr2
                        })
                    }
                    if(arr3[j-1]>arr3[j]){
                        let temp = arr3[j-1];
                        arr3[j-1] = arr3[j];
                        arr3[j] = temp;
                        this.setState({
                            manyOfSameValueArray: arr3
                        })
                    }
                    console.log("väster stapeln var lägre än höger... ny jämförelse")
                await delay(50);
            }
        }
        this.setState({
            clickedOnBubble: false
        })
    }

    onHover = (value) => {
        this.setState({
            barValue : value
        })
    }
    
    //om key är samma som completedBars ska dom barsen bli gröna 
    render() {
        let renderRandomArray = this.state.array.map((item, key) => {
           return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
           ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
           : <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
        })

        let renderReversedArray = this.state.reversedArray.map((item, key) => {
            return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
            ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
            : <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
        })

        let manyOfSameValueArray = this.state.manyOfSameValueArray.map((item, key) => {
            return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
            ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
            : <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'black', height: `${item}px`}}></div>
        })

        let renderBarValue = this.state.barValue === 0 ? <p className="barValue">Hover over the bars to see its value</p> : <p className="barValue">{this.state.barValue}</p> 

        return (
            <>

            <h1>Sorting Project</h1>

            <button onClick={() => this.bubbleSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray)}>Bubble Sort</button>
            <button onClick={this.resetArrays}>New Arrays</button>

            <div className="allArrays">
                {renderBarValue}
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




