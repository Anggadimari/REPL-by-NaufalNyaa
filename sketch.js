setcps(0.6)

stack(

  // DRUM
  s("bd ~ ~ sn ~ hhh ~ sn")
    .bank("tr909")
    .gain(1),

  // BASS
  note("c2 ~ bb1 g1")
    .sound("sawtooth")
    .lpf(200)
    .distort(.1)
    .gain(.9),

  // CHORDS
  note("[c4 eb4 g4] [bb3 d4 f4]")
    .sound("triangle")
    .slow(2)
    .room(.8)
    .gain(.35),

  // MAIN MELODY
  note("g5 eb5 d5 c5")
    .sound("sine")
    .slow(1)
    .room(.7)
    .gain(.6),

  // TENSION PAD
  note("c4")
    .sound("supersaw")
    .slow(12)
    .gain(.15),

  // ATMOSPHERE
  noise()
    .gain(.02)
    .slow(10)

)
