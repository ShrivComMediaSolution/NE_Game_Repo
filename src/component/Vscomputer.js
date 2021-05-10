import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTimerConsumer } from './MyComponent/TimerContext'
import { useCharacterConsumer } from './MyComponent/CharacterContext'
import { useCharacterConsumerUpdate } from './MyComponent/CharacterContext'
import {

    Container,
    Row,
    Col,

} from 'reactstrap';


import react from "./header.css";


const Vscomputer = ({ inputText, val }) => {

    const [alpha, setAlpha] = useState(() => inputText)
    const { round, roundList1,roundList2,roundList3,roundList4,roundList5 } = useCharacterConsumer();
    const { setRound, myTurn, setRoundList1, setRoundList2, setRoundList3, setRoundList4, setRoundList5 } = useCharacterConsumerUpdate();
    const { seconds, loser } = useTimerConsumer()


    useEffect(() => {
        if (round === 1) setRoundList1({ r1_loser: loser.name })
        if (round === 2) setRoundList2({ r2_loser: loser.name })
        if (round === 3) setRoundList3({ r3_loser: loser.name })
        if (round === 4) setRoundList4({ r4_loser: loser.name })
        if (round === 5) setRoundList5({ r5_loser: loser.name })

    }, [loser])


    const onClick = (e) => {
        onChange(e)
    }
    const onChange = (e) => {
        myTurn(e)
    }

    const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    return (

        <h-me>
            <header class="mt-1 to_P">
                <div class="container">

                    <div class="row">
                        <div class="col-md-2 col-2">
                            <div class=" text-center">
                                <img class="t_image" src="assets/img/images.jpg" alt="logo" />
                            </div>
                        </div>
                        <div class="col-md-8  col-8">
                            <div class=" text-center">
                                <h1 class="text-white hed">Never Ending Game</h1>
                            </div>
                        </div>
                        <div class="col-md-2  col-2">
                            <div class=" text-center">
                                <NavLink to="/setting"> <img class="t_image" src="assets/img/settings.png" alt="logo" /></NavLink>
                            </div>
                        </div>
                        {/* <!-- top-input--> */}

                    </div>
                </div>
            </header>
            <div class="section_card pt-5">
                <div class="container">
                    <div class=" row">
                        <div class="col-md-8 offset-md-2 ">
                            <div class=" min_top  ">
                                <div class="ledt_img">
                                    <img class="t_image_s" src="assets/img/image1.jpg" alt="logo" />
                                </div>
                                <div class="ledt_img_mid">
                                    <span>VS</span>
                                </div>

                                <div class="ledt_img">
                                    <img class="t_image_s" src="assets/img/desk.png" alt="" />
                                </div>
                                <div class="clear"></div>

                                <div class="cup">
                                    <h2 style={{ color: 'white' }}>{loser.name + "  ===  " + loser.out}</h2>
                                    <ul>
                                        <li>
                                            <div className={"cup_icon " + (round === 1 ? '' : (roundList1.r1_loser === "You" ? 'bg-danger' : 'bg-success'))}><i className="fa fa-trophy" aria-hidden="true" ></i></div>
                                        </li>
                                        <li>
                                            <div className={"cup_icon " + (round <= 2 ? '' : (roundList2.r2_loser === "You" ? 'bg-danger' : 'bg-success'))}><i className="fa fa-trophy" aria-hidden="true" ></i></div>
                                        </li>

                                        <li>
                                            <div className={"cup_icon " + (round <= 3 ? '' : (roundList3.r3_loser === "You" ? 'bg-danger' : 'bg-success'))}><i class="fa fa-trophy" aria-hidden="true"></i></div>
                                        </li>
                                        <li>
                                            <div className={"cup_icon " + (round <= 4 ? '' : (roundList4.r4_loser === "You" ? 'bg-danger' : 'bg-success'))}><i class="fa fa-trophy" aria-hidden="true"></i></div>
                                        </li>
                                        <li>
                                            <div className={"cup_icon " + (round <= 5 ? '' : (roundList5.r5_loser === "You" ? 'bg-danger' : 'bg-success'))}><i class="fa fa-trophy" aria-hidden="true"></i></div>
                                        </li>
                                        <div class="clear"></div>
                                    </ul>
                                    <div class="clear"></div>
                                </div>

                                <div class="half">
                                    <div class="left_s"><a href=""><i class="fa fa-clock-o" aria-hidden="true"></i></a></div>
                                    <div class="left_s"><span><b>00:00:{seconds}</b></span></div>
                                    <div class="clear"></div>
                                </div>

                                <div class="btn_b">
                                    <span style={{ background: 'white' }}><b>ROUND {round} </b></span>
                                </div>
                                <div class="btn_b2">
                                    <h1>{inputText.length}</h1>
                                    <input type='text' className="main-input" placeholder="word" value={inputText} onChange={e => onChange(e)}></input>
                                </div>
                                {loser.out && <div className="bg-white">{JSON.stringify(val)}</div>}


                                <div class="keypad">
                                    <div class="keypad_in">
                                        <div class="key_btn">
                                            <ul>
                                                <li onClick={e => onClick(e)}><span>A</span></li>
                                                <li onClick={e => onClick(e)}><span>B</span></li>
                                                <li onClick={e => onClick(e)}><span>C</span></li>
                                                <li onClick={e => onClick(e)}><span>D</span></li>
                                                <li onClick={e => onClick(e)}><span>E</span></li>
                                                <li onClick={e => onClick(e)}><span>F</span></li>
                                                <li onClick={e => onClick(e)}><span>G</span></li>
                                                <li onClick={e => onClick(e)}><span>H</span></li>
                                                <li onClick={e => onClick(e)}><span>I</span></li>
                                                <li onClick={e => onClick(e)}><span>J</span></li>
                                                <div class="clear"></div>
                                            </ul>
                                            <ul class="ml_l">
                                                <li onClick={e => onClick(e)}><span>K</span></li>
                                                <li onClick={e => onClick(e)}><span>L</span></li>
                                                <li onClick={e => onClick(e)}><span>M</span></li>
                                                <li onClick={e => onClick(e)}><span>N</span></li>
                                                <li onClick={e => onClick(e)}><span>O</span></li>
                                                <li onClick={e => onClick(e)}><span>P</span></li>
                                                <li onClick={e => onClick(e)}><span>Q</span></li>
                                                <li onClick={e => onClick(e)}><span>R</span></li>
                                                <li onClick={e => onClick(e)}><span>S</span></li>

                                                <div class="clear"></div>
                                            </ul>
                                            <ul class="ml_7">
                                                <li onClick={e => onClick(e)}><span>T</span></li>
                                                <li onClick={e => onClick(e)}><span>U</span></li>
                                                <li onClick={e => onClick(e)}><span>V</span></li>
                                                <li onClick={e => onClick(e)}><span>W</span></li>
                                                <li onClick={e => onClick(e)}><span>X</span></li>
                                                <li onClick={e => onClick(e)}><span>Y</span></li>
                                                <li onClick={e => onClick(e)}><span>Z</span></li>


                                                <div class="clear"></div>
                                            </ul>
                                            <div class="btn_b k_pad">
                                                 <a class="hinnt" href=""><b>Hint</b></a>
                                                <a class="hinnt_r" href=""><b>Concode</b></a> 
                                               
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </h-me>


    );


}

export default Vscomputer;