import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <h4>{currentTrackName}</h4>
    </div>
  );
}

export default Header;
