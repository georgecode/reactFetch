// 192.168.1.5	AC:BC:32:BE:2E:E3	Cs-MacBook-Pro
// 192.168.1.8	7C:D1:C3:81:8F:10	MACBOOKPRO-529D





var React = require('react');


// console.log(fetch)

// console.log("XXXXXXX hello")
var fuck = "xxxfuck"

var xtest = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.json();})
  .then(function(json) {
    console.log('parsed json', json)
    console.log('.title = ', json.title)
     var fuck = json.title
  })
  .catch(function(ex) {
    console.log('parsing failed', ex)
  })


console.log("helllllllooooo")
console.log(xtest)
console.log("hellllllooooooo")


// module.exports = React.createClass({
//   render: function() {
//     return (
//       // <h1>Hello React</h1>
//       <div className="helloContainer">
//           <h1 className="hello">Hello React</h1>
//           <h2>TWO plus TWO equals {2+2}</h2>
//           <h1>{fuck}</h1>
//       </div>
//     )
//   }
// });




module.exports = React.createClass({
  getInitialState: function () {
    return { title: 'Best App' };
  },




  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then(function(response) {
  //   return response.json();})
  // .then(function(json) {
  //   console.log('parsed json', json)
  //   console.log('.title = ', json.title)
  //    this.setState({ title: json.title });
  // })
  // .catch(function(ex) {
  //   console.log('parsing failed', ex)
  // }),


// this.setState({ title: 'fuuuuuucccccckkkkk' })
 // tick() {
 //    this.setState({ time: 'yo yo yo yo' });
 //  }

 upDateShit: function(){
 	console.log("yo yo yo")
 	this.replaceState({ title: 'yo yo yo yo' });
 	console.log("TEEEESSSSST"+this.state.title)

 },

 // this.upDateShit(),

  
  render: function () {

  	
    return (

      <div>
      
      <h1>TEST TEST TEST</h1>
      <h1>
        {this.state.title}
      </h1>
        </div>
    );
  }
});