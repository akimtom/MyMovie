let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели",'');



    let a = prompt("Как ой вы последний фильмы смотрели",'');
    let b = prompt("какую вы дадите ему оценку",'');
    while(a.length>50||b.length>50||a.length===0||b.length===0)
    {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели",'');
         a = prompt("Как ой вы последний фильмы смотрели",'');
         b = prompt("какую вы дадите ему оценку",'');

    }
const personalMoveDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false

};
    personalMoveDB.movies[a] = b;
    if(personalMoveDB.count<10&&personalMoveDB.count>0)
    {
        alert("Просмотренно мало фильмов")
    }
    else if(personalMoveDB.count>=10&&personalMoveDB.count<30)
    {
        alert('Вы класический зритель')
    }
    else if(personalMoveDB.count>30)
    {
        alert("Вы киноман")
    }
    else {
        alert("Ошибка")
    }



console.log(personalMoveDB);
