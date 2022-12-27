import { useContext } from "react";
import { PlayerContext } from "/src/context";

export const usePlayer = () => useContext(PlayerContext);
