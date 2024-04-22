import classNames from 'classnames'
import Button, { Props } from './Button'

const OperatorButton = (props: Props) => {
  return (
    <Button
      {...props}
      style={classNames('bg-gray-500', 'text-3xl', 'font-normal')}
    />
  )
}
export default OperatorButton
