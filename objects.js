var playlist = { Drake: "kiki" }

function updatePlaylist(playlist, artistname,songTitle) {
  playlist[artistname] = songTitle
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist.artistname
}