// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name);
}
function destructivelyRemoveLastDriver(name){
    drivers.pop();
}
function destructivelyRemoveFirstDriver(name){
    drivers.shift();
}
function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function appendDriver(name) {
    return [...drivers, name]
  }
  function prependDriver(name) {
    return [name, ...drivers]
  }
  function removeLastDriver() {
    const d = [...drivers]
    d.pop()
    return d
  }
  function removeFirstDriver() {
    const d = [...drivers]
    d.shift()
    return d
  }


