
var Book = require('../models/book');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/book-store', {useNewUrlParser : true,
    useUnifiedTopology :true}).then(() => {
      console.log('Database Successfully Connected')
  },error => {
    console.log('Database error:' + error)
} 
  );

var books = [new Book({
    id:1,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YYFTz9toQmUi_UV3OCHp0CDOPe2X32qKog&usqp=CAU',
    name: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    price: 130,
    count: 1
}),
new Book({
    id:2,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLfnA0AuGlX9jTmwrA3WHJrghgYgNeZVvFg&usqp=CAU',
    name: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    price: 130,
    count: 1
}),
new Book({
    id:3,
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Dv1BgwiFkc4T4hGdvAP-ccgooAdGw1URzA&usqp=CAU',
    name: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
    price: 180,
    count:1,
}),
new Book({
    id:4,
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg',
    name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi',
    price: 300,
    count:1,
}),
new Book({
    id:5,
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg',
    name: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. ',
    price: 290,
    count:1
}),
new Book({
    id:6,
    imagePath: 'https://m.media-amazon.com/images/I/51KJEgsvFeL._AC_UY218_.jpg',
    name: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil),onorum et Malorum" ',
    price: 280,
    count:1
}),
new Book({
    id:7,
    imagePath: 'https://m.media-amazon.com/images/I/61qScu18HtL._AC_UY218_.jpg',
    name: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremonorum et Malorum" (The Extremes of Good and Evil)',
    price: 213,
    count:1
}),
new Book({
    id:8,
    imagePath: 'https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY218_.jpg',
    name: 'Lorem Ipsum comes from seonorum et Malorum" (The Extremes of Good and Evil)ctions 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The E,',
    price: 200,
    count:1
})
];

var done = 0;
for(var i=0; i<books.length; i++){
   
    // books[i].save(function(err, result){
    //     console.log(books[i]);
    //     done++;
    //     if(done === books.length){
    //         exit();
    //     }
 
    // });
    var saved = books[i].save();

	saved.then(function(err, result) {
		if(err) {
			console.log(err);
		}
		else {
			done++;
			if(done === books.length)
				exit();
		}
	});

}

function exit(){
    mongoose.disconnect();
    console.log('db disconnect');
}
