import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from "./router/AppRoutes"
import './app.css'

const App = () => {
	return  (
		<ChakraProvider>
			<AppRoutes />
		</ChakraProvider>
	)
}

export default App