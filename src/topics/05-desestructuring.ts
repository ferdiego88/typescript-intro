interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}


interface Details {
  author: string;
  year: number;
}


const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Every body changining",
  details: {
    author: 'Keane',
    year: 2015
  }
}

const song = 'New Song';
const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;


console.log('Song',anotherSong);
console.log('Duration',duration);
console.log('Author',author);


const dbz = ['Goku', 'Vegeta', 'Krilin'];

const [,,krilin = 'Not Found'] = dbz;



console.log('Personaje 3',krilin || 'No hay Personaje');
console.log('Personaje 3',dbz[2] || 'No hay Personaje');
console.log('Personaje 3',dbz[3] || 'No hay Personaje');




export {};