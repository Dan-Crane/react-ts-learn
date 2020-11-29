import React from 'react';

type TitleProps = {
  title: string
}

let Title: React.FC<TitleProps> = ({title, children}) => <><h1>{title}</h1>
  {children}
</>

type CounterProps = {
  title?: string
}
type CounterState = {
  count: number
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handelClick = (e : React.MouseEvent<HTMLButtonElement>) : void => {
    console.log(e.clientX, e.clientY)
    this.setState(({count}) => ({
      count: ++count
    }))
  }

  render() {
    return <>
      <h1>{this.props.title}{this.state.count}</h1>
      <button onClick={this.handelClick}>Click</button>
    </>
  }
}

class Form extends React.Component<{}, {}>{
  handelFocus = (e : React.FocusEvent<HTMLInputElement>) : void => {
    console.log(e.target.value)
  }

  handelSubmit = (e : React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    console.log('Submit')
  }
  handelCopy = (e : React.ClipboardEvent<HTMLInputElement>) : void => {
    console.log(e.clipboardData.effectAllowed)
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Simple text:
          <input
            onFocus={this.handelFocus}
            onCopy={this.handelCopy}
            type='text'
            name='text'
          />
          <button>
            submit
          </button>
        </label>
      </form>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Title title='test'>
        <div>children</div>
      </Title>
      <Counter title='Count:'/>
      <Form/>
    </div>
  );
}

export default App;
