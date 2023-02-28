class DeberAlgoritmo{
  ejercicio1(num1,num2){
      console.warn("1) Sumar dos numeros siempre cuando el primero sea mayor al segundo")
      if(num1>num2){
          console.log("La suma de ",num1,"+",num2,"es =", num1+num2)
      }else{
          console.log("Para poder realizar la suma el primer numero debe ser mayor")
      }
  }
  ejercicio2(num1,num2){
      console.warn("2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
      let suma=0, resta=0, multiplicacion=0, division=0, reciduo=0
      suma = num1+num2
      resta = num1-num2
      multiplicacion = num1*num2
      division = num1/num2
      reciduo = num1%num2
      console.log("La suma de ",num1,"+",num2,"es =", suma)
      console.log("La resta de ",num1,"-",num2,"es =", resta)
      console.log("La multiplicacion de ",num1,"*",num2,"es =", multiplicacion)
      console.log("La division de ",num1,"/",num2,"es =",division)
      console.log("El reciduo de ",num1,"%",num2,"es =", reciduo)
  }
   ejercicio3(num1,num2){
      console.warn("3) Presentar el mayor de dos numeros")
      if(num1>num2){
          console.log(`Los numeros son ${num1} y ${num2}, El numero mayor es ${num1}`)
      }else{
          if(num2>num1)
          console.log(`Los numeros son ${num1} y ${num2}, El numero mayor es ${num2}`)
      }
  }
  ejercicio4(){
      console.warn("4) Dado un nombre presentarlo")
      let nombre="Cesar"
      console.log(nombre)
  }
  ejercicio5(precio){
      console.warn("5) Dado un valor de compra presentar el total considerando un 12% de iva")
      let  precioiva= precio*0.12,preciototal=precio+precioiva
      console.log("El precio es:",precio," El Iva es:",precioiva,"El precio total es:", preciototal)
  }
  ejercicio6(){
      console.warn("6) Presentar 5 veces un nombre")
      let nombre="Cesar",c=1
      while(c<=5){
          console.log(nombre)
          c=c+1
      }
  }
   ejercicio7(){
      console.warn("7) Presentar los numeros multiplos de 3 del 3 al 21")
      let c=3, multiplos
      for(c=3;c<=21;c++){
          multiplos=c%3
          if(multiplos==0){
              console.log(c)
          }
      }
   }
   ejercicio8(){
      console.warn("8) Presentar los numeros multiplos de 3 del 21 al 3")
      let c=21, multiplos
      for(c=21;c>=3;c--){
          multiplos=c%3
          if(multiplos==0){
              console.log(c)
          }
      }
   }
   ejercicio9(){
      console.warn("9) Dados dos nombres indicar si son iguales o diferentes")
      let nombre1="Cesar",nombre2="cesar"
      nombre1=nombre1.toLowerCase()
      nombre2=nombre2.toLowerCase()
      console.warn("Los nombres son:", nombre1, nombre2)
      if(nombre1==nombre2){
          console.log("Los nombres son iguales")
      }
      else{
          console.log("Los nombres no son iguales")
      }

   }
   ejercicio10(){
      console.warn("10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
      let arreglo=[2156,66,45245,454,48439,848,467654,76675,345,548765]
      let i,numero
      console.log("Numeros menores de 5 caracteres:")
      for(i=0;i<arreglo.length;i++){
      numero=arreglo[i]
      if(numero.toString().length<5){
          console.log(numero)
      }
      }
  
  }
   ejercicio11(){
      console.warn("11) Dado un arreglo presentar sus elementos")
      let arreglo=[15,10,45,3,8,7]
      console.log("Los elementos del arreglo son: ",arreglo)
   }
   ejercicio12(){
      console.warn("12) Dado un arreglo de numeros presentar los menores a 10")
      let arreglo=[10,1,5,3,29,12]
      let numero,i
      for(i=0;i<arreglo.length;i++){
          numero=arreglo[i]
          if(numero.toString()<10)
          console.log(numero)
      }
      }
   ejercicio13(){
      console.warn("13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
   let arreglo=[23,56,13,10,5,12]
   let i,suma=0,numero
   for(i=0;i<arreglo.length; i++){
      numero=arreglo[i]
      if(numero %2 !=0){
          console.log("Los numeros impares son: ",numero)
      }else{
          suma=suma+numero
      }
   }
   console.log("La suma de los pares es: ",suma)
   }
   ejercicio14(){
      console.warn("14) Presentar el primero el medio y el ultimo valor de un arreglo")
      let arreglo=[12,4,78,15,10]
      let longitud=Math.floor(arreglo.length/2)
      console.warn("El arreglo es:",arreglo)
      console.log("El primer numero es: ",arreglo[0],"El numero del medio es:",arreglo[longitud],"El ultimo numero es: ",arreglo[arreglo.length-1])
   }
   ejercicio15(){
      console.warn("15) Calcular el vuelto de un a compra dado el costo y el pago")
      let costo=64.50, pago=70.00, vuelto
      vuelto=pago-costo
      console.log(`El costo es:${costo}, El pago es:${pago}, El vuelto de la compra es:${vuelto}`)

   }
   ejercicio16(num1){
      console.warn("16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
      let c=1,resultado
      while(c<=12){
          resultado=num1*c
          console.log(num1,"*",c,"=",resultado)
          c=c+1
      }
   }
   ejercicio17(){
      console.warn("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
      let acu=0, c=1,num1=5,num2=3
      console.warn(num1,"*",num2,"=")
      while(c<=num2){
          acu=acu+num1
          c=c+1
      }
      console.log(acu)
   }
  ejercicio18(){
   console.warn("18)Realizar la division de dos numeros por medio de restas sucesivas")
   let num1=5, num2=2
   let c=0
   console.warn(num1,"/",num2,"=")
   while(num1>=num2){
      num1=num1-num2
      c=c+1
   }
   console.log("El cociente es:",c," El reciduo es:",num1)
   }
   ejercicio19(){
      console.warn("19)Calcular el factorial de un numero")
      let num1=4, resul=1, c=1
      for(c;c<=num1;c++){
          resul=resul*c
      }
      console.log("El factorial de",num1,"es:",resul)
   }
   ejercicio20(){
      console.warn("20)Calcular el exponente de un numero")
      let num1=5, exp=2, resul=1, i=0
      console.warn(`El numero es: ${num1} El exponente es: ${exp}`)
      for(i;i<exp;i++){
          resul=resul*num1
      }
      console.log(resul)
   }
   ejercicio21(){
      console.warn("21)Calcular la serie de fibonacci dado un numero")
      let a=0, b=1, c=1, cont=3, num1=8
      console.log(a,b,c)
      while(cont<num1){
          a=b;b=c;c=a+b
          console.log(c)
          cont=cont+1
      }
   }
   ejercicio22(){
      console.warn("22) Dado un numero invertirlo")
      let numero=23456,digito
      console.warn("El numero es:", numero)
      console.warn("El numero invertido es:")
      while(numero>0){
          digito=Math.floor(numero%10)
          numero=Math.floor(numero/10)
          console.log(digito)
      }
    }
    ejercicio23(){
      console.warn(`23) Presentar los divisores de un numero`)
      let c
      console.log(`Divisores del ${num1}:`)
      for(c=1;c<num1;c++){
          if(num1%c==0){
              console.log(`El numero <${c}> es divisor`)
          }
      }
    }
    ejercicio24(){
      console.warn("24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)")
      let c,sumanum1=0
      let num1=Math.floor(Math.random()*10)
      for(c=1;c<num1;c++){
          if(num1%c==0){
              sumanum1=sumanum1+c
          }
      }if(sumanum1==num1){
          console.log(`El numero <${num1}> es un numero perfecto`)
      }else{
          console.log(`El numero <${num1}> no es un numero perfecto`)
      }
    }
    ejercicio25(){
      console.warn("25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)")
      let c,cont=0
      let num1=Math.floor(Math.random()*10)
      for(c=1;c<=num1;c++){
          if(num1%c==0){
                  cont=cont+1
          }
      }
      if(cont==2){
          console.log(`El numero ${num1} es primo`)
      }else{
          console.log(`El numero ${num1} no es primo`)
      }

    }

}
tarea = new DeberAlgoritmo()
let num1=Math.floor(Math.random()*100)
let num2=Math.floor(Math.random()*100)
let precio=Math.floor(Math.random()*1000)
tarea.ejercicio1(num1,num2)
tarea.ejercicio2(num1,num2)
tarea.ejercicio3(num1,num2)
tarea.ejercicio4()
tarea.ejercicio5(precio)
tarea.ejercicio6()
tarea.ejercicio7()
tarea.ejercicio8()
tarea.ejercicio9()
tarea.ejercicio10()
tarea.ejercicio11()
tarea.ejercicio12()
tarea.ejercicio13()
tarea.ejercicio14()
tarea.ejercicio15()
tarea.ejercicio16(num1)
tarea.ejercicio17()
tarea.ejercicio18()
tarea.ejercicio19()
tarea.ejercicio20()
tarea.ejercicio21()
tarea.ejercicio22()
tarea.ejercicio23(num1)
tarea.ejercicio24()
tarea.ejercicio25()
