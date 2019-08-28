document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement('button');
    let btnText = document.createTextNode("Click Me!");
    
    btn.appendChild(btnText);
    document.body.appendChild(btn);
   

    btn.addEventListener('click', function(){
        alert('Good morning Sunshine!')
    })

   let submitBtn = document.getElementById('submitBtn');

   submitBtn.addEventListener('click', function(){
      let value = document.getElementById('msg').value;
      alert(value)
   })

   let hoverDiv = document.getElementById('divColor');
    hoverDiv.style.backgroundColor = 'black';
    hoverDiv.style.height = '100px';
    hoverDiv.style.width = '500px';

   hoverDiv.addEventListener('mouseover', function(e){
        e.target.style.background = 'lightgreen';
   })

   hoverDiv.addEventListener('mouseout', function(e){
        e.target.style.background = "black";
   })

   let textDiv = document.createElement('div');
   let para = document.createElement('p');
   let paraText = document.createTextNode('Non eiusmod velit veniam irure quis veniam est aliqua aliquip. Ut cillum voluptate adipisicing dolor cupidatat qui et id minim. Est esse ex amet exercitation officia et ut aute deserunt exercitation veniam eiusmod aliquip. Cillum id pariatur duis eu aliquip sint duis et consectetur deserunt.')

   para.appendChild(paraText);
   textDiv.appendChild(para);
   document.body.appendChild(textDiv);

   let colors = ["yellow", "purple", "teal", "grey", "greenyellow"];
// I don't understand why it doesn't work when I let style.color = randomColor but when I insert the whole value then it works?
//    let randomColor = colors[Math.floor(Math.random() * colors.length)];

   para.addEventListener('click', function(e){
    e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
   })

   let nameBtn = document.createElement('button');
   let buttonText = document.createTextNode("Name Button!");
   
   nameBtn.appendChild(buttonText);
   document.body.appendChild(nameBtn);

   let name = document.createElement('div');

   nameBtn.addEventListener('click', function(){
       let span = document.createElement("span");
       let nameText = document.createTextNode("Oliver")
        span.appendChild(nameText);
        name.appendChild(span);
        document.body.appendChild(name);

   })
  
   let friends = ['Hendrik', 'Tyler', 'Van', 'Faisal', 'Andre', 'Joey', 'Nate', 'Ahmed', 'Ramy', 'Perry']
   let count = 0

   friendBtn.addEventListener('click', function(){
       if(count < 10){
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let myFriends = document.createTextNode(friends[count]);
            ul.appendChild(li);
            li.appendChild(myFriends);
            document.body.appendChild(ul);  
            count++;
       }
       
   })

})


