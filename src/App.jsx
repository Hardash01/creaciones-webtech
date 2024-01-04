import { Servicios } from "./components/Servicios"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { Conocemas } from "./components/Conocemas"
import { Formulario } from "./components/Formulario"
import { Faqs } from "./components/Faqs"
import { Experiencia } from "./components/Experiencia"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Conocemas />
      <Servicios />
      <Experiencia />
      <Faqs />
      <Formulario />
      <Footer />
    </>
  )
}

export default App
