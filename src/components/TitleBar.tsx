import ThemeTabs from './ThemeTabs'

export default function TitleBar(): JSX.Element {
    return (
    <div className='titlebar'>
        <div className='title'>calc</div>
        <ThemeTabs/>
    </div>
    )
}
