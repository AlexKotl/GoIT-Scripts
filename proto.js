var factory = {
	animals: ['dog', 'cat'],
	
	init: function(type) {
		if (this.animals.indexOf(type)>=0) return this;
		else return false;
	}
};

var dog = {
	say: function() {
		console.log('Im a dog');
	}
};

dog.__proto__ = factory;

var cat = {
	say: function() {
		console.log('Im a cat');
	}
};

cat.__proto__ = factory;

cat.init('cat').say();
dog.init('dog').say();
