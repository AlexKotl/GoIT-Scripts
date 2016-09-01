Function.prototype.bind = function(context) {
   context.init();
}
 

var HelloPage = {
   name: 'GoIT',
   init: function() {
      console.log('Hello, ' + this.name);
   }
}
