/* 01. arrow-function-feature */

let theater = {
    store: "킨텍스점",
    titles: ["파묘", "듄2", "가여운 것들", "포켓몬스터"],

    showMovieList() {       // showMovieList: function() => {} ES6부터는 생략가능
        console.log(this.store);

        // this.titles.forEach(title => 
        //     console.log(this.store + ": " + title));

        this.titles.forEach(
            function(title) {
                console.log(this.store + ": " + title);
            }
        )
    }
}

theater.showMovieList();            // 킨텍스점