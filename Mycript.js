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




const personalMovieDb =
    {

        count: 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
        start: function () {
            personalMovieDb.count = +prompt("Сколько фильмов вы смотрели", "");
            while (personalMovieDb.count === "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
               personalMovieDb.count = +prompt("Сколько фильмов вы смотрели", "");
            }
        },
        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                const a = prompt("Один из последних просмотренных фильмов", ""),
                    b = prompt("Какую оценку вы ему дадите", "");

                if (a !== null && b != null && a !== "" && b !== "" && a.length < 50) {
                    personalMovieDb.movies[a] = b;
                    console.log("Done");
                } else {
                    console.log("Error")
                    i--;
                }
            }
        },

        detectPersonalLevel: function () {
            if (personalMovieDb.count < 10 && personalMovieDb.count > 0) {
                console.log("Просмотренно мало фильмов")
            } else if (personalMovieDb.count < 30 && personalMovieDb.count > 10) {
                console.log("просмотренно обычное количество фильмов")
            } else if (personalMovieDb.count > 30) {
                console.log("Вы киноман")
            } else {
                console.log("Ошибка!!!")
            }
        },
        showMyDb: function () {
            if (!personalMovieDb.private) {
                console.log(personalMovieDb)
            }

        },
        writeYourGenres: function () {
            for (let i = 0; i < 3; i++) {
                let g  = prompt(`Какой ваш любимый жанр под номером ${i+1}`, "");
                if(g===null||g==="")
                {
                    i--;

                }
                else
                {
                    personalMovieDb.genres[i]=g;
                }
            }
            personalMovieDb.genres.forEach((gen,index)=>console.log(`Любимый жанр № ${index+1} это ${gen}  `))

        },

        togleVisibleMyDB:()=>{
          personalMovieDb.private = !personalMovieDb.private;
        },





    };

personalMovieDb.start();


personalMovieDb.rememberMyFilms();

personalMovieDb.detectPersonalLevel();


//console.log(personalMovieDb);


personalMovieDb.showMyDb();
personalMovieDb.togleVisibleMyDB();

personalMovieDb.writeYourGenres();

