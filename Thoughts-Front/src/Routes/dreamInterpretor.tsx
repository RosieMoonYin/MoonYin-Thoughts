import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dreamInterpretor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dreamInterpretor"!</div>
}
