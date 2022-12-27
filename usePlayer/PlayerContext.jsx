import React, { useState, createContext } from "react";

export const PlayerContext = createContext({});

export const PlayerProvider = (props) => {
  
  const { children } = props;
  const [track, setTrack] = useState(null);
  const [albumContent, setAlbumContent] = useState([]);
  const [indexList, setIndexList] = useState(0);
  const [miniature, setMiniature] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playTrack = (albumContent, trackInfo, indexList, miniatureInfo) => {
    setTrack(trackInfo);
    setMiniature(miniatureInfo);
    setAlbumContent(albumContent);
    setIndexList(indexList);
    setPlaying(true);
  };

  const pauseTrack = () => setPlaying(false);

  const resumeTrack = () => setPlaying(true);

  const nextTrack = () => {
    let newIndex = indexList + 1;
    setIndexList(newIndex);
    if (newIndex < albumContent.length) {
      let trackInfo = albumContent[newIndex];
      playTrack(albumContent, trackInfo, indexList, miniature);
    } else {
      setPlaying(false);
      console.log("Fin del disco");
    }
  };

  const data = {
    albumContent,
    indexList,
    miniature,
    nextTrack,
    pauseTrack,
    playing,
    playTrack,
    resumeTrack,
    setVolume,
    track,
    volume,
  };

  return (
    <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
  );
};
