'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres:[],
	privat: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

