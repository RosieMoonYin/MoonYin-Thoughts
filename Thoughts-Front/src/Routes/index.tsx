import { createFileRoute } from '@tanstack/react-router'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/Hero'
import StoredThoughts from '../Utils/StoredThoughts'
import CardThoughts from '../Components/CardThought'
import CreateInput from '../Components/CreateInput'
import Footer from '../Components/Footer'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <div>
      <NavBar />
      <HeroSection />

      <section>
        <div>
          <StoredThoughts />
        </div>
      </section>
      <section className="flex justify-items-center flex-direction-row flex-wrap m-10">
        <CardThoughts />
      </section>
      <section className="flex align-center justify-center flex-direction-row flex-wrap m-10">
        <CreateInput />
      </section>

      <Footer />
    </div>
    </>
    
  )
}
