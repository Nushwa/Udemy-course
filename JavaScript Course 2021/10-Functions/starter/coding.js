/*
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    //1.   
    registerNewAnswer: function () {
        const inp = Number(prompt(`${this.question}\n${this.options}\nChoose one`));
        console.log(inp);
        if (inp == 0) {
            this.answers[0]++;
        }
        else if (inp == 1) {
            this.answers[1]++;
        }
        else if (inp == 2) {
            this.answers[2]++;
        }
        else if (inp == 3) {
            this.answers[3]++;
        }
        else {
            console.log('Incorrect');
        }
        //4.
        this.displayResults();
        this.displayResults('string')
    },
    //3.
    displayResults(type = 'array') {
        if (type == 'array') {
            console.log(this.answers);
        }
        else if (type == 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};
//2.
poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//poll.displayResults([1, 5, 3, 9, 6, 1])

*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();