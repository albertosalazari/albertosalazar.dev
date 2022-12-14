import { ReactNode } from "react"
import { Container } from "./styles"

type SectionContentProps = {
  id: string
  children: ReactNode
}

export function SectionContent({ id, children }: SectionContentProps) {
  return <Container id={id}>{children}</Container>
}
