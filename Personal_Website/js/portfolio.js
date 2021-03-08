//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 135 || document.documentElement.scrollTop > 135) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Procedural Background
/*
_ApplyRules() {
    let cur = this._axiom;
    for (let i = 0; i < this._iterations; i++) {
        cur = this._ApplyRulesToSentence(cur);

        this._branchLength *= this._branchLengthFalloff;
    }
    this._sentence = cur; 
}

_FindMatchingRule(c) {
    for (let rule of this._rules) {
        if (c == rule[0]) {
            return rule;
        }
    }
    return null;
}

_ApplyRulesToSentence(sentence) {
    let newSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        const c = sentence[i];

        const rule = this._FindMatchingRule(c);
        if(rule) {
            newSentence += rule[i];
        } else {
            newSentence += c;
        }
    }
    return newSentence;
}

_Render() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.transform(1, 0, 0, 1, canvas.width / 2, canvas.height);

    for (let i = 0; i < this._sentence.length; i++) {
        const c = this._sentence[i];

        if (c == 'F') {
            ctx.fillStyle = this._branchColor;
            ctx.fillRect(0, 0, this._branchWidth, -this._branchLength);
            ctx.transform(1, 0, 0, 1, 0, -this._branchLength);
        } else if (c == '+') {
            ctx.rotate(this._branchAngle * Math.PI / 180);
        } else if (c == '-') {
            ctx.rotate(-this._branchAngle * Math.PI / 180);
        } else if (c == '[') {
            ctx.save();
        } else if (c == ']') {
            ctx.restore();
        }
    }
}



const _PRESETS = [
    {
        axiom: 'X',
        rules: [
            ['F', 'FF'],
            ['X', 'F+[-F-XF-X][+FF][--XF[+X]][++F-X]'],
        ]
},
{
    axiom: 'X',
    rules: [
        ['F', 'FX[FX[+XF]]'],
        ['X', 'FF[+XZ++X-F[+ZX]][-X++F-X]'],
        ['Z', '[+F-X-F][++ZX]'],
    ]
}
*/