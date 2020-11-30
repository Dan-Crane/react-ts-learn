import React, {useEffect} from "react";
import ReactDom from "react-dom"

type PortalProps = {
  children: React.ReactNode
}

export class Portal extends React.Component <PortalProps> {
  el: HTMLDivElement = document.createElement('div')

  timer: ReturnType<typeof setInterval > | undefined = undefined


  componentDidMount(): void {
    document.body.appendChild(this.el)
    this.timer = setInterval(() => {
      console.log('timer off')
    }, 1000)
  }

  componentWillUnmount(): void {
    this.timer && clearInterval(this.timer)
    document.body.removeChild(this.el)
  }

  render(): React.ReactElement<PortalProps> {
    return ReactDom.createPortal(this.props.children, this.el)
  }
}

type PortalFCProps = {
  title?: string
  children: React.ReactNode
  portal: boolean
}

export let PortalFC: React.FC<PortalFCProps> = ({title, portal, children}) => {
  if (!portal) return null
  else return ReactDom.createPortal(children, document.body)
}

type ModalContextProps = {
  setModalOpen: (p : any) => void
}

export const ModalContent: React.FC<ModalContextProps> = ({ setModalOpen }) => {
  useEffect(() => {
    let timer: ReturnType<typeof setInterval > | undefined = undefined

    timer = setInterval(() => {
      console.log('timer off')
    }, 1000)
    return () => {
      timer && clearInterval(timer)
    }
  }, [])

  return <div className='nes-container is-dark with-title is-centered'>
    <p className='title'>Modal magic</p>
    <div>
      <i className='nes-kirby'></i>
      <button
        type='button'
        className='nes-btn is-success'
        onClick={() => setModalOpen(false)}
      >
        <span>Close Modal</span>
      </button>
      <p>This is a cool modal!</p>
    </div>
  </div>
};