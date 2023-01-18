//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Contador from "./component/contador.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;


/* sumar numeros */

setInterval(() => {



            num1++

            if (num1 > 9) {
                num1 = 0
                num2++
            }
            if (num2 > 9) {
                num2 = 0
                num3++
            }
            if (num3 > 9) {
                num3 = 0
                num4++
            }
            if (num4 > 9) {
                num4 = 0
                num5++
            }
            if (num5 > 9) {
                num5 = 0
                num6++
            }
            if (num6 > 9) {
                num6 = 0

            }


            /* react la aplicacion */

            ReactDOM.render( < Contador numero1 = {
                    num1
                }
                numero2 = {
                    num2


                }
                numero3 = {
                    num3


                }
                numero4 = {
                    num4


                }
                numero5 = {
                    num5


                }
                numero6 = {
                    num6


                }
                />, document.querySelector("#app"));
            }, 1000);