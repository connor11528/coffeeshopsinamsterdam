
// filter to capitalize first letter of every word in string
app.filter('capitalize', function() {
  return function(input, scope) {
    if (!input || !input.length) { return; }
    
    if (input!=null)
    	input = input.toLowerCase();

    var output = '';
    var words = input.split(' ');
    words.forEach(function(w, i){
    	output += w.substring(0,1).toUpperCase()+ w.substring(1) + ' ';
    });

    return output;
  }
});