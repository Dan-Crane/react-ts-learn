import React, {useState} from 'react';
import {FormTwo} from "./components/Form";
import {ModalContent, Portal, PortalFC} from "./components/Portal";

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

  handelClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

class Form extends React.Component<{}, {}> {
  handelFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    console.log(e.target.value)
  }

  handelSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Submit')
  }
  handelCopy = (e: React.ClipboardEvent<HTMLInputElement>): void => {
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

type AppState = {
  portal: boolean
}

let App: React.FC = () => {
  let [state, setState] = useState<AppState>({portal: false})
  let {portal} = state

  let handelPortal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setState({
      ...state,
      portal: !portal
    })
  }

  return (
    <div className="App" style={{overflow: "hidden", position: "relative"}}>
      {/*<Title title='test'>*/}
      {/*  <div>children</div>*/}
      {/*</Title>*/}
      {/*<Counter title='Count:'/>*/}
      {/*<Form/>*/}
      {/*<FormTwo/>*/}
      <a onClick={handelPortal}>show portal</a>
      {/*<Portal>*/}
      {/*  {portal &&*/}
      {/*  <div style={{background: 'red', position: "absolute", bottom: 20, left: 200}}>*/}
      {/*    hello*/}
      {/*  </div>*/}
      {/*  }*/}
      {/*</Portal>*/}
      {/*<div style={{background: 'skyblue', position: "absolute", bottom: -10, right: 200}}>*/}
      {/*  hello*/}
      {/*</div>*/}
      <PortalFC portal={portal} title='This FC Portal'>

        <ModalContent setModalOpen={handelPortal}>

        </ModalContent>

      </PortalFC>
    </div>
  );
}

export default App;
