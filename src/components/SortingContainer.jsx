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
            almostSortedArray: [],
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
        this.almostSortedArray();
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

    almostSortedArray = () => {
        let array = [];
        let randomNumberBetween2And5 = Math.floor(Math.random() * 8) + 1  
        for (let i = 0; i < 12; i++) {
            array.push(Math.floor(Math.random() * i * randomNumberBetween2And5) + 50 );
        }
        this.setState({
            almostSortedArray: array
        }) 
    }

    resetArrays = () => {
        this.randomArray();
        this.manyOfSameValueArray();
        this.reversedArray(); 
        this.almostSortedArray();
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
    bubbleSort = async (arr, arr2, arr3, arr4) => {
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
                    if(arr4[j-1]>arr4[j]){
                        let temp = arr4[j-1];
                        arr4[j-1] = arr4[j];
                        arr4[j] = temp;
                        this.setState({
                            almostSortedArray: arr4
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

    insertionSort = async (inputArr, inputArr2, inputArr3, inputArr4) => {

        let length = inputArr.length;
        const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
        for (let i = 1; i < length; i++) {
            let key = inputArr[i];
            let key2 = inputArr2[i];
            let key3 = inputArr3[i];
            let key4 = inputArr4[i];
            let j = i - 1;
            let j1 = i - 1;
            let j2 = i - 1;
            let j3 = i - 1;
            
            //random array
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                j = j - 1;
                this.setState({
                    array: inputArr
                })
            }
            inputArr[j + 1] = key;

            //reversed array
            while (j1 >= 0 && inputArr2[j1] > key2) {
                inputArr2[j1 + 1] = inputArr2[j1];
                j1 = j1 - 1;
                this.setState({
                    reversedArray: inputArr2
                })
            }
            inputArr2[j1 + 1] = key2;

            //few uniques array
            while (j2 >= 0 && inputArr3[j2] > key3) {
                inputArr3[j2 + 1] = inputArr3[j2];
                j2 = j2 - 1;
                this.setState({
                    manyOfSameValueArray: inputArr3
                })
            }
            inputArr3[j2 + 1] = key3;

            //almost sorted
            while (j3 >= 0 && inputArr4[j3] > key4) {
                inputArr4[j3 + 1] = inputArr4[j3];
                j3 = j3 - 1;
                this.setState({
                    almostSortedArray: inputArr4
                })
            }
            inputArr4[j3 + 1] = key4;

            await delay(50);
        }
    }

    selectionSort = async (arr, arr2, arr3, arr4) => {

        let len = arr.length;
        const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
        for (let i = 0; i < len; i++) {
            let min = i;
            let min2 = i;
            let min3 = i;
            let min4 = i;

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
                this.setState({
                    array: arr
                })
            }

            //reversed array
            for (let j = i + 1; j < len; j++) {
                if (arr2[min2] > arr2[j]) {
                    min2 = j;
                }
            }
            if (min2 !== i) {
                let tmp = arr2[i];
                arr2[i] = arr2[min2];
                arr2[min2] = tmp;
                this.setState({
                    reversedArray: arr2
                })
            }

            //few uniques array
            for (let j = i + 1; j < len; j++) {
                if (arr3[min3] > arr3[j]) {
                    min3 = j;
                }
            }
            if (min3 !== i) {
                let tmp = arr3[i];
                arr3[i] = arr3[min3];
                arr3[min3] = tmp;
                this.setState({
                    manyOfSameValueArray: arr3
                })
            }

            //almost sorted
            for (let j = i + 1; j < len; j++) {
                if (arr4[min4] > arr4[j]) {
                    min4 = j;
                }
            }
            if (min4 !== i) {
                let tmp = arr4[i];
                arr4[i] = arr4[min4];
                arr4[min4] = tmp;
                this.setState({
                    almostSortedArray: arr4
                })
            }

            await delay(100);
        }
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

        let renderAlmostSortedArray = this.state.almostSortedArray.map((item, key) => {
            return key === this.state.leftBarIndex && this.state.clickedOnBubble === true && key + 1 === this.state.rightBarIndex 
           ? <div onMouseOver={() => this.onHover(item)} className="oneItem" key={key} style={{backgroundColor: 'blue', height: `${item}px`}}></div> 
           : <div onMouseOver={() => this.onHover(item)} className={key === this.state.completedBars ? "oneItemCompleted" : "oneItem"} key={key} style={{backgroundColor: 'gray',height: `${item}px`}}></div>
        })

        let renderBarValue = this.state.barValue === 0 ? <p className="barValue">Hover the bars to see its value</p> : <p className="barValue">{this.state.barValue}</p> 

        return (
            <>

            <h1>Sorting Project</h1>

            <button onClick={() => this.bubbleSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray, this.state.almostSortedArray)}>Bubble Sort</button>
            <button onClick={() => this.insertionSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray, this.state.almostSortedArray)}>Insertion Sort</button>
            <button onClick={() => this.selectionSort(this.state.array, this.state.reversedArray, this.state.manyOfSameValueArray, this.state.almostSortedArray)}>Selection Sort</button>
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

                <p>Almost Sorted Array</p>
                <div className="almostSorted">
                    {renderAlmostSortedArray}
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




