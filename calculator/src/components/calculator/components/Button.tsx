import classNames from 'classnames'

type Props = {
  children: string
  style?: string
}
const Button = ({ children, style = '' }: Props) => {
  return (
    <div
      className={classNames(
        'py-2',
        'px-4',
        'rounded',
        'text-center',
        'text-lg',
        style,
      )}
    >
      {children}
    </div>
  )
}
export default Button
