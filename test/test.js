const express = require('express')
const fs = require('fs')
const template = require('art-template')
const path = require("path")
const util = require('util')

const app = express()

app.engine('html', require('express-art-template')) // use express-art-template to render .art file
app.set('views', { // art-template setting
    debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views')) // saving directory
app.set('views engine', 'html') // the omitable files

const todos = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3},
    {id: 4, title: 4}
]

// express has a middleware to manage the static resource
// path is better to use absolute path
app.use('/public', express.static(path.join(__dirname, './public'), {
    index: ['index.html']
}))

app.get('/', (req, res) => {
    // 1. normal text
    // res.send('Hello world')

    // 2. HTML format
    // res.send('<h1>Hello world</h1>')

    // 3. put the HTML format content into a single file
    // fs.readFile('./test/views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(404).send('404 Not Found!')
    //     }
    //     res.end(data)
    // })

    // 4. dynamic rendering
    // fs.readFile('./test/views/index.html', 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(404).send('404 Not Found!')
    //     }
    //     // get data
    //     // get HTML template
    //     // data + template = the web page
    //     let str = ''
    //     todos.forEach(to_do => {
    //         str += `<li>${to_do.title}</li>`
    //     })
    //
    //     // rendering
    //     const ret = data.replace(':)', str)
    //
    //     // send to service end
    //     res.end(ret)
    // })

    // 5. use template
    // 5.1 get template content
    // fs.readFile('./test/views/index.html', 'utf-8', (err, templateStr) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(404).send('404 Not Found!')
    //     }
    //
    //     // 5.2 get data
    //
    //     // 5.3 rendering
    //     const ret = template.render(templateStr, { // data used in the template
    //         foo: 'bar',
    //         todos
    //     })
    //
    //     // send to service end
    //     res.end(ret)
    // })

    // 6. use res.render
    res.render('index.html', {
        foo: 'bar',
        todos
    })

})

// app.get('index', async (req, res) => {
//     const data = await util.promisify(fs.readFile)('./test/views/css/index.css')
//     res.end(data)
// })


app.listen(3001, () => {
    console.log('Server running on port 3001!')
})