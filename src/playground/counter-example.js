// let count = 0;
// const addOne = () => {
//   count++;
//   render();
// };

// const minusOne = () => {
//   count--;
//   render();
// };

// const reset = () => {
//   count=0;
//   render();
// };


// const appRoot = document.getElementById("app");


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);

// };

// render();

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  handleAddOne(){
    console.log('add one');
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
  }
  handleMinusOne(){
    console.log('minues one');
    this.setState((prevState) => {
      return {count: prevState.count - 1}
    })
  }
  handleReset(){
    console.log('reset');
    this.setState(() => {
      return {count: 0}
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
