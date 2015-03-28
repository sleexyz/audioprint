#Audioprint
> file -> cryptographic hash function-> sound!

Immediately perceive that a file has been modified.

Must be
- deterministic
- interesting
- short (<5s) *it's a fingerprint, not a handprint!*

##instructions
Clone repo, `npm install`, `npm start`, and go to `localhost:8080`.

#possibilities
- instruments?
- scales?
- patterns?
- textures?

##todo
- check out
    - tone.note.parseScore
- Expand resolution
    - choose a resolution of n bits
        - eg 2 bits
    - create a model of "music or sound" with n perception-independent dimensions 
        - eg. unit square
        - is this even possible?
    - the set of n-bit words correspond to verticies on the n-square
- make cli tool that plays audio.
