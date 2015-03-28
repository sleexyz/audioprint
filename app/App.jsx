import React from "react"
import Tone from "tone"
import Dropzone from "babel!react-dropzone"
import abtohash from "./abtohash.js"


class FileInput extends React.Component {
    constructor(props) {
        super(props);
        React.proptypes
        this.state = { 
            files: [],
            text: this.props.initialText || "drag a file here!"
        };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop (files) {
        var file = files[0];
        console.log('Received file: ', file);
        var reader = new FileReader();
        reader.onload = function(e) {
            var hash = abtohash(e.target.result);
            console.log(hash);
            this.setState({text: hash});
        }.bind(this);
        reader.readAsArrayBuffer(file);
    }
    render() {
        return <div>
            <Dropzone onDrop = {this.onDrop} size={150}>
                <div>{this.state.text}</div>
            </Dropzone>
            </div>
    }
};
FileInput.propTypes = {initialText: React.PropTypes.string};


function demo() {
    var synth = new Tone.MonoSynth();
    synth.toMaster();

    Tone.Transport.setInterval(function(time) {
        synth.triggerAttackRelease("C4", "8n", time);
    }, '4n');

    Tone.Transport.start();
}
demo();
export default class App extends React.Component {
    render() {
        return <div>
            <h1>Audioprint</h1>
            <h2>Sonic data fingerprinting</h2>
            <h3>Auditory Cryptographic hashing</h3>
            <FileInput initialText={"A"}/>
            <FileInput initialText={"B"}/>
        </div>
    }
}
