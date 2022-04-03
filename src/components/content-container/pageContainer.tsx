import "./style.scss"



interface IPageContainer {
    children?: JSX.Element
}
const PageContainer = (props: IPageContainer) => {
    const {children} = props
    return (
        <div className='page-container'>
            {children}
        </div>
    )

}
export default PageContainer