import { Input } from "@chakra-ui/react"

const InputRegister = ({inputType, inputName, inputPlaceholder} : {
    inputType: string
    inputName: string
    inputPlaceholder: string
}) => {
    return (
        <Input
            required
            w='300px'
            border='none'
            outline='none'
            type={inputType}
            name={inputName}
            borderRadius='none'
            focusBorderColor='transparent'
            placeholder={inputPlaceholder}
            _hover={{borderBottom: '1px solid black'}}
            />
    )
}

export default InputRegister