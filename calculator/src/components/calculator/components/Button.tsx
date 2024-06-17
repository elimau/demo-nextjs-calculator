import classNames from 'classnames'

export type Props = {
  children: string
  testId: string
  onClick?: () => void
  style?: string
}
const Button = ({
  children,
  testId,
  onClick = () => {},
  style = '',
}: Props) => {
  return (
    <div
      className={classNames(
        'py-2',
        'px-4',
        'rounded',
        'text-center',
        'text-lg',
        'cursor-default',
        style,
      )}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
export default Button
