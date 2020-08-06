const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели",'');

const personalMoveDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false

};
const a = prompt("Как ой вы последний фильмы смотрели",'');
const b = prompt("какую вы дадите ему оценку",'');

const c = prompt("Как ой вы последний фильмы смотрели",'');
const d = prompt("какую вы дадите ему оценку",'');
personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;

console.log(personalMoveDB);
