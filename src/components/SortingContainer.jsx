/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import "./styles.css";
import BubbleSort from "./BubbleSort" 

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
                    completedBars: i + 1
                })
                console.log("complete bars: ", this.state.completedBars)
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

    insertionSort = (inputArr, inputArr2, inputArr3) => {
        console.log("initial random array in insertionsort function: ",inputArr)
        console.log("initial reversed array in insertionsort function: ",inputArr2)
        console.log("initial few uniques array in insertionsort function: ",inputArr3)
        let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let key = inputArr[i];
            let key2 = inputArr2[i];
            let key3 = inputArr3[i];
            let j = i - 1;
            
            //random array
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                j = j - 1;
            }
            inputArr[j + 1] = key;

            //reversed array
            while (j >= 0 && inputArr2[j] > key2) {
                inputArr2[j + 1] = inputArr2[j];
                j = j - 1;
            }
            inputArr2[j + 1] = key2;

            //few uniques array
            while (j >= 0 && inputArr3[j] > key3) {
                inputArr3[j + 1] = inputArr3[j];
                j = j - 1;
            }
            inputArr3[j + 1] = key3;
        }
        console.log("insertionSort sort final random array: ", inputArr)
        console.log("insertionSort sort final reversed array: ", inputArr2)
        console.log("insertionSort sort final few uniques array: ", inputArr3)
        return inputArr;
    }

    selectionSort = (arr, arr2, arr3) => {
        console.log("initial array in selectionSort function: ", arr)
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            let min = i;

            //random array
            for (let j = i + 1; j < len; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }

            //reversed array
            for (let j = i + 1; j < len; j++) {
                if (arr2[min] > arr2[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr2[i];
                arr2[i] = arr2[min];
                arr2[min] = tmp;
            }

            //few uniques array
            for (let j = i + 1; j < len; j++) {
                if (arr3[min] > arr3[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr3[i];
                arr3[i] = arr3[min];
                arr3[min] = tmp;
            }

        }
        console.log("selection sort final random array: ", arr)
        return arr;
    }

    onHover = (value) => {
        this.setState({
            barValue : value
        })
    }

    //om key är samma som completedBars ska dom barsen bli gröna == className={key === this.state.completedBars ? "oneItemCompleted" : "oneItem"}
    render() {
        let renderRandomArray = this.state.array.map((item, key) => {
           return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
           ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
           : <div onMouseOver={() => this.onHover(item)} className={key === this.state.completedBars ? "oneItemCompleted" : "oneItem"} key={key} style={{backgroundColor: 'gray',height: `${item}px`}}></div>
        })

        let renderReversedArray = this.state.reversedArray.map((item, key) => {
            return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
            ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
            : <div onMouseOver={() => this.onHover(item)} className={key === this.state.completedBars ? "oneItemCompleted" : "oneItem"} key={key} style={{backgroundColor: 'gray', height: `${item}px`}}></div>
        })

        let manyOfSameValueArray = this.state.manyOfSameValueArray.map((item, key) => {
            return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
            ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
            : <div onMouseOver={() => this.onHover(item)} className={key === this.state.completedBars ? "oneItemCompleted" : "oneItem"} key={key} style={{backgroundColor: 'gray', height: `${item}px`}}></div>
        })

        let renderBarValue = this.state.barValue === 0 ? <p className="barValue">Hover over the bars to see its value</p> : <p className="barValue">{this.state.barValue}</p> 

        return (
            <>

            <h1>Sorting Project</h1>

            <button onClick={() => this.bubbleSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray)}>Bubble Sort</button>
            <button onClick={() => this.insertionSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray)}>Insertion Sort</button>
            <button onClick={() => this.selectionSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray)}>Selection Sort</button>
            <button onClick={this.resetArrays}>New Arrays</button>

            <BubbleSort />

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
                <h4>Insertion Sort Gif</h4>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif" alt="Incertion sort gif"/>
                <h4>Selection Sort Gif</h4>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif" alt="selection sort gif"/>
            </div>

            </>
        )
    }
}




