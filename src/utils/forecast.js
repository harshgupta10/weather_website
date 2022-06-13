const request = require('postman-request')

const forecast = (latitude,longitude , callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=81b95c19627372607c6fd43bf1fad9dd&query=' + latitude+ ',' + longitude 

request({url,json:true},(error,{body})=>{
    
if(error){
    callback('Unable to connect to weather services!',undefined)
}else if(body.error){
    callback('Unable to find the location!',undefined)
}else{
    callback(undefined,'It is currently '+body.current.temperature +' degrees. It feels like ' + body.current.feelslike + ' degrees.')
}
})
}

module.exports = forecast