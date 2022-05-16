const  express  =  require('express') 
const  app  = express()

app.get( '/' , function (req , res)  { 
  res.json({messager:' Hello Cypress Discovery'}) 
} )

app.get('/avengers', function(req,res){
  var avengers = ['Tony Stark', 'Clint Baton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scort Lang']
return res.json({data: avengers})

})

app.get('/cnh', function(req,res){
  const idade = req.query.idade

  if (!idade) {
  return  res.json({messager:'idade é obrigatório.'})
   
}

var idadeNum = parseInt(idade)

if(idadeNum >= 18){
 return res.json({messager:'Ok, Você pode tirar a sua CNH.'})
}
else{
return res.json({messager:'Você é menor de idade, porem não pode tirar a sua CNH.'}) 
}
})



app.listen(3000)