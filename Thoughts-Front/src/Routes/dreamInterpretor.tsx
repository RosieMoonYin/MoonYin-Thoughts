import { createFileRoute } from '@tanstack/react-router'
import NavBar from '../Components/NavBar'

export const Route = createFileRoute('/dreamInterpretor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <NavBar /></>
}
