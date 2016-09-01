var closure = (function() {
	var count = 0;
	
	
	return {
		call: function() {
			count++;
			return count;
		}
	};
})();

console.log(closure.call()); // 1
console.log(closure.call()); // 2
console.log(closure.call()); // 3
