// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
){
  // your code here
  var results = [];
  node = node || document.body;

  // if current node matched target (className)
  var current = node.className.split(' ');
  if(current.indexOf(className) >= 0)
    // push to results array
    results.push(node);

  // iterate through children nodes
  for (var i = 0; i < node.children.length; i++) {
    // conacat result of recursion through getElementsByClassName to results
    results = results.concat(getElementsByClassName(className, node.children[i]));
  }

  return results;

};
