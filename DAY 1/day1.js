let array=[];

function Submit(event)
{
    event.preventDefault()


    let form =document.getElementById('form')
    let name = form.name.value
    let price =form.price.value

    let product = new ecommProducts(name,price)
    // console.log('product:', product);

    array.push(product)
    console.log(array)
}

function ecommProducts(n,p)
{
    this.name=n;
    this.price=p;

}
//call ,aplly,bind

let bedRoom={
    name:'bedroom',

};///

let LivingRoom={
    name:'Living room',

    cookFood:function(order){
        console.log(`Serving${order} in ${this.name}`)
    },
}

function cookFood(){

}
let kitchen ={
    name:'kitchen',
    cookFood:function(order){
        console.log(`serving ${order} in ${this.name}`)
    },
};

// serving maggie in bedroom (bedroom.name)
// this --> kitchen 
// this -->bedroom??
// this --> LivingRoom??


// kitchen.cookFood('Maggie')//53 , 48, 47


// kitchen.cookFood.call(bedRoom,'maggie')

kitchen.cookFood.call(LivingRoom,'Call Function Call Here')
kitchen.cookFood.apply(LivingRoom,['Apply Function Call Here'])






   /* function nikeProduct(n,t,p){
        
//   normal function two types 
        // let obj={
        //     name:n,
        //     type:t,
        //     price:p,
        // };

        let obj={};
        obj.name=n;
        obj.type=t;
        obj.price=p;
        return obj; //here not using return output will be undifined 
    }

//    let x = nikeProduct('shoe','sneaker',2000);
//    console.log('x:',x);


//    constructor function 

function nikeProductCF(na,ty,pr){
    this.name= na
    this.type= ty
    this.price=pr
// here "New" key word represent the object 
//  New == Return --- Here not use "new" output undefined 

}
let x = new nikeProductCF('shoe','sneaker',2000);
console.log('x:',x);
*/