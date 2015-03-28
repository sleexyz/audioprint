import React from "react"
import Dropzone from "babel!react-dropzone"
import abtohash from "./abtohash.js"
import sonify from "./sonify.js"

import styles from "./styles.scss";


class FileInput extends React.Component {
    constructor(props) {
        super(props);
        React.proptypes
        this.state = { 
            files: [],
            html: this.props.initialText || "drag a file here!",
            hash: ""
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onDrop (files) {
        var file = files[0];
        console.log('Received file: ', file);
        var reader = new FileReader();
        reader.onload = function(e) {
            var hash = abtohash(e.target.result);
            console.log(hash);
            this.setState({html: hash, hash: hash});
        }.bind(this);
        reader.readAsArrayBuffer(file);
    }
    handleClick (e) {
        if (this.state.hash) sonify(this.state.hash);
        e.stopPropagation();
    }
    render() {
        return <Dropzone onDrop={this.onDrop} size={150}
            style={{}}>
                <div className={"dropzone_inner"} onClick={this.handleClick}>{this.state.html}</div>
            </Dropzone>
    }
};
FileInput.propTypes = {initialText: React.PropTypes.string};



React.render(<div id="root">
    <div dangerouslySetInnerHTML={{__html: require("./text.md")}}/>
    <div className={"dropzone_container"}>
        <FileInput initialText={"A"}/>
        <FileInput initialText={"B"}/>
    </div>
    <footer>made @ <a href="http://monthlymusichackathon.org/">monthly music hackathon</a> march 2015. code @ <a href="https://github.com/freshdried/audioprint">github</a></footer>
</div>, document.body)
