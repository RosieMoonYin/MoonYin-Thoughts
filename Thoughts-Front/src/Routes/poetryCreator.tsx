import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/poetryCreator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/poetryCreator"!</div>
}
