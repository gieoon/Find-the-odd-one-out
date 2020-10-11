import React from 'react';
import Square from './square.jsx';
import Circle from './Circle.jsx';
import './level.css';

//36 * 18
const COLUMNS = 7; 
const ROWS = 7;
const SPACING_X = (window.innerWidth - 120) / COLUMNS;
const SPACING_Y = (window.innerHeight - 140) / ROWS;
console.log(SPACING_X, SPACING_Y)
export default class Level2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            circles: [],
            yy: [],
            odd_x: 5,
            odd_y: 2
        }
    }

    componentDidMount(){
        const c = [], yy = [];
        for(var i=0;i<ROWS;i++){
            c.push(i);
        }
        for(var y=0;y<COLUMNS;y++){
            yy.push(y)
        }
        this.setState({
            circles: c,
            yy: yy
        }, ()=>{
            this.forceUpdate();
        })

        // setInterval(()=>{
        //     var el = document.getElementById('textarea');
        //     el.innerHTML = el.innerHTML + "1";
        // },10);

        this.loopGroup();

        // this.loop1();
        // setInterval(()=>{
        //     this.loop1();
        // }, 25 * 1000)

        // setInterval(()=>{
        //     for(var i=0;i<ROWS*COLUMNS-1;i++){
        //         setTimeout(()=>{
        //             this.loop();
        //         }, 100000 / (ROWS*COLUMNS) + i);
        //     }
        // }, 100000);
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    // loop1 = async () => {
    //     for(var i=0;i<ROWS*COLUMNS-1;i++){
    //             await this.sleep(25);
    //             //console.log('updating: ', i);
    //             var el = document.getElementById('circle-' + i);
    //             var n = Number(el.innerHTML) + 1;
    //             if(n === 2) n = 0;
    //             el.innerHTML = n;
    //         //}, 100000 / (ROWS*COLUMNS) + i);
    //     }
    // }

    // Steve Reich loop
    loopGroup = () => {
        for(var i=0;i<ROWS*COLUMNS-1;i++){
            if(i < 33){

            }
            else if(i < 67){

            }
            else {

            }
        }
    }

    randomAnimation = () => {
        switch(getRandomInt(4)){
            case 0: return 'moveUp';
            case 1: return 'moveDown';
            case 2: return 'moveLeft';
            case 3: return 'moveRight';
            default: return 'moveRight';
        }
    }


    render(){
        //console.log('this.state: ', this.state.circles);
        var count = 0;
        return(
            // <textarea 
            // id="textarea"
            // style={{
            //     width:"100%",
            //     height: "100vh",
            //     color: "white",
            //     letterSpacing: "22px",
            //     fontSize: "22px",
            //     lineHeight: "1.5",
            //     backgroundColor: "black",
            // }}>
            //     {
            //         Array.from(50).map((i,index) =>(
            //             <span key={index}>i</span>
            //         ))
            //     }
            // </textarea>
            <div>
                {/* Total number of circles */}
                {this.state.circles.map((circle, index) => (
                    this.state.yy.map((y, index2) => (
                        <div key={"circle-xx-"+index+"-yy-"+index2} className="circle-wrapper"
                            style={{
                                top: (index * SPACING_Y) + getRandomInt(100) + "px",
                                left: (index2 * SPACING_X) + getRandomInt(100) + "px",
                                // top: index * SPACING_Y + "px",
                                // left: index2 * SPACING_X + "px",

                                // animationDelay:`${getRandomInt(3)}s`,
                                animationDuration: `${getRandomInt(100) + 20}s`,
                                animationIterationCount: "infinite",
                                animationName: this.randomAnimation()//move up, move down, move left, move right
                            }}
                        >
                                {/* Multiple circles within each other (Just beautiful) */}
                            <div className="circle-wrapper-inner"
                                style={{
                                    
                                }}
                            >
                                <Circles index={index} index2={index2} count={count} key={index + "hihi" + index2}/>
                                {/* <Square 
                                    id={"circle-" + count}
                                    index={count++}
                                    column={index2}
                                    f_nextLevel={this.props.f_nextLevel}
                                    f_wrong={this.props.f_wrong}
                                    b_odd={index === this.state.odd_y && index2 === this.state.odd_x}
                                    top={index * (100 / ROWS) + 'vh'} 
                                    left={index2 * (100 / COLUMNS) + 'vw'} /> */}
                            </div>
                        </div>
                    ))
                ))}
            </div>
        );
    }
}

const Circles = ({index, index2, count}) => {
    const circlesNumber = getRandomInt(10) + 5; // 15 max, 5 less.
    const startingSize = getRandomInt(150) + 1; // 200 + 150
    var a = [], depreciations = [];
    // console.log('circlesNumber: ', circlesNumber);
    for(var i=0;i<circlesNumber;i++){
        a.push(0);
        depreciations.push(getRandomInt(5) + (6 + (startingSize * 0.1)));
    }
    // console.log('depreciations: ', depreciations);
    // Spread operator to create arrays on spot of size    
    return a.map((c, i) => (
        <Circle 
            key={"circle-"+index +"-" +  index2 + "-" + count + "-" + i}
            parent={i === 0}
            width={Math.max(startingSize - (i * depreciations[i]), 1)}
            height={Math.max(startingSize - (i * depreciations[i]), 1)}
        />
    ));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}