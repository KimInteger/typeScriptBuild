function a(b) {
  if(typeof(b) === 'number'){
    if(Number.isInteger(b)){
      let result = b + 10;
      return result;
    }
  }
}

console.log(a('1'+1));