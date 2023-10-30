let p = new Promise((resolve, reject)=> {
    let a = 1+2
    a==2? resolve('Success'): reject('Failed')
})

p.then((message)=> {
    console.log(`this is what I call "${message}"`)
}).catch((message)=> {
    console.log(`this is what I call "${message}"`)
})