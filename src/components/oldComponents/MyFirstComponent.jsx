import MySecondComponent from './MySecondComponent'
import MyThirdComponent from './MyThirdComponent'
import PropTypes from 'prop-types'

const MyFirstComponent = ({children, age}) => {
    return (
        <div>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Atque labore impedit laboriosam numquam odit reiciendis,
            sequi enim corporis fuga eos quasi quam fugiat fugit
            libero quod qui molestiae tempora voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Atque labore impedit laboriosam numquam odit reiciendis,
            sequi enim corporis fuga eos quasi quam fugiat fugit
            libero quod qui molestiae tempora voluptas!
            </p>
            <p>{age}</p>
            <MySecondComponent name='Bobby' />
            <MyThirdComponent name='Iren' />
            {children}
        </div>
    )
}

MyFirstComponent.defaultProps = {
    age: 15,
}

MyFirstComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default MyFirstComponent