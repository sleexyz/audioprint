import crypto from "crypto"

export default function(ab) {
    var buffer = new Buffer( new Uint8Array(ab));
    return crypto.createHash("sha256").update(buffer).digest("hex");
}
