/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;

function start() {
     numberOfFilms = +prompt("Сколько фильмов вы смотрели","");
    while (numberOfFilms==""||numberOfFilms==null||isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt("Сколько фильмов вы смотрели","");
    }
}

start();

const personalMovieDb=
    {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        private:false
    };


function rememberMyFilms() {
    for (let i = 0; i <2 ; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
            b = prompt("Какую оценку вы ему дадите", "");

        if (a !== null && b != null && a !== "" && b !== "" && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("Done");
        }
        else {
            console.log("Error")
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel()
{
    if(personalMovieDb.count<10&&personalMovieDb.count>0)
    {console.log("Просмотренно мало фильмов")}
    else if(personalMovieDb.count<30&&personalMovieDb.count>10)
    {console.log("просмотренно обычное количество фильмов")}
    else if(personalMovieDb.count>30)
    {
        console.log("Вы киноман")
    }
    else {
        console.log("Ошибка!!!")
    }
}

detectPersonalLevel();

//console.log(personalMovieDb);

function showMyDb() {
    if(!personalMovieDb.private)
    {
        console.log(personalMovieDb)
    }

}

showMyDb();

function writeYourGenres() {
    for (let i = 0; i <3 ; i++) {
       personalMovieDb.genres[i]=prompt(`Какой ваш любимый жанр под номером ${i+1}`,"");

    }
    
}
writeYourGenres();

