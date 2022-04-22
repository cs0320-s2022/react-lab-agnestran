import React, {useState} from 'react';
import './App.css';
import TextBox from './TextBox';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";


function Horoscope() {

    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rise, setRise] = useState("");
    const [horoscope, setHoroscope] = useState<string[]>([]);

    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sun,
            moon: moon,
            rising: rise
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="Horoscope">
            <header title="Horoscope-header">
            </header>
            <TextBox label={"Sun Sign"} prop change={setSun} />
            <TextBox label={"Moon Sign"} prop change={setMoon} />
            <TextBox label={"Rising Sign"} prop change={setRise} />
            {/*create a button under your TextBoxes in Horoscope to submit*/}
            <AwesomeButton onPress={requestHoroscope}>
                Send
            </AwesomeButton>
            {horoscope.map((value) => (
                <p> {value} </p>
            ))}
        </div>
    );
}

export default Horoscope;
