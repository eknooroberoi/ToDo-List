module.exports.getDate=getDate;//export getDate() function
//module.export is a Javascript object.
// And objects have properties and methods associated with it.
// So that means that instead of simply binding the entire object to our getDate function, I could say module
// .exports.geDate is equal to this function. And that means that I can do the same thing down
// here and say model.exports.getDay is equal to the getDay function.
// So now if at the end of all of this code we log our module.exports and we go back into our app.
// .js and require that module,
// then you can see that currently our exports object now has two functions that are tied to it.
// One is called getDay and one is called getDate. Now inside our app.js, instead of saying just run
// the function that's bound to the exports from our data module
// we can say run the function that's bound to our date module .getDate.
function getDate(){
  let today=new Date();
  let options={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day=today.toLocaleDateString("en-US", options);
  return day;
}

module.exports.getDay=getDay;
function getDay(){
  let today=new Date();
  let options={
    weekday: "long"
  };
  let day=today.toLocaleDateString("en-US", options);
  return day;
}


console.log(module.exports);
