var React = require('react');


// console.log(fetch)

// console.log("XXXXXXX hello")


var xtest = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    console.log('.title = ', json.title)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })

console.log("helllllllooooo")
console.log(xtest.result)
console.log("hellllllooooooo")

module.exports = React.createClass({
  render: function() {
    return (
      // <h1>Hello React</h1>
      <div className="helloContainer">
          <h1 className="hello">Hello React</h1>
          <h2>TWO plus TWO equals {2+2}</h2>
      </div>
    )
  }
});