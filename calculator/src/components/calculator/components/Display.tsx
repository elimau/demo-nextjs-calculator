import classNames from 'classnames'

type Props = {
  children: string
  testId: string
  style?: string
}
const Display = ({ children, testId, style = '' }: Props) => {
  return (
    <div
      className={classNames(
        'w-full',
        'rounded',
        'border',
        'border-gray-600',
        'mb-4',
        'text-right',
        'text-4xl',
        'pt-10',
        'py-4',
        'px-6',
        style,
      )}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
export default Display
