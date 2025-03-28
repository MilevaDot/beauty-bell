import { Input } from "@chakra-ui/react"

const InputLogin = ({inputType, inputName, inputPlaceholder} : {
    inputType: string
    inputName: string
    inputPlaceholder: string
}) => {
    return (
        <Input
            required
            border='none'
            outline='none'
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            focusBorderColor='transparent'
            />
    )
}

export default InputLogin