//impt
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

//rafce
const Header = ({title, onAdd, showAdd}) => {
    
    const location = useLocation()

    return (
        <header className='header'>
            
            {/*<h1 style={headingStyle}>{title}</h1>*/}
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                    color={showAdd ? 'darkgreen':'green'}
                    text={showAdd ? 'Close': 'Add'} 
                    onClick={onAdd}
                />
            )}
        
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
