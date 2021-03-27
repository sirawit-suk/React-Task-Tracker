//impt
import PropTypes from 'prop-types'
import Button from './Button'

//rafce
const Header = ({title}) => {
    
    const onClick = () => {
        console.log('Click')
    }
    
    return (
        <header className='header'>
            
            {/*<h1 style={headingStyle}>{title}</h1>*/}
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Text Header',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle ={
//     color: 'red' ,
//     backgroundColor: 'black'
// }

export default Header
