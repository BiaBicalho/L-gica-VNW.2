let idade=21
let usuarioHumano=true
let mes="janeiro"

if(idade>=18){
  console.log("Usuário tem mais de 18 anos")
}else{
  console.log("Usuário tem menos de 18 anos")
  console.log("Usuário é menor de idade")
}
if(idade>=18 && usuarioHumano==true){
  console.log("Usuário é maior de idade")
  console.log("true")
}
if(mes=="dezembro"||mes=="janeiro"){
  console.log("Usuário faz aniversário ou em Janeiro ou Dezembro")
}else{
  console.log("Usúario não faz aniversário nem em Janeiro, nem em Dezembro")
}