import classNames from 'classnames'
import Button from './Button'

type Props = {
  children: string
}
const OperatorButton = ({ children }: Props) => {
  return (
    <Button
      data-value={children}
      style={classNames('bg-gray-500', 'text-3xl', 'font-normal')}
    >
      {children}
    </Button>
  )
}
export default OperatorButton
