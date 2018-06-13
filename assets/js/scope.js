console.log('Scope module loaded');

let mujiwara = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Nico Robin', 'Chopper', 'Frankie', 'Brook'];

let list = document.getElementById('mujiwara-pirates');

for(let i =0; i< mujiwara.length; i+=1){
    // Every Mujiwara no ichimi of the list
    let pirate = mujiwara[i];
    //Lets create a list Element for every iteration.
    let pirateElement = document.createElement('li');
    //Now lets add a pirate from mujiwara Array
    pirateElement.innerText = pirate;
    //And finally we append our pirate to the DOM
    list.appendChild(pirateElement);
    addEventListener('click', (e)=>{
        console.log(e);
        console.log('I am ' + pirate + " From the Mujiwara Pirates!!");
    })
}
