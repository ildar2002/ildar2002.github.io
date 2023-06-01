//first question
function max(a,b) {
    if (a > b){
        console.log('Maximum is: ', a)
    }
    else{
        console.log('Maximum is: ', b)
    }
}
max(5,10)

//second question
let admin
let name = 'Ildar'
admin = name
console.log("admin:" + admin)

//third question
function ask_age(){
    let age = prompt('Введите ваш возраст','Введите ваш возраст');
    if(!confirm("Вам точно - "+age + " лет?")){
        ask_age()
    }
}
ask_age()

//fourth question
text_field = document.querySelector('input')
h1_text = document.querySelector('h1')
function change_text(){
    console.log(h1_text)
    console.log(text_field)
    h1_text.innerHTML = "Ildar " + text_field.value
}

button = document.querySelector('button');
button.addEventListener("click", change_text)

let mode = "css"
const editor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    scrollbarStyle: "overlay",
    Tab: "indentMore",
    defaultTab: function(cm) {
        if (cm.somethingSelected()) cm.indentSelection("add");
        else cm.replaceSelection("  ", "end");
    },
    mode
})

editor.setOption("theme", "highcontrast-dark")
const x = document.querySelector(".code")
const ro = new ResizeObserver(entries => {
    editor.setSize(x.offsetWidth, x.offsetHeight)
})

ro.observe(document.querySelector(".code-container"))

const changeMode = (btn) => {
    mode = {
        css: "javascript",
        javascript: "markdown",
        markdown: "htmlmixed",
        htmlmixed: "css"
    }[mode]
    btn.title = `(click to change) Current Mode: ${mode}`
    editor.setOption("mode", mode)
}
