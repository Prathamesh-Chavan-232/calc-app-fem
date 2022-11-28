import ThemeTabs from './ThemeTabs'
import "../styles/Titlebar.css"

export default function TitleBar(): JSX.Element {
    return (
    <div className='titlebar'>
        <div className='title'>calc</div>
        <ThemeTabs/>
    </div>
    )
}
