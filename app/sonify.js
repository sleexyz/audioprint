import Tone from "tone"
var synth = new Tone.MonoSynth();
synth.toMaster();

Tone.Transport.start();
var map = [
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
    "C6",
    "D6",
    "E6",
    "G6",
    "A6",
    "C7"];

var basic = function(hash) {
    for (var i = 0; i< hash.length; i++) {
        let val = parseInt(hash[i], 16);
        Tone.Transport.setTimeout(function(time) {
            synth.triggerAttackRelease(map[val], "128n", time);
        }, i/100);
    }
}
export default basic;
