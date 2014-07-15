var coords = require('notecoord');
var accidentals = {
  'bb': -2,
  'b': -1,
  '': 0,
  '#': 1,
  'x': 2
};

module.exports = function helmholtz(name) {
  var name = name.replace(/\u2032/g, "'").replace(/\u0375/g, ',');
  var parts = name.match(/^(,*)([a-h])(x|#|bb|b?)([,\']*)$/i);

  if (!parts || name !== parts[0])
    throw new Error('Invalid formatting');

  var note = parts[2];
  var octaveFirst = parts[1];
  var octaveLast = parts[4];
  var lower = note === note.toLowerCase();
  var octave;

  if (octaveFirst) {
    if (lower)
      throw new Error('Invalid formatting - found commas before lowercase note');

    octave = 2 - octaveFirst.length;
  } else if (octaveLast) {
    if (octaveLast.match(/^'+$/) && lower)
      octave = 3 + octaveLast.length;
    else if (octaveLast.match(/^,+$/) && !lower)
      octave = 2 - octaveLast.length;
    else
      throw new Error('Invalid formatting - mismatch between octave ' +
        'indicator and letter case')
  } else
    octave = lower ? 3 : 2;

  var accidentalValue = accidentals[parts[3].toLowerCase()];
  var coord = coords(note.toLowerCase());

  // The interval of going one semitone up is [-4, 7] (octaves, fifths)
  coord[0] += octave;
  coord[0] += -4 * accidentalValue;
  coord[1] += 7 * accidentalValue;

  return coord;
};
