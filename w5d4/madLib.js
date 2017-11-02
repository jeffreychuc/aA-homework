function madLib(verb, adj, noun) {
  return "We shall "+verb.toUpperCase()+" the "+adj.toUpperCase()+" "+noun.toUpperCase()
}

console.log(madLib('make', 'best', 'guac'));
// We shall MAKE the BEST GUAC


function isSubstring(in_s, target)  {
  var string_arr = in_s.split(' ');
  for (var i = 0; i < string_arr.length; i++) {
    if (string_arr[i] == target)  {
      return true;
    }
  }
  return false;
}

console.log(isSubstring("time to program", "time"));
// true
console.log(isSubstring("Jump for joy", "joys"));
// false


function fizzBuzz(array)  {
  var fin_arr = [];
  for (var i = 0; i < array.length; i++)  {
    if (((array[i] % 3 === 0) || (array[i] % 5 === 0)) && !((array[i] % 3 === 0) && (array[i] % 5 === 0))) {
      fin_arr.push(array[i])
    }
  }
  return fin_arr
}
console.log('\nfizzBuzz :');
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10]));
// [ 3, 5, 6, 9, 10 ]

function isPrime(num) {
  if (num === 2)  {
    return true;
  }
  for (var i = 2; i < num; i ++)  {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('\nisPrime')
console.log(isPrime(2));
// true

console.log(isPrime(10));
// false

console.log(isPrime(15485863));
// true

console.log(isPrime(3548563));
// false




function firstNPrimes(n)  {
  var fin_arr = [];
  var i = 2;
  while (fin_arr.length < n)  {
    if (isPrime(i)) {
      fin_arr.push(i);
    }
    i++;
  }
  return fin_arr;
}

function sumOfNPrimes(n)  {
  if (firstNPrimes(n).length === 0)  {
    return 0;
  }
  return firstNPrimes(n).reduce(function(total, num) {return total + num});
}

// console.log(firstNPrimes(4))

console.log(sumOfNPrimes(0));
// // 0

console.log(sumOfNPrimes(1));
// // 2

console.log(sumOfNPrimes(4));
// // 17


function titleize(arr, callback)  {
  let titleize = arr.map(name => 'Mx. '+name+' Jingleheimer Schmidt');
  callback(titleize);
}

function printFunction(arr) {
  arr.forEach(name => console.log(name))
};

titleize(["Mary", "Brian", "Leo"], printFunction);

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

Elephant.prototype.trumpet = function() {
  console.log(this.name + ' the elephant goes phrRRRRRRRRRRR!!!!!!!')
};

Elephant.prototype.grow = function()  {
  this.height = this.height + 12
};

Elephant.prototype.addTrick = function(trick)  {
  this.tricks.push(trick)
};

Elephant.prototype.play = function () {
  trick = Math.floor(Math.random() * (this.tricks.length + 1));
  console.log(this.name+' is '+this.tricks[trick]+'!');
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(elephant+' is trotting by!');
};

Elephant.paradeHelper(kate);


function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function(food) {
    order = order.slice(0, order.length-8)+' and '+food+' please.';
    console.log(order);
  }
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
