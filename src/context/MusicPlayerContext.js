import React, { useState, createContext } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";
import Track4 from "../mp3/track4.mp3";
import Track5 from "../mp3/track5.mp3";
import Track6 from "../mp3/track6.mp3";
import Track7 from "../mp3/track7.mp3";
import Track8 from "../mp3/track8.mp3";
import Track9 from "../mp3/track9.mp3";
import Track10 from "../mp3/track10.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "A long wat",
      file: Track1,
    },
    {
      name: "abstract future bass",
      file: Track2,
    },
    {
      name: "Better day",
      file: Track3,
    },
    {
      name: "Deep future garage royalty",
      file: Track4,
    },
    {
      name: "Trap-future",
      file: Track6,
    },
    {
      name: "Glossy",
      file: Track5,
    },
    {
      name: "Inside you",
      file: Track7,
    },
    {
      name: "Leonel-casio-the-paranor",
      file: Track8,
    },
    {
      name: "Once in paris",
      file: Track9,
    },
    {
      name: "the best -jazz",
      file: Track10,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
