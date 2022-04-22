import { render, screen } from "@testing-library/react"
import Breadcrumbs from "./Breadcrumbs"

describe('Breadcrumb', () => {
  test('Should render Home when props empty', () => {
    render(<Breadcrumbs />)
    expect(screen.getByText('Home')).toBeInTheDocument();
  })

  test('Should render title', () => {
    render(<Breadcrumbs items={[{ title: 'a', href: 'b' }]} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('a')).toBeInTheDocument()
  })
})