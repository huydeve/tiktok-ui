import './GlobalStyles.scss'
import PropTypes from 'prop-types'

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired
}

export default function GlobalStyles({children}) {
  return children
}
