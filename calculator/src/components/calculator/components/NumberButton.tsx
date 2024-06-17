import classNames from 'classnames'
import Button, { Props } from './Button'

const NumberButton = (props: Props) => {
  return (
    <Button
      {...props}
      style={classNames('bg-gray-800', 'leading-loose', 'text-lg')}
    />
  )
}
export default NumberButton
