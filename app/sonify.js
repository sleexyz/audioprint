import Tone from "tone"
var synth = new Tone.MonoSynth();
synth.toMaster();

Tone.Transport.start();
var map = [
    "C3",
    "D3",
    "E3",
    "G3",
    "A3",
    "C4",
    "D4",
    "E4",
    "G4",
    "A4",
    "C5",
    "D5",
    "E5",
    "G5",
    "A5",
    "C6"];

var basic = function(hash) {
    for (var i = 0; i< 16; i++) {
        let val = parseInt(hash[i], 16);
        Tone.Transport.setTimeout(function(time) {
            synth.triggerAttackRelease(map[val], "256n", time);
        }, i/25);
    }
}
export default basic;
