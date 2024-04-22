import classNames from 'classnames'
import Button from './Button'

type Props = {
  children: string
}
const NumberButton = ({ children }: Props) => {
  return (
    <Button
      data-value={children}
      style={classNames(
        'bg-gray-800',
        'leading-loose',
        'text-lg',
      )}
    >
      {children}
    </Button>
  )
}
export default NumberButton
