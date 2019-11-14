const Deact = require("../libs/deact");

function SongCard(song) {
    return Deact.create("section", { class: `song-card` }, [
        Deact.create("h3", { class: `song-card__name` }, song.name)
    ]);
}

module.exports = SongCard;