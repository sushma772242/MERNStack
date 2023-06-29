// Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests// Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell()
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell()