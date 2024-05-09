document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const songList = document.getElementById("songList").getElementsByTagName("li");

  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < songList.length; i++) {
      const songName = songList[i].textContent.toLowerCase();
      if (songName.includes(searchTerm)) {
        songList[i].style.display = "block";
      } else {
        songList[i].style.display = "none";
      }
    }
  });
});
