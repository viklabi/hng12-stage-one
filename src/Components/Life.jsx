import lifeImg from '../assests/life.svg'
const Life = ({life}) => {
  return (
    <div className="life">
      <img src={lifeImg} alt="life icon" />
      <span>{life}</span>
    </div>
  )
}

export default Life
