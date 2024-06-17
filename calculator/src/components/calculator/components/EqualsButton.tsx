import classNames from 'classnames'
import Button, { Props } from './Button'

const EqualsButton = (props: Props) => {
  return (
    <Button
      {...props}
      style={classNames(
        'bg-blue-300',
        'text-black',
        'font-extrabold',
        'text-3xl',
      )}
    />
  )
}
export default EqualsButton
