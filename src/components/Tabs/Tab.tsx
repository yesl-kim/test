interface Props {
  children: React.ReactElement
  onClick?: () => void
}

const Tab = ({ children, onClick }: Props) => {
  return <div onClick={onClick}>{children}</div>
}

export default Tab
