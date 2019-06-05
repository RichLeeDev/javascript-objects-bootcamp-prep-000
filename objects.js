var playlist = { Drake: "kiki" }

function updatePlaylist(playlist, artistname,songTitle) {
  return object.assign({}, playlist,{artistname:songTitle})
}