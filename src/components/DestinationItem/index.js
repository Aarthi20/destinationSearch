// Write your code here
import './index.css'

const DestinationItem = props => {
  const {cardDetails} = props
  const {imgUrl, name} = cardDetails

  return (
    <li className="card-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
