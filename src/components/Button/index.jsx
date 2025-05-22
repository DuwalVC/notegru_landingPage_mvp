import { CustomButton } from "./styles"

export const Button = (props) => {
  return (
    <>
        <CustomButton typeButton={props.typeButton} onClick={props.onClick}>{props.name}</CustomButton>
    </>
  )
}
