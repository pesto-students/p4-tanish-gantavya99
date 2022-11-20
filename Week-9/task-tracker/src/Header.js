import Button from "./button";
const Header=({title,onAdd,showAdd})=>{
    const onClick=()=>{
        console.log('Click');
    }
    return (
        <header className='header'>
            <div className='container'>
            <h1 className='h1'>
                {title}
            </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' :'Add'} onClick={onAdd} />
            </div>
        </header>
    )
};
Header.defaultProps={
    title:'Task Tracker'
};
export default Header