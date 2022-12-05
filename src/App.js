import { Component, tags } from '@odoo/owl'
import { Navbar } from './components/Header/Navbar'
import { Footer } from './components/Header/Footer'
import { Home } from './components/Main/Home'
import { About } from './components/Main/About'
import { Services } from './components/Main/Services'
import { Pricing } from './components/Main/Pricing'
import { Contact } from './components/Main/Contact'

const APP_TEMPLATE = tags.xml/*xml*/ `
<main t-name="App" class="">
<Navbar />
<Home></Home>
<About></About>
<Services></Services>
<Pricing></Pricing>
<Contact></Contact>
<Footer></Footer>
</main>
`

export class App extends Component {
  static template = APP_TEMPLATE
  static components = {
    Footer,
    Navbar,
    Home,
    About,
    Services,
    Pricing,
    Contact,
  }
}
