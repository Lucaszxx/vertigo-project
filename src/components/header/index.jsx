import { Content } from '../content'

import logo from '../../assets/logoVertigo.jpeg'
import './index.css'

export function Header() {
    return (
        <div className='globalDiv'>
            <header>
                <img src={logo} alt="" />
            </header>
            <Content />
        </div>
    )
}