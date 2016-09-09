class factory {
	constructor(type) {
		this._animals = ['dog', 'cat'];
		
		if (this._animals.indexOf(type)>=0) return this;
		else return false
	}
};

class dog extends factory {
	say() {
		console.log('Im a dog');
	}
}

class cat extends factory {
	say() {
		console.log('Im a cat');
	}
};

var c = new cat('cat');
c.say();

var d = new dog('dog');
d.say();


