// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if( Array.isArray(obj) ){
    var results = [];
    for( var i = 0; i < obj.length; i++ ){
      results.push( stringifyJSON(obj[i]) );
    }
    return '[' + results.join(',') + ']';
  }

  if( obj && typeof obj === 'object' ){
    var results = [];
    for( var keys in obj ){
      if( obj[keys] === undefined || typeof obj[keys] === 'function' ){
        continue;
      }
      results.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]));
    }
    return '{' + results.join(',') + '}';
  }
  if( typeof obj === 'string'){
    return '"' + obj + '"';
  }
  return '' + obj;

};
