// again:
// for (let i = 0; i < 2; i++) {
// 	console.log(i);
// 	let nameFilm = prompt('Один из последних просмотренных фильмов?', '');
// 	if (nameFilm === '' || nameFilm == null || nameFilm.length > 10) {
// 		i = -1;
// 		continue again;
// 	}
// 	console.log(i);
// 	let evaluation = prompt('на сколько оцените его?', '');
// 	if (evaluation === '' || evaluation == null) {
// 		i = -1;
// 		continue again;
// 	}
// 	personalMovieDB.movies[nameFilm] = evaluation; 
// }

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	privat: false
};

for (let i = 0; i < 2; i++) {
	let nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
		evaluation = prompt('на сколько оцените его?', '');
	if (nameFilm != '' && evaluation != '' && evaluation != null && nameFilm != null && nameFilm.length < 50) {
		personalMovieDB.movies[nameFilm] = evaluation; 
		console.log('Done');
	} else {
		console.log('Error');
		i--;
	}
}
if (personalMovieDB.count <= 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB.movies);

