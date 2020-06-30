import React, { Component } from 'react'

class Phrases extends Component {


  render() {
    
    const items = this.props.items.map(item => {
    return (
        <section class="quotes">
        <div class="bubble">
            <blockquote>{item.title}</blockquote>
            <div></div>
            <cite></cite> </div>
    </section>
    )
    })

  return(
      <div className='container'>
          {items}
      </div>

  )

  }
}
export default Phrases