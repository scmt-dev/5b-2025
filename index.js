console.log('Hello from console');

// This is a comment
// This is also a comment
/* 
    comment block
 */
    var x = 1;
    let name = 'Mark';
    console.log(name);
    let age  = 21;
    console.log(age);
    let isAdult = true;
    console.log(isAdult);
    name = 'John';
    console.log(name);
    const pi = 3.14;
    console.log(pi);
    // pi = 3.15;
    // console.log(pi);
    const colors = ['red', 'green', 'blue','yellow', 'purple'];
    console.log(colors);
    console.log(colors[3]);

    let person = {
        name: 'Alice',
        age: 30,
        color: ['red', 'green'],
        isAdult: true
    };
    console.log(person);

    document.writeln('Haha!<br>');
    document.writeln('Hoo!');

    let counter = 0;
    function handleClick() {
        if(counter >= colors.length) {
            counter = 0;
        }
        let h1 = document.querySelector('h1');
        h1.style.color = colors[counter];
        counter++;
        
    }