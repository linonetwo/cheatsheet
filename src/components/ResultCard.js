import React from 'react'

import Markdown from 'react-markdown'

import '@blueprintjs/core/dist/blueprint.css'
import './ResultCard.css'

export class ResultCard extends React.Component {

  static defaultProps = {
    tags: []
  }
  state = {
    showExample: true,
  }
  render () {
    return (
      <section
        onClick={() => this.setState({ showExample: !this.state.showExample })}
        className="cardLayout pt-card pt-elevation-2 pt-interactive"
      >
      <nav className="tags">
        {this.props.tags.map(tag => <span key={tag} className="pt-tag pt-round">{tag}</span>)}
      </nav>
        {
          this.state.showExample
          ? <Markdown className="example markdown-left upper" source={this.props.example} />
          : <Markdown className="principle lower" source={this.props.example} />
        }
      </section>
    )
  }
}
