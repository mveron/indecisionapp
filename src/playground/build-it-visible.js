// let visibility = false

// const toggle = () => {
//     visible.enabled = !visible.enabled
//     console.log(visible)
//     render()
// }

// const app = document.getElementById('app')

// const render = () => {
//     const template = (
//         <div>
//           <h1>Visibility Toggle</h1>
//           <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
//           {visibility && <p>Hide details</p>}
//         </div>
//       );
      
//     ReactDOM.render(template, app)

// }
// render()



class Visibility extends React.Component {
  constructor(props){
    super(props)
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visible: false
    }
  }
  handleToggle(){
    this.setState((prevState) => {
      return {visible: !prevState.visible }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
        {this.state.visible && <p>This is a secret message!</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))