 for(let i = 1; i <= 30; i++){
            if ((i % 3 == 0)&& (i % 5 == 0) ){
                console.log('pijarCamp')
            }
           else if (i % 3 == 0) {
                console.log('pijar')
            }else if (i % 5 == 0){
                console.log(' camp')
            }else {
                console.log(i)
            }
        }
        //8.2
        const deretAngka = "123454321";
       let angkaTarget = "4";
       let angkaPengganti = "7";
  
       let my_new_string = deretAngka.replaceAll(angkaTarget,angkaPengganti);
       console.log(my_new_string);


