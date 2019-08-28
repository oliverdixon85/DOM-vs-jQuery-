$(document).ready(function () {

    let $but1 = $('<button>Click me!</button>').attr('id', 'btn1').appendTo('body');

    $('#btn1').click(function(){
        alert('Good Morning Sunshine!');
    })

    $('#submitBtn').click(function(){
        let value = $('#msg').val();
        alert(value);
    })

    let hoverDiv = $('<div></div>').attr('id','hoverDiv').appendTo('body');

    $('#hoverDiv').css({
        'background-color': 'black',
        'height': '100px',
        'width':'500px',
    })

    $('#hoverDiv').hover(function(){
        $('#hoverDiv').css('background-color', 'lightgreen')
        $('#hoverDiv').mouseleave(function(){
            $('#hoverDiv').css('background', 'black')
        })
    })

    let textDiv = $('<div></div>').appendTo('body');
    let para = $('<p>Eiusmod esse sint duis consectetur excepteur quis reprehenderit aliqua. Voluptate culpa non elit minim magna do culpa sit. Eu mollit labore velit dolore dolor. Dolore duis amet reprehenderit ullamco Lorem labore occaecat officia. Nostrud eu Lorem laborum ullamco dolore incididunt mollit fugiat deserunt minim occaecat velit deserunt. Sit aute qui ullamco esse sit laborum cupidatat commodo nulla laboris adipisicing deserunt. Consectetur enim mollit veniam dolor occaecat tempor nulla adipisicing nisi ut occaecat quis.</p>').appendTo(textDiv)

    $(textDiv).click(function(){
        $(textDiv).css('color', 'red')
    })

    let colors = ["yellow", "purple", "teal", "grey", "greenyellow"];
    let randomColors = colors[Math.floor(Math.random() * colors.length)];

    $(para).click(function(){
        $(para).css('color', colors[Math.floor(Math.random() * colors.length)])
          })


let nameBtn = $('<button>Name Button!</button>').appendTo('body');
let nameDiv = $('<div></div>').appendTo('body');
    
    $(nameBtn).click(function(){
        $('<span>Oliver</span>').appendTo(nameDiv);
    })

    let friends = ['Hendrik', 'Tyler', 'Van', 'Faisal', 'Andre', 'Joey', 'Nate', 'Ahmed', 'Ramy', 'Perry']
    
    let ul = $('<ul></ul>').appendTo('body');

    var count = 0;
    $('#friendBtn').click(function(){
        if(count<10){
        $('<li></li>').text(friends[count]).appendTo(ul);
        count++;
        }
    })

    
})