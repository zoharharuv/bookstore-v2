import { eventBusService } from "../services/event-bus-service.js"

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  state = {
    booksCount: 0,
  }

  removeEventBus;


  componentDidMount() {
    this.removeEventBus = eventBusService.on('books-count', (booksCount) => {
      this.setState({ booksCount })
    })

  }

  componentWillUnmount() {
    this.removeEventBus()
  }



  render() {

    return (
      <section className="app-header main-layout">
        <h1 onClick={() => this.props.history.goBack()}>Miss Book</h1>
        <p>Books Count: {this.state.booksCount}</p>
        <nav>
          <NavLink exact to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/book" >Our Books</NavLink>
        </nav>
      </section>
    )
  }

}
export const AppHeader = withRouter(_AppHeader)