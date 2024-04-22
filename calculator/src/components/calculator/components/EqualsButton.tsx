import classNames from 'classnames'
import Button from './Button'

type Props = {
  children: string
}
const EqualsButton = ({ children }: Props) => {
  return (
    <Button
      data-value={children}
      style={classNames(
        'bg-blue-300',
        'text-black',
        'font-extrabold',
        'text-3xl',
      )}
    >
      {children}
    </Button>
  )
}
export default EqualsButton
