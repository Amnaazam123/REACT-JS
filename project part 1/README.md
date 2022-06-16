## ✨✨✨✨✨✨✨✨✨✨✨✨✨   REACT JS  ✨✨✨✨✨✨✨✨✨✨✨✨✨
Why React JS? <br>
💁‍♀️ Its composable (Threr are components in React, which you all put together to create something large.)
```
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)
```
💁‍♀️ Its declarative (Just tell me what to do, I will do it for you)

## Declarative Way:
```
ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))
```
## Imperative Way:
```
 const h1 = document.createElement("h1")
 h1.textContent = "Hello, React!"
 h1.className = "header"
 document.getElementById("root").append(h1)

```
## JSX
```
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)

```




