import Feels from './Feels'
import Pop from './Pop'
import Pressure from './Pressure'
import Visibility from './Visibility'
import Wind from './Wind'
import Humidity from './Humidity'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description: string
}
const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}
const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]

  return (
    <article className="rounded-md gap-2 mr-4 ml-4 w-[140px] text-xs font-bold flex flex-col items-center drop-shadow-lg py-4 mb-5 bg-white bg-opacity-25 backdrop:blur-lg">
      <Icon /> <h4>{title}</h4>
      <p>{info}</p>
      <p>{description}</p>
    </article>
  )
}
export default Tile
